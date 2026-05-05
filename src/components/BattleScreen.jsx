import { useEffect, useState } from "react";
import { C, F, FS } from "../config/gameConfig";
import BattleCanvas from "./BattleCanvas";
import Diamond from "./Diamond";
import TimerRing from "./TimerRing";
import Typewriter from "./Typewriter";


const LEVEL_MARKS = {
  easy: "I",
  medium: "II",
  hard: "III",
};

function ProgressBar({ current, total, answerStatus = {} }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: total }, (_, i) => {
        const status = answerStatus[i];
        const active = i === current;

        let bg = "rgba(0,0,0,.5)";
        let border = C.border;
        let shadow = "none";

        if (status === "correct") {
          bg = `linear-gradient(90deg, ${C.green}, #9EF0B8)`;
          border = C.green;
          shadow = `0 0 12px ${C.green}`;
        } else if (status === "wrong") {
          bg = `linear-gradient(90deg, ${C.red}, #FF8A72)`;
          border = C.red;
          shadow = `0 0 12px ${C.red}`;
        } else if (active) {
          bg = `linear-gradient(90deg, ${C.gold}, #F4D178)`;
          border = C.gold;
          shadow = `0 0 12px ${C.gold}`;
        }

        return (
          <div
            key={i}
            style={{
              flex: 1,
              height: 9,
              borderRadius: 999,
              background: bg,
              border: `1px solid ${border}`,
              boxShadow: shadow,
              transition: "all .25s ease",
            }}
          />
        );
      })}
    </div>
  );
}

function ChoiceButton({ letter, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "42px 1fr",
        gap: 12,
        alignItems: "start",
        padding: "14px 15px",
        borderRadius: 14,
        border: `1px solid ${C.border}`,
        background:
          "linear-gradient(135deg, rgba(31,23,13,.96), rgba(9,7,4,.98))",
        color: C.text,
        cursor: "pointer",
        textAlign: "left",
        fontFamily: FS,
        fontSize: "clamp(12px, 1.45vw, 14px)",
        lineHeight: 1.55,
        boxShadow:
          "0 10px 26px rgba(0,0,0,.25), inset 0 0 0 1px rgba(255,255,255,.035)",
        transition: "transform .15s ease, border-color .15s ease, background .15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(5px)";
        e.currentTarget.style.borderColor = C.gold;
        e.currentTarget.style.background =
          "linear-gradient(135deg, rgba(58,39,12,.96), rgba(12,9,5,.98))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.borderColor = C.border;
        e.currentTarget.style.background =
          "linear-gradient(135deg, rgba(31,23,13,.96), rgba(9,7,4,.98))";
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(circle, rgba(214,168,79,.35), rgba(58,39,12,.96))",
          border: `1px solid ${C.gold}`,
          color: C.gold,
          fontFamily: F,
          fontSize: 10,
          textShadow: "2px 2px 0 rgba(0,0,0,.8)",
        }}
      >
        {letter}
      </span>

      <span>{text}</span>
    </button>
  );
}

function FeedbackPanel({ chosen, q, nextQ, isLast, sinEscudos }) {
  const ok = chosen === q.correct;
  const timeout = chosen === -1;
  const color = timeout || !ok ? C.red : C.green;

  return (
    <div
      style={{
        border: `1px solid ${color}`,
        borderRadius: 16,
        padding: 16,
        background: `linear-gradient(135deg, ${color}18, rgba(12,9,5,.98))`,
        boxShadow: `0 0 24px ${color}22`,
        animation: "popIn .25s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            border: `2px solid ${color}`,
            color,
            background: "rgba(0,0,0,.35)",
            fontFamily: F,
            fontSize: 14,
          }}
        >
          {timeout ? "!" : ok ? "✓" : "X"}
        </div>

        <div>
          <div
            style={{
              fontFamily: F,
              fontSize: "clamp(10px, 1.5vw, 13px)",
              color,
              textShadow: "2px 2px 0 rgba(0,0,0,.8)",
              marginBottom: 4,
            }}
          >
            {timeout ? "TIEMPO AGOTADO" : ok ? "RESPUESTA CORRECTA" : "RESPUESTA INCORRECTA"}
          </div>

          <div
            style={{
              fontFamily: FS,
              fontSize: 12,
              color: C.textDim,
            }}
          >
            {ok ? "El templo resiste la amenaza." : "El enemigo debilitó el escudo."}
          </div>
        </div>
      </div>

      {chosen !== -1 ? (
        <div
          style={{
            fontFamily: FS,
            fontSize: "clamp(12px, 1.45vw, 14px)",
            color: ok ? "#BFEBCB" : "#FFB7A8",
            lineHeight: 1.65,
            marginBottom: 14,
          }}
        >
          {q.exp}
        </div>
      ) : (
        <div
          style={{
            fontFamily: FS,
            fontSize: "clamp(12px, 1.45vw, 14px)",
            color: "#FFB7A8",
            lineHeight: 1.65,
            marginBottom: 14,
          }}
        >
          Respuesta correcta:{" "}
          <strong style={{ color: C.gold }}>{q.choices[q.correct]}</strong>
        </div>
      )}

      {sinEscudos && (
        <div
          style={{
            fontFamily: FS,
            fontSize: 13,
            color: C.red,
            marginBottom: 14,
            lineHeight: 1.5,
            fontWeight: 700,
          }}
        >
          Los 3 escudos del templo fueron destruidos. Las amenazas restantes se
          registran como fallidas.
        </div>
      )}
      <button
        onClick={nextQ}
        style={{
          width: "100%",
          padding: "13px 16px",
          borderRadius: 12,
          border: `1px solid ${C.borderStrong ?? C.gold}`,
          background:
            "linear-gradient(180deg, rgba(214,168,79,.28), rgba(106,73,25,.45))",
          color: C.text,
          fontFamily: F,
          fontSize: 11,
          cursor: "pointer",
          letterSpacing: 1.4,
          textShadow: "2px 2px 0 rgba(0,0,0,.8)",
        }}
      >
        {sinEscudos || isLast ? "VER RESULTADOS" : "SIGUIENTE AMENAZA"}
      </button>
    </div>
  );
}

export default function BattleScreen({
  jugador,
  cfg,
  diff,
  q,
  qIdx,
  TOTAL_Q,
  fw,
  rep,
  score,
  phase,
  timer,
  chosen,
  hitTick,
  correctTick,
  choose,
  nextQ,
  setPhase,
  goToMenu,
  answerStatus = {},
}) {
 

  return (
    <>
      <style>
        {`
          .battle-layout {
            width: min(1280px, calc(100vw - 28px));
            margin: 0 auto;
            padding: 14px 0 38px;
            min-height: 100vh;
            display: grid;
            grid-template-rows: auto 1fr;
            gap: 14px;
          }

          .battle-hud {
            border: 1px solid ${C.borderStrong ?? C.border};
            border-radius: 18px;
            background: linear-gradient(135deg, rgba(34,25,13,.96), rgba(8,6,3,.98));
            box-shadow: 0 20px 50px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.035);
            padding: 13px 16px;
            display: grid;
            grid-template-columns: minmax(260px, 1fr) minmax(320px, .9fr) minmax(210px, auto);
            gap: 18px;
            align-items: center;
          }

          .battle-main {
            display: grid;
            grid-template-columns: minmax(0, 1.06fr) minmax(390px, .94fr);
            gap: 14px;
            align-items: start;
          }

          .battle-panel {
            border: 1px solid ${C.border};
            border-radius: 18px;
            background: linear-gradient(180deg, rgba(28,21,12,.96), rgba(8,6,3,.98));
            box-shadow: 0 18px 42px rgba(0,0,0,.32), inset 0 0 0 1px rgba(255,255,255,.035);
            overflow: hidden;
          }

          .battle-question {
            padding: 18px;
            display: grid;
            gap: 14px;
          }

          @media (max-width: 1040px) {
            .battle-hud {
              grid-template-columns: 1fr 1fr;
            }

            .battle-main {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 680px) {
            .battle-layout {
              width: min(100vw - 18px, 760px);
              padding-top: 9px;
            }

            .battle-hud {
              grid-template-columns: 1fr;
              gap: 12px;
            }
          }
        `}
      </style>

      <div className="battle-layout">
        <header className="battle-hud">
          <div>
            <div
              style={{
                fontFamily: F,
                color: C.gold,
                fontSize: "clamp(9px,1.1vw,13px)",
                letterSpacing: 1.5,
                marginBottom: 6,
              }}
            >
              TEMPLO DE GUARDIANES
            </div>

            <div
              style={{
                fontFamily: FS,
                color: C.textDim,
                fontSize: 12,
                lineHeight: 1.4,
              }}
            >
              {jugador?.nombre} · {jugador?.area}
            </div>
          </div>

         <div
  style={{
    justifySelf: "center",
    width: "100%",
    maxWidth: 360,
    padding: "8px 18px",
    borderRadius: 16,
    background:
      "linear-gradient(135deg, rgba(46,139,114,.18), rgba(10,8,5,.72))",
    border: `1px solid ${C.jade}`,
    boxShadow:
      "0 0 22px rgba(46,139,114,.22), inset 0 0 0 1px rgba(255,255,255,.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  }}
>
  <div
    style={{
      fontFamily: F,
      color: C.green,
      fontSize: 11,
      letterSpacing: 1.4,
      textShadow: "2px 2px 0 rgba(0,0,0,.85)",
      whiteSpace: "nowrap",
    }}
  >
    ESCUDOS
  </div>

  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    {[1, 2, 3].map((i) => (
      <Diamond key={i} on={i <= rep} size={34} />
    ))}
  </div>
</div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              justifyContent: "flex-end",
            }}
          >
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontFamily: F,
                  fontSize: "clamp(14px, 1.8vw, 20px)",
                  color: C.gold,
                  textShadow: "2px 2px 0 rgba(0,0,0,.8)",
                }}
              >
                {String(score).padStart(6, "0")}
              </div>
              <div
                style={{
                  fontFamily: FS,
                  color: C.textDim,
                  fontSize: 9,
                  letterSpacing: 1,
                }}
              >
                PUNTOS
              </div>
            </div>

            <button
              onClick={goToMenu}
              style={{
                padding: "9px 13px",
                borderRadius: 10,
                border: `1px solid ${C.border}`,
                background: "rgba(0,0,0,.25)",
                color: C.textDim,
                cursor: "pointer",
                fontFamily: FS,
                fontSize: 12,
              }}
            >
              Menú
            </button>
          </div>
        </header>

        <main className="battle-main">
          <section className="battle-panel">
            <BattleCanvas hitTick={hitTick} correctTick={correctTick} />

            <div style={{ padding: 16 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 14,
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    border: `2px solid ${cfg.col}`,
                    color: cfg.col,
                    fontFamily: F,
                    fontSize: 15,
                    background: "rgba(0,0,0,.34)",
                  }}
                >
                  {LEVEL_MARKS[diff] ?? "I"}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: F,
                      color: cfg.col,
                      fontSize: 14,
                      marginBottom: 5,
                      textShadow: "2px 2px 0 rgba(0,0,0,.8)",
                    }}
                  >
                    {cfg.label}
                  </div>

                  <div
                    style={{
                      fontFamily: FS,
                      color: C.textDim,
                      fontSize: 12,
                    }}
                  >
                    Pregunta {qIdx + 1} de {TOTAL_Q} · Tiempo base {cfg.timer}s
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: F,
                    color: C.cyan,
                    fontSize: 13,
                  }}
                >
                  {qIdx}/{TOTAL_Q}
                </div>
              </div>

              <ProgressBar
                current={qIdx}
                total={TOTAL_Q}
                answerStatus={answerStatus}
              />

              <div
                style={{
                  marginTop: 14,
                  padding: "11px 13px",
                  borderRadius: 12,
                  background: "rgba(0,0,0,.26)",
                  border: `1px solid ${C.border}`,
                  fontFamily: FS,
                  color: C.textDim,
                  fontSize: 12,
                  lineHeight: 1.55,
                }}
              >
                <strong style={{ color: C.gold }}>Consejo:</strong>{" "}
                {diff === "easy" &&
                  "Lee con calma. Las bases de seguridad son el primer escudo."}
                {diff === "medium" &&
                  "Analiza el contexto completo antes de elegir una respuesta."}
                {diff === "hard" &&
                  "Las amenazas avanzadas castigan las respuestas impulsivas."}
              </div>
            </div>
          </section>

          <section className="battle-panel battle-question">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: F,
                    color: C.gold,
                    fontSize: "clamp(11px, 1.5vw, 15px)",
                    marginBottom: 6,
                    textShadow: "2px 2px 0 rgba(0,0,0,.8)",
                  }}
                >
                  CÓDICE DE AMENAZA
                </div>

                <div
                  style={{
                    fontFamily: FS,
                    color: C.textDim,
                    fontSize: 12,
                  }}
                >
                  {q.joke ? "Pregunta especial · " : ""}
                  Desafío {qIdx + 1}
                </div>
              </div>

              {phase === "choices" && (
                <TimerRing seconds={timer} total={cfg.timer} />
              )}
            </div>

            <div
              style={{
                borderRadius: 16,
                border: `1px solid ${C.borderStrong ?? C.border}`,
                background:
                  "linear-gradient(135deg, rgba(47,35,18,.96), rgba(14,10,5,.98))",
                padding: "18px 18px",
                minHeight: 116,
                display: "flex",
                alignItems: "center",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,.035)",
              }}
            >
              <div
                style={{
                  fontFamily: FS,
                  color: C.text,
                  fontSize: "clamp(15px, 1.9vw, 19px)",
                  lineHeight: 1.65,
                  width: "100%",
                }}
              >
                <Typewriter
                  key={qIdx}
                  text={q.q}
                  onDone={() => setPhase("choices")}
                />
              </div>
            </div>

            {phase === "typing" && (
              <div
                style={{
                  textAlign: "center",
                  padding: "12px 0",
                  fontFamily: FS,
                  fontSize: 13,
                  color: C.textDim,
                }}
              >
                El códice está revelando la amenaza...
              </div>
            )}

            {phase === "choices" && (
              <div
                style={{
                  display: "grid",
                  gap: 10,
                  animation: "popIn .25s ease",
                }}
              >
                {q.choices.map((choice, i) => (
                  <ChoiceButton
                    key={i}
                    letter={["A", "B", "C", "D"][i]}
                    text={choice}
                    onClick={() => choose(i)}
                  />
                ))}
              </div>
            )}

            {phase === "feedback" && (
              <FeedbackPanel
                chosen={chosen}
                q={q}
                nextQ={nextQ}
                isLast={qIdx + 1 >= TOTAL_Q}
                sinEscudos={rep <= 0}
              />
            )}
          </section>
        </main>
      </div>
    </>
  );
}