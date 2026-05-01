import { C } from "../config/gameConfig";
import WarriorIdle from "./WarriorIdle";
import EnemyIdle from "./EnemyIdle";

export default function TitleCanvas() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 720,
        margin: "0 auto",
        borderRadius: 16,
        border: `1px solid ${C.border}`,
        overflow: "hidden",
        background: C.bgDeep,
      }}
    >
      <div
        style={{
          height: 310,
          backgroundImage: "url('/backgrounds/escenario-inicio.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.12))",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <WarriorIdle />
        <EnemyIdle />
      </div>
    </div>
  );
}