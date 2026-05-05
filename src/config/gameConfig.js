// Paleta, fuentes y configuración general del juego
export const C = {
  bg: "#070604",
  bgDeep: "#0D0A06",
  bgCard: "rgba(24, 18, 10, 0.92)",

  border: "rgba(191, 143, 61, 0.45)",
  borderStrong: "rgba(218, 171, 75, 0.85)",

  gold: "#D6A84F",
  goldSoft: "#8F6A2A",

  green: "#4FBF8F",
  jade: "#2E8B72",
  mossL: "#79A85B",

  red: "#B94632",
  redDark: "#5E1E18",

  cyan: "#6EC7B8",

  text: "#F3E8CF",
  textDim: "#B9A987",
  textMuted: "#7F735D",

  shadow: "rgba(0, 0, 0, 0.55)",
};
export const F  = "'Press Start 2P', monospace";
export const FS = "'Segoe UI', system-ui, sans-serif";
export const DIFF = {
  easy: {
    label: "Recluta",
    col: "#4caf7d",
    fwStart: 100,
    fwDmg: 20,
    bonus: 1,
    timer: 60,
    tag: "Nivel 1",
    icon: "shield",
    totalQ: 15,
    desc: "Para todos los equipos. Conceptos esenciales.",
  },

  medium: {
    label: "Analista",
    col: "#c9a84c",
    fwStart: 100,
    fwDmg: 15,
    bonus: 2,
    timer: 60,
    tag: "Nivel 2",
    icon: "bolt",
    totalQ: 25,
    desc: "Escenarios reales CompTIA Security+.",
  },

  hard: {
    label: "Arquitecto",
    col: "#e05260",
    fwStart: 100,
    fwDmg: 10,
    bonus: 3.5,
    timer: 60,
    tag: "Nivel 3",
    icon: "gem",
    totalQ: 50,
    desc: "Amenazas APT avanzadas. Sin piedad.",
  },
};
export const DIFF_ICONS = { shield:"🛡️", bolt:"⚡", gem:"💎" };
export const RANKS = [
  { min:90, title:"Guardian Legendario",   icon:"👑", msg:"Dominas la ciberseguridad. Eres el escudo definitivo de la organizacion." },
  { min:75, title:"Guardian Elite",        icon:"💎", msg:"Excelente desempeno. Tu nivel protege activos criticos de la empresa." },
  { min:60, title:"Guardian Certificado",  icon:"🛡️", msg:"Buen trabajo. Refuerza algunos conceptos y seras imparable." },
  { min:40, title:"Guardian en Formacion", icon:"⚡", msg:"Vas por buen camino. La practica constante es la clave del exito." },
  { min:0,  title:"Aprendiz Guardian",     icon:"🔰", msg:"Cada experto fue principiante. Repasa los conceptos y vuelve mas fuerte." },
];
export const getRank = (pct) => RANKS.find(r => pct >= r.min) ?? RANKS[RANKS.length - 1];
