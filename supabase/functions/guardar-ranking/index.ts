import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const MAX_SCORE_BY_DIFFICULTY: Record<string, number> = {
  easy: 1800,
  medium: 6000,
  hard: 21000,
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

function cleanText(value: unknown) {
  return String(value ?? "").trim();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return jsonResponse(
      {
        ok: false,
        error: "Método no permitido.",
      },
      405
    );
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      return jsonResponse(
        {
          ok: false,
          error: "Faltan variables de entorno en Supabase Edge Function.",
        },
        500
      );
    }

    const payload = await req.json();

    const nombre = cleanText(payload.nombre);
    const area = cleanText(payload.area);
    const dificultad = cleanText(payload.dificultad);
    const puntaje = Number(payload.puntaje);

    if (nombre.length < 1 || nombre.length > 20) {
      return jsonResponse(
        {
          ok: false,
          error: "Nombre inválido.",
        },
        400
      );
    }

    if (area.length < 1 || area.length > 60) {
      return jsonResponse(
        {
          ok: false,
          error: "Área inválida.",
        },
        400
      );
    }

    if (!["easy", "medium", "hard"].includes(dificultad)) {
      return jsonResponse(
        {
          ok: false,
          error: "Dificultad inválida.",
        },
        400
      );
    }

    if (!Number.isInteger(puntaje)) {
      return jsonResponse(
        {
          ok: false,
          error: "Puntaje inválido.",
        },
        400
      );
    }

    if (puntaje < 0 || puntaje > MAX_SCORE_BY_DIFFICULTY[dificultad]) {
      return jsonResponse(
        {
          ok: false,
          error: "Puntaje fuera de rango.",
        },
        400
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
      },
    });

    const { data: yaExiste, error: existeError } = await supabase.rpc(
      "existe_jugador_registrado",
      {
        p_nombre: nombre,
        p_area: area,
      }
    );

    if (existeError) {
      return jsonResponse(
        {
          ok: false,
          error: existeError.message,
        },
        500
      );
    }

    if (yaExiste) {
      return jsonResponse(
        {
          ok: false,
          error: "Ya existe un registro con ese nombre y esa área.",
        },
        409
      );
    }

    const { error } = await supabase.from("ranking").insert([
      {
        nombre,
        area,
        dificultad,
        puntaje,
      },
    ]);

    if (error) {
      return jsonResponse(
        {
          ok: false,
          error: error.message,
        },
        500
      );
    }

    return jsonResponse({
      ok: true,
    });
  } catch (error) {
    return jsonResponse(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Error inesperado al guardar ranking.",
      },
      500
    );
  }
});