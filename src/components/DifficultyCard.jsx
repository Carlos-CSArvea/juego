import { C, F, FS } from "../config/gameConfig";
import DifficultySeal from "./DifficultySeal";

const DIFFICULTY_TEXT = {
  easy: {
    title: "Recluta",
    subtitle: "Nivel 1 · 60s · 15 preguntas",
    description: "Para todos los equipos. Conceptos esenciales.",
    accent: C.mossL,
  },

  medium: {
    title: "Analista",
    subtitle: "Nivel 2 · 60s · 25 preguntas",
    description: "Escenarios reales de ciberseguridad.",
    accent: C.gold,
  },

  hard: {
    title: "Arquitecto",
    subtitle: "Nivel 3 · 60s · 50 preguntas",
    description: "Amenazas avanzadas. Sin piedad.",
    accent: C.red,
  },
};

function DifficultyDiamonds({ type }) {
  const count = type === "easy" ? 1 : type === "medium" ? 2 : 3;

  return (
    <div style={{ display: "flex", gap: 7 }}>
      {[1, 2, 3].map((item) => {
        const active = item <= count;

        return (
          <span
            key={item}
            style={{
              width: 10,
              height: 10,
              transform: "rotate(45deg)",
              background: active
                ? "linear-gradient(135deg, #7ee0d0, #1f7968)"
                : "rgba(80,70,50,.45)",
              border: active
                ? `1px solid ${C.cyan}`
                : `1px solid ${C.border}`,
              boxShadow: active
                ? "0 0 10px rgba(110,199,184,.45)"
                : "none",
            }}
          />
        );
      })}
    </div>
  );
}

export default function DifficultyCard({ type, onClick }) {
  const cfg = DIFFICULTY_TEXT[type] ?? DIFFICULTY_TEXT.easy;

  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        minHeight: 106,
        border: `1px solid ${cfg.accent}88`,
        borderRadius: 16,
        padding: "18px 20px",
        cursor: "pointer",
        textAlign: "left",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, rgba(30,23,13,.96), rgba(9,7,4,.98))",
        boxShadow:
          "0 14px 35px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.035)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(214,168,79,.08), transparent 45%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 5,
          background: cfg.accent,
          opacity: 0.9,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "64px 1fr auto",
          gap: 14,
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <DifficultySeal type={type} />

        <div>
          <div
            style={{
              fontFamily: F,
              color: cfg.accent,
              fontSize: 19,
              letterSpacing: 1.5,
              textShadow: "2px 2px 0 rgba(0,0,0,.75)",
              marginBottom: 5,
            }}
          >
            {cfg.title}
          </div>

          <div
            style={{
              fontFamily: FS,
              color: C.gold,
              fontSize: 11,
              marginBottom: 11,
            }}
          >
            {cfg.subtitle}
          </div>

          <div
            style={{
              fontFamily: FS,
              color: C.textDim,
              fontSize: 13,
              lineHeight: 1.35,
            }}
          >
            {cfg.description}
          </div>
        </div>

        <DifficultyDiamonds type={type} />
      </div>
    </button>
  );
}