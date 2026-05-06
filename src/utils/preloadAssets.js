const BASE = import.meta.env.BASE_URL;

export const CRITICAL_GAME_ASSETS = [
  `${BASE}backgrounds/escenario-inicio.png`,
  `${BASE}sprites/jaguar/warrior_idle_start_sheet.png`,
  `${BASE}sprites/enemy/enemy_idle_start_sheet.png`,
  `${BASE}sprites/jaguar/warrior_attack_12_sheet.png`,
  `${BASE}sprites/enemy/enemy_attack_12_sheet.png`,
];

const loadedAssets = new Set();

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    if (loadedAssets.has(src)) {
      resolve(src);
      return;
    }

    const img = new Image();

    img.onload = () => {
      loadedAssets.add(src);
      resolve(src);
    };

    img.onerror = () => {
      reject(new Error(`No se pudo precargar: ${src}`));
    };

    img.src = src;
  });
}

export async function preloadImages(urls = CRITICAL_GAME_ASSETS) {
  if (typeof Image === "undefined") return [];

  const results = await Promise.allSettled(urls.map(preloadImage));

  const failed = results.filter((item) => item.status === "rejected");

  if (failed.length > 0) {
    console.warn(
      "Algunos assets no pudieron precargarse:",
      failed.map((item) => item.reason?.message)
    );
  }

  return results;
}