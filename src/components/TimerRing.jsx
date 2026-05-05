import { C, F, FS } from "../config/gameConfig";

export default function TimerRing({ seconds, total }) {
  const safeTotal = Math.max(total || 1, 1);
  const pct = Math.max(0, Math.min(1, seconds / safeTotal));
  const r = 24;
  const circ = 2 * Math.PI * r;
  const col = pct > 0.5 ? C.green : pct > 0.25 ? C.gold : C.red;

  return (
    <div
      style={{
        position: "relative",
        width: 68,
        height: 68,
        flexShrink: 0,
        display: "grid",
        placeItems: "center",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(34,25,13,.96), rgba(9,7,4,.98))",
        border: `1px solid ${C.borderStrong ?? C.border}`,
        boxShadow:
          "0 0 22px rgba(0,0,0,.4), inset 0 0 0 2px rgba(0,0,0,.35)",
      }}
    >
      <svg
        width={62}
        height={62}
        style={{
          position: "absolute",
          inset: 3,
          transform: "rotate(-90deg)",
        }}
      >
        <circle
          cx={31}
          cy={31}
          r={r}
          fill="none"
          stroke="rgba(0,0,0,.55)"
          strokeWidth={6}
        />

        <circle
          cx={31}
          cy={31}
          r={r}
          fill="none"
          stroke={C.border}
          strokeWidth={4}
        />

        <circle
          cx={31}
          cy={31}
          r={r}
          fill="none"
          stroke={col}
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - pct)}
          style={{
            transition: "stroke-dashoffset .9s linear, stroke .4s",
            filter: `drop-shadow(0 0 5px ${col})`,
          }}
        />
      </svg>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        <div
          style={{
            fontFamily: F,
            fontSize: 13,
            color: col,
            textShadow: "2px 2px 0 rgba(0,0,0,.8)",
          }}
        >
          {seconds}
        </div>

        <div
          style={{
            fontFamily: FS,
            fontSize: 8,
            color: C.textDim,
            marginTop: 4,
            letterSpacing: 1,
          }}
        >
          SEG
        </div>
      </div>
    </div>
  );
}