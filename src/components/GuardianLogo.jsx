const BASE = import.meta.env.BASE_URL;

export default function GuardianLogo({
  size = 180,
  compact = false,
  align = "center",
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent:
          align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img
        src={`${BASE}logos/logo-guardianes.png`}
        alt="Guardianes Bizzarro"
        style={{
          width: compact ? size : `min(${size}px, 90%)`,
          height: "auto",
          display: "block",
          imageRendering: "auto",
          filter:
            "drop-shadow(0 0 16px rgba(214,168,79,.35)) drop-shadow(0 10px 20px rgba(0,0,0,.55))",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
}