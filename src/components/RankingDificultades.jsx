import { C, F, FS } from "../config/gameConfig";

const RANKING_CONFIG = {
  easy: {
    titulo: "TOP 5 RECLUTA",
    color: C.mossL,
  },
  medium: {
    titulo: "TOP 5 ANALISTA",
    color: C.gold,
  },
  hard: {
    titulo: "TOP 5 ARQUITECTO",
    color: C.red,
  },
};

function RankingBox({ tipo, datos }) {
  const cfg = RANKING_CONFIG[tipo];

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(34,25,13,.96), rgba(12,9,5,.98))",
        border: `1px solid ${cfg.color}88`,
        borderRadius: 16,
        padding: 14,
        boxShadow:
          "0 14px 34px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.035)",
      }}
    >
      <h3
        style={{
          fontFamily: F,
          color: cfg.color,
          fontSize: 17,
          letterSpacing: 1.5,
          textAlign: "center",
          margin: "0 0 12px",
          textShadow: "2px 2px 0 rgba(0,0,0,.8)",
        }}
      >
        {cfg.titulo}
      </h3>

      {datos.length === 0 ? (
        <p
          style={{
            fontFamily: FS,
            color: C.textDim,
            fontSize: 12,
            textAlign: "center",
            margin: 0,
          }}
        >
          Sin registros todavía.
        </p>
      ) : (
        <div style={{ display: "grid", gap: 8 }}>
          {datos.map((item, index) => (
            <div
              key={item.id ?? `${tipo}-${index}`}
              style={{
                display: "grid",
                gridTemplateColumns: "34px 1fr 78px",
                gap: 8,
                alignItems: "center",
                background: "rgba(0,0,0,.32)",
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "8px 10px",
                fontFamily: FS,
                fontSize: 12,
                color: C.text,
              }}
            >
              <strong style={{ color: cfg.color }}>#{index + 1}</strong>

              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: C.text,
                  }}
                >
                  {item.nombre}
                </div>

                <div
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    color: C.textDim,
                    fontSize: 10,
                    marginTop: 2,
                  }}
                >
                  {item.area}
                </div>
              </div>

              <strong
                style={{
                  color: C.cyan,
                  textAlign: "right",
                  fontSize: 12,
                }}
              >
                {item.puntaje} pts
              </strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RankingDificultades({ rankings, cargando }) {
  if (cargando) {
    return (
      <div
        style={{
          background: C.bgCard,
          border: `1px solid ${C.border}`,
          borderRadius: 16,
          padding: 18,
          fontFamily: FS,
          color: C.textDim,
          textAlign: "center",
        }}
      >
        Cargando rankings...
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <RankingBox tipo="easy" datos={rankings.easy ?? []} />
      <RankingBox tipo="medium" datos={rankings.medium ?? []} />
      <RankingBox tipo="hard" datos={rankings.hard ?? []} />
    </div>
  );
}