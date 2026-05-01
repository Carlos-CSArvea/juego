import { useMemo } from 'react';
import { C, F, FS, DIFF, getRank } from '../config/gameConfig';

export default function ResultsScreen({ results, score, diff, TOTAL_Q, onReplay, onMenu }) {
  const rank = getRank(results.pct);
  const glow = useMemo(() => col => ({ boxShadow:`0 0 16px ${col}22,inset 0 0 10px ${col}08`, border:`1px solid ${col}44` }), []);
  return (
    <div style={{ maxWidth:680, margin:"0 auto", padding:"16px 12px 32px" }}>
      <div style={{ background:`linear-gradient(160deg,${C.bgDeep},${C.bgCard})`, border:`1px solid ${C.border}`, borderRadius:12, padding:"20px 16px", ...glow(C.gold), textAlign:"center", animation:"popIn .4s ease" }}>
        <div style={{ fontSize:52, marginBottom:8 }}>{rank.icon}</div>
        <div style={{ fontFamily:F, fontSize:"clamp(12px,3.5vw,18px)", color:C.gold, marginBottom:6, animation:"glow2 2s ease-in-out infinite" }}>{rank.title}</div>
        <div style={{ fontFamily:FS, fontSize:"clamp(12px,2.2vw,14px)", color:C.textDim, lineHeight:1.7, marginBottom:20, padding:"0 16px" }}>{rank.msg}</div>
        <div style={{ display:"flex", gap:4, justifyContent:"center", marginBottom:10 }}>
          {Array.from({length:TOTAL_Q},(_,i) => (
            <div key={i} style={{ width:`calc(${100/TOTAL_Q}% - 3px)`, height:18, borderRadius:4, background:i<results.correct?`linear-gradient(180deg,${C.green},${C.green}88)`:"#1e2035", border:`1px solid ${i<results.correct?C.green:C.border}` }}/>
          ))}
        </div>
        <div style={{ background:C.bgDeep, borderRadius:12, padding:"16px", border:`1px solid ${C.borderG}`, marginBottom:12 }}>
          <div style={{ fontFamily:F, fontSize:"clamp(28px,8vw,48px)", color:results.pct>=60?C.gold:C.red }}>{results.pct}%</div>
          <div style={{ fontFamily:FS, fontSize:12, color:C.textDim, marginTop:4 }}>Nivel de cumplimiento</div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:16 }}>
          {[{label:"Correctas",val:results.correct,col:C.green},{label:"Fallidas",val:TOTAL_Q-results.correct,col:C.red},{label:"Puntos",val:String(score).padStart(6,"0"),col:C.gold}].map(s => (
            <div key={s.label} style={{ background:C.bgDeep, borderRadius:8, padding:"10px 6px", border:`1px solid ${s.col}33` }}>
              <div style={{ fontFamily:F, fontSize:"clamp(12px,3vw,16px)", color:s.col }}>{s.val}</div>
              <div style={{ fontFamily:FS, fontSize:10, color:C.textDim, marginTop:4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily:FS, fontSize:11, color:C.textDim, marginBottom:16 }}>
          Dificultad: <span style={{ color:DIFF[diff]?.col }}>{DIFF[diff]?.label}</span> - {TOTAL_Q} preguntas
        </div>
        <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
          <button onClick={onReplay} style={{ background:`linear-gradient(135deg,${C.cyan},${C.purple})`, color:"#fff", border:"none", fontFamily:FS, fontWeight:"bold", fontSize:13, padding:"12px 24px", cursor:"pointer", borderRadius:8, letterSpacing:1 }}>Jugar de Nuevo</button>
          <button onClick={onMenu}   style={{ background:"none", color:C.textDim, border:`1px solid ${C.border}`, fontFamily:FS, fontSize:13, padding:"12px 24px", cursor:"pointer", borderRadius:8 }}>Menu Principal</button>
        </div>
      </div>
    </div>
  );
}
