# Guardianes Cyber Defense

Proyecto separado desde el archivo original `Juego.tsx` para trabajarlo en Visual Studio Code con React + Vite.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la URL que indique Vite, normalmente `http://localhost:5173`.

## Estructura

```text
src/
  App.jsx                     Lógica principal del juego
  main.jsx                    Punto de entrada React
  config/gameConfig.js        Paleta, dificultad, rangos y constantes
  data/questions.js           Banco de preguntas por dificultad
  utils/shuffle.js            Funciones de mezcla de preguntas/opciones
  styles/global.css           Fuente, reset y animaciones CSS
  components/
    BattleCanvas.jsx          Canvas de batalla
    Diamond.jsx               Indicador visual de confianza/dificultad
    Particles.jsx             Partículas de impacto
    ResultsScreen.jsx         Pantalla de resultados
    TimerRing.jsx             Temporizador circular
    TitleCanvas.jsx           Canvas de portada
    Typewriter.jsx            Efecto de escritura de preguntas
```

## Dónde modificar

- Para agregar preguntas: `src/data/questions.js`
- Para cambiar colores o dificultad: `src/config/gameConfig.js`
- Para cambiar reglas/puntaje/flujo: `src/App.jsx`
- Para cambiar animaciones generales: `src/styles/global.css`
- Para cambiar gráficos canvas: `src/components/BattleCanvas.jsx` y `src/components/TitleCanvas.jsx`
