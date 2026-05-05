import { C } from "../config/gameConfig";

export default function Diamond({ on, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <linearGradient id={`jade-${size}-${on}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={on ? "#A7E7C2" : "#2a2418"} />
          <stop offset="55%" stopColor={on ? C.jade : "#17120b"} />
          <stop offset="100%" stopColor={on ? "#0D4F43" : "#0b0805"} />
        </linearGradient>
      </defs>

      <path
        d="M12 2 L21 9 L17 21 L7 21 L3 9 Z"
        fill={`url(#jade-${size}-${on})`}
        stroke={on ? C.green : C.border}
        strokeWidth="1.6"
      />

      <path
        d="M12 2 L12 21 M3 9 L21 9 M7 21 L12 9 L17 21"
        stroke={on ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.08)"}
        strokeWidth="1"
        fill="none"
      />

      {on && (
        <circle
          cx="12"
          cy="10"
          r="2.4"
          fill="rgba(255,255,255,.68)"
        />
      )}
    </svg>
  );
}