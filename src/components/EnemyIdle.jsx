export default function EnemyIdle() {
  return (
    <>
      <style>
        {`
          @keyframes enemyIdleSprite {
            from {
              background-position: 0px 0px;
            }
            to {
              background-position: -625px 0px;
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
          backgroundImage: "url('/sprites/enemy/enemy_idle_sheet.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "625px 130px",
          imageRendering: "pixelated",
          transform: "scale(1.35)",
          transformOrigin: "bottom center",
          zIndex: 5,
          pointerEvents: "none",
          animation: "enemyIdleSprite 1s steps(5) infinite",
        }}
      />
    </>
  );
}