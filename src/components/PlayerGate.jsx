import { useMemo, useState } from "react";
import { C, F, FS } from "../config/gameConfig";

const AREAS_POR_DIRECCION = {
  "Administración y Finanzas": [
    "Jurídico",
    "Auditoría",
    "Gerente de cuentas por pagar y cobrar",
    "Inteligencia de negocios",
    "Calidad y Mejora Continua",
    "Contabilidad",
  ],

  Comercial: ["Comercial", "Compras", "E-commerce", "Marketing"],

  Logística: [
    "Seguridad Patrimonial",
    "Centro de servicio",
    "Distribución",
    "Mantenimiento",
    "Arquitecto",
    "Project Manager Construcción",
    "Almacenes",
  ],

  "Talento Humano": ["Administración de Personal", "Atracción de talento"],

  TI: [
    "Infraestructura",
    "Soporte y Aplicaciones",
    "Ciberseguridad",
    "Sistemas de Seguridad",
    "Desarrollo de software",
    "PM",
  ],
};

export default function PlayerGate({ onConfirm }) {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [area, setArea] = useState("");

  const areasDisponibles = useMemo(() => {
    if (!direccion) return [];
    return AREAS_POR_DIRECCION[direccion] ?? [];
  }, [direccion]);

  function cambiarDireccion(e) {
    const nuevaDireccion = e.target.value;
    setDireccion(nuevaDireccion);
    setArea("");
  }

  function continuar() {
    const nombreLimpio = nombre.trim();
    const areaLimpia = area.trim();

    if (!nombreLimpio) {
      alert("Ingresa tu nombre.");
      return;
    }

    if (!direccion) {
      alert("Selecciona tu dirección.");
      return;
    }

    if (!areaLimpia) {
      alert("Selecciona tu área.");
      return;
    }

    onConfirm({
      nombre: nombreLimpio,
      area: areaLimpia,
    });
  }

  const fieldStyle = {
    width: "100%",
    padding: "14px 15px",
    borderRadius: 10,
    border: `1px solid ${C.border}`,
    background: "linear-gradient(180deg, rgba(10,8,5,.95), rgba(20,14,8,.95))",
    color: C.text,
    fontFamily: FS,
    outline: "none",
    fontSize: 14,
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,.03)",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background:
          "radial-gradient(circle at top, rgba(214,168,79,.18), rgba(7,6,4,.94) 42%, rgba(0,0,0,.98) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${import.meta.env.BASE_URL}backgrounds/escenario-inicio.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          filter: "blur(1px) saturate(.85)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,.55), rgba(0,0,0,.86))",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 480,
          background:
            "linear-gradient(180deg, rgba(34,25,13,.96), rgba(12,9,5,.98))",
          border: `1px solid ${C.borderStrong}`,
          borderRadius: 22,
          padding: 26,
          boxShadow:
            "0 24px 70px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.04), 0 0 45px rgba(214,168,79,.15)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background:
              "linear-gradient(90deg, transparent, rgba(214,168,79,.95), transparent)",
          }}
        />

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
              fontSize: 26,
              letterSpacing: 3,
              textShadow: "0 0 20px rgba(214,168,79,.35)",
              marginBottom: 8,
            }}
          >
            REGISTRO DEL GUARDIAN
          </div>

          <div
            style={{
              width: 130,
              height: 1,
              margin: "0 auto 14px",
              background:
                "linear-gradient(90deg, transparent, rgba(214,168,79,.9), transparent)",
            }}
          />

          <p
            style={{
              fontFamily: FS,
              color: C.textDim,
              fontSize: 13,
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            Identifícate para iniciar tu misión y registrar tu puntaje en el
            ranking de guardianes.
          </p>
        </div>

        <div style={{ display: "grid", gap: 13 }}>
          <label style={{ display: "grid", gap: 6 }}>
            <span
              style={{
                fontFamily: FS,
                color: C.gold,
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Nombre del jugador
            </span>

            <input
              type="text"
              placeholder="Escribe tu nombre"
              value={nombre}
              maxLength={20}
              onChange={(e) => setNombre(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") continuar();
              }}
              style={fieldStyle}
            />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            <span
              style={{
                fontFamily: FS,
                color: C.gold,
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Dirección
            </span>

            <select
              value={direccion}
              onChange={cambiarDireccion}
              style={{
                ...fieldStyle,
                color: direccion ? C.text : C.textMuted,
              }}
            >
              <option value="">Selecciona tu dirección</option>
              {Object.keys(AREAS_POR_DIRECCION).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            <span
              style={{
                fontFamily: FS,
                color: C.gold,
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Área
            </span>

            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              disabled={!direccion}
              style={{
                ...fieldStyle,
                color: area ? C.text : C.textMuted,
                opacity: direccion ? 1 : 0.55,
                cursor: direccion ? "pointer" : "not-allowed",
              }}
            >
              <option value="">
                {direccion
                  ? "Selecciona tu área"
                  : "Primero selecciona una dirección"}
              </option>

              {areasDisponibles.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <button
            onClick={continuar}
            style={{
              marginTop: 10,
              padding: "15px 16px",
              borderRadius: 12,
              border: `1px solid ${C.borderStrong}`,
              background:
                "linear-gradient(180deg, rgba(214,168,79,.28), rgba(106,73,25,.42))",
              color: C.text,
              fontFamily: F,
              fontSize: 14,
              letterSpacing: 2,
              cursor: "pointer",
              textShadow: "0 1px 0 rgba(0,0,0,.55)",
              boxShadow:
                "0 0 22px rgba(214,168,79,.18), inset 0 0 0 1px rgba(255,255,255,.06)",
            }}
          >
            ENTRAR AL TEMPLO
          </button>
        </div>
      </div>
    </div>
  );
}