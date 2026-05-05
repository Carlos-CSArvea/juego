import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { C, F, FS, DIFF, DIFF_ICONS } from './config/gameConfig';
import { QB } from './data/questions';
import { shuffle, shuffleQ } from './utils/shuffle';
import Diamond from './components/Diamond';
import TimerRing from './components/TimerRing';
import Typewriter from './components/Typewriter';
import Particles from './components/Particles';
import BattleCanvas from './components/BattleCanvas';
import TitleCanvas from './components/TitleCanvas';
import ResultsScreen from './components/ResultsScreen';
import './styles/global.css';
import RankingDificultades from "./components/RankingDificultades";
import BattleScreen from "./components/BattleScreen";

import {
  guardarPuntaje,
  obtenerRankingsPorDificultad,
} from "./services/rankingService";
import PlayerGate from "./components/PlayerGate";
import DifficultyCard from "./components/DifficultyCard";

// ── APP ───────────────────────────────────────────────────────────
export default function App() {

  const [jugador, setJugador] = useState({
    nombre: "",
    area: "",
  });

  const [jugadorConfirmado, setJugadorConfirmado] = useState(false);

  const [rankings, setRankings] = useState({
  easy: [],
  medium: [],
  hard: [],
});

const [cargandoRanking, setCargandoRanking] = useState(true);
  const [screen, setScreen] = useState("title");
  const [diff, setDiff] = useState(null);
  const partidaGuardadaRef = useRef(false);
  const [fw, setFw] = useState(100);
  const [rep, setRep] = useState(3);
  const [score, setScore] = useState(0);
  const [pool, setPool] = useState([]);
  const [qIdx, setQIdx] = useState(0);
  const [phase, setPhase] = useState("typing");
  const [chosen, setChosen] = useState(null);
  const [particles, setParticles] = useState([]);
  const [hitTick, setHitTick] = useState(0);
  const [correctTick, setCorrectTick] = useState(0);
  const [shake, setShake] = useState(false);
  const [delta, setDelta] = useState(null);
  const [timer, setTimer] = useState(0);
  const [results, setResults] = useState(null);
const [answerStatus, setAnswerStatus] = useState({});

  const timerRef = useRef(null);
  const correctCount = useRef(0);
  // FIX: refs para todos los timeouts — evita memory leaks y setState en desmontado
  const shakeToRef = useRef(null);
  const deltaToRef = useRef(null);
  const phaseToRef = useRef(null);
  const endToRef = useRef(null);

  const cfg = diff ? DIFF[diff] : null;
  const TOTAL_Q = pool.length || cfg?.totalQ || 12;
  const q = pool[qIdx];

  const cargarRanking = useCallback(async () => {
  try {
    setCargandoRanking(true);
    const top = await obtenerRankingsPorDificultad(5);
    setRankings(top);
  } catch (error) {
    console.error("Error cargando rankings:", error.message);
  } finally {
    setCargandoRanking(false);
  }
}, []);

  function confirmarJugador(datosJugador) {
    setJugador(datosJugador);
    setJugadorConfirmado(true);
  }

  useEffect(() => {
    cargarRanking();
  }, [cargarRanking]);
  // FIX: clearAllTimeouts centralizado
  const clearAllTimeouts = useCallback(() => {
    clearTimeout(shakeToRef.current);
    clearTimeout(deltaToRef.current);
    clearTimeout(phaseToRef.current);
    clearTimeout(endToRef.current);
    clearInterval(timerRef.current);
  }, []);

  // FIX: cleanup global en unmount
  useEffect(() => () => clearAllTimeouts(), [clearAllTimeouts]);

  const stopTimer = useCallback(() => clearInterval(timerRef.current), []);

  // FIX: endGame declarada antes de sus consumidores (evita hoisting implícito)
  const endGame = useCallback(async () => {
    stopTimer();

    const total = Math.max(pool.length || TOTAL_Q, 1);
    const correct = correctCount.current;
    const pct = Math.round((correct / total) * 100);

    setResults({ correct, total, pct });
    setScreen("results");

    try {
      if (!partidaGuardadaRef.current && score > 0) {
  partidaGuardadaRef.current = true;

  await guardarPuntaje(jugador.nombre, jugador.area, diff, score);
  await cargarRanking();
}
      
    } catch (error) {
      console.error("Error guardando ranking:", error.message);
    }
}, [pool, TOTAL_Q, stopTimer, jugador, diff, score, cargarRanking]);

  const handleTimeout = useCallback(() => {
  if (phase !== "choices" || !cfg) return;

  setChosen(-1);

  const nFw = Math.max(0, fw - (cfg?.fwDmg ?? 0));
  const nRep = Math.max(0, rep - 1);

  setAnswerStatus((prev) => {
    const next = {
      ...prev,
      [qIdx]: "wrong",
    };

    if (nRep <= 0) {
      for (let i = qIdx + 1; i < TOTAL_Q; i += 1) {
        next[i] = "wrong";
      }
    }

    return next;
  });

  setHitTick((t) => t + 1);
  setShake(true);

  shakeToRef.current = setTimeout(() => {
    setShake(false);
  }, 320);

  phaseToRef.current = setTimeout(() => {
    setFw(nFw);
    setRep(nRep);
    setPhase("feedback");

    if (nRep <= 0) {
      endToRef.current = setTimeout(endGame, 1200);
    }
  }, 180);
}, [phase, cfg, fw, rep, qIdx, TOTAL_Q, endGame]);
  const startTimer = useCallback(() => {
    if (!diff) return;
    clearInterval(timerRef.current);
    setTimer(DIFF[diff].timer);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) { clearInterval(timerRef.current); handleTimeout(); return 0; }
        return prev - 1;
      });
    }, 1000);
  }, [diff, handleTimeout]);

  // FIX: startTimer y stopTimer en deps del useEffect
  useEffect(() => {
    if (phase === "choices") startTimer(); else stopTimer();
    return stopTimer;
  }, [phase, startTimer, stopTimer]);

  const goToMenu = useCallback(() => { clearAllTimeouts(); setScreen("title"); }, [clearAllTimeouts]);

  const startGame = useCallback((d) => {
    if (!jugadorConfirmado) {
      return;
    }

    if (!jugador.nombre.trim()) {
      alert("Ingresa tu nombre.");
      setJugadorConfirmado(false);
      return;
    }

    if (!jugador.area.trim()) {
      alert("Selecciona tu área.");
      setJugadorConfirmado(false);
      return;
    }
    partidaGuardadaRef.current = false;

    clearAllTimeouts();

    const dc = DIFF[d];
    setDiff(d);
    setFw(dc.fwStart);
    setRep(3); // 3 escudos del templo
setAnswerStatus({});
setScore(0);

    const p = shuffle(QB[d]).slice(0, dc.totalQ).map(shuffleQ);

    setPool(p);
    setQIdx(0);
    setPhase("typing");
    setChosen(null);
    setParticles([]);
    setHitTick(0);
    setCorrectTick(0);
    setResults(null);

    correctCount.current = 0;

    setScreen("game");
  }, [clearAllTimeouts, jugador, jugadorConfirmado]);
  const choose = useCallback((idx) => {
  if (phase !== "choices" || !q || !cfg) return;

  stopTimer();
  setChosen(idx);

  const correct = idx === q.correct;

  const fwD = correct
    ? q.fw?.[idx] > 0
      ? Math.min(q.fw[idx], 100 - fw)
      : 0
    : -cfg.fwDmg;

  const nFw = Math.min(100, Math.max(0, fw + fwD));
  const nRep = correct ? rep : Math.max(0, rep - 1);

  setAnswerStatus((prev) => {
    const next = {
      ...prev,
      [qIdx]: correct ? "correct" : "wrong",
    };

    if (!correct && nRep <= 0) {
      for (let i = qIdx + 1; i < TOTAL_Q; i += 1) {
        next[i] = "wrong";
      }
    }

    return next;
  });

  if (correct) {
    correctCount.current += 1;
    setCorrectTick((t) => t + 1);
  } else {
    setHitTick((t) => t + 1);
    setShake(true);

    shakeToRef.current = setTimeout(() => {
      setShake(false);
    }, 320);
  }

  setParticles((p) => [
    ...p,
    {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      col: correct ? C.green : C.red,
    },
  ]);

  if (fwD || !correct) {
    const pts = [];

    if (fwD) {
      pts.push((fwD > 0 ? "+" : "") + fwD + "% ESCUDO");
    }

    if (!correct) {
      pts.push("-1 VIDA");
    }

    setDelta({
      txt: pts.join(" "),
      col: correct ? C.green : C.red,
    });

    deltaToRef.current = setTimeout(() => {
      setDelta(null);
    }, 1500);
  }

  setScore((s) => s + (correct ? Math.round(120 * cfg.bonus) : 0));

  phaseToRef.current = setTimeout(() => {
    setFw(nFw);
    setRep(nRep);
    setPhase("feedback");

    if (!correct && nRep <= 0) {
      endToRef.current = setTimeout(endGame, 1200);
    }
  }, 180);
}, [phase, q, cfg, fw, rep, qIdx, TOTAL_Q, stopTimer, endGame]);

  const nextQ = useCallback(() => {
  if (rep <= 0) {
    endGame();
    return;
  }

  const ni = qIdx + 1;

  if (ni >= pool.length) {
    endGame();
    return;
  }

  setQIdx(ni);
  setPhase("typing");
  setChosen(null);
}, [rep, qIdx, pool.length, endGame]);

  // FIX: memoizar estilos recurrentes
  const card = useMemo(() => ({ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 14px", marginBottom: 10 }), []);
  const glow = useCallback(col => ({ boxShadow: `0 0 16px ${col}22,inset 0 0 10px ${col}08`, border: `1px solid ${col}44` }), []);
  const fwColor = fw > 60 ? C.green : fw > 30 ? C.gold : C.red; // calculado una sola vez

  return (
    <div style={{ background: C.bg, minHeight: "100vh", overflowX: "hidden", overflowY: "auto", position: "relative", fontFamily: F, transform: shake ? "translate(-5px,3px)" : "none", transition: shake ? "none" : "transform .1s" }}>

      {!jugadorConfirmado && (
        <PlayerGate onConfirm={confirmarJugador} />
      )}

      <Particles list={particles} />
      {delta && (
        <div style={{ position: "fixed", top: 80, right: 20, fontFamily: F, fontSize: 13, color: delta.col, zIndex: 200, pointerEvents: "none", animation: "floatUp 1.5s ease-out forwards" }}>
          {delta.txt}
        </div>
      )}

      {/* TITLE */}
      {jugadorConfirmado && screen === "title" && (
        <>
          <style>{`
            .guardian-menu-layout {
              width: min(1220px, calc(100vw - 32px));
              margin: 0 auto;
              padding: 18px 0 42px;
              display: grid;
              grid-template-columns: minmax(0, 1.35fr) minmax(340px, 0.72fr);
              gap: 22px;
              align-items: start;
            }

            .guardian-left-panel {
              min-width: 0;
              display: flex;
              flex-direction: column;
              gap: 14px;
            }

            .guardian-hero-card {
              border-radius: 0 0 22px 22px;
              overflow: hidden;
              border: 2px solid ${C.gold}55;
              border-top: none;
              background: linear-gradient(180deg, ${C.bgCard}, ${C.bgDeep});
              box-shadow: 0 22px 60px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.035);
            }

            .guardian-title-copy {
              background: linear-gradient(180deg, #0a1a1e00, #0a1a1ecc, #0a0f05);
              padding: 16px 20px 15px;
              text-align: center;
              border-top: 2px solid ${C.gold}44;
            }

            .guardian-difficulty-list {
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .guardian-ranking-panel {
              position: sticky;
              top: 18px;
              min-width: 0;
            }

            .guardian-ranking-panel > div {
              margin-top: 0 !important;
              min-height: 320px;
            }

            @media (max-width: 1060px) {
              .guardian-menu-layout {
                width: min(760px, calc(100vw - 24px));
                grid-template-columns: 1fr;
                gap: 16px;
                padding-top: 12px;
              }

              .guardian-ranking-panel {
                position: static;
              }
            }
          `}</style>

          <div className="guardian-menu-layout">
            <div className="guardian-left-panel">
              <div className="guardian-hero-card">
                <TitleCanvas />

                <div className="guardian-title-copy">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
                    <div style={{ height: 1, flex: 1, background: `linear-gradient(90deg,transparent,${C.moss},${C.gold})` }} />
                    <span style={{ fontFamily: FS, fontSize: 20, color: C.gold, letterSpacing: 5, fontWeight: 300 }}>
                      Joyerias Bizzarro
                    </span>
                    <div style={{ height: 1, flex: 1, background: `linear-gradient(90deg,${C.gold},${C.moss},transparent)` }} />
                  </div>

                  <div style={{ position: "relative", marginBottom: 5 }}>
                    <div
                      style={{
                        fontFamily: F,
                        color: C.gold,
                        fontSize: 46,
                        letterSpacing: 4,
                        textShadow:
                          "3px 3px 0 rgba(0,0,0,.75), 0 0 14px rgba(214,168,79,.35)",
                        marginBottom: 12,
                      }}
                    >
                      GUARDIANES
                    </div>

                    
                  </div>

                  <div style={{ fontFamily: FS, fontSize: "clamp(10px,1.6vw,13px)", color: C.mossL, letterSpacing: 3, marginBottom: 4, fontWeight: 300 }}>
                    Cyber Defense Force
                  </div>

                  <div style={{ fontFamily: FS, fontSize: 20, color: C.textDim, letterSpacing: 2, marginBottom: 10 }}>
                    Cultura de Ciberseguridad
                  </div>

                  <div style={{ fontFamily: FS, fontSize: 11, color: 'white', animation: "blinkC 1.2s step-end infinite", letterSpacing: 2 }}>
                    Elige tu rango de Guardian
                  </div>
                </div>
              </div>

              <div className="guardian-difficulty-list">
                {["easy", "medium", "hard"].map((d) => (
                  <DifficultyCard
                    key={d}
                    type={d}
                    onClick={() => startGame(d)}
                  />
                ))}
              </div>
            </div>

            <aside className="guardian-ranking-panel">
              <RankingDificultades
  rankings={rankings}
  cargando={cargandoRanking}
/>
            </aside>
          </div>
        </>
      )}

      {/* GAME FALLBACK */}
      {screen === "game" && (!cfg || !q) && (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            color: C.text,
            fontFamily: FS,
          }}
        >
          <div
            style={{
              maxWidth: 520,
              width: "100%",
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 16,
              padding: 22,
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: F, color: C.gold, fontSize: 14, marginBottom: 12 }}>
              No se pudo cargar la partida
            </div>
            <div style={{ color: C.textDim, fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              Revisa que existan preguntas para la dificultad seleccionada.
            </div>
            <button
              onClick={goToMenu}
              style={{
                padding: "10px 16px",
                borderRadius: 10,
                border: `1px solid ${C.gold}`,
                background: C.bgDeep,
                color: C.gold,
                cursor: "pointer",
                fontFamily: FS,
              }}
            >
              Volver al menú
            </button>
          </div>
        </div>
      )}

     {/* GAME */}
{screen === "game" && cfg && q && (
  <BattleScreen
    jugador={jugador}
    cfg={cfg}
    diff={diff}
    q={q}
    qIdx={qIdx}
    TOTAL_Q={TOTAL_Q}
    fw={fw}
    rep={rep}
    score={score}
    phase={phase}
    timer={timer}
    chosen={chosen}
    hitTick={hitTick}
    correctTick={correctTick}
    choose={choose}
    nextQ={nextQ}
    setPhase={setPhase}
    goToMenu={goToMenu}
    answerStatus={answerStatus}
  />
)}

      {/* RESULTS */}
      {screen === "results" && results && (
        <ResultsScreen results={results} score={score} diff={diff} TOTAL_Q={TOTAL_Q} onReplay={() => startGame(diff)} onMenu={goToMenu} />
      )}
    </div>
  );
}
