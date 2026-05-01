import { useEffect, useRef, useState } from 'react';
import { C, F, FS } from '../config/gameConfig';

export default function Typewriter({ text, onDone }) {
  const [disp, setDisp] = useState("");
  const [done, setDone] = useState(false);
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  useEffect(() => {
    setDisp(""); setDone(false); let i = 0;
    const t = setInterval(() => {
      if (i < text.length) setDisp(text.slice(0, ++i));
      else { clearInterval(t); setDone(true); onDoneRef.current?.(); }
    }, 16);
    return () => clearInterval(t);
  }, [text]); // solo text en deps — correcto

  return (
    <span style={{ fontFamily:FS, fontSize:"clamp(13px,2.2vw,15px)", color:C.text, lineHeight:1.7 }}>
      {disp}
      {!done && <span style={{ display:"inline-block", width:2, height:14, background:C.gold, marginLeft:2, verticalAlign:"middle", animation:"blinkC .6s step-end infinite" }}/>}
    </span>
  );
}
