import { C, F, FS } from "../config/gameConfig";

export default function Ranking({ ranking, cargando }) {
  return (
    <div
      style={{
        marginTop: 18,
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 12,
        padding: 16,
      }}
    >
      <div
        style={{
          fontFamily: FS,
          color: C.textDim,
          fontSize: 11,
          textAlign: "center",
          letterSpacing: 1.5,
          marginTop: -6,
          marginBottom: 16,
        }}
      >
        Top 10 puntajes registrados
      </div>

      {cargando ? (
        <p style={{ fontFamily: FS, color: C.textDim, textAlign: "center" }}>
          Cargando ranking...
        </p>
      ) : ranking.length === 0 ? (
        <p style={{ fontFamily: FS, color: C.textDim, textAlign: "center" }}>
          No hay puntajes registrados.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {ranking.map((item, index) => (
            <div
              key={item.id ?? `${item.nombre}-${item.created_at}-${index}`}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr 1fr 90px",
                gap: 8,
                alignItems: "center",
                background: C.bgDeep,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "8px 10px",
                fontFamily: FS,
                fontSize: 12,
                color: C.text,
              }}
            >
              <strong style={{ color: C.gold }}>#{index + 1}</strong>
              <span>{item.nombre}</span>
              <span style={{ color: C.textDim }}>{item.area}</span>
              <strong style={{ color: C.cyan, textAlign: "right" }}>
                {item.puntaje} pts
              </strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}