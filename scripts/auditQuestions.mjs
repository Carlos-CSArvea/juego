import { QB } from "../src/data/questions.js";

const LEVELS = {
  easy: "Recluta",
  medium: "Analista",
  hard: "Arquitecto",
};

function getLengthStats(choices = []) {
  const lengths = choices.map((choice) => String(choice).trim().length);
  const total = lengths.reduce((sum, value) => sum + value, 0);
  const avg = total / Math.max(lengths.length, 1);
  const max = Math.max(...lengths);
  const min = Math.min(...lengths);

  return {
    lengths,
    avg,
    max,
    min,
  };
}

function analyzeQuestion(question, index, level) {
  const choices = question.choices ?? [];
  const correctIndex = question.correct;
  const correctText = choices[correctIndex] ?? "";
  const { lengths, avg, max, min } = getLengthStats(choices);
  const correctLength = String(correctText).trim().length;

  const isLongest = correctLength === max;
  const isMuchLonger = correctLength > avg * 1.35;
  const lengthSpread = max - min;
  const highSpread = lengthSpread > 45;

  const flags = [];

  if (isLongest) {
    flags.push("correcta_es_la_mas_larga");
  }

  if (isMuchLonger) {
    flags.push("correcta_mucho_mas_larga_que_promedio");
  }

  if (highSpread) {
    flags.push("diferencia_alta_entre_opciones");
  }

  return {
    level,
    levelName: LEVELS[level],
    questionNumber: index + 1,
    question: question.q,
    correctIndex,
    correctText,
    lengths,
    avgLength: Math.round(avg),
    lengthSpread,
    flags,
    needsReview: flags.length > 0,
  };
}

function runAudit() {
  const allFindings = [];

  Object.entries(QB).forEach(([level, questions]) => {
    questions.forEach((question, index) => {
      const result = analyzeQuestion(question, index, level);

      if (result.needsReview) {
        allFindings.push(result);
      }
    });
  });

  console.log("\n=== AUDITORÍA DE PREGUNTAS — GUARDIANES ===\n");

  Object.keys(LEVELS).forEach((level) => {
    const total = QB[level]?.length ?? 0;
    const flagged = allFindings.filter((item) => item.level === level).length;

    console.log(`${LEVELS[level]} (${level})`);
    console.log(`Total preguntas: ${total}`);
    console.log(`Preguntas a revisar: ${flagged}`);
    console.log("");
  });

  if (allFindings.length === 0) {
    console.log("No se detectaron preguntas con sesgo evidente por longitud.");
    return;
  }

  console.log("=== DETALLE DE HALLAZGOS ===\n");

  allFindings.forEach((item) => {
    console.log(
      `[${item.levelName}] Pregunta ${item.questionNumber} — ${item.flags.join(", ")}`
    );
    console.log(`Pregunta: ${item.question}`);
    console.log(`Correcta: ${item.correctText}`);
    console.log(`Longitudes: ${item.lengths.join(" / ")}`);
    console.log(`Promedio: ${item.avgLength}`);
    console.log(`Diferencia máxima: ${item.lengthSpread}`);
    console.log("--------------------------------------------------");
  });
}

runAudit();