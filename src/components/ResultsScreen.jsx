import { C, F, FS, DIFF, getRank } from "../config/gameConfig";

function ResultEmblem({ pct }) {
  const color =
    pct >= 90
      ? C.gold
      : pct >= 75
      ? C.cyan
      : pct >= 60
      ? C.green
      : pct >= 40
      ? C.jade
      : C.red;

  return (
    <div
      style={{
        width: 92,
        height: 92,
        margin: "0 auto 18px",
        position: "relative",
        display: "grid",
        placeItems: "center",
        filter: `drop-shadow(0 0 24px ${color}55)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath:
            "polygon(50% 0%, 86% 18%, 86% 62%, 50% 100%, 14% 62%, 14% 18%)",
          background: `linear-gradient(135deg, ${color}, rgba(8,6,3,.95))`,
          border: `2px solid ${color}`,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 10,
          clipPath:
            "polygon(50% 0%, 82% 20%, 82% 58%, 50% 90%, 18% 58%, 18% 20%)",
          background: "rgba(0,0,0,.78)",
          border: `1px solid ${C.border}`,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          fontFamily: F,
          color,
          fontSize: 18,
          textShadow: "2px 2px 0 rgba(0,0,0,.9)",
        }}
      >
        {pct >= 90
          ? "S"
          : pct >= 75
          ? "A"
          : pct >= 60
          ? "B"
          : pct >= 40
          ? "C"
          : "D"}
      </div>
    </div>
  );
}

function ProgressSegments({ correct, total }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 6,
        width: "100%",
        margin: "20px 0",
      }}
    >
      {Array.from({ length: total }, (_, index) => {
        const ok = index < correct;

        return (
          <div
            key={index}
            style={{
              flex: 1,
              height: 13,
              borderRadius: 999,
              border: `1px solid ${ok ? C.green : C.red}`,
              background: ok
                ? `linear-gradient(90deg, ${C.green}, #9EF0B8)`
                : `linear-gradient(90deg, ${C.red}, #FF8A72)`,
              boxShadow: ok
                ? `0 0 13px ${C.green}66`
                : `0 0 13px ${C.red}44`,
              opacity: 0.95,
            }}
          />
        );
      })}
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div
      style={{
        border: `1px solid ${color}66`,
        borderRadius: 16,
        background:
          "linear-gradient(180deg, rgba(20,14,8,.92), rgba(5,4,2,.96))",
        padding: "18px 14px",
        textAlign: "center",
        boxShadow: `0 0 24px ${color}18, inset 0 0 0 1px rgba(255,255,255,.035)`,
      }}
    >
      <div
        style={{
          fontFamily: F,
          color,
          fontSize: "clamp(17px, 2vw, 24px)",
          marginBottom: 8,
          textShadow: "2px 2px 0 rgba(0,0,0,.9)",
        }}
      >
        {value}
      </div>

      <div
        style={{
          fontFamily: FS,
          color: C.textDim,
          fontSize: 12,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function getThermometerMessage(pct) {
  if (pct === 100) {
    return "Favor de no hablarle a los mortales, gracias.";
  }

  if (pct >= 95) {
    return "Cerebrito en potencia.";
  }

  if (pct >= 90) {
    return "Aquí hay talento, solo falta que dejes de ver memes.";
  }

  if (pct >= 85) {
    return "Estudiaste un día antes y se nota.";
  }

  if (pct >= 80) {
    return 'Nivel: "Ni muy muy, ni tan tan".';
  }

  if (pct >= 75) {
    return "Dios da, Dios quita, y tú apenas llegaste a la cita.";
  }

  if (pct >= 70) {
    return "Te faltó el último empujón... te quedaste a nada.";
  }

  if (pct >= 60) {
    return "El intento estuvo bueno, pero el resultado no tanto.";
  }

  if (pct >= 50) {
    return "Ni las manos metiste; se te olvidó a qué veníamos.";
  }

  if (pct >= 10) {
    return "Estamos en problemas, Houston. Esto no se ve nada bien.";
  }

  return "¿Apareciste por aquí hoy? Porque no hay señales de vida.";
}

export default function ResultsScreen({
  results,
  score,
  diff,
  TOTAL_Q,
  onReplay,
  onMenu,
}) {
  const total = results?.total ?? TOTAL_Q ?? 0;
  const correct = results?.correct ?? 0;
  const failed = Math.max(0, total - correct);
  const pct = results?.pct ?? Math.round((correct / Math.max(total, 1)) * 100);
  const rank = getRank(pct);
  const cfg = DIFF[diff] ?? DIFF.easy;

  const aprobado = pct >= 75;
  const resultColor = aprobado ? C.green : C.red;

  const statusText = aprobado
    ? "CALIFICACIÓN APROBATORIA"
    : "CALIFICACIÓN NO APROBATORIA";

  const thermometerMessage = getThermometerMessage(pct);

  const statusMessage = aprobado
    ? `Aprobaste con ${pct}%. ${thermometerMessage}`
    : `No alcanzaste el mínimo requerido de 75%. ${thermometerMessage}`;

  return (
    <>
      <style>
        {`
          @keyframes resultFadeIn {
            from {
              opacity: 0;
              transform: translateY(16px) scale(.98);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes resultGlow {
            0%, 100% {
              opacity: .42;
            }

            50% {
              opacity: .82;
            }
          }

          @media (max-width: 720px) {
            .results-card {
              padding: 22px 16px !important;
            }

            .results-stats {
              grid-template-columns: 1fr !important;
            }

            .results-actions {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <div
        style={{
          minHeight: "100vh",
          padding: "28px 18px",
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(circle at top, rgba(214,168,79,.16), rgba(7,6,4,.95) 42%, rgba(0,0,0,.98) 100%)",
        }}
      >
        <div
          className="results-card"
          style={{
            width: "min(820px, 100%)",
            position: "relative",
            overflow: "hidden",
            borderRadius: 24,
            border: `1px solid ${C.borderStrong ?? C.border}`,
            background:
              "linear-gradient(180deg, rgba(35,25,13,.98), rgba(10,7,3,.98))",
            boxShadow:
              "0 28px 90px rgba(0,0,0,.62), inset 0 0 0 1px rgba(255,255,255,.04)",
            padding: "34px 34px 28px",
            animation: "resultFadeIn .35s ease-out",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: -120,
              background: `radial-gradient(circle, ${resultColor}25, transparent 48%)`,
              animation: "resultGlow 2.8s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 5,
              background: `linear-gradient(90deg, transparent, ${resultColor}, transparent)`,
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <ResultEmblem pct={pct} />

            <div
              style={{
                textAlign: "center",
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  fontFamily: F,
                  color: resultColor,
                  fontSize: "clamp(12px, 1.8vw, 16px)",
                  letterSpacing: 2,
                  marginBottom: 12,
                  textShadow: "2px 2px 0 rgba(0,0,0,.9)",
                }}
              >
                {statusText}
              </div>

              <h1
                style={{
                  fontFamily: F,
                  color: C.gold,
                  fontSize: "clamp(20px, 4vw, 34px)",
                  lineHeight: 1.35,
                  margin: "0 0 12px",
                  textShadow:
                    "3px 3px 0 rgba(0,0,0,.85), 0 0 22px rgba(214,168,79,.35)",
                }}
              >
                {rank.title}
              </h1>

              <p
                style={{
                  fontFamily: FS,
                  color: C.textDim,
                  fontSize: 15,
                  lineHeight: 1.6,
                  maxWidth: 620,
                  margin: "0 auto 12px",
                }}
              >
                {rank.msg}
              </p>

              <div
                style={{
                  display: "block",
                  maxWidth: 620,
                  margin: "12px auto 0",
                  padding: "13px 18px",
                  borderRadius: 16,
                  border: `1px solid ${resultColor}`,
                  background: aprobado
                    ? "rgba(79,191,143,.16)"
                    : "rgba(185,70,50,.16)",
                  color: resultColor,
                  fontFamily: FS,
                  fontSize: 14,
                  fontWeight: 800,
                  lineHeight: 1.55,
                  boxShadow: `0 0 18px ${resultColor}33`,
                }}
              >
                {statusMessage}
              </div>
            </div>

            <ProgressSegments correct={correct} total={total} />

            <div
              style={{
                borderRadius: 22,
                border: `1px solid ${resultColor}55`,
                background:
                  "linear-gradient(135deg, rgba(0,0,0,.42), rgba(20,14,8,.86))",
                padding: "24px 18px",
                textAlign: "center",
                marginBottom: 18,
                boxShadow: `0 0 32px ${resultColor}18`,
              }}
            >
              <div
                style={{
                  fontFamily: F,
                  color: resultColor,
                  fontSize: "clamp(42px, 8vw, 76px)",
                  lineHeight: 1,
                  marginBottom: 10,
                  textShadow:
                    "4px 4px 0 rgba(0,0,0,.9), 0 0 24px rgba(255,255,255,.08)",
                }}
              >
                {pct}%
              </div>

              <div
                style={{
                  fontFamily: FS,
                  color: C.textDim,
                  fontSize: 13,
                  letterSpacing: 1.2,
                }}
              >
                Calificación final
              </div>
            </div>

            <div
              className="results-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <StatCard label="Correctas" value={correct} color={C.green} />
              <StatCard label="Fallidas" value={failed} color={C.red} />
              <StatCard
                label="Puntos"
                value={String(score).padStart(6, "0")}
                color={C.gold}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                fontFamily: FS,
                color: C.textDim,
                fontSize: 13,
                marginBottom: 22,
              }}
            >
              Dificultad:{" "}
              <strong style={{ color: cfg.col }}>{cfg.label}</strong>
              {" · "}
              {total} preguntas
            </div>

            <div
              className="results-actions"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                maxWidth: 420,
                margin: "0 auto",
              }}
            >
              <button
                onClick={onReplay}
                style={{
                  padding: "15px 16px",
                  borderRadius: 14,
                  border: `1px solid ${C.borderStrong ?? C.gold}`,
                  background:
                    "linear-gradient(180deg, rgba(214,168,79,.34), rgba(106,73,25,.48))",
                  color: C.text,
                  fontFamily: F,
                  fontSize: 11,
                  cursor: "pointer",
                  letterSpacing: 1.2,
                  textShadow: "2px 2px 0 rgba(0,0,0,.8)",
                  boxShadow:
                    "0 0 22px rgba(214,168,79,.20), inset 0 0 0 1px rgba(255,255,255,.04)",
                }}
              >
                Jugar de Nuevo
              </button>

              <button
                onClick={onMenu}
                style={{
                  padding: "15px 16px",
                  borderRadius: 14,
                  border: `1px solid ${C.border}`,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,.24), rgba(0,0,0,.56))",
                  color: C.gold,
                  fontFamily: F,
                  fontSize: 11,
                  cursor: "pointer",
                  letterSpacing: 1.2,
                  textShadow: "2px 2px 0 rgba(0,0,0,.8)",
                }}
              >
                Menú Principal
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}