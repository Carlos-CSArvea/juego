import { QB } from "../src/data/questions.js";

const EXPECTED_TOTALS = {
  easy: 100,
  medium: 100,
  hard: 100,
};

const REQUIRED_FIELDS = ["q", "choices", "correct", "exp", "fw", "rep"];

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

function ok(message) {
  console.log(`✅ ${message}`);
}

function validateQuestion(level, question, index) {
  const label = `[${level}] Pregunta ${index + 1}`;

  REQUIRED_FIELDS.forEach((field) => {
    if (!(field in question)) {
      fail(`${label}: falta el campo "${field}".`);
    }
  });

  if (typeof question.q !== "string" || question.q.trim().length < 10) {
    fail(`${label}: la pregunta está vacía o es demasiado corta.`);
  }

  if (!Array.isArray(question.choices)) {
    fail(`${label}: choices debe ser un arreglo.`);
    return;
  }

  if (question.choices.length !== 4) {
    fail(`${label}: debe tener exactamente 4 opciones.`);
  }

  question.choices.forEach((choice, choiceIndex) => {
    if (typeof choice !== "string" || choice.trim().length < 2) {
      fail(`${label}: la opción ${choiceIndex} está vacía.`);
    }
  });

  if (!Number.isInteger(question.correct)) {
    fail(`${label}: correct debe ser un número entero.`);
  }

  if (question.correct < 0 || question.correct > 3) {
    fail(`${label}: correct debe estar entre 0 y 3.`);
  }

  if (!Array.isArray(question.fw) || question.fw.length !== 4) {
    fail(`${label}: fw debe tener 4 valores.`);
  }

  if (!Array.isArray(question.rep) || question.rep.length !== 4) {
    fail(`${label}: rep debe tener 4 valores.`);
  }

  if (typeof question.exp !== "string" || question.exp.trim().length < 10) {
    fail(`${label}: la explicación está vacía o es demasiado corta.`);
  }

  const uniqueChoices = new Set(
    question.choices.map((choice) => choice.trim().toLowerCase())
  );

  if (uniqueChoices.size !== question.choices.length) {
    fail(`${label}: tiene opciones repetidas.`);
  }
}

function validateBank() {
  console.log("\n=== VALIDACIÓN DE BANCOS DE PREGUNTAS ===\n");

  Object.entries(EXPECTED_TOTALS).forEach(([level, expectedTotal]) => {
    const questions = QB[level];

    if (!Array.isArray(questions)) {
      fail(`${level}: no existe o no es un arreglo.`);
      return;
    }

    if (questions.length !== expectedTotal) {
      fail(`${level}: debe tener ${expectedTotal} preguntas, pero tiene ${questions.length}.`);
    } else {
      ok(`${level}: tiene ${questions.length} preguntas.`);
    }

    questions.forEach((question, index) => {
      validateQuestion(level, question, index);
    });
  });

  if (process.exitCode === 1) {
    console.log("\nValidación terminada con errores.\n");
    process.exit(1);
  }

  console.log("\n✅ Todos los bancos pasaron la validación.\n");
}

validateBank();