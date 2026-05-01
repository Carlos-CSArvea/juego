import { C, F } from '../config/gameConfig';

export default function TimerRing({ seconds, total }) {
  const pct = seconds / total;
  const r = 22, circ = 2 * Math.PI * r;
  const col = pct > .5 ? C.green : pct > .25 ? C.gold : C.red;
  return (
    <div style={{ position:"relative", width:56, height:56, flexShrink:0 }}>
      <svg width={56} height={56} style={{ transform:"rotate(-90deg)" }}>
        <circle cx={28} cy={28} r={r} fill="none" stroke={C.border} strokeWidth={4}/>
        <circle cx={28} cy={28} r={r} fill="none" stroke={col} strokeWidth={4}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
          style={{ transition:"stroke-dashoffset .9s linear,stroke .4s" }}/>
      </svg>
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center",
        fontFamily:F, fontSize:10, color:col }}>{seconds}</div>
    </div>
  );
}
