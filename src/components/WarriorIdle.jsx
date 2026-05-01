export default function WarriorIdle() {
  return (
    <>
      <style>
        {`
          @keyframes warriorIdleSprite {
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
          left: "9%",
          bottom: "16%",
          width: 125,
          height: 130,
          backgroundImage: "url('/sprites/jaguar/warrior_idle_sheet.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "625px 130px",
          imageRendering: "pixelated",
          transform: "scale(1.25)",
          transformOrigin: "bottom center",
          zIndex: 5,
          pointerEvents: "none",
          animation: "warriorIdleSprite 1s steps(5) infinite",
        }}
      />
    </>
  );
}