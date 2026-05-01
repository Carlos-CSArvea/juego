import { useEffect, useRef } from 'react';

export default function Particles({ list }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!list.length) return;
    const { x, y, col } = list[list.length - 1];
    const cv = ref.current; if (!cv) return;
    cv.width = cv.offsetWidth; cv.height = cv.offsetHeight;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    const ps = Array.from({ length:36 }, () => ({ x, y, vx:(Math.random()-.5)*12, vy:(Math.random()-.5)*12, r:Math.random()*5+2, life:1, col }));
    let af;
    function frame() {
      ctx.clearRect(0, 0, cv.width, cv.height); let alive = false;
      ps.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.vy+=.35; p.life-=.04; if(p.life>0){alive=true;ctx.globalAlpha=p.life;ctx.fillStyle=p.col;ctx.fillRect(p.x-p.r/2,p.y-p.r/2,p.r,p.r);} });
      ctx.globalAlpha = 1;
      if (alive) af = requestAnimationFrame(frame);
    }
    af = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(af);
  }, [list]);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:50 }}/>;
}
