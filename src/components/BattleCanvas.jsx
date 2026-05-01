import { useEffect, useRef } from 'react';
import { C } from '../config/gameConfig';

export default function BattleCanvas({ fw, hitTick, correctTick }) {
  const ref    = useRef(null);
  const fwRef  = useRef(fw);          // FIX: actualizar sin reiniciar el RAF
  const st     = useRef({ tick:0, frame:0, a1X:290, a2X:318, laser:0, expl:0, explX:0, explY:0, pts:[], action:"idle", actionTimer:0 });

  useEffect(() => { fwRef.current = fw; }, [fw]);
  useEffect(() => { if(hitTick>0)    Object.assign(st.current, { laser:16, expl:20, explX:40, explY:50, action:"hit",    actionTimer:28 }); }, [hitTick]);
  useEffect(() => { if(correctTick>0) Object.assign(st.current, { action:"attack", actionTimer:28, expl:18, explX:st.current.a1X+5, explY:50 }); }, [correctTick]);

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let af;

    const P = (x, y, col, s) => { ctx.fillStyle = col; ctx.fillRect(x*s, y*s, s, s); };

    function drawGuardian(bx, by, fr, s, action) {
      const f = fr%2, offX = action==="attack"?(f?0:2):action==="hit"?(f?0:-2):0;
      const X = bx+offX, Y = by;
      const helm=C.cyan, suit="#1a2a4a", arm="#2a3a5a", visor=C.gold, shield=C.purple, core=C.cyan, light=C.goldL;
      [[3,0],[4,0],[5,0],[6,0],[7,0],[3,1],[7,1],[4,2],[5,2],[6,2]].forEach(([x,y])=>P(X+x,Y+y,helm,s));
      [[4,1],[5,1],[6,1],[4,2],[5,2],[6,2]].forEach(([x,y])=>P(X+x,Y+y,visor,s));
      [[2,3],[8,3],[2,4],[8,4],[1,5],[9,5]].forEach(([x,y])=>P(X+x,Y+y,suit,s));
      for(let x=3;x<=7;x++) for(let y=3;y<=10;y++) P(X+x,Y+y,suit,s);
      [[5,5],[4,6],[5,6],[6,6],[5,7]].forEach(([x,y])=>P(X+x,Y+y,core,s));
      P(X+5,Y+6,light,s);
      [[0,4],[0,5],[0,6],[0,7],[0,8],[1,4],[1,8]].forEach(([x,y])=>P(X+x,Y+y,shield,s));
      const w = action==="attack" ? 2 : 0;
      [[9+w,5],[10+w,6],[11+w,6],[12+w,6]].forEach(([x,y])=>P(X+x,Y+y,arm,s));
      P(X+12+w,Y+6,light,s);
      const ly = f?0:1;
      for(let y=11;y<=13;y++){P(X+4,Y+y+ly,suit,s);P(X+6,Y+y+(1-ly),suit,s);}
      [X+3,X+4].forEach(x=>P(x,Y+14,helm,s));
      [X+6,X+7].forEach(x=>P(x,Y+14,helm,s));
    }

    function drawAttacker(bx, by, fr, variant, s, action) {
      const f = fr%2, offX = action==="attack"?(f?0:-2):action==="hit"?(f?0:3):0, offY = action==="hit"?(f?0:1):0;
      const c = variant===0?{hood:"#2d0a3a",eye:"#ff4466",stripe:"#ff4466",boot:"#1a0022",skull:"#ff88aa"}:{hood:"#0a2a0a",eye:"#44ff88",stripe:"#44ff88",boot:"#001a00",skull:"#88ff99"};
      const X = bx+offX, Y = by+offY;
      for(let x=1;x<=9;x++) for(let y=0;y<=12;y++) P(X+x,Y+y,c.hood,s);
      [[3,3],[4,3],[6,3],[7,3]].forEach(([x,y])=>P(X+x,Y+y,c.eye,s));
      P(X+5,Y+1,c.skull,s); [[4,2],[5,2],[6,2]].forEach(([x,y])=>P(X+x,Y+y,c.skull,s));
      [[5,5],[5,6],[5,7],[5,8]].forEach(([x,y])=>P(X+x,Y+y,c.stripe,s));
      const w = action==="attack" ? -2 : 0;
      [[10+w,5],[10+w,6],[11+w,5],[12+w,6]].forEach(([x,y])=>P(X+x,Y+y,c.boot,s));
      P(X+12+w,Y+5,c.eye,s);
      const ly = f?0:1;
      for(let y=13;y<=15;y++){P(X+3,Y+y+ly,c.hood,s);P(X+7,Y+y+(1-ly),c.hood,s);}
      [[2,16],[3,16],[7,16],[8,16]].forEach(([x,y])=>P(X+x,Y+y,c.boot,s));
    }

    function drawServer(x, y, hp) {
      const col = hp>60?C.green:hp>30?C.gold:C.red;
      for(let i=0;i<6;i++) for(let j=0;j<10;j++){ctx.fillStyle=j%2===0?"#0d1020":"#151830";ctx.fillRect(x+i*4,y+j*3,4,3);}
      ctx.fillStyle=col; ctx.shadowColor=col; ctx.shadowBlur=4; ctx.fillRect(x,y+2,24,2);
      [[22,4],[22,8],[22,14]].forEach(([dx,dy])=>ctx.fillRect(x+dx,y+dy,3,3));
      ctx.shadowBlur=0; ctx.fillStyle="#111"; ctx.fillRect(x-2,y+32,28,5);
      ctx.fillStyle=col; ctx.fillRect(x-2,y+32,Math.round(28*Math.max(0,fwRef.current)/100),5);
    }

    function draw() {
      const W=380, H=100, s=st.current;
      ctx.fillStyle=C.bgDeep; ctx.fillRect(0,0,W,H);
      ctx.strokeStyle="#0d0f20"; ctx.lineWidth=1;
      for(let x=0;x<W;x+=14){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
      for(let y=0;y<H;y+=14){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      const grd=ctx.createLinearGradient(0,78,0,100);
      grd.addColorStop(0,C.cyan+"33"); grd.addColorStop(1,"transparent");
      ctx.fillStyle=grd; ctx.fillRect(0,78,W,22);
      ctx.fillStyle=C.cyan; ctx.fillRect(0,78,W,1);

      if(s.actionTimer>0) s.actionTimer--; else s.action="idle";
      const act = s.action;

      drawServer(8,44,fwRef.current);
      ctx.font="bold 5px monospace"; ctx.fillStyle=C.cyan; ctx.textAlign="left"; ctx.fillText("SRV-01",8,42);

      const yb = Math.round(Math.sin(s.tick*.1)*1.5);
      drawGuardian(48,36+yb,s.frame,2,act==="attack"?"attack":act==="hit"?"hit":"idle");
      ctx.fillStyle=C.goldL; ctx.textAlign="center"; ctx.fillText("GUARDIAN",57,34);

      if(s.a1X>128) s.a1X-=.2;
      if(s.a2X>146) s.a2X-=.16;
      drawAttacker(Math.round(s.a1X),36,s.frame,0,2,act==="attack"?"hit":act==="hit"?"attack":"idle");
      ctx.fillStyle="#ff4466"; ctx.fillText("ATACANTE",Math.round(s.a1X)+10,34);
      drawAttacker(Math.round(s.a2X),36,s.frame,1,2,"idle");
      ctx.fillStyle="#44ff88"; ctx.fillText("INTRUSO",Math.round(s.a2X)+10,35);

      if(s.laser>0){
        const a=s.laser/16; ctx.save(); ctx.globalAlpha=a;
        const lg=ctx.createLinearGradient(Math.round(s.a1X),0,40,0);
        lg.addColorStop(0,"#ff4466"); lg.addColorStop(1,"#ff000000");
        ctx.strokeStyle=lg; ctx.lineWidth=3; ctx.shadowColor="#ff4466"; ctx.shadowBlur=8;
        ctx.beginPath(); ctx.moveTo(Math.round(s.a1X),54); ctx.lineTo(30,54); ctx.stroke();
        ctx.restore(); s.laser--;
      }
      if(s.expl>0){
        const r=(20-s.expl)*2, a=s.expl/20; ctx.save(); ctx.globalAlpha=a;
        const cols=act==="hit"||s.laser>0?[C.red,"#ff8800",C.gold,"#fff"]:[C.cyan,C.green,C.goldL,"#fff"];
        cols.forEach((col,i)=>{const ang=(i/4)*Math.PI*2+s.tick*.12;ctx.fillStyle=col;ctx.fillRect(s.explX+Math.cos(ang)*r-3,s.explY+Math.sin(ang)*r-3,6,6);});
        ctx.fillStyle="#fff"; ctx.fillRect(s.explX-4,s.explY-4,8,8);
        ctx.restore(); s.expl--;
      }
      s.pts=s.pts.filter(p=>{p.y-=p.sp;p.x+=p.vx;p.life-=.018;return p.life>0;});
      if(s.tick%6===0) s.pts.push({x:Math.random()*W,y:92,sp:.4+Math.random()*.8,vx:(Math.random()-.5)*.4,life:1,col:Math.random()>.5?C.cyan:C.gold});
      s.pts.forEach(p=>{ctx.globalAlpha=p.life*.55;ctx.fillStyle=p.col;ctx.fillRect(p.x,p.y,2,2);});
      ctx.globalAlpha=1;
      s.tick++; if(s.tick%18===0) s.frame++;
      af=requestAnimationFrame(draw);
    }
    af=requestAnimationFrame(draw);
    return () => cancelAnimationFrame(af);
  }, []); // FIX: sin dependencias → RAF arranca UNA vez

  return <canvas ref={ref} width={380} height={100} style={{ width:"100%", height:"auto", display:"block", imageRendering:"pixelated" }}/>;
}
