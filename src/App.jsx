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
    setChosen(-1);
    const nFw = Math.max(0, fw - (cfg?.fwDmg ?? 0));
    setHitTick(t => t + 1);
    setShake(true);
    shakeToRef.current = setTimeout(() => setShake(false), 320);
    phaseToRef.current = setTimeout(() => {
      setFw(nFw); setPhase("feedback");
      if (nFw <= 0) endToRef.current = setTimeout(endGame, 1000);
    }, 180);
  }, [fw, cfg, endGame]);

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
    setRep(3);
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
    stopTimer(); setChosen(idx);
    const correct = idx === q.correct;
    const fwD = correct ? (q.fw[idx] > 0 ? Math.min(q.fw[idx], 100 - fw) : 0) : -cfg.fwDmg;
    const repD = q.rep[idx];
    const nFw = Math.min(100, Math.max(0, fw + fwD));
    const nRep = Math.min(5, Math.max(1, rep + repD));
    if (correct) { correctCount.current++; setCorrectTick(t => t + 1); }
    else { setHitTick(t => t + 1); setShake(true); shakeToRef.current = setTimeout(() => setShake(false), 320); }
    setParticles(p => [...p, { x: window.innerWidth / 2, y: window.innerHeight / 2, col: correct ? C.green : C.red }]);
    if (fwD || repD) {
      const pts = [];
      if (fwD) pts.push((fwD > 0 ? "+" : "") + fwD + "% FW");
      if (repD) pts.push((repD > 0 ? "+" : "") + repD + " REP");
      const col = fwD >= 0 && repD >= 0 ? C.green : C.red;
      setDelta({ txt: pts.join(" "), col });
      deltaToRef.current = setTimeout(() => setDelta(null), 1500);
    }
    setScore(s => s + (correct ? Math.round(120 * cfg.bonus) : 0));
    phaseToRef.current = setTimeout(() => {
      setFw(nFw); setRep(nRep); setPhase("feedback");
      if (nFw <= 0) endToRef.current = setTimeout(endGame, 1000);
    }, 180);
  }, [phase, q, cfg, fw, rep, stopTimer, endGame]);

  const nextQ = useCallback(() => {
    const ni = qIdx + 1;
    if (ni >= pool.length) { endGame(); return; }
    setQIdx(ni); setPhase("typing"); setChosen(null);
  }, [qIdx, pool.length, endGame]);

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
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "10px 12px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {/* HUD */}
          <div style={{ ...card, ...glow(C.cyan), background: `linear-gradient(135deg,${C.bgCard},${C.bgDeep})`, position: "relative", overflow: "hidden", marginBottom: 8, flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: "-100%", width: "50%", height: "100%", background: `linear-gradient(90deg,transparent,${C.cyan}08,transparent)`, animation: "scanH 3s linear infinite" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontFamily: F, fontSize: "clamp(6px,1.4vw,8px)", color: C.cyan, letterSpacing: 1 }}>GUARDIANES CYBER DEFENSE</div>
                <div style={{ fontFamily: FS, fontSize: 10, color: cfg.col, marginTop: 2 }}>Nivel: {cfg.label} - P.{qIdx + 1}/{TOTAL_Q}</div>
              </div>
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontFamily: FS, fontSize: 9, color: C.textDim }}>Escudo Firewall</span>
                  <span style={{ fontFamily: F, fontSize: 8, color: fwColor }}>{Math.round(fw)}%</span>
                </div>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: 10 }, (_, i) => {
                    const a = fw >= (i + 1) * 10;
                    return <div key={i} style={{ flex: 1, height: 10, borderRadius: 2, background: a ? fwColor : "#1e2035", border: `1px solid ${a ? fwColor : C.border}`, transition: "background .4s" }} />;
                  })}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                <span style={{ fontFamily: FS, fontSize: 9, color: C.textDim }}>Confianza:</span>
                {[1, 2, 3, 4, 5].map(i => <Diamond key={i} on={i <= rep} size={14} />)}
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontFamily: F, fontSize: "clamp(10px,1.8vw,13px)", color: C.gold }}>{String(score).padStart(6, "0")}</div>
                <div style={{ fontFamily: FS, fontSize: 8, color: C.textDim }}>PUNTOS</div>
              </div>
              <button onClick={goToMenu} style={{ fontFamily: FS, fontSize: 10, color: C.textDim, background: "none", border: `1px solid ${C.border}`, borderRadius: 6, padding: "3px 10px", cursor: "pointer", flexShrink: 0 }}>Menu</button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 10, flex: 1 }}>
            {/* Col izquierda */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ ...card, ...glow(C.purple), padding: 0, overflow: "hidden", flexShrink: 0 }}>
                <BattleCanvas fw={fw} hitTick={hitTick} correctTick={correctTick} />
                <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 10px", background: C.bgDeep, borderTop: `1px solid ${C.border}` }}>
                  <span style={{ fontFamily: FS, fontSize: 9, color: C.cyan }}>Guardianes HQ</span>
                  <span style={{ fontFamily: FS, fontSize: 9, color: C.gold, fontWeight: "bold" }}>VS</span>
                  <span style={{ fontFamily: FS, fontSize: 9, color: C.red }}>Vectores de Amenaza</span>
                </div>
              </div>
              <div style={{ ...card, ...glow(cfg.col), flexShrink: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div>
                    <div style={{ fontFamily: F, fontSize: 9, color: cfg.col, marginBottom: 3 }}>{DIFF_ICONS[cfg.icon]} {cfg.label}</div>
                    <div style={{ fontFamily: FS, fontSize: 10, color: C.textDim }}>{TOTAL_Q} preguntas - {cfg.timer}s</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: F, fontSize: 11, color: C.cyan }}>{qIdx}/{TOTAL_Q}</div>
                    <div style={{ fontFamily: FS, fontSize: 9, color: C.textDim }}>respondidas</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 3 }}>
                  {Array.from({ length: TOTAL_Q }, (_, i) => {
                    const done = i < qIdx, cur = i === qIdx;
                    return <div key={i} style={{ flex: 1, height: 6, borderRadius: 2, background: done ? C.green : cur ? C.gold : "#1e2035", border: `1px solid ${done ? C.green : cur ? C.gold : C.border}`, transition: "all .3s" }} />;
                  })}
                </div>
              </div>
              <div style={{ ...card, background: C.bgDeep, border: `1px solid ${C.border}`, flexShrink: 0 }}>
                <div style={{ fontFamily: FS, fontSize: 10, color: C.textDim, lineHeight: 1.7 }}>
                  <strong style={{ color: C.text }}>Tip:</strong>{" "}
                  {diff === "easy" && "Lee cada opcion con calma. Los conceptos basicos son tu mejor aliado."}
                  {diff === "medium" && "Piensa en el escenario completo antes de responder."}
                  {diff === "hard" && "Las amenazas avanzadas requieren conocimiento profundo."}
                </div>
              </div>
            </div>

            {/* Col derecha */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ ...card, ...glow(C.gold), position: "relative", flexShrink: 0 }}>
                <div style={{ position: "absolute", top: -1, right: -1, width: 16, height: 16, background: `linear-gradient(135deg,${C.gold},${C.goldD})`, borderRadius: "0 12px 0 8px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {q.joke && <span style={{ fontFamily: FS, fontSize: 9, color: C.gold, background: `${C.gold}11`, border: `1px solid ${C.gold}44`, borderRadius: 4, padding: "2px 6px" }}>Humor</span>}
                    <span style={{ fontFamily: FS, fontSize: 10, color: C.textDim }}>Amenaza - P.{qIdx + 1}</span>
                  </div>
                  {phase === "choices" && <TimerRing seconds={timer} total={cfg.timer} />}
                </div>
                <div style={{ minHeight: 50 }}>
                  <Typewriter key={qIdx} text={q.q} onDone={() => setPhase("choices")} />
                </div>
              </div>

              {phase === "typing" && (
                <div style={{ textAlign: "center", padding: "10px 0", fontFamily: FS, fontSize: 12, color: C.textDim }}>Analizando amenaza...</div>
              )}

              {phase === "choices" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 7, animation: "popIn .25s ease" }}>
                  {q.choices.map((c, i) => (
                    <button key={i} onClick={() => choose(i)} style={{ background: `linear-gradient(135deg,${C.bgCard},${C.bgDeep})`, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 12px", cursor: "pointer", fontFamily: FS, fontSize: "clamp(12px,1.6vw,14px)", color: C.text, display: "flex", alignItems: "flex-start", gap: 10, textAlign: "left", width: "100%", lineHeight: 1.6, transition: "all .15s" }}
                      onMouseEnter={e => { e.currentTarget.style.background = `linear-gradient(135deg,${C.cyan}11,${C.bgCard})`; e.currentTarget.style.borderColor = C.cyan; e.currentTarget.style.transform = "translateX(4px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(135deg,${C.bgCard},${C.bgDeep})`; e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "none"; }}>
                      <span style={{ background: `linear-gradient(135deg,${C.cyan},${C.purple})`, color: "#fff", borderRadius: 6, padding: "2px 7px", fontFamily: F, fontSize: 7, fontWeight: 900, minWidth: 22, textAlign: "center", flexShrink: 0, marginTop: 2 }}>
                        {["A", "B", "C", "D"][i]}
                      </span>
                      {c}
                    </button>
                  ))}
                </div>
              )}

              {phase === "feedback" && (
                <div style={{ ...card, ...glow(chosen === q.correct ? C.green : C.red), background: `linear-gradient(135deg,${chosen === q.correct ? C.green + "11" : C.red + "11"},${C.bgDeep})`, animation: "popIn .3s ease" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: chosen === q.correct ? `${C.green}22` : `${C.red}22`, border: `2px solid ${chosen === q.correct ? C.green : C.red}`, fontSize: 18, flexShrink: 0 }}>
                      {chosen === -1 ? "T" : chosen === q.correct ? "V" : "X"}
                    </div>
                    <div style={{ fontFamily: F, fontSize: "clamp(8px,1.4vw,10px)", color: chosen === q.correct ? C.green : C.red }}>
                      {chosen === -1 ? "TIEMPO AGOTADO" : chosen === q.correct ? "CORRECTO" : "INCORRECTO"}
                    </div>
                  </div>
                  {chosen !== -1 && <div style={{ fontFamily: FS, fontSize: "clamp(11px,1.4vw,13px)", color: chosen === q.correct ? "#a0e8b0" : "#ffaaaa", lineHeight: 1.7, marginBottom: 12, paddingLeft: 44 }}>{q.exp}</div>}
                  {chosen === -1 && <div style={{ fontFamily: FS, fontSize: "clamp(11px,1.4vw,13px)", color: "#ffaaaa", lineHeight: 1.7, marginBottom: 12, paddingLeft: 44 }}>Respuesta correcta: <strong style={{ color: C.gold }}>{q.choices[q.correct]}</strong></div>}
                  <button onClick={nextQ} style={{ background: `linear-gradient(135deg,${C.cyan},${C.purple})`, color: "#fff", border: "none", fontFamily: FS, fontWeight: "bold", fontSize: "clamp(11px,1.4vw,13px)", padding: "11px 18px", cursor: "pointer", borderRadius: 8, width: "100%", letterSpacing: 1 }}>
                    {qIdx + 1 >= TOTAL_Q ? "Ver Resultados" : "Siguiente Amenaza"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {screen === "results" && results && (
        <ResultsScreen results={results} score={score} diff={diff} TOTAL_Q={TOTAL_Q} onReplay={() => startGame(diff)} onMenu={goToMenu} />
      )}
    </div>
  );
}
