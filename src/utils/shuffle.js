// FIX: Fisher-Yates shuffle imparcial (reemplaza sort random sesgado)
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function shuffleQ(q) {
  const items = q.choices.map((c, i) => ({ c, fw: q.fw[i], rep: q.rep[i], ok: i === q.correct }));
  const s = shuffle(items);
  return { ...q, choices: s.map(x => x.c), fw: s.map(x => x.fw), rep: s.map(x => x.rep), correct: s.findIndex(x => x.ok) };
}
