import { C } from '../config/gameConfig';

export default function Diamond({ on, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18">
      <polygon points="9,1 17,9 9,17 1,9" fill={on ? C.cyan : "#1e2035"} stroke={on ? C.cyan + "88" : C.border} strokeWidth="1.5"/>
      {on && <polygon points="9,5 13,9 9,13 5,9" fill={C.goldL} opacity=".55"/>}
      {on && <polygon points="9,7 11,9 9,11 7,9" fill="#fff" opacity=".7"/>}
    </svg>
  );
}
