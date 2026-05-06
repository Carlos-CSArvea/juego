import { supabase } from "../lib/supabase";

export async function guardarPuntaje(nombre, area, dificultad, puntaje) {
  const nombreLimpio = nombre.trim();
  const areaLimpia = area.trim();

  const { data, error } = await supabase.functions.invoke("guardar-ranking", {
    body: {
      nombre: nombreLimpio,
      area: areaLimpia,
      dificultad,
      puntaje,
    },
  });

  if (error) {
    console.error("Error Edge Function guardar-ranking:", error);
    throw error;
  }

  if (!data?.ok) {
    console.error("Respuesta inválida guardar-ranking:", data);
    throw new Error(data?.error ?? "No se pudo guardar el puntaje.");
  }

  return data;
}

export async function obtenerTopRankingPorDificultad(dificultad, limite = 5) {
  const { data, error } = await supabase
    .from("ranking")
    .select("id, nombre, area, dificultad, puntaje, created_at")
    .eq("dificultad", dificultad)
    .order("puntaje", { ascending: false })
    .order("created_at", { ascending: true })
    .range(0, limite - 1);

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function obtenerRankingsPorDificultad(limite = 5) {
  const [easy, medium, hard] = await Promise.all([
    obtenerTopRankingPorDificultad("easy", limite),
    obtenerTopRankingPorDificultad("medium", limite),
    obtenerTopRankingPorDificultad("hard", limite),
  ]);

  return {
    easy,
    medium,
    hard,
  };
}