const BASE = import.meta.env.BASE_URL;

export default function EnemyIdle() {
  return (
    <>
      <style>
        {`
          @keyframes enemyIdleStartSprite {
            from {
              background-position: 0px 0px;
            }

            to {
              background-position: -375px 0px;
            }
          }
        `}
      </style>

      <div
        style={{
          position: "absolute",
          right: "9%",
          bottom: "16%",
          width: 125,
          height: 130,
          backgroundImage: `url('${BASE}sprites/enemy/enemy_idle_start_sheet.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "375px 130px",
          imageRendering: "pixelated",
          transform: "scale(1.35)",
          transformOrigin: "bottom center",
          zIndex: 5,
          pointerEvents: "none",
          animation: "enemyIdleStartSprite 0.85s steps(3) infinite",
          filter: "drop-shadow(0 16px 12px rgba(0,0,0,.55))",
        }}
      />
    </>
  );
}