import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ── PALETA ─────────────────────────────────────────────────────────
const C = {
  bg:"#0a0f05", bgCard:"#111a08", bgDeep:"#060b03",
  gold:"#c9a84c", goldL:"#f0d060", goldD:"#7a5c1e",
  moss:"#4a7c2f", mossL:"#6aac3f",
  cyan:"#8888ff", purple:"#6b2fa0",
  red:"#e05260", green:"#4caf7d",
  border:"#2a3a18", borderG:"#c9a84c55",
  text:"#e8e4c0", textDim:"#8a8a60",
};
const F  = "'Press Start 2P', monospace";
const FS = "'Segoe UI', system-ui, sans-serif";

// ── CONFIG ─────────────────────────────────────────────────────────
const DIFF = {
  easy:   { label:"Recluta",    col:"#4caf7d", fwStart:100, fwDmg:20, bonus:1,   timer:60, tag:"Nivel 1", icon:"shield", totalQ:5,  desc:"Para todos los equipos. Conceptos esenciales." },
  medium: { label:"Analista",   col:"#c9a84c", fwStart:100, fwDmg:15, bonus:2,   timer:45, tag:"Nivel 2", icon:"bolt",   totalQ:10, desc:"Escenarios reales CompTIA Security+." },
  hard:   { label:"Arquitecto", col:"#e05260", fwStart:100, fwDmg:10, bonus:3.5, timer:35, tag:"Nivel 3", icon:"gem",    totalQ:15, desc:"Amenazas APT avanzadas. Sin piedad." },
};
const DIFF_ICONS = { shield:"🛡️", bolt:"⚡", gem:"💎" };

const RANKS = [
  { min:90, title:"Guardian Legendario",   icon:"👑", msg:"Dominas la ciberseguridad. Eres el escudo definitivo de la organizacion." },
  { min:75, title:"Guardian Elite",        icon:"💎", msg:"Excelente desempeno. Tu nivel protege activos criticos de la empresa." },
  { min:60, title:"Guardian Certificado",  icon:"🛡️", msg:"Buen trabajo. Refuerza algunos conceptos y seras imparable." },
  { min:40, title:"Guardian en Formacion", icon:"⚡", msg:"Vas por buen camino. La practica constante es la clave del exito." },
  { min:0,  title:"Aprendiz Guardian",     icon:"🔰", msg:"Cada experto fue principiante. Repasa los conceptos y vuelve mas fuerte." },
];

// FIX: getRank con fallback para evitar undefined
const getRank = (pct) => RANKS.find(r => pct >= r.min) ?? RANKS[RANKS.length - 1];

// ── PREGUNTAS ──────────────────────────────────────────────────────
const QB = {
  easy:[
    {q:"Recibes un correo que dice Ganaste un viaje gratis haz clic aqui. Que tipo de amenaza es?",joke:false,choices:["Phishing: email falso para robar datos","Actualizacion del sistema","Oferta real de marketing","Spam inofensivo"],correct:0,exp:"El phishing usa mensajes falsos para engañar y robar credenciales.",fw:[12,-10,-10,-5],rep:[1,-1,-1,0]},
    {q:"Tu colega te pide su contrasena porque olvido la suya. Que haces?",joke:true,choices:["Nunca la compartes, cada quien tiene su propio acceso","Se la das rapido para no retrasar el trabajo","La escribes en un post-it en su monitor","Se la mandas por WhatsApp"],correct:0,exp:"Las contrasenas son personales e intransferibles. Pedirte la tuya es ingenieria social.",fw:[12,-15,-15,-15],rep:[1,-1,-1,-1]},
    {q:"Que significa que un sitio web use HTTPS en lugar de HTTP?",joke:false,choices:["La comunicacion va cifrada y es mas segura","Carga mas rapido","Tiene mejores imagenes","Es un sitio de gobierno"],correct:0,exp:"HTTPS cifra los datos entre tu navegador y el servidor.",fw:[10,-8,-8,-5],rep:[1,0,0,0]},
    {q:"Encontraste una memoria USB en el estacionamiento. Que haces?",joke:true,choices:["La entregas a TI sin conectarla a ningun equipo","La conectas para ver que tiene","Te la quedas puede tener musica","La tiras a la basura"],correct:0,exp:"Las USB abandonadas pueden contener malware. Es una tecnica real llamada USB Drop Attack.",fw:[12,-20,-15,-5],rep:[1,-1,-1,0]},
    {q:"Tu pantalla se bloqueo y pide un pago para desbloquearse. Que es esto?",joke:false,choices:["Ransomware: secuestra tu equipo y pide rescate","Una actualizacion de Windows agresiva","Un virus publicitario","Tu jefe monitoreando productividad"],correct:0,exp:"El ransomware cifra tus archivos o bloquea tu equipo y exige pago.",fw:[12,-10,-8,-8],rep:[1,0,0,-1]},
    {q:"Cual de estas es una contrasena SEGURA?",joke:false,choices:["G7kPmX2qL con simbolos","password123","tu fecha de nacimiento","el nombre de tu mascota"],correct:0,exp:"Una contrasena segura combina mayusculas minusculas numeros y simbolos con al menos 12 caracteres.",fw:[10,-12,-12,-12],rep:[1,-1,-1,-1]},
    {q:"Que es la autenticacion de dos factores 2FA?",joke:false,choices:["Verificar tu identidad con dos metodos distintos","Tener dos contrasenas iguales","Iniciar sesion dos veces","Usar dos navegadores diferentes"],correct:0,exp:"El 2FA agrega una segunda capa: algo que sabes mas algo que tienes.",fw:[10,-10,-10,-10],rep:[1,0,0,0]},
    {q:"Alguien llama diciendo ser de soporte tecnico y pide acceso remoto. Que haces?",joke:true,choices:["Cuelgas y llamas directamente al numero oficial de TI","Le das acceso suena urgente","Le das tu usuario y contrasena","Le preguntas el nombre y ya lo dejas entrar"],correct:0,exp:"Esto se llama vishing. El soporte legitimo nunca pide acceso sin que tu lo hayas solicitado.",fw:[12,-20,-20,-15],rep:[1,-1,-1,-1]},
    {q:"Para que sirve un firewall en la empresa?",joke:false,choices:["Filtrar el trafico de red y bloquear conexiones no autorizadas","Apagar equipos en caso de incendio","Guardar copias de seguridad","Mejorar la velocidad del internet"],correct:0,exp:"El firewall es la primera barrera de defensa.",fw:[10,-8,-8,-5],rep:[1,0,0,0]},
    {q:"Que debes hacer si crees que tu cuenta fue hackeada?",joke:false,choices:["Cambiar la contrasena de inmediato y avisar a TI","Esperar a ver si se arregla solo","Cerrar sesion y volver a entrar","Crear una cuenta nueva"],correct:0,exp:"Ante una posible brecha cambia las credenciales de inmediato activa el 2FA y reporta a TI.",fw:[12,-15,-10,-5],rep:[1,-1,0,0]},
    {q:"Que es el principio de minimo privilegio?",joke:false,choices:["Cada usuario solo tiene acceso a lo que necesita","Todos tienen acceso a todo para ser mas productivos","Solo los gerentes tienen acceso a los sistemas","Los practicantes no pueden usar la computadora"],correct:0,exp:"El minimo privilegio limita el dano si una cuenta es comprometida.",fw:[10,-15,-10,-5],rep:[1,-1,0,0]},
    {q:"Que significa CIA en ciberseguridad?",joke:true,choices:["Confidencialidad Integridad y Disponibilidad","Control Identidad y Acceso","Criptografia Internet y Algoritmos","Centro de Inteligencia Artificial"],correct:0,exp:"La triada CIA es la base de la seguridad: proteger los datos mantenerlos correctos y accesibles.",fw:[10,-10,-10,-10],rep:[1,0,0,0]},
  ],
  medium:[
    {q:"El IDS detecto trafico anomalo en el puerto 443 hacia una IP desconocida. Primera accion recomendada?",joke:false,choices:["Aislar el host de la red y preservar la evidencia forense","Apagar el servidor de inmediato","Ignorarlo probablemente es un falso positivo","Reiniciar el equipo afectado"],correct:0,exp:"Aislar contiene el incidente sin destruir evidencia.",fw:[15,-5,-25,-12],rep:[1,0,-1,-1]},
    {q:"Cual algoritmo de cifrado es SIMETRICO y optimo para grandes volumenes de datos?",joke:false,choices:["AES-256","RSA-2048","SHA-512","ECDSA"],correct:0,exp:"AES-256 es simetrico rapido y eficiente. RSA es asimetrico.",fw:[15,-10,-10,-10],rep:[1,0,0,0]},
    {q:"Cual es la diferencia operacional entre IDS e IPS?",joke:false,choices:["IDS detecta y alerta IPS actua en linea y bloquea el trafico","IPS solo monitorea IDS bloquea","Son sinonimos con diferente nombre","El IDS es mas moderno que el IPS"],correct:0,exp:"IDS es pasivo. IPS es activo y bloquea en tiempo real.",fw:[15,-20,-20,-12],rep:[1,-1,-1,0]},
    {q:"Un atacante intercepta y modifica paquetes entre dos usuarios. Como se llama este ataque?",joke:false,choices:["Man-in-the-Middle MitM","Phishing dirigido","Ataque de repeticion","DDoS de capa 7"],correct:0,exp:"En el MitM el atacante se interpone entre dos partes.",fw:[15,-8,-8,-10],rep:[1,0,0,0]},
    {q:"Para que sirve el salting antes de aplicar el hash a una contrasena?",joke:false,choices:["Prevenir ataques de tabla arcoiris con un valor aleatorio unico por usuario","Cifrar la base de datos completa con AES","Comprimir los hashes para ahorrar espacio","Hacer las contrasenas mas largas"],correct:0,exp:"El salt hace que dos usuarios con la misma clave tengan hashes distintos.",fw:[15,-10,-10,-5],rep:[1,0,0,0]},
    {q:"Que es un certificado digital X509?",joke:true,choices:["Vincula una clave publica con una identidad verificada por una CA","Es un formato para guardar documentos seguros","Un protocolo para transferir archivos cifrados","Un tipo de firewall de aplicaciones web"],correct:0,exp:"X.509 es el estandar PKI. La CA firma el certificado garantizando la identidad.",fw:[15,-10,-10,-10],rep:[1,0,0,0]},
    {q:"Cual es el metodo MAS seguro de autenticacion multifactor?",joke:false,choices:["Token hardware FIDO2 WebAuthn","SMS al celular","Correo electronico de verificacion","Pregunta de seguridad personal"],correct:0,exp:"FIDO2 usa criptografia de clave publica y es resistente al phishing.",fw:[15,-8,-10,-10],rep:[1,0,0,0]},
    {q:"Que protege DNSSEC y contra que tipo de ataque?",joke:false,choices:["Autentica respuestas DNS con firmas digitales y previene el envenenamiento del cache","Cifra las consultas DNS de extremo a extremo","Acelera la resolucion de nombres de dominio","Bloquea dominios maliciosos por reputacion"],correct:0,exp:"DNSSEC firma criptograficamente las respuestas DNS.",fw:[15,-10,-10,-8],rep:[1,0,0,0]},
    {q:"50000 intentos de login fallidos en 10 minutos desde 300 IPs distintas. Que ataque es?",joke:false,choices:["Relleno de credenciales distribuido","Un usuario que olvido su contrasena","Escaneo de puertos automatizado","Ataque DDoS de capa de red"],correct:0,exp:"El relleno de credenciales usa pares usuario/clave de brechas anteriores.",fw:[15,-25,-12,-8],rep:[1,-2,-1,0]},
    {q:"Que es el principio de Confianza Cero Zero Trust?",joke:false,choices:["Nunca confiar implicitamente siempre verificar incluso dentro de la red interna","Bloquear todo el trafico externo con firewall perimetral","Dar confianza plena a usuarios autenticados por VPN","Usar multiples capas de firewall en el perimetro"],correct:0,exp:"Zero Trust elimina el concepto de red interna segura.",fw:[15,-15,-15,-12],rep:[1,-1,-1,0]},
    {q:"Que es una inyeccion SQL y como se previene?",joke:false,choices:["Insertar codigo SQL en entradas no sanitizadas se previene con consultas parametrizadas","Un ataque fisico a servidores de base de datos","Robo de credenciales del administrador","Un tipo de ransomware que cifra bases de datos"],correct:0,exp:"La inyeccion SQL explota entradas sin validar. Las consultas parametrizadas separan el codigo de los datos.",fw:[15,-15,-12,-10],rep:[1,-1,-1,0]},
    {q:"Cual es la funcion principal de un SIEM en el SOC?",joke:false,choices:["Correlacionar eventos de multiples fuentes para detectar amenazas en tiempo real","Cifrar el trafico de red corporativo","Gestionar actualizaciones de software","Realizar respaldos automaticos"],correct:0,exp:"El SIEM agrega registros los correlaciona y genera alertas.",fw:[15,-10,-10,-8],rep:[1,0,0,0]},
  ],
  hard:[
    {q:"Detectas C2 beaconing cada 300s hacia dominios generados algoritmicamente con esteganografia en CNAME. Cual es el vector?",joke:false,choices:["Tunelizacion DNS con C2 via Domain Generation Algorithm","Consulta DNS normal con alta frecuencia","Envenenamiento ARP combinado con DNS","Secuestro de rutas BGP"],correct:0,exp:"La tunelizacion DNS encapsula datos en consultas. DGA crea dominios dinamicos para evadir listas negras.",fw:[20,-30,-20,-20],rep:[1,-1,-1,-1]},
    {q:"Post-explotacion: LSASS volcado en disco con sekurlsa logonpasswords. Que extrajo y como se mitiga?",joke:false,choices:["Hashes NTLM y tickets Kerberos mitigar con Credential Guard y PPL para LSASS","Solo registros del sistema es inofensivo","Configuracion de red del dominio","Claves de registro de Windows cifradas"],correct:0,exp:"Mimikatz extrae hashes NTLM para Pass-the-Hash y tickets TGT. Credential Guard usa VBS para aislar LSASS.",fw:[20,-25,-18,-15],rep:[1,-1,-1,0]},
    {q:"Un atacante usa tecnicas LotL. Que herramientas abusa y por que evaden el antivirus?",joke:true,choices:["PowerShell WMI certutil y mshta son binarios firmados que el AV considera legitimos","Solo usa exploits de dia cero sin firma","Instala herramientas de repositorios de hacking","Ataca exclusivamente via navegador con JavaScript"],correct:0,exp:"LOLBins son herramientas legitimas del SO usadas con fines maliciosos.",fw:[20,-15,-20,-12],rep:[1,-1,-1,0]},
    {q:"Obtienes RCE en servidor interno via SSRF. Como pivotas hacia credenciales cloud?",joke:false,choices:["Consultar el endpoint de metadatos 169.254.169.254 para obtener IAM credentials temporales","Escanear la red interna con nmap","Buscar archivos env con credenciales","Instalar un RAT y esperar instrucciones del C2"],correct:0,exp:"SSRF al metadata de AWS/GCP/Azure devuelve tokens IAM temporales.",fw:[20,-10,-12,-12],rep:[1,0,-1,-1]},
    {q:"Cual tecnica de evasion de IDS usa fragmentacion TCP para ocultar payloads?",joke:false,choices:["TCP Session Splicing divide la carga en fragmentos que el IDS no reconstruye","Suplantacion de IP de origen","Degradacion SSL para bajar HTTPS a HTTP","Inundacion MAC del conmutador"],correct:0,exp:"El empalme de sesion TCP aprovecha que muchos IDS no rearman el flujo TCP completo.",fw:[20,-18,-15,-12],rep:[1,-1,0,0]},
    {q:"Que es Pass-the-Hash y como lo mitiga Windows moderno?",joke:false,choices:["Autenticar con hash NTLM robado sin conocer la contrasena mitigar con Credential Guard Protected Users y deshabilitar NTLM","Fuerza bruta acelerada contra hashes MD5","Inyeccion de codigo en procesos de autenticacion","Robo de certificados digitales para suplantar identidad"],correct:0,exp:"PtH usa el hash NTLM directamente. Credential Guard aisla LSASS con VBS.",fw:[20,-22,-18,-15],rep:[1,-1,-1,-1]},
    {q:"Implementas Zero Trust segun NIST SP 800-207. Cual componente es el Policy Decision Point?",joke:false,choices:["El motor que evalua politicas y decide si otorgar acceso segun identidad dispositivo y contexto","El firewall perimetral que bloquea trafico no autorizado","El servidor VPN que autentica usuarios remotos","El SIEM que correlaciona eventos de seguridad"],correct:0,exp:"En Zero Trust el PDP decide el acceso. El Policy Enforcement Point ejecuta la decision.",fw:[20,-20,-18,-15],rep:[1,-1,-1,0]},
    {q:"Durante threat hunting encuentras un proceso legitimo con un hilo inyectado. Que tecnica de evasion se uso?",joke:false,choices:["Process Injection DLL Injection o Process Hollowing malware ejecuta en contexto de proceso confiable","Un error de memoria del SO","Una actualizacion mal instalada","Fragmentacion de disco"],correct:0,exp:"La inyeccion de proceso permite al malware ejecutarse dentro de svchost o explorer.",fw:[20,-22,-15,-12],rep:[1,-1,0,0]},
    {q:"Cual es el proposito de un honeypot en defensa activa?",joke:false,choices:["Atraer y detectar atacantes estudiar sus TTPs y desviarlos de activos reales","Almacenar respaldos cifrados fuera de la red","Monitorear rendimiento de servidores de produccion","Filtrar spam antes de que llegue a los usuarios"],correct:0,exp:"Los honeypots son sistemas trampa deliberadamente vulnerables.",fw:[18,-15,-12,-10],rep:[1,-1,0,0]},
    {q:"Que es un ataque a la cadena de suministro? Caso emblematico?",joke:false,choices:["Comprometer software de un proveedor para infectar a multiples clientes caso SolarWinds 2020","Atacar la cadena de suministro fisica con hardware troyanizado","DDoS coordinado contra multiples proveedores","Phishing masivo a empleados de logistica"],correct:0,exp:"En SolarWinds los atacantes insertaron una puerta trasera en actualizaciones legitimas. Mas de 18000 organizaciones afectadas.",fw:[20,-20,-15,-12],rep:[1,-1,0,0]},
    {q:"Diferencia entre vulnerabilidad amenaza y riesgo en gestion de seguridad?",joke:false,choices:["Vulnerabilidad es debilidad tecnica amenaza es actor que la explota riesgo es probabilidad por impacto","Son sinonimos usados indistintamente","Vulnerabilidad es el ataque amenaza es el dano y riesgo es la probabilidad","Solo el riesgo importa los otros son conceptos academicos"],correct:0,exp:"El marco NIST: Vulnerabilidad, Amenaza, Riesgo. Base del Risk Management Framework.",fw:[15,-15,-15,-12],rep:[1,-1,-1,0]},
    {q:"Que es el marco MITRE ATT y como lo usa el SOC?",joke:false,choices:["Matriz de TTPs de adversarios reales el SOC mapea alertas a tecnicas para entender el ciclo de ataque","Software de escaneo de vulnerabilidades automatizado","Estandar de cifrado para comunicaciones seguras","Marco de desarrollo seguro de aplicaciones"],correct:0,exp:"MITRE ATT cataloga comportamientos reales de atacantes en 14 tacticas.",fw:[20,-15,-15,-12],rep:[1,0,0,0]},
    {q:"EDR muestra PowerShell con descarga remota y persistencia programada. Cual es la prioridad?",joke:false,choices:["Contener el equipo preservar evidencia y validar alcance antes de erradicar","Formatear el equipo sin registrar evidencia","Cerrar la alerta porque PowerShell es herramienta legitima","Cambiar solo la contrasena del usuario afectado"],correct:0,exp:"La prioridad es contener sin destruir evidencia, entender alcance y despues erradicar.",fw:[20,-25,-22,-12],rep:[1,-1,-1,0]},
    {q:"Cual control reduce mejor el impacto si una cuenta privilegiada es comprometida?",joke:false,choices:["Privilegios Just-in-Time MFA resistente a phishing y segmentacion por rol","Una contrasena larga compartida por el equipo","VPN abierta para todos los administradores","Administrador local permanente en todos los equipos"],correct:0,exp:"El acceso privilegiado debe ser temporal, verificable y limitado por rol.",fw:[20,-25,-18,-25],rep:[1,-1,0,-1]},
    {q:"Orden ejecutivo correcto de respuesta a incidentes?",joke:false,choices:["Contencion analisis de alcance erradicacion recuperacion y lecciones aprendidas","Recuperacion inmediata luego analisis si queda tiempo","Comunicacion publica antes de confirmar impacto","Borrar registros para liberar espacio"],correct:0,exp:"Una respuesta disciplinada contiene el dano, confirma alcance, elimina la causa, recupera operacion y documenta mejoras.",fw:[20,-15,-20,-25],rep:[1,0,-1,-1]},
  ],
};

// FIX: Fisher-Yates shuffle imparcial (reemplaza sort random sesgado)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleQ(q) {
  const items = q.choices.map((c, i) => ({ c, fw: q.fw[i], rep: q.rep[i], ok: i === q.correct }));
  const s = shuffle(items);
  return { ...q, choices: s.map(x => x.c), fw: s.map(x => x.fw), rep: s.map(x => x.rep), correct: s.findIndex(x => x.ok) };
}

// ── COMPONENTES UI ─────────────────────────────────────────────────
function Diamond({ on, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18">
      <polygon points="9,1 17,9 9,17 1,9" fill={on ? C.cyan : "#1e2035"} stroke={on ? C.cyan + "88" : C.border} strokeWidth="1.5"/>
      {on && <polygon points="9,5 13,9 9,13 5,9" fill={C.goldL} opacity=".55"/>}
      {on && <polygon points="9,7 11,9 9,11 7,9" fill="#fff" opacity=".7"/>}
    </svg>
  );
}

function TimerRing({ seconds, total }) {
  const pct = seconds / total;
  const r = 22, circ = 2 * Math.PI * r;
  const col = pct > .5 ? C.green : pct > .25 ? C.gold : C.red;
  return (
    <div style={{ position:"relative", width:56, height:56, flexShrink:0 }}>
      <svg width={56} height={56} style={{ transform:"rotate(-90deg)" }}>
        <circle cx={28} cy={28} r={r} fill="none" stroke={C.border} strokeWidth={4}/>
        <circle cx={28} cy={28} r={r} fill="none" stroke={col} strokeWidth={4}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
          style={{ transition:"stroke-dashoffset .9s linear,stroke .4s" }}/>
      </svg>
      <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center",
        fontFamily:F, fontSize:10, color:col }}>{seconds}</div>
    </div>
  );
}

// FIX: Typewriter usa ref para onDone — evita reiniciar el intervalo si el padre re-renderiza
function Typewriter({ text, onDone }) {
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

function Particles({ list }) {
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

// ── BATTLE CANVAS ──────────────────────────────────────────────────
// FIX: fw leído desde ref → RAF arranca UNA sola vez, no se reinicia en cada respuesta
function BattleCanvas({ fw, hitTick, correctTick }) {
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

// ── TITLE CANVAS ──────────────────────────────────────────────────
function TitleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    cv.width=700; cv.height=240;
    const ctx = cv.getContext("2d"); if (!ctx) return;
    let f=0, rafId;
    const sparks = Array.from({length:25},()=>({x:Math.random()*700,y:80+Math.random()*120,vx:(Math.random()-.5)*.4,vy:-.3-Math.random()*.5,life:Math.random(),decay:.005+Math.random()*.007,col:Math.random()>.5?"#ff6622":"#ffaa44",r:1+Math.random()*2}));
    const R = (x,y,w,h,col,alpha) => { if(alpha!==undefined){ctx.save();ctx.globalAlpha=alpha;} ctx.fillStyle=col; ctx.fillRect(x,y,w,h); if(alpha!==undefined)ctx.restore(); };
    function drawJaguar(ox,oy,fr){const S=5,bob=Math.round(Math.sin(fr*.08)*1.5),ll=Math.floor(fr/10)%2;const G="#c9a84c",GL="#f0d060",GD="#7a5c1e",DIA="#88ccff",DL="#cceeff",FUR="#b07830",CAPE="#1a3a8a",SW="#d0d8e8";const X=ox,Y=oy+bob;ctx.save();ctx.globalAlpha=.2;ctx.fillStyle="#000";ctx.beginPath();ctx.ellipse(X+11*S,Y+27*S,9*S,2*S,0,0,Math.PI*2);ctx.fill();ctx.restore();R(X+3*S,Y+9*S,2*S,9*S,CAPE);R(X+17*S,Y+9*S,2*S,9*S,CAPE);R(X+5*S,Y+(18+ll)*S,3*S,5*S,G);R(X+13*S,Y+(18+(1-ll))*S,3*S,5*S,G);R(X+4*S,Y+(23+ll)*S,5*S,2*S,GD);R(X+12*S,Y+(23+(1-ll))*S,5*S,2*S,GD);R(X+5*S,Y+(18+ll)*S,3*S,S,GL);R(X+13*S,Y+(18+(1-ll))*S,3*S,S,GL);R(X+4*S,Y+9*S,14*S,10*S,G);R(X+8*S,Y+10*S,6*S,8*S,GD);R(X+9*S,Y+11*S,4*S,S,GL);R(X+9*S,Y+13*S,4*S,S,GL);R(X+9*S,Y+15*S,4*S,S,GL);R(X+11*S,Y+11*S,S,4*S,GL);R(X+9*S,Y+12*S,4*S,2*S,DIA);R(X+10*S,Y+12*S,2*S,S,DL);R(X+9*S,Y+16*S,4*S,2*S,DIA);R(X+10*S,Y+16*S,2*S,S,DL);R(X+4*S,Y+9*S,2*S,10*S,GD);R(X+16*S,Y+9*S,2*S,10*S,GD);R(X+2*S,Y+8*S,5*S,4*S,G);R(X+15*S,Y+8*S,5*S,4*S,G);R(X+2*S,Y+8*S,5*S,S,GL);R(X+15*S,Y+8*S,5*S,S,GL);R(X+S,Y+9*S,2*S,3*S,GD);R(X+19*S,Y+9*S,2*S,3*S,GD);R(X+18*S,Y+9*S,5*S,9*S,G);R(X+22*S,Y+9*S,S,9*S,GD);R(X+18*S,Y+9*S,5*S,S,GL);R(X+18*S,Y+17*S,5*S,S,GL);R(X+19*S,Y+11*S,3*S,2*S,DIA);R(X+20*S,Y+11*S,S,S,DL);R(X+19*S,Y+14*S,3*S,2*S,DIA);R(X+20*S,Y+14*S,S,S,DL);R(X+2*S,Y+9*S,2*S,7*S,G);for(let i=0;i<8;i++){R(X+(1-i)*S,Y+(9+i)*S,2*S,2*S,SW);if(i<3)R(X+(1-i)*S,Y+(9+i)*S,S,S,"#fff");}R(X+S,Y+16*S,4*S,2*S,GL);R(X+2*S,Y+16*S,2*S,S,DIA);R(X+6*S,Y+2*S,10*S,7*S,FUR);R(X+6*S,Y+S,2*S,2*S,FUR);R(X+14*S,Y+S,2*S,2*S,FUR);R(X+7*S,Y+S,S,S,GD);R(X+14*S,Y+S,S,S,GD);R(X+8*S,Y+4*S,6*S,4*S,"#f0e0c0");R(X+8*S,Y+3*S,2*S,2*S,"#e8c000");R(X+12*S,Y+3*S,2*S,2*S,"#e8c000");R(X+9*S,Y+3*S,S,S,"#000");R(X+13*S,Y+3*S,S,S,"#000");R(X+10*S,Y+5*S,2*S,S,"#c06040");R(X+9*S,Y+6*S,4*S,S,"#000");R(X+6*S,Y+3*S,2*S,S,GD,.6);R(X+14*S,Y+3*S,2*S,S,GD,.6);}
    function drawShadow(ox,oy,fr,variant){const S=5,bob=Math.round(Math.sin(fr*.09+variant*2)*2),cl=Math.floor(fr/8)%2,ll=Math.floor(fr/9)%2;const BK="#05000a",DK="#150025",PE="#8800dd";const EY=variant===0?"#aa44ff":"#ff44aa",EYL=variant===0?"#cc88ff":"#ff88cc";const X=ox,Y=oy+bob;ctx.save();const aura=ctx.createRadialGradient(X+7*S,Y+7*S,S,X+7*S,Y+7*S,9*S);aura.addColorStop(0,PE+"66");aura.addColorStop(1,"transparent");ctx.globalAlpha=.5+.2*Math.sin(f*.07+variant);ctx.fillStyle=aura;ctx.beginPath();ctx.arc(X+7*S,Y+7*S,9*S,0,Math.PI*2);ctx.fill();ctx.restore();ctx.save();ctx.globalAlpha=.2;ctx.fillStyle="#000";ctx.beginPath();ctx.ellipse(X+7*S,Y+18*S,6*S,2*S,0,0,Math.PI*2);ctx.fill();ctx.restore();R(X+3*S,Y+2*S,8*S,12*S,BK);R(X+4*S,Y+3*S,6*S,10*S,DK);R(X+5*S,Y+4*S,4*S,8*S,PE,.4);R(X+S,Y+3*S,3*S,4*S,BK);R(X+10*S,Y+3*S,3*S,4*S,BK);R(X,Y+4*S,2*S,3*S,DK);R(X+12*S,Y+4*S,2*S,3*S,DK);const ep=.7+.3*Math.sin(f*.12+variant);R(X+4*S,Y+5*S,3*S,2*S,EYL,ep*.6);R(X+5*S,Y+5*S,2*S,2*S,EY,ep);R(X+8*S,Y+5*S,3*S,2*S,EYL,ep*.6);R(X+9*S,Y+5*S,2*S,2*S,EY,ep);ctx.save();ctx.globalAlpha=ep*.5;ctx.fillStyle=EY;ctx.beginPath();ctx.arc(X+6*S,Y+6*S,2.5*S,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(X+10*S,Y+6*S,2.5*S,0,Math.PI*2);ctx.fill();ctx.restore();R(X+5*S,Y+8*S,5*S,S,PE,.8);R(X+5*S,Y+9*S,S,2*S,EYL);R(X+9*S,Y+9*S,S,2*S,EYL);R(X+(cl?-1:0)*S,Y+8*S,2*S,S,PE);R(X+(cl?-2:-1)*S,Y+9*S,S,2*S,PE);R(X+(14-(cl?0:1))*S,Y+8*S,2*S,S,PE);R(X+(14-(cl?-1:0))*S,Y+9*S,S,2*S,PE);R(X+4*S,Y+(13+ll)*S,3*S,4*S,BK);R(X+7*S,Y+(13+(1-ll))*S,3*S,4*S,BK);R(X+3*S,Y+(16+ll)*S,4*S,S,PE,.6);R(X+7*S,Y+(16+(1-ll))*S,4*S,S,PE,.6);if(variant===1){R(X+4*S,Y,S,2*S,EY,ep);R(X+6*S,Y-S,2*S,2*S,EY,ep);R(X+9*S,Y,S,2*S,EY,ep);ctx.save();ctx.globalAlpha=.3*ep;ctx.fillStyle=EY;ctx.beginPath();ctx.arc(X+7*S,Y+5*S,7*S,0,Math.PI*2);ctx.fill();ctx.restore();}}

    function draw() {
      const W=700,H=240;
      const bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,"#0a1a1e");bg.addColorStop(.4,"#0d2a20");bg.addColorStop(.8,"#0a1810");bg.addColorStop(1,"#060e08");ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
      ctx.save();ctx.globalAlpha=.8;ctx.fillStyle="#c8eedd";ctx.beginPath();ctx.arc(W/2,28,22,0,Math.PI*2);ctx.fill();ctx.fillStyle="#0d2a20";ctx.beginPath();ctx.arc(W/2-8,24,18,0,Math.PI*2);ctx.fill();ctx.restore();
      ctx.save();ctx.globalAlpha=.15;ctx.fillStyle="#aaddcc";[[180,40,60,30],[400,55,80,25],[520,35,50,20],[100,60,40,18]].forEach(([x,y,rx,ry])=>{ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill();});ctx.restore();
      const pg1=ctx.createLinearGradient(0,155,0,195);pg1.addColorStop(0,"#3a5030");pg1.addColorStop(.3,"#2a4a28");pg1.addColorStop(1,"#1a2a18");ctx.fillStyle=pg1;ctx.fillRect(10,155,240,40);ctx.fillStyle="#5a8040";ctx.fillRect(10,155,240,8);ctx.fillStyle="#3a6030";ctx.fillRect(10,155,240,3);ctx.fillStyle="#1a2010";ctx.fillRect(10,190,240,5);
      ctx.strokeStyle="#2a3a18";ctx.lineWidth=2;for(let x=40;x<200;x+=35){ctx.beginPath();ctx.moveTo(x,195);ctx.lineTo(x+5,215);ctx.stroke();}
      const pg2=ctx.createLinearGradient(0,160,0,200);pg2.addColorStop(0,"#3a5030");pg2.addColorStop(.3,"#2a4a28");pg2.addColorStop(1,"#1a2a18");ctx.fillStyle=pg2;ctx.fillRect(450,160,240,40);ctx.fillStyle="#5a8040";ctx.fillRect(450,160,240,8);ctx.fillStyle="#3a6030";ctx.fillRect(450,160,240,3);ctx.fillStyle="#1a2010";ctx.fillRect(450,195,240,5);for(let x=470;x<660;x+=35){ctx.beginPath();ctx.moveTo(x,195);ctx.lineTo(x+3,215);ctx.stroke();}
      const ft=Date.now()/100;for(let i=0;i<8;i++){const fx=550+i*12,fh=20+Math.sin(ft+i)*12,fw2=8+Math.sin(ft*1.3+i)*4;const fg=ctx.createLinearGradient(fx,160,fx,160-fh);fg.addColorStop(0,"#ff4400");fg.addColorStop(.5,"#ff8800");fg.addColorStop(1,"#ffdd0000");ctx.save();ctx.globalAlpha=.8+.2*Math.sin(ft+i);ctx.fillStyle=fg;ctx.beginPath();ctx.ellipse(fx,160-fh/2,fw2/2,fh/2,0,0,Math.PI*2);ctx.fill();ctx.restore();}
      ctx.save();ctx.globalAlpha=.12;ctx.fillStyle="#445544";ctx.beginPath();ctx.ellipse(590,130,35,20,0,0,Math.PI*2);ctx.fill();ctx.restore();
      ctx.fillStyle="#1a0e06";ctx.fillRect(0,0,55,H);ctx.fillRect(645,0,55,H);
      [[25,30,70,50],[0,60,55,35],[650,25,70,50],[670,55,55,35]].forEach(([x,y,rx,ry])=>{ctx.fillStyle="#0d2010";ctx.beginPath();ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);ctx.fill();});
      ctx.strokeStyle="#1a3010";ctx.lineWidth=2;[[30,0],[15,20],[630,0],[660,15]].forEach(([x,sy])=>{for(let y=sy;y<H-20;y+=6){ctx.beginPath();ctx.moveTo(x+Math.sin(y*.15+f*.02)*4,y);ctx.lineTo(x+Math.sin((y+6)*.15+f*.02)*4,y+6);ctx.stroke();}});
      sparks.forEach(sp=>{sp.x+=sp.vx;sp.y+=sp.vy;sp.life-=sp.decay;if(sp.life<=0){sp.life=1;sp.x=Math.random()*700;sp.y=150+Math.random()*50;}ctx.save();ctx.globalAlpha=sp.life*.8;ctx.fillStyle=sp.col;ctx.shadowColor=sp.col;ctx.shadowBlur=6;ctx.beginPath();ctx.arc(sp.x,sp.y,sp.r,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;ctx.restore();});
      for(let i=0;i<5;i++){const cx=560+Math.sin(ft*1.7+i*1.3)*30,cy=155-20-((ft*1.2+i*7)%40);ctx.save();ctx.globalAlpha=.6;ctx.fillStyle="#ffaa44";ctx.beginPath();ctx.arc(cx,cy,1.5,0,Math.PI*2);ctx.fill();ctx.restore();}
      drawJaguar(20,60,f); drawShadow(455,68,f,0); drawShadow(555,65,f,1);
      ctx.textAlign="center";ctx.font="bold 20px monospace";ctx.fillStyle="#3a2008";ctx.fillText("VS",350+2,122);ctx.fillStyle="#f0d060";ctx.shadowColor="#c9a84c";ctx.shadowBlur=16;ctx.fillText("VS",350,120);ctx.shadowBlur=0;
      ctx.fillStyle="#88ccff";ctx.globalAlpha=.8;[[312,114],[382,114]].forEach(([x,y])=>{ctx.beginPath();ctx.moveTo(x,y-6);ctx.lineTo(x+6,y);ctx.lineTo(x,y+6);ctx.lineTo(x-6,y);ctx.closePath();ctx.fill();});ctx.globalAlpha=1;
      f++; rafId=requestAnimationFrame(draw);
    }
    rafId=requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return <canvas ref={ref} width={700} height={240} style={{ width:"100%", height:240, display:"block", imageRendering:"pixelated", background:"#0a1a1e" }}/>;
}

function ResultsScreen({ results, score, diff, TOTAL_Q, onReplay, onMenu }) {
  const rank = getRank(results.pct);
  const glow = useMemo(() => col => ({ boxShadow:`0 0 16px ${col}22,inset 0 0 10px ${col}08`, border:`1px solid ${col}44` }), []);
  return (
    <div style={{ maxWidth:680, margin:"0 auto", padding:"16px 12px 32px" }}>
      <div style={{ background:`linear-gradient(160deg,${C.bgDeep},${C.bgCard})`, border:`1px solid ${C.border}`, borderRadius:12, padding:"20px 16px", ...glow(C.gold), textAlign:"center", animation:"popIn .4s ease" }}>
        <div style={{ fontSize:52, marginBottom:8 }}>{rank.icon}</div>
        <div style={{ fontFamily:F, fontSize:"clamp(12px,3.5vw,18px)", color:C.gold, marginBottom:6, animation:"glow2 2s ease-in-out infinite" }}>{rank.title}</div>
        <div style={{ fontFamily:FS, fontSize:"clamp(12px,2.2vw,14px)", color:C.textDim, lineHeight:1.7, marginBottom:20, padding:"0 16px" }}>{rank.msg}</div>
        <div style={{ display:"flex", gap:4, justifyContent:"center", marginBottom:10 }}>
          {Array.from({length:TOTAL_Q},(_,i) => (
            <div key={i} style={{ width:`calc(${100/TOTAL_Q}% - 3px)`, height:18, borderRadius:4, background:i<results.correct?`linear-gradient(180deg,${C.green},${C.green}88)`:"#1e2035", border:`1px solid ${i<results.correct?C.green:C.border}` }}/>
          ))}
        </div>
        <div style={{ background:C.bgDeep, borderRadius:12, padding:"16px", border:`1px solid ${C.borderG}`, marginBottom:12 }}>
          <div style={{ fontFamily:F, fontSize:"clamp(28px,8vw,48px)", color:results.pct>=60?C.gold:C.red }}>{results.pct}%</div>
          <div style={{ fontFamily:FS, fontSize:12, color:C.textDim, marginTop:4 }}>Nivel de cumplimiento</div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:16 }}>
          {[{label:"Correctas",val:results.correct,col:C.green},{label:"Fallidas",val:TOTAL_Q-results.correct,col:C.red},{label:"Puntos",val:String(score).padStart(6,"0"),col:C.gold}].map(s => (
            <div key={s.label} style={{ background:C.bgDeep, borderRadius:8, padding:"10px 6px", border:`1px solid ${s.col}33` }}>
              <div style={{ fontFamily:F, fontSize:"clamp(12px,3vw,16px)", color:s.col }}>{s.val}</div>
              <div style={{ fontFamily:FS, fontSize:10, color:C.textDim, marginTop:4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily:FS, fontSize:11, color:C.textDim, marginBottom:16 }}>
          Dificultad: <span style={{ color:DIFF[diff]?.col }}>{DIFF[diff]?.label}</span> - {TOTAL_Q} preguntas
        </div>
        <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
          <button onClick={onReplay} style={{ background:`linear-gradient(135deg,${C.cyan},${C.purple})`, color:"#fff", border:"none", fontFamily:FS, fontWeight:"bold", fontSize:13, padding:"12px 24px", cursor:"pointer", borderRadius:8, letterSpacing:1 }}>Jugar de Nuevo</button>
          <button onClick={onMenu}   style={{ background:"none", color:C.textDim, border:`1px solid ${C.border}`, fontFamily:FS, fontSize:13, padding:"12px 24px", cursor:"pointer", borderRadius:8 }}>Menu Principal</button>
        </div>
      </div>
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────
export default function App() {
  const [screen,      setScreen]      = useState("title");
  const [diff,        setDiff]        = useState(null);
  const [fw,          setFw]          = useState(100);
  const [rep,         setRep]         = useState(3);
  const [score,       setScore]       = useState(0);
  const [pool,        setPool]        = useState([]);
  const [qIdx,        setQIdx]        = useState(0);
  const [phase,       setPhase]       = useState("typing");
  const [chosen,      setChosen]      = useState(null);
  const [particles,   setParticles]   = useState([]);
  const [hitTick,     setHitTick]     = useState(0);
  const [correctTick, setCorrectTick] = useState(0);
  const [shake,       setShake]       = useState(false);
  const [delta,       setDelta]       = useState(null);
  const [timer,       setTimer]       = useState(0);
  const [results,     setResults]     = useState(null);

  const timerRef      = useRef(null);
  const correctCount  = useRef(0);
  // FIX: refs para todos los timeouts — evita memory leaks y setState en desmontado
  const shakeToRef    = useRef(null);
  const deltaToRef    = useRef(null);
  const phaseToRef    = useRef(null);
  const endToRef      = useRef(null);

  const cfg     = diff ? DIFF[diff] : null;
  const TOTAL_Q = pool.length || cfg?.totalQ || 12;
  const q       = pool[qIdx];

  // FIX: clearAllTimeouts centralizado
  const clearAllTimeouts = useCallback(() => {
    clearTimeout(shakeToRef.current);
    clearTimeout(deltaToRef.current);
    clearTimeout(phaseToRef.current);
    clearTimeout(endToRef.current);
    clearInterval(timerRef.current);
  }, []);

  // FIX: cleanup global en unmount
  useEffect(() => () => clearAllTimeouts(), [clearAllTimeouts]);

  const stopTimer  = useCallback(() => clearInterval(timerRef.current), []);

  // FIX: endGame declarada antes de sus consumidores (evita hoisting implícito)
  const endGame = useCallback(() => {
    stopTimer();
    const total   = Math.max(pool.length || TOTAL_Q, 1); // FIX: evita div/0
    const correct = correctCount.current;
    setResults({ correct, total, pct: Math.round((correct / total) * 100) });
    setScreen("results");
  }, [pool, TOTAL_Q, stopTimer]);

  const handleTimeout = useCallback(() => {
    setChosen(-1);
    const nFw = Math.max(0, fw - (cfg?.fwDmg ?? 0));
    setHitTick(t => t + 1);
    setShake(true);
    shakeToRef.current = setTimeout(() => setShake(false), 320);
    phaseToRef.current = setTimeout(() => {
      setFw(nFw); setPhase("feedback");
      if (nFw <= 0) endToRef.current = setTimeout(endGame, 1000);
    }, 180);
  }, [fw, cfg, endGame]);

  const startTimer = useCallback(() => {
    if (!diff) return;
    clearInterval(timerRef.current);
    setTimer(DIFF[diff].timer);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) { clearInterval(timerRef.current); handleTimeout(); return 0; }
        return prev - 1;
      });
    }, 1000);
  }, [diff, handleTimeout]);

  // FIX: startTimer y stopTimer en deps del useEffect
  useEffect(() => {
    if (phase === "choices") startTimer(); else stopTimer();
    return stopTimer;
  }, [phase, startTimer, stopTimer]);

  const goToMenu = useCallback(() => { clearAllTimeouts(); setScreen("title"); }, [clearAllTimeouts]);

  const startGame = useCallback((d) => {
    clearAllTimeouts();
    const dc = DIFF[d];
    setDiff(d); setFw(dc.fwStart); setRep(3); setScore(0);
    const p = shuffle(QB[d]).slice(0, dc.totalQ).map(shuffleQ);
    setPool(p); setQIdx(0); setPhase("typing"); setChosen(null); setParticles([]);
    setHitTick(0); setCorrectTick(0); setResults(null);
    correctCount.current = 0; // FIX: un solo lugar de reset
    setScreen("game");
  }, [clearAllTimeouts]);

  const choose = useCallback((idx) => {
    if (phase !== "choices" || !q || !cfg) return;
    stopTimer(); setChosen(idx);
    const correct = idx === q.correct;
    const fwD  = correct ? (q.fw[idx] > 0 ? Math.min(q.fw[idx], 100 - fw) : 0) : -cfg.fwDmg;
    const repD = q.rep[idx];
    const nFw  = Math.min(100, Math.max(0, fw + fwD));
    const nRep = Math.min(5, Math.max(1, rep + repD));
    if (correct) { correctCount.current++; setCorrectTick(t => t + 1); }
    else         { setHitTick(t => t + 1); setShake(true); shakeToRef.current = setTimeout(() => setShake(false), 320); }
    setParticles(p => [...p, { x:window.innerWidth/2, y:window.innerHeight/2, col:correct?C.green:C.red }]);
    if (fwD || repD) {
      const pts = [];
      if (fwD) pts.push((fwD>0?"+":"")+fwD+"% FW");
      if (repD) pts.push((repD>0?"+":"")+repD+" REP");
      const col = fwD>=0&&repD>=0 ? C.green : C.red;
      setDelta({ txt:pts.join(" "), col });
      deltaToRef.current = setTimeout(() => setDelta(null), 1500);
    }
    setScore(s => s + (correct ? Math.round(120 * cfg.bonus) : 0));
    phaseToRef.current = setTimeout(() => {
      setFw(nFw); setRep(nRep); setPhase("feedback");
      if (nFw <= 0) endToRef.current = setTimeout(endGame, 1000);
    }, 180);
  }, [phase, q, cfg, fw, rep, stopTimer, endGame]);

  const nextQ = useCallback(() => {
    const ni = qIdx + 1;
    if (ni >= pool.length) { endGame(); return; }
    setQIdx(ni); setPhase("typing"); setChosen(null);
  }, [qIdx, pool.length, endGame]);

  // FIX: memoizar estilos recurrentes
  const card = useMemo(() => ({ background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:12, padding:"12px 14px", marginBottom:10 }), []);
  const glow = useCallback(col => ({ boxShadow:`0 0 16px ${col}22,inset 0 0 10px ${col}08`, border:`1px solid ${col}44` }), []);
  const fwColor = fw>60?C.green:fw>30?C.gold:C.red; // calculado una sola vez

  return (
    <div style={{ background:C.bg, minHeight:"100vh", overflowX:"hidden", overflowY:"auto", position:"relative", fontFamily:F, transform:shake?"translate(-5px,3px)":"none", transition:shake?"none":"transform .1s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @keyframes blinkC  { 50% { opacity:0 } }
        @keyframes scanH   { to  { left:200% } }
        @keyframes glow2   { 0%,100% { text-shadow:0 0 20px ${C.gold},0 0 40px ${C.goldD} } 50% { text-shadow:0 0 36px ${C.gold},0 0 60px ${C.gold} } }
        @keyframes floatUp { 0%  { opacity:1;transform:translateY(0) }   100% { opacity:0;transform:translateY(-55px) } }
        @keyframes popIn   { from { transform:scale(.88);opacity:0 }      to   { transform:scale(1);opacity:1 } }
        @keyframes pulse2  { 0%,100% { box-shadow:0 0 0 0 ${C.cyan}66 }  50%  { box-shadow:0 0 0 10px ${C.cyan}00 } }
        * { box-sizing:border-box; margin:0; padding:0 }
      `}</style>

      <Particles list={particles}/>
      {delta && (
        <div style={{ position:"fixed", top:80, right:20, fontFamily:F, fontSize:13, color:delta.col, zIndex:200, pointerEvents:"none", animation:"floatUp 1.5s ease-out forwards" }}>
          {delta.txt}
        </div>
      )}

      {/* TITLE */}
      {screen==="title" && (
        <div style={{ maxWidth:700, margin:"0 auto", paddingBottom:24 }}>
          <div style={{ borderRadius:"0 0 20px 20px", overflow:"hidden", border:`2px solid ${C.gold}55`, borderTop:"none" }}>
            <TitleCanvas/>
            <div style={{ background:"linear-gradient(180deg,#0a1a1e00,#0a1a1ecc,#0a0f05)", padding:"18px 20px 16px", textAlign:"center", borderTop:`2px solid ${C.gold}44` }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:14 }}>
                <div style={{ height:1, flex:1, background:`linear-gradient(90deg,transparent,${C.moss},${C.gold})` }}/>
                <span style={{ fontFamily:FS, fontSize:10, color:C.gold, letterSpacing:5, fontWeight:300 }}>Joyerias Bizzarro</span>
                <div style={{ height:1, flex:1, background:`linear-gradient(90deg,${C.gold},${C.moss},transparent)` }}/>
              </div>
              <div style={{ position:"relative", marginBottom:6 }}>
                <div style={{ fontFamily:F, fontSize:"clamp(18px,5vw,28px)", color:"#2d6614", position:"absolute", top:2, left:"50%", transform:"translateX(-50%)", letterSpacing:4, lineHeight:1.5, width:"100%", textAlign:"center", filter:"blur(4px)", opacity:.6 }}>GUARDIANES</div>
                <div style={{ fontFamily:F, fontSize:"clamp(18px,5vw,28px)", background:`linear-gradient(180deg,${C.goldL},${C.gold},${C.goldD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", animation:"glow2 2.5s ease-in-out infinite", letterSpacing:4, lineHeight:1.5 }}>GUARDIANES</div>
              </div>
              <div style={{ fontFamily:FS, fontSize:"clamp(10px,2.2vw,13px)", color:C.mossL, letterSpacing:3, marginBottom:4, fontWeight:300 }}>Cyber Defense Force</div>
              <div style={{ fontFamily:FS, fontSize:10, color:C.textDim, letterSpacing:2, marginBottom:14 }}>Cultura de Ciberseguridad - CompTIA Security+</div>
              <div style={{ fontFamily:FS, fontSize:12, color:C.moss, animation:"blinkC 1.2s step-end infinite", letterSpacing:2 }}>Elige tu rango de Guardian</div>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:10, padding:"14px 14px 0" }}>
            {["easy","medium","hard"].map(d => {
              const dc = DIFF[d];
              const ja = d==="easy"?C.mossL:d==="medium"?C.gold:C.red;
              return (
                <button key={d} onClick={() => startGame(d)} style={{ background:`linear-gradient(135deg,${C.bgCard},${C.bgDeep})`, border:`1px solid ${ja}55`, borderRadius:12, padding:"15px 18px", cursor:"pointer", textAlign:"left", transition:"all .2s", position:"relative", overflow:"hidden" }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.borderColor=`${ja}99`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.borderColor=`${ja}55`; }}>
                  <div style={{ position:"absolute", top:0, left:"-100%", width:"40%", height:"100%", background:`linear-gradient(90deg,transparent,${ja}0a,transparent)`, animation:"scanH 5s linear infinite" }}/>
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:8 }}>
                    <span style={{ fontSize:24 }}>{DIFF_ICONS[dc.icon]}</span>
                    <div style={{ flex:1 }}>
                      <div style={{ fontFamily:F, fontSize:"clamp(8px,2vw,10px)", color:ja, marginBottom:3 }}>{dc.label}</div>
                      <div style={{ fontFamily:FS, fontSize:10, color:C.textDim }}>{dc.tag} - {dc.timer}s - {dc.totalQ} preguntas</div>
                    </div>
                    <div style={{ display:"flex", gap:4 }}>{[0,1,2].map(i => <Diamond key={i} on={i<(d==="easy"?1:d==="medium"?2:3)} size={16}/>)}</div>
                  </div>
                  <div style={{ fontFamily:FS, fontSize:"clamp(11px,1.8vw,12px)", color:C.textDim, lineHeight:1.7, paddingLeft:36 }}>{dc.desc}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME */}
      {screen==="game" && cfg && q && (
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"10px 12px", minHeight:"100vh", display:"flex", flexDirection:"column" }}>
          {/* HUD */}
          <div style={{ ...card, ...glow(C.cyan), background:`linear-gradient(135deg,${C.bgCard},${C.bgDeep})`, position:"relative", overflow:"hidden", marginBottom:8, flexShrink:0 }}>
            <div style={{ position:"absolute", top:0, left:"-100%", width:"50%", height:"100%", background:`linear-gradient(90deg,transparent,${C.cyan}08,transparent)`, animation:"scanH 3s linear infinite" }}/>
            <div style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
              <div style={{ flexShrink:0 }}>
                <div style={{ fontFamily:F, fontSize:"clamp(6px,1.4vw,8px)", color:C.cyan, letterSpacing:1 }}>GUARDIANES CYBER DEFENSE</div>
                <div style={{ fontFamily:FS, fontSize:10, color:cfg.col, marginTop:2 }}>Nivel: {cfg.label} - P.{qIdx+1}/{TOTAL_Q}</div>
              </div>
              <div style={{ flex:1, minWidth:160 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ fontFamily:FS, fontSize:9, color:C.textDim }}>Escudo Firewall</span>
                  <span style={{ fontFamily:F, fontSize:8, color:fwColor }}>{Math.round(fw)}%</span>
                </div>
                <div style={{ display:"flex", gap:2 }}>
                  {Array.from({length:10},(_,i) => {
                    const a = fw>=(i+1)*10;
                    return <div key={i} style={{ flex:1, height:10, borderRadius:2, background:a?fwColor:"#1e2035", border:`1px solid ${a?fwColor:C.border}`, transition:"background .4s" }}/>;
                  })}
                </div>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
                <span style={{ fontFamily:FS, fontSize:9, color:C.textDim }}>Confianza:</span>
                {[1,2,3,4,5].map(i => <Diamond key={i} on={i<=rep} size={14}/>)}
              </div>
              <div style={{ textAlign:"right", flexShrink:0 }}>
                <div style={{ fontFamily:F, fontSize:"clamp(10px,1.8vw,13px)", color:C.gold }}>{String(score).padStart(6,"0")}</div>
                <div style={{ fontFamily:FS, fontSize:8, color:C.textDim }}>PUNTOS</div>
              </div>
              <button onClick={goToMenu} style={{ fontFamily:FS, fontSize:10, color:C.textDim, background:"none", border:`1px solid ${C.border}`, borderRadius:6, padding:"3px 10px", cursor:"pointer", flexShrink:0 }}>Menu</button>
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:10, flex:1 }}>
            {/* Col izquierda */}
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              <div style={{ ...card, ...glow(C.purple), padding:0, overflow:"hidden", flexShrink:0 }}>
                <BattleCanvas fw={fw} hitTick={hitTick} correctTick={correctTick}/>
                <div style={{ display:"flex", justifyContent:"space-between", padding:"5px 10px", background:C.bgDeep, borderTop:`1px solid ${C.border}` }}>
                  <span style={{ fontFamily:FS, fontSize:9, color:C.cyan }}>Guardianes HQ</span>
                  <span style={{ fontFamily:FS, fontSize:9, color:C.gold, fontWeight:"bold" }}>VS</span>
                  <span style={{ fontFamily:FS, fontSize:9, color:C.red }}>Vectores de Amenaza</span>
                </div>
              </div>
              <div style={{ ...card, ...glow(cfg.col), flexShrink:0 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                  <div>
                    <div style={{ fontFamily:F, fontSize:9, color:cfg.col, marginBottom:3 }}>{DIFF_ICONS[cfg.icon]} {cfg.label}</div>
                    <div style={{ fontFamily:FS, fontSize:10, color:C.textDim }}>{TOTAL_Q} preguntas - {cfg.timer}s</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontFamily:F, fontSize:11, color:C.cyan }}>{qIdx}/{TOTAL_Q}</div>
                    <div style={{ fontFamily:FS, fontSize:9, color:C.textDim }}>respondidas</div>
                  </div>
                </div>
                <div style={{ display:"flex", gap:3 }}>
                  {Array.from({length:TOTAL_Q},(_,i) => {
                    const done=i<qIdx, cur=i===qIdx;
                    return <div key={i} style={{ flex:1, height:6, borderRadius:2, background:done?C.green:cur?C.gold:"#1e2035", border:`1px solid ${done?C.green:cur?C.gold:C.border}`, transition:"all .3s" }}/>;
                  })}
                </div>
              </div>
              <div style={{ ...card, background:C.bgDeep, border:`1px solid ${C.border}`, flexShrink:0 }}>
                <div style={{ fontFamily:FS, fontSize:10, color:C.textDim, lineHeight:1.7 }}>
                  <strong style={{ color:C.text }}>Tip:</strong>{" "}
                  {diff==="easy"   && "Lee cada opcion con calma. Los conceptos basicos son tu mejor aliado."}
                  {diff==="medium" && "Piensa en el escenario completo antes de responder."}
                  {diff==="hard"   && "Las amenazas avanzadas requieren conocimiento profundo."}
                </div>
              </div>
            </div>

            {/* Col derecha */}
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              <div style={{ ...card, ...glow(C.gold), position:"relative", flexShrink:0 }}>
                <div style={{ position:"absolute", top:-1, right:-1, width:16, height:16, background:`linear-gradient(135deg,${C.gold},${C.goldD})`, borderRadius:"0 12px 0 8px" }}/>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:10, gap:8 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    {q.joke && <span style={{ fontFamily:FS, fontSize:9, color:C.gold, background:`${C.gold}11`, border:`1px solid ${C.gold}44`, borderRadius:4, padding:"2px 6px" }}>Humor</span>}
                    <span style={{ fontFamily:FS, fontSize:10, color:C.textDim }}>Amenaza - P.{qIdx+1}</span>
                  </div>
                  {phase==="choices" && <TimerRing seconds={timer} total={cfg.timer}/>}
                </div>
                <div style={{ minHeight:50 }}>
                  <Typewriter key={qIdx} text={q.q} onDone={() => setPhase("choices")}/>
                </div>
              </div>

              {phase==="typing" && (
                <div style={{ textAlign:"center", padding:"10px 0", fontFamily:FS, fontSize:12, color:C.textDim }}>Analizando amenaza...</div>
              )}

              {phase==="choices" && (
                <div style={{ display:"flex", flexDirection:"column", gap:7, animation:"popIn .25s ease" }}>
                  {q.choices.map((c,i) => (
                    <button key={i} onClick={() => choose(i)} style={{ background:`linear-gradient(135deg,${C.bgCard},${C.bgDeep})`, border:`1px solid ${C.border}`, borderRadius:10, padding:"10px 12px", cursor:"pointer", fontFamily:FS, fontSize:"clamp(12px,1.6vw,14px)", color:C.text, display:"flex", alignItems:"flex-start", gap:10, textAlign:"left", width:"100%", lineHeight:1.6, transition:"all .15s" }}
                      onMouseEnter={e => { e.currentTarget.style.background=`linear-gradient(135deg,${C.cyan}11,${C.bgCard})`; e.currentTarget.style.borderColor=C.cyan; e.currentTarget.style.transform="translateX(4px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.background=`linear-gradient(135deg,${C.bgCard},${C.bgDeep})`; e.currentTarget.style.borderColor=C.border; e.currentTarget.style.transform="none"; }}>
                      <span style={{ background:`linear-gradient(135deg,${C.cyan},${C.purple})`, color:"#fff", borderRadius:6, padding:"2px 7px", fontFamily:F, fontSize:7, fontWeight:900, minWidth:22, textAlign:"center", flexShrink:0, marginTop:2 }}>
                        {["A","B","C","D"][i]}
                      </span>
                      {c}
                    </button>
                  ))}
                </div>
              )}

              {phase==="feedback" && (
                <div style={{ ...card, ...glow(chosen===q.correct?C.green:C.red), background:`linear-gradient(135deg,${chosen===q.correct?C.green+"11":C.red+"11"},${C.bgDeep})`, animation:"popIn .3s ease" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
                    <div style={{ width:34, height:34, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", background:chosen===q.correct?`${C.green}22`:`${C.red}22`, border:`2px solid ${chosen===q.correct?C.green:C.red}`, fontSize:18, flexShrink:0 }}>
                      {chosen===-1 ? "T" : chosen===q.correct ? "V" : "X"}
                    </div>
                    <div style={{ fontFamily:F, fontSize:"clamp(8px,1.4vw,10px)", color:chosen===q.correct?C.green:C.red }}>
                      {chosen===-1 ? "TIEMPO AGOTADO" : chosen===q.correct ? "CORRECTO" : "INCORRECTO"}
                    </div>
                  </div>
                  {chosen !== -1 && <div style={{ fontFamily:FS, fontSize:"clamp(11px,1.4vw,13px)", color:chosen===q.correct?"#a0e8b0":"#ffaaaa", lineHeight:1.7, marginBottom:12, paddingLeft:44 }}>{q.exp}</div>}
                  {chosen === -1 && <div style={{ fontFamily:FS, fontSize:"clamp(11px,1.4vw,13px)", color:"#ffaaaa", lineHeight:1.7, marginBottom:12, paddingLeft:44 }}>Respuesta correcta: <strong style={{ color:C.gold }}>{q.choices[q.correct]}</strong></div>}
                  <button onClick={nextQ} style={{ background:`linear-gradient(135deg,${C.cyan},${C.purple})`, color:"#fff", border:"none", fontFamily:FS, fontWeight:"bold", fontSize:"clamp(11px,1.4vw,13px)", padding:"11px 18px", cursor:"pointer", borderRadius:8, width:"100%", letterSpacing:1 }}>
                    {qIdx+1>=TOTAL_Q ? "Ver Resultados" : "Siguiente Amenaza"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* RESULTS */}
      {screen==="results" && results && (
        <ResultsScreen results={results} score={score} diff={diff} TOTAL_Q={TOTAL_Q} onReplay={() => startGame(diff)} onMenu={goToMenu}/>
      )}
    </div>
  );
}
