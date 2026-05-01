import { C, F } from "../config/gameConfig";

const SEAL_CONFIG = {
  easy: {
    symbol: "I",
    label: "Jade",
    color: C.mossL,
    bg: "radial-gradient(circle, rgba(121,168,91,.35), rgba(28,45,22,.95))",
  },
  medium: {
    symbol: "II",
    label: "Oro",
    color: C.gold,
    bg: "radial-gradient(circle, rgba(214,168,79,.35), rgba(58,39,12,.96))",
  },
  hard: {
    symbol: "III",
    label: "Obsidiana",
    color: C.red,
    bg: "radial-gradient(circle, rgba(185,70,50,.35), rgba(42,12,8,.96))",
  },
};

export default function DifficultySeal({ type }) {
  const cfg = SEAL_CONFIG[type] ?? SEAL_CONFIG.easy;

  return (
    <div
      style={{
        width: 52,
        height: 52,
        minWidth: 52,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        background: cfg.bg,
        border: `2px solid ${cfg.color}`,
        boxShadow:
          "inset 0 0 0 3px rgba(0,0,0,.35), 0 0 18px rgba(0,0,0,.45)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 6,
          borderRadius: "50%",
          border: `1px solid ${cfg.color}88`,
        }}
      />

      <span
        style={{
          fontFamily: F,
          color: cfg.color,
          fontSize: type === "hard" ? 14 : 18,
          letterSpacing: 1,
          textShadow: "2px 2px 0 rgba(0,0,0,.8)",
          zIndex: 1,
        }}
      >
        {cfg.symbol}
      </span>
    </div>
  );
}