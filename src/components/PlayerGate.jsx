import { useMemo, useState } from "react";
import { C, F, FS } from "../config/gameConfig";

const BASE = import.meta.env.BASE_URL;

const DIRECCIONES = {
  "Administración y Finanzas": [
    "Jurídico",
    "Auditoría",
    "Gerente de cuentas por pagar y cobrar Ingenieros Militares 8",
    "Inteligencia de Negocios",
    "Calidad y Mejora Continua",
    "Contabilidad",
  ],

  Comercial: ["Comercial", "Compras", "E-commerce", "Marketing"],

  Logística: [
    "Seguridad Patrimonial",
    "Centro de Servicio",
    "Distribución",
    "Mantenimiento",
    "Arquitecto",
    "Project Manager Construcción",
    "Almacenes",
  ],

  "Talento Humano": ["Administración de Personal", "Atracción de Talento"],

  TI: [
    "Infraestructura",
    "Soporte y Aplicaciones",
    "Ciberseguridad",
    "Sistemas de Seguridad",
    "Desarrollo de Software",
  ],
};

export default function PlayerGate({ onConfirm }) {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [area, setArea] = useState("");
  const [error, setError] = useState("");
  const [validando, setValidando] = useState(false);

  const areasDisponibles = useMemo(() => {
    if (!direccion) return [];
    return DIRECCIONES[direccion] ?? [];
  }, [direccion]);

  const limpiarError = () => {
    if (error) setError("");
  };

  const confirmar = async () => {
  if (validando) return;

  const nombreLimpio = nombre.trim();
  const areaLimpia = area.trim();

  if (!nombreLimpio) {
    setError("Ingresa tu nombre para registrar tu participación.");
    return;
  }

  if (nombreLimpio.length > 20) {
    setError("El nombre no puede superar 20 caracteres.");
    return;
  }

  if (!direccion) {
    setError("Selecciona tu dirección.");
    return;
  }

  if (!areaLimpia) {
    setError("Selecciona tu área.");
    return;
  }

  setError("");
  setValidando(true);

  try {
    const resultado = await onConfirm({
      nombre: nombreLimpio,
      area: areaLimpia,
    });

    if (!resultado || resultado.ok !== true) {
      setError(
        resultado?.error ??
          "No se pudo completar el registro. Intenta nuevamente."
      );
      return;
    }
  } catch (error) {
    console.error("Error en PlayerGate:", error);

    setError(
      "No se pudo validar el registro. Revisa tu conexión e intenta de nuevo."
    );
  } finally {
    setValidando(false);
  }
};

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "grid",
        placeItems: "center",
        padding: 18,
        background:
          "radial-gradient(circle at top, rgba(214,168,79,.18), rgba(7,6,4,.92) 48%, rgba(0,0,0,.98))",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${BASE}backgrounds/escenario-inicio.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          filter: "blur(1px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,.42), rgba(0,0,0,.82))",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "min(560px, 100%)",
          borderRadius: 24,
          border: `1px solid ${C.borderStrong ?? C.border}`,
          background:
            "linear-gradient(180deg, rgba(35,25,13,.98), rgba(10,7,3,.98))",
          boxShadow:
            "0 28px 90px rgba(0,0,0,.62), inset 0 0 0 1px rgba(255,255,255,.04)",
          padding: "30px 28px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -120,
            background:
              "radial-gradient(circle, rgba(214,168,79,.18), transparent 48%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontFamily: F,
                color: C.gold,
                fontSize: "clamp(18px, 4vw, 28px)",
                lineHeight: 1.35,
                marginBottom: 12,
                textShadow:
                  "3px 3px 0 rgba(0,0,0,.85), 0 0 22px rgba(214,168,79,.35)",
              }}
            >
              REGISTRO DE GUARDIÁN
            </div>

            <div
              style={{
                fontFamily: FS,
                color: C.textDim,
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Ingresa tus datos antes de iniciar el desafío.
            </div>
          </div>

          <div style={{ display: "grid", gap: 14 }}>
            <label style={{ display: "grid", gap: 7 }}>
              <span
                style={{
                  fontFamily: FS,
                  color: C.gold,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Nombre
              </span>

              <input
                value={nombre}
                maxLength={20}
                onChange={(e) => {
                  limpiarError();
                  setNombre(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") confirmar();
                }}
                placeholder="Ej. Carlos"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: 12,
                  border: `1px solid ${C.border}`,
                  background: "rgba(0,0,0,.38)",
                  color: C.text,
                  fontFamily: FS,
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </label>

            <label style={{ display: "grid", gap: 7 }}>
              <span
                style={{
                  fontFamily: FS,
                  color: C.gold,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Dirección
              </span>

              <select
                value={direccion}
                onChange={(e) => {
                  limpiarError();
                  setDireccion(e.target.value);
                  setArea("");
                }}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: 12,
                  border: `1px solid ${C.border}`,
                  background: "rgba(0,0,0,.38)",
                  color: C.text,
                  fontFamily: FS,
                  fontSize: 14,
                  outline: "none",
                }}
              >
                <option value="">Selecciona una dirección</option>

                {Object.keys(DIRECCIONES).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ display: "grid", gap: 7 }}>
              <span
                style={{
                  fontFamily: FS,
                  color: C.gold,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Área
              </span>

              <select
                value={area}
                disabled={!direccion}
                onChange={(e) => {
                  limpiarError();
                  setArea(e.target.value);
                }}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "13px 14px",
                  borderRadius: 12,
                  border: `1px solid ${C.border}`,
                  background: !direccion
                    ? "rgba(0,0,0,.22)"
                    : "rgba(0,0,0,.38)",
                  color: !direccion ? C.textMuted : C.text,
                  fontFamily: FS,
                  fontSize: 14,
                  outline: "none",
                  cursor: !direccion ? "not-allowed" : "pointer",
                }}
              >
                <option value="">
                  {direccion
                    ? "Selecciona un área"
                    : "Primero selecciona una dirección"}
                </option>

                {areasDisponibles.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            {error && (
              <div
                style={{
                  border: `1px solid ${C.red}`,
                  background: "rgba(185,70,50,.14)",
                  color: "#FFB7A8",
                  borderRadius: 12,
                  padding: "11px 13px",
                  fontFamily: FS,
                  fontSize: 13,
                  lineHeight: 1.45,
                  boxShadow: "0 0 18px rgba(185,70,50,.18)",
                }}
              >
                {error}
              </div>
            )}

            <button
  onClick={confirmar}
  disabled={validando}
  style={{
    marginTop: 8,
    width: "100%",
    padding: "15px 16px",
    borderRadius: 14,
    border: `1px solid ${C.borderStrong ?? C.gold}`,
    background:
      "linear-gradient(180deg, rgba(214,168,79,.34), rgba(106,73,25,.48))",
    color: C.text,
    fontFamily: F,
    fontSize: 11,
    cursor: validando ? "not-allowed" : "pointer",
    letterSpacing: 1.2,
    textShadow: "2px 2px 0 rgba(0,0,0,.8)",
    boxShadow:
      "0 0 22px rgba(214,168,79,.20), inset 0 0 0 1px rgba(255,255,255,.04)",
    opacity: validando ? 0.65 : 1,
  }}
>
  {validando ? "VALIDANDO..." : "ENTRAR AL TEMPLO"}
</button>
          </div>

          <div
            style={{
              marginTop: 18,
              textAlign: "center",
              fontFamily: FS,
              color: C.textMuted,
              fontSize: 12,
              lineHeight: 1.5,
            }}
          >
            Solo se registra tu nombre, área, dificultad y puntaje.
          </div>
        </div>
      </div>
    </div>
  );
}