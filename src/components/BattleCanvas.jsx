import { useEffect, useState } from "react";
import { C, FS } from "../config/gameConfig";

const BASE = import.meta.env.BASE_URL;

const BG = `${BASE}backgrounds/escenario-inicio.png`;
const WARRIOR_ATTACK = `${BASE}sprites/jaguar/warrior_attack_12_sheet.png`;
const ENEMY_ATTACK = `${BASE}sprites/enemy/enemy_attack_12_sheet.png`;

export default function BattleCanvas({
  hitTick = 0,
  correctTick = 0,
}) {
  const [warriorAttacking, setWarriorAttacking] = useState(false);
  const [enemyAttacking, setEnemyAttacking] = useState(false);

  useEffect(() => {
  if (correctTick > 0) {
    setWarriorAttacking(true);

    const t = setTimeout(() => {
      setWarriorAttacking(false);
    }, 1100);

    return () => clearTimeout(t);
  }
}, [correctTick]);

 useEffect(() => {
  if (hitTick > 0) {
    setEnemyAttacking(true);

    const t = setTimeout(() => {
      setEnemyAttacking(false);
    }, 1100);

    return () => clearTimeout(t);
  }
}, [hitTick]);



  return (
    <>
      <style>
        {`
          @keyframes warriorAttackMelee {
  from {
    background-position: 0px 0px;
  }

  to {
    background-position: -1500px 0px;
  }
}

         @keyframes enemyAttackMelee {
  from {
    background-position: 0px 0px;
  }

  to {
    background-position: -1500px 0px;
  }
}

          @keyframes warriorStepAttack {
            0% {
              transform: scale(1.25) translateX(0px);
            }

            45% {
              transform: scale(1.25) translateX(42px);
            }

            100% {
              transform: scale(1.25) translateX(0px);
            }
          }

          @keyframes enemyStepAttack {
            0% {
              transform: scale(1.35) translateX(0px);
            }

            45% {
              transform: scale(1.35) translateX(-42px);
            }

            100% {
              transform: scale(1.35) translateX(0px);
            }
          }

          @keyframes warriorSlashHit {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) rotate(-18deg) scale(.4);
            }

            30% {
              opacity: 1;
              transform: translate(-50%, -50%) rotate(-18deg) scale(1);
            }

            100% {
              opacity: 0;
              transform: translate(-50%, -50%) rotate(-18deg) scale(1.65);
            }
          }

          @keyframes enemySlashHit {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) rotate(18deg) scale(.4);
            }

            30% {
              opacity: 1;
              transform: translate(-50%, -50%) rotate(18deg) scale(1);
            }

            100% {
              opacity: 0;
              transform: translate(-50%, -50%) rotate(18deg) scale(1.65);
            }
          }

          @keyframes warriorImpactFlash {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(.4);
            }

            35% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }

            100% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(1.7);
            }
          }

          @keyframes enemyImpactFlash {
            0% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(.4);
            }

            35% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }

            100% {
              opacity: 0;
              transform: translate(-50%, -50%) scale(1.7);
            }
          }

          @keyframes emberFloat {
            from {
              transform: translateY(0);
              opacity: .95;
            }

            to {
              transform: translateY(-26px);
              opacity: 0;
            }
          }

          @keyframes battleDamageShake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-4px); }
            40% { transform: translateX(4px); }
            60% { transform: translateX(-3px); }
            80% { transform: translateX(3px); }
          }
        `}
      </style>

      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: 360,
          borderRadius: 18,
          overflow: "hidden",
          border: `1px solid ${C.borderStrong ?? C.border}`,
          background: C.bgDeep,
          boxShadow:
            "0 22px 60px rgba(0,0,0,.45), inset 0 0 0 1px rgba(255,255,255,.04)",
          animation: enemyAttacking ? "battleDamageShake .35s linear" : "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${BG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            imageRendering: "pixelated",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.16) 60%, rgba(0,0,0,.42))",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "8%",
            bottom: "15%",
            width: "34%",
            height: 30,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(214,168,79,.28), rgba(0,0,0,0) 68%)",
            filter: "blur(2px)",
            zIndex: 3,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "12%",
            bottom: "15%",
            width: "34%",
            height: 30,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(185,70,50,.26), rgba(0,0,0,0) 70%)",
            filter: "blur(2px)",
            zIndex: 3,
          }}
        />

        {/* Guerrero */}
        <div
          style={{
            position: "absolute",
            left: "9%",
            bottom: "16%",
            width: 125,
            height: 130,
            backgroundImage: `url('${WARRIOR_ATTACK}')`,
            backgroundRepeat: "no-repeat",
           backgroundSize: "1500px 130px",
            backgroundPosition: "0px 0px",
            imageRendering: "pixelated",
            transform: "scale(1.25)",
            transformOrigin: "bottom center",
            zIndex: 6,
            pointerEvents: "none",
            filter: enemyAttacking
              ? "drop-shadow(0 0 12px rgba(185,70,50,.85))"
              : "drop-shadow(0 18px 12px rgba(0,0,0,.55))",
            animation: warriorAttacking
  ? "warriorAttackMelee 1.05s steps(12) 1, warriorStepAttack 1.05s ease-in-out 1"
  : "none",
          }}
        />

        {/* Enemigo */}
        <div
          style={{
            position: "absolute",
            right: "9%",
            bottom: "16%",
            width: 125,
            height: 130,
            backgroundImage: `url('${ENEMY_ATTACK}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "1500px 130px",
            backgroundPosition: "0px 0px",
            imageRendering: "pixelated",
            transform: "scale(1.35)",
            transformOrigin: "bottom center",
            zIndex: 6,
            pointerEvents: "none",
            filter: warriorAttacking
              ? "drop-shadow(0 0 12px rgba(214,168,79,.85))"
              : "drop-shadow(0 18px 12px rgba(0,0,0,.55))",
            animation: enemyAttacking
  ? "enemyAttackMelee 1.05s steps(12) 1, enemyStepAttack 1.05s ease-in-out 1"
  : "none",
          }}
        />

        {/* Golpe del guerrero */}
        {warriorAttacking && (
          <>
            <div
              style={{
                position: "absolute",
                left: "62%",
                top: "53%",
                width: 190,
                height: 38,
                borderRadius: "50%",
                background:
                  "linear-gradient(90deg, transparent, rgba(214,168,79,.95), rgba(255,255,255,.9), rgba(185,70,50,.75), transparent)",
                boxShadow: "0 0 30px rgba(214,168,79,.75)",
                animation: "warriorSlashHit .48s ease-out forwards",
                zIndex: 7,
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "70%",
                top: "53%",
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: `2px solid ${C.gold}`,
                background:
                  "radial-gradient(circle, rgba(214,168,79,.34), rgba(185,70,50,.22), rgba(0,0,0,0) 65%)",
                boxShadow:
                  "0 0 34px rgba(214,168,79,.65), inset 0 0 18px rgba(255,255,255,.18)",
                animation: "warriorImpactFlash .52s ease-out forwards",
                zIndex: 7,
              }}
            />
          </>
        )}

        {/* Golpe del enemigo */}
        {enemyAttacking && (
          <>
            <div
              style={{
                position: "absolute",
                left: "32%",
                top: "54%",
                width: 190,
                height: 38,
                borderRadius: "50%",
                background:
                  "linear-gradient(90deg, transparent, rgba(76,191,143,.95), rgba(255,255,255,.85), rgba(185,70,50,.75), transparent)",
                boxShadow: "0 0 30px rgba(76,191,143,.75)",
                animation: "enemySlashHit .48s ease-out forwards",
                zIndex: 7,
              }}
            />

            <div
              style={{
                position: "absolute",
                left: "23%",
                top: "54%",
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: `2px solid ${C.red}`,
                background:
                  "radial-gradient(circle, rgba(185,70,50,.36), rgba(76,191,143,.22), rgba(0,0,0,0) 65%)",
                boxShadow:
                  "0 0 34px rgba(185,70,50,.65), inset 0 0 18px rgba(255,255,255,.12)",
                animation: "enemyImpactFlash .52s ease-out forwards",
                zIndex: 7,
              }}
            />
          </>
        )}

        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${54 + i * 6}%`,
              bottom: `${16 + (i % 2) * 8}%`,
              width: 4,
              height: 4,
              background: i % 2 ? C.gold : C.red,
              boxShadow: `0 0 12px ${i % 2 ? C.gold : C.red}`,
              animation: `emberFloat ${1.2 + i * 0.18}s ease-out infinite`,
              animationDelay: `${i * 0.22}s`,
              zIndex: 4,
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            left: 14,
            right: 14,
            bottom: 12,
            zIndex: 8,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: 14,
            fontFamily: FS,
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 0.8,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              justifySelf: "start",
              padding: "7px 12px",
              borderRadius: 999,
              color: "#FFE2A0",
              background: "rgba(0,0,0,.72)",
              border: `1px solid ${C.gold}`,
              boxShadow: "0 0 14px rgba(214,168,79,.45)",
              textShadow: "2px 2px 0 rgba(0,0,0,.9)",
            }}
          >
            Guerrero Jaguar
          </div>

          <div
            style={{
              color: C.text,
              border: `1px solid ${C.borderStrong ?? C.border}`,
              borderRadius: 999,
              padding: "7px 13px",
              background: "rgba(0,0,0,.78)",
              letterSpacing: 2,
              fontFamily: FS,
              fontWeight: 900,
              boxShadow: "0 0 16px rgba(0,0,0,.75)",
              textShadow: "2px 2px 0 rgba(0,0,0,.9)",
            }}
          >
            VS
          </div>

          <div
            style={{
              justifySelf: "end",
              padding: "7px 12px",
              borderRadius: 999,
              color: "#FFB2A4",
              background: "rgba(0,0,0,.72)",
              border: `1px solid ${C.red}`,
              boxShadow: "0 0 14px rgba(185,70,50,.45)",
              textShadow: "2px 2px 0 rgba(0,0,0,.9)",
              textAlign: "right",
            }}
          >
            Guardián del Abismo
          </div>
        </div>
      </div>
    </>
  );
}