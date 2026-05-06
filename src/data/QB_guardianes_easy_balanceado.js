// Banco de preguntas Guardianes - Nivel easy
// Tono usuario final: claro, directo y poco tecnico.
// Total: 100 preguntas.

const QB_RAW = {
  easy: [
    {
        "q": "Un correo de RRHH pide tu RFC y CURP con urgencia desde un dominio raro. Que haces?",
        "joke": true,
        "choices": [
            "No responder y reportarlo a Seguridad o TI",
            "Responder solo si el texto parece formal",
            "Mandarlo a otros para preguntar si tambien lo recibieron",
            "Borrarlo sin reportar nada"
        ],
        "correct": 0,
        "exp": "La urgencia, los datos personales y el dominio raro son señales de phishing.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un compañero te pide tu usuario y contraseña para terminar un reporte. Que haces?",
        "joke": false,
        "choices": [
            "No compartir la cuenta y pedirle que abra ticket",
            "Compartirla solo por unos minutos",
            "Mandarla por chat para que quede evidencia, pero sin validar el riesgo",
            "Cambiar la contraseña despues de prestarla"
        ],
        "correct": 0,
        "exp": "Las cuentas son personales. Si alguien usa tu cuenta, las acciones quedan a tu nombre.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un enlace parece de la empresa pero el dominio tiene letras extrañas. Que haces?",
        "joke": false,
        "choices": [
            "No ingresar datos y validar el sitio por canal oficial",
            "Entrar porque el sitio tiene candado",
            "Probar con una clave vieja primero",
            "Abrirlo desde el celular para revisar, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Los sitios falsos imitan dominios reales. El candado no garantiza que sea legitimo.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Encuentras una USB con etiqueta de nomina en la sala de juntas. Que haces?",
        "joke": false,
        "choices": [
            "Entregarla a Seguridad o TI sin conectarla",
            "Conectarla para buscar al dueño, pero sin validar el riesgo",
            "Revisarla en un equipo viejo",
            "Dejarla donde estaba"
        ],
        "correct": 0,
        "exp": "Una USB desconocida puede contener malware. No debe conectarse a equipos corporativos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Tu equipo muestra que los archivos fueron cifrados y pide dinero. Que haces?",
        "joke": false,
        "choices": [
            "Desconectar la red y reportar de inmediato",
            "Pagar para recuperar rapido",
            "Reiniciar varias veces",
            "Buscar tutoriales en internet, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Puede ser ransomware. La prioridad es contener y reportar.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Quieres crear una contraseña facil de recordar y dificil de adivinar. Que haces?",
        "joke": false,
        "choices": [
            "Usar una frase larga sin datos personales",
            "Usar tu fecha de nacimiento",
            "Usar el nombre de tu mascota",
            "Usar la misma clave de siempre, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Las frases largas son mejores que palabras cortas con datos personales.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Recibes muchas solicitudes de aprobacion MFA que no iniciaste. Que haces?",
        "joke": false,
        "choices": [
            "Rechazarlas y avisar a Seguridad o TI",
            "Aprobar una para detenerlas, pero sin validar el riesgo",
            "Esperar a que desaparezcan",
            "Apagar el telefono"
        ],
        "correct": 0,
        "exp": "Esto puede ser fatiga de MFA. Alguien podria tener tu contraseña.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Alguien que dice ser soporte te llama y pide instalar control remoto. Que haces?",
        "joke": false,
        "choices": [
            "Cortar y llamar al numero oficial de TI",
            "Instalarlo si conoce tu nombre",
            "Pedirle que mande correo y seguirlo, pero sin validar el riesgo",
            "Darle acceso solo para revisar"
        ],
        "correct": 0,
        "exp": "Soporte real debe validarse por canales oficiales.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un mensajero pide que le abras una puerta restringida porque trae cajas. Que haces?",
        "joke": false,
        "choices": [
            "Pedir que se registre en recepcion",
            "Abrirle por cortesia",
            "Dejarlo pasar si va rapido",
            "Acompañarlo sin registrarlo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La cortesia no debe saltarse controles de acceso.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "El navegador muestra alerta de certificado en un portal de proveedor. Que haces?",
        "joke": false,
        "choices": [
            "No continuar y validar con TI o proveedor",
            "Aceptar la excepcion porque siempre lo usas",
            "Cambiar de navegador",
            "Desactivar la alerta temporalmente"
        ],
        "correct": 0,
        "exp": "Una alerta de certificado puede indicar un sitio falso o interceptacion.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Usas la misma contraseña en varias paginas. Que haces?",
        "joke": false,
        "choices": [
            "Cambiar a claves unicas por servicio",
            "Dejarla si es muy larga",
            "Cambiar solo la del correo, pero sin validar el riesgo",
            "Anotarla para no olvidarla"
        ],
        "correct": 0,
        "exp": "Si una pagina se filtra, prueban esa clave en otras cuentas.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Preguntan que significa CIA en seguridad de la informacion. Que haces?",
        "joke": false,
        "choices": [
            "Confidencialidad, integridad y disponibilidad",
            "Control, identidad y auditoria, pero sin validar el riesgo",
            "Cifrado, internet y acceso",
            "Cliente, informacion y archivo"
        ],
        "correct": 0,
        "exp": "La triada CIA resume lo que se busca proteger.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Te llega un archivo llamado Factura.pdf.exe. Que haces?",
        "joke": false,
        "choices": [
            "No abrirlo y reportarlo",
            "Abrirlo porque parece PDF",
            "Renombrarlo a PDF",
            "Mandarlo a un compañero"
        ],
        "correct": 0,
        "exp": "La doble extension puede esconder un ejecutable malicioso.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Nomina dice que recibio una solicitud tuya para cambiar tu cuenta bancaria. Que haces?",
        "joke": false,
        "choices": [
            "Reportarlo porque puede ser suplantacion",
            "Esperar a que nomina lo revise",
            "Cambiar tambien tu correo",
            "Contestar que no fuiste tu y nada mas, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Puede ser fraude de nomina o correo comprometido.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Te alejas de tu equipo por pocos minutos. Que haces?",
        "joke": false,
        "choices": [
            "Bloquear la sesion antes de irte",
            "Dejarlo abierto si estas cerca, pero sin validar el riesgo",
            "Bajar el brillo",
            "Cerrar solo el navegador"
        ],
        "correct": 0,
        "exp": "Un equipo desbloqueado permite que alguien use tus accesos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Necesitas correo en una cafeteria con WiFi abierto. Que haces?",
        "joke": false,
        "choices": [
            "Usar hotspot propio o VPN corporativa",
            "Conectarte si el portal tiene HTTPS, pero sin validar el riesgo",
            "Pedir la clave del cafe y entrar",
            "Pedir a otro que revise tu correo"
        ],
        "correct": 0,
        "exp": "Las redes abiertas pueden ser falsas o inseguras.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un QR de un cartel tiene una pegatina encima. Que haces?",
        "joke": false,
        "choices": [
            "Evitar escanearlo y reportarlo",
            "Escanearlo si ofrece descuento",
            "Tomarle foto para probar despues",
            "Compartirlo al equipo"
        ],
        "correct": 0,
        "exp": "Un QR reemplazado puede llevar a una pagina falsa.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Una app de linterna pide contactos, microfono y ubicacion. Que haces?",
        "joke": true,
        "choices": [
            "No instalarla porque pide permisos excesivos",
            "Instalarla y quitar permisos despues, pero sin validar el riesgo",
            "Instalarla si tiene buenas reseñas",
            "Aceptar permisos solo una vez"
        ],
        "correct": 0,
        "exp": "Una app debe pedir solo lo que necesita para funcionar.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un documento con datos de clientes queda olvidado en la impresora. Que haces?",
        "joke": false,
        "choices": [
            "Recogerlo y usar impresion segura en adelante",
            "Dejarlo por si regresa el dueño, pero sin validar el riesgo",
            "Tomarle foto y avisar por chat",
            "Tirarlo a la basura comun"
        ],
        "correct": 0,
        "exp": "Los documentos impresos tambien pueden filtrar informacion.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Tu director pide tarjetas de regalo por correo fuera de horario. Que haces?",
        "joke": false,
        "choices": [
            "Validar por llamada o canal oficial antes de comprar",
            "Comprar si el mensaje parece urgente, pero sin validar el riesgo",
            "Enviar los codigos y pedir factura",
            "Responder pidiendo mas datos"
        ],
        "correct": 0,
        "exp": "Las compras urgentes de tarjetas suelen ser fraude.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Tu equipo pide aplicar actualizaciones de seguridad. Que haces?",
        "joke": false,
        "choices": [
            "Guardar trabajo y actualizar pronto",
            "Posponerlo indefinidamente",
            "Cancelarlo si todo funciona, pero sin validar el riesgo",
            "Desactivar las alertas"
        ],
        "correct": 0,
        "exp": "Los parches cierran fallas conocidas.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Debes enviar datos sensibles por correo. Que haces?",
        "joke": false,
        "choices": [
            "Usar un canal aprobado y protegido",
            "Mandarlos si es urgente",
            "Ponerlos en un ZIP sin clave, pero sin validar el riesgo",
            "Dividirlos en varios correos"
        ],
        "correct": 0,
        "exp": "Los datos sensibles requieren proteccion adicional.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un equipo compartido ofrece guardar tu contraseña. Que haces?",
        "joke": false,
        "choices": [
            "Rechazar y cerrar sesion al terminar",
            "Aceptar si es oficina",
            "Guardar solo contraseñas simples, pero sin validar el riesgo",
            "Borrar historial despues"
        ],
        "correct": 0,
        "exp": "No guardes claves en equipos compartidos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Alguien usa miedo o urgencia para pedirte informacion. Que haces?",
        "joke": false,
        "choices": [
            "Detenerte y validar antes de actuar",
            "Responder rapido para evitar problemas",
            "Pedir que lo mande por correo",
            "Hacerlo si dice ser jefe"
        ],
        "correct": 0,
        "exp": "La ingenieria social manipula emociones para que actues sin pensar.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Quieres saber que es malware. Que haces?",
        "joke": false,
        "choices": [
            "Software creado para dañar, robar o espiar",
            "Un error normal de sistema, pero sin validar el riesgo",
            "Una actualizacion pesada",
            "Un archivo grande"
        ],
        "correct": 0,
        "exp": "Malware es codigo malicioso.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "El antivirus bloquea un archivo descargado. Que haces?",
        "joke": false,
        "choices": [
            "No forzarlo y consultar a TI",
            "Moverlo a una carpeta excluida",
            "Desactivar el antivirus un momento",
            "Probarlo en otro equipo"
        ],
        "correct": 0,
        "exp": "Si el antivirus bloqueo algo, no debes saltarte la proteccion.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un proveedor pide acceso a un sistema interno. Que haces?",
        "joke": false,
        "choices": [
            "Dar solo acceso aprobado y necesario",
            "Prestar tu cuenta temporalmente",
            "Dar permisos amplios para evitar bloqueos",
            "Enviar capturas del sistema"
        ],
        "correct": 0,
        "exp": "Los terceros tambien deben seguir controles de acceso.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Una pregunta de seguridad pide el nombre de tu mascota. Que haces?",
        "joke": false,
        "choices": [
            "No usar respuestas reales faciles de buscar",
            "Usar exactamente el dato real",
            "Publicarlo para recordarlo",
            "Usar la misma respuesta en todos lados, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Esa informacion suele estar en redes sociales.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Quieres respaldar informacion importante. Que haces?",
        "joke": false,
        "choices": [
            "Tener copias separadas y probar restauracion",
            "Guardar todo en el mismo equipo",
            "Respaldar solo cuando algo falle, pero sin validar el riesgo",
            "Confiar en una sola memoria USB"
        ],
        "correct": 0,
        "exp": "Un respaldo sirve solo si se puede restaurar.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Te preguntan para que sirve un EDR o antivirus avanzado. Que haces?",
        "joke": false,
        "choices": [
            "Detecta comportamientos raros y ayuda a responder",
            "Hace que internet vaya mas rapido, pero sin validar el riesgo",
            "Reemplaza todas las politicas",
            "Cifra todos tus documentos"
        ],
        "correct": 0,
        "exp": "Estas herramientas ayudan a detectar actividad sospechosa.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Vas a proyectar pantalla en una reunion. Que haces?",
        "joke": false,
        "choices": [
            "Silenciar notificaciones antes de presentar",
            "Confiar en que nadie mira",
            "Cerrar solo el correo",
            "Tapar la pantalla cuando salga algo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Las notificaciones pueden mostrar datos sensibles.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un sistema prueba muchas contraseñas hasta acertar. Que haces?",
        "joke": false,
        "choices": [
            "Es un ataque de fuerza bruta",
            "Es una copia de seguridad",
            "Es una actualizacion",
            "Es una encuesta de seguridad, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La fuerza bruta intenta adivinar claves automaticamente.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Cambias la contraseña cada mes. Que haces?",
        "joke": false,
        "choices": [
            "No cambiar solo un numero al final",
            "Usar Verano1, Verano2, Verano3",
            "Repetir la anterior con una letra, pero sin validar el riesgo",
            "Usar el mes actual siempre"
        ],
        "correct": 0,
        "exp": "Los patrones faciles son faciles de adivinar.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Quieres guardar muchas contraseñas distintas. Que haces?",
        "joke": false,
        "choices": [
            "Usar un gestor de contraseñas aprobado",
            "Guardarlas en una nota sin clave, pero sin validar el riesgo",
            "Mandartelas por WhatsApp",
            "Usar una sola para todo"
        ],
        "correct": 0,
        "exp": "El gestor ayuda a usar claves unicas sin memorizarlas todas.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Vas a desechar un USB corporativo. Que haces?",
        "joke": true,
        "choices": [
            "Pedir borrado seguro o destruccion controlada",
            "Borrar archivos y regalarlo, pero sin validar el riesgo",
            "Formatearlo rapido",
            "Tirarlo a la basura"
        ],
        "correct": 0,
        "exp": "Borrar archivos no siempre elimina la informacion.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Trabajas con datos sensibles en un avion. Que haces?",
        "joke": false,
        "choices": [
            "Evitarlo o usar filtro de privacidad",
            "Bajar un poco el brillo",
            "Confiar en que nadie entiende, pero sin validar el riesgo",
            "Sentarte junto a la ventana"
        ],
        "correct": 0,
        "exp": "Alguien puede ver tu pantalla en espacios publicos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un sitio usa HTTPS. Que haces?",
        "joke": false,
        "choices": [
            "La comunicacion va cifrada, pero igual debes validar el sitio",
            "Siempre significa que el sitio es confiable",
            "Significa que es de gobierno, pero sin validar el riesgo, pero sin validar el riesgo",
            "Evita todo tipo de fraude, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "HTTPS ayuda, pero no prueba que el sitio sea legitimo.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Te conectas desde una red externa al trabajo. Que haces?",
        "joke": false,
        "choices": [
            "Usar VPN corporativa si aplica",
            "Entrar directo sin validar",
            "Usar cualquier WiFi abierto",
            "Compartir red con desconocidos, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La VPN protege mejor la conexion hacia recursos internos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Una reunion externa pide instalar un plugin raro. Que haces?",
        "joke": false,
        "choices": [
            "Validar antes de instalar cualquier complemento",
            "Instalarlo si la reunion es urgente, pero sin validar el riesgo",
            "Reenviarlo a todos para probar",
            "Ignorarlo sin avisar"
        ],
        "correct": 0,
        "exp": "Los falsos plugins pueden instalar malware.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un documento de Office pide habilitar macros. Que haces?",
        "joke": false,
        "choices": [
            "No habilitarlas si el origen no esta validado",
            "Activarlas para ver el contenido, pero sin validar el riesgo",
            "Activarlas solo un minuto",
            "Pedir a otro que lo abra"
        ],
        "correct": 0,
        "exp": "Las macros pueden ejecutar codigo malicioso.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Una laptop tiene cifrado de disco. Que haces?",
        "joke": false,
        "choices": [
            "Protege datos si el equipo se pierde o roban",
            "Hace mas rapido el equipo, pero sin validar el riesgo",
            "Evita correos phishing",
            "Aumenta bateria"
        ],
        "correct": 0,
        "exp": "El cifrado protege la informacion almacenada.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Una pagina muestra errores internos extraños. Que haces?",
        "joke": false,
        "choices": [
            "Puede revelar informacion util para atacantes",
            "Siempre es normal",
            "Mejora la transparencia",
            "Significa que el navegador falla, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Los errores internos no deben mostrarse al usuario.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Preguntan para que sirven los logs. Que haces?",
        "joke": false,
        "choices": [
            "Registran acciones para investigar y detectar problemas",
            "Solo ocupan espacio, pero sin validar el riesgo",
            "Sirven para decorar reportes",
            "Reemplazan respaldos, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Sin registros es dificil saber que ocurrio.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Autenticacion y autorizacion parecen iguales. Que haces?",
        "joke": false,
        "choices": [
            "Autenticacion confirma quien eres; autorizacion que puedes hacer",
            "Son lo mismo, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Autorizacion va antes de login, pero sin validar el riesgo",
            "Solo aplican a bancos, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Primero te identificas y luego se revisan permisos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Una persona deja la empresa. Que haces?",
        "joke": false,
        "choices": [
            "Sus accesos deben cerrarse de inmediato segun proceso",
            "Se dejan por si regresa",
            "Se cierran cuando alguien lo recuerde, pero sin validar el riesgo",
            "Se prestan a su reemplazo"
        ],
        "correct": 0,
        "exp": "Los accesos de exempleados son un riesgo.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Descargas software de una pagina no oficial. Que haces?",
        "joke": false,
        "choices": [
            "Puede venir alterado o con malware",
            "Siempre es igual al original, pero sin validar el riesgo",
            "Es mas seguro por ser gratis",
            "Evita actualizaciones"
        ],
        "correct": 0,
        "exp": "Los sitios no oficiales son fuente comun de malware.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Subes documentos corporativos a tu nube personal. Que haces?",
        "joke": false,
        "choices": [
            "Sacas informacion de canales protegidos",
            "Solo ahorras espacio",
            "Mejora colaboracion siempre",
            "No pasa nada si la carpeta es privada, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La nube personal no tiene los controles de la empresa.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Dejas Bluetooth visible todo el tiempo. Que haces?",
        "joke": false,
        "choices": [
            "Aumentas exposicion a conexiones no deseadas",
            "Solo gasta bateria",
            "No afecta nada",
            "Mejora señal, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Activa conexiones solo cuando las necesites.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Pierdes una laptop corporativa. Que haces?",
        "joke": false,
        "choices": [
            "Reportar de inmediato a TI o Seguridad",
            "Esperar a ver si aparece",
            "Comprar otra primero",
            "Cambiar solo el fondo de pantalla, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "El reporte rapido permite bloquear o borrar el equipo.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Recibes un simulacro de phishing. Que haces?",
        "joke": false,
        "choices": [
            "Reportarlo como si fuera real",
            "Ignorarlo porque es prueba, pero sin validar el riesgo",
            "Compartirlo para bromear",
            "Responder al remitente"
        ],
        "correct": 0,
        "exp": "El objetivo es practicar la reaccion correcta.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un enlace visible no coincide con el destino real. Que haces?",
        "joke": false,
        "choices": [
            "No hacer clic y reportarlo",
            "Confiar si el texto parece formal",
            "Abrirlo en modo incognito",
            "Pedir a un compañero que lo abra"
        ],
        "correct": 0,
        "exp": "El texto puede mentir; el destino real importa.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Comparten capturas de clientes por WhatsApp. Que haces?",
        "joke": true,
        "choices": [
            "Usar canales corporativos aprobados",
            "Hacerlo si el grupo es interno, pero sin validar el riesgo",
            "Borrar despues y listo",
            "Mandarlo solo de noche"
        ],
        "correct": 0,
        "exp": "Los canales personales no son adecuados para datos sensibles.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "AnyDesk aparece en una solicitud de soporte inesperada. Que haces?",
        "joke": false,
        "choices": [
            "Sospechar y validar con TI",
            "Aceptar si el antivirus lo permite",
            "Instalar y ver que pasa",
            "Dar acceso solo lectura"
        ],
        "correct": 0,
        "exp": "Las herramientas remotas legitimas tambien se usan en fraudes.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Te preguntan que datos son sensibles. Que haces?",
        "joke": false,
        "choices": [
            "Salud, biometria, finanzas y datos personales delicados",
            "Solo el nombre de la empresa",
            "El color favorito, pero sin validar el riesgo, pero sin validar el riesgo",
            "La extension telefonica publica"
        ],
        "correct": 0,
        "exp": "Algunos datos requieren mas cuidado que otros.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Te hablan de SPF, DKIM y DMARC. Que haces?",
        "joke": false,
        "choices": [
            "Ayudan a reducir correos falsos de dominios conocidos",
            "Cifran todos los adjuntos",
            "Son tipos de antivirus, pero sin validar el riesgo, pero sin validar el riesgo",
            "Son redes WiFi seguras, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Estos controles ayudan contra suplantacion de correo.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un familiar quiere usar tu laptop corporativa. Que haces?",
        "joke": false,
        "choices": [
            "No permitirlo porque es equipo de trabajo",
            "Dejarlo si solo estudia",
            "Crear una carpeta para el, pero sin validar el riesgo",
            "Prestarla sin internet"
        ],
        "correct": 0,
        "exp": "Los equipos corporativos no deben compartirse.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Sospechas que tu cuenta fue comprometida. Que haces?",
        "joke": false,
        "choices": [
            "Reportar de inmediato y seguir indicaciones",
            "Cambiar clave y no avisar",
            "Borrar correos raros",
            "Esperar a ver si pasa de nuevo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Avisar temprano ayuda a contener el problema.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "El navegador avisa que tu clave aparecio en una filtracion. Que haces?",
        "joke": false,
        "choices": [
            "Cambiarla donde se uso y no reutilizarla",
            "Ignorar si aun funciona",
            "Esperar confirmacion publica, pero sin validar el riesgo",
            "Solo cerrar sesion"
        ],
        "correct": 0,
        "exp": "Una clave filtrada puede ser usada por atacantes.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Preguntan por un control fisico. Que haces?",
        "joke": false,
        "choices": [
            "Tarjeta de acceso, camara o guardia",
            "Antivirus",
            "Cifrado de correo, pero sin validar el riesgo",
            "Contraseña larga"
        ],
        "correct": 0,
        "exp": "Los controles fisicos protegen espacios y equipos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Clasificacion de informacion significa. Que haces?",
        "joke": false,
        "choices": [
            "Poner una etiqueta segun sensibilidad",
            "Ordenar archivos por nombre, pero sin validar el riesgo",
            "Comprimir carpetas viejas",
            "Borrar duplicados"
        ],
        "correct": 0,
        "exp": "La etiqueta ayuda a saber como proteger la informacion.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un equipo usa una app no aprobada para trabajo. Que haces?",
        "joke": false,
        "choices": [
            "Puede ser shadow IT y debe revisarse",
            "Siempre mejora productividad, pero sin validar el riesgo",
            "No requiere atencion",
            "Solo afecta al usuario"
        ],
        "correct": 0,
        "exp": "Las apps no aprobadas pueden quedar fuera de control.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Alguien mira tu pantalla o teclado. Que haces?",
        "joke": false,
        "choices": [
            "Es shoulder surfing",
            "Es smishing",
            "Es pharming",
            "Es ransomware, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Ver por encima del hombro tambien es una forma de robo de datos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Recibes SMS del banco con enlace urgente. Que haces?",
        "joke": false,
        "choices": [
            "Es posible smishing y debes entrar por la app oficial",
            "Abrirlo rapido, pero sin validar el riesgo",
            "Responder con tus datos",
            "Compartirlo en redes, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Los mensajes SMS tambien pueden ser phishing.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Te llaman para pedir datos con tono urgente. Que haces?",
        "joke": false,
        "choices": [
            "Puede ser vishing y debes validar por canal oficial",
            "Dar datos si suena profesional",
            "Grabar y continuar, pero sin validar el riesgo, pero sin validar el riesgo",
            "Pedir que llamen mas tarde"
        ],
        "correct": 0,
        "exp": "Las llamadas tambien se usan para engañar.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un proveedor entrega una USB en reunion. Que haces?",
        "joke": false,
        "choices": [
            "Pedir canal aprobado o revision por TI",
            "Conectarla en tu laptop, pero sin validar el riesgo",
            "Conectarla al proyector",
            "Llevarla a casa"
        ],
        "correct": 0,
        "exp": "Los medios extraibles deben revisarse antes de usarse.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "El equipo esta lento y con procesos raros. Que haces?",
        "joke": false,
        "choices": [
            "Reportar a TI porque podria ser malware",
            "Ignorarlo siempre",
            "Instalar mas programas",
            "Desactivar el antivirus, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Los cambios raros de comportamiento deben revisarse.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Hablas de proyectos confidenciales en publico. Que haces?",
        "joke": false,
        "choices": [
            "Alguien podria escuchar informacion sensible",
            "No importa si hablas bajo",
            "Solo importa si das nombres, pero sin validar el riesgo",
            "Es seguro en cafeteria"
        ],
        "correct": 0,
        "exp": "La informacion tambien se fuga por conversaciones.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un parche pide reiniciar el equipo. Que haces?",
        "joke": false,
        "choices": [
            "Reiniciar cuando sea posible para completar seguridad",
            "Cancelar para siempre, pero sin validar el riesgo, pero sin validar el riesgo",
            "Apagar sin actualizar, pero sin validar el riesgo",
            "Desinstalar el parche, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Algunos parches no quedan activos hasta reiniciar.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Preguntan que es un certificado digital. Que haces?",
        "joke": true,
        "choices": [
            "Ayuda a comprobar identidad de un sitio o servicio",
            "Es una contraseña guardada",
            "Es una imagen del navegador",
            "Es una cookie comun, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Los certificados ayudan a crear confianza en conexiones seguras.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Preguntan por firewall personal. Que haces?",
        "joke": false,
        "choices": [
            "Filtra conexiones en el propio equipo",
            "Limpia archivos temporales, pero sin validar el riesgo",
            "Ordena contraseñas",
            "Aumenta memoria"
        ],
        "correct": 0,
        "exp": "Un firewall del equipo ayuda a controlar conexiones.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Usas huella o rostro en el telefono corporativo. Que haces?",
        "joke": false,
        "choices": [
            "Agrega proteccion al desbloqueo del dispositivo",
            "Elimina todos los riesgos",
            "Comparte tu huella con todos",
            "Evita parches, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La biometria ayuda, pero no sustituye buenas practicas.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Datos en reposo, transito y uso significan. Que haces?",
        "joke": false,
        "choices": [
            "Guardados, viajando o abiertos mientras se usan",
            "Tres marcas de antivirus, pero sin validar el riesgo",
            "Tres tipos de usuarios",
            "Tres turnos de trabajo"
        ],
        "correct": 0,
        "exp": "Cada estado necesita cuidados distintos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Quieres reducir riesgos personales. Que haces?",
        "joke": false,
        "choices": [
            "Usar MFA, contraseñas unicas, parches y cuidado con enlaces",
            "Confiar solo en antivirus, pero sin validar el riesgo",
            "Cambiar de correo cada mes, pero sin validar el riesgo",
            "Evitar internet por completo, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Varios habitos juntos reducen mucho el riesgo.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Separacion de funciones busca. Que haces?",
        "joke": false,
        "choices": [
            "Que una sola persona no controle todo un proceso sensible",
            "Separar escritorios por color",
            "Ahorrar espacio, pero sin validar el riesgo",
            "Evitar reuniones, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Divide responsabilidades para evitar errores o fraude.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Baseline de seguridad significa. Que haces?",
        "joke": false,
        "choices": [
            "Configuracion minima segura que deben cumplir los equipos",
            "Foto inicial de un equipo, pero sin validar el riesgo, pero sin validar el riesgo",
            "Respaldo de vacaciones, pero sin validar el riesgo",
            "Nombre del antivirus, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Una base comun evita configuraciones inseguras.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Sale una ventana UAC que no solicitaste. Que haces?",
        "joke": false,
        "choices": [
            "Cancelar y consultar que la provoco",
            "Aprobar para cerrar rapido, pero sin validar el riesgo",
            "Ignorar y dejar abierta",
            "Reiniciar sin avisar"
        ],
        "correct": 0,
        "exp": "No apruebes permisos que no pediste.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Detectas un correo sospechoso. Que haces?",
        "joke": false,
        "choices": [
            "Reportarlo con el boton o canal definido",
            "Responder preguntando si es real, pero sin validar el riesgo",
            "Reenviarlo a todos",
            "Hacer clic para confirmar"
        ],
        "correct": 0,
        "exp": "Reportar ayuda a proteger a mas personas.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Usas equipo personal para sistemas corporativos. Que haces?",
        "joke": false,
        "choices": [
            "Puede no tener controles y capturar datos",
            "Es igual que el corporativo, pero sin validar el riesgo",
            "Es mejor porque es tuyo",
            "No requiere VPN nunca"
        ],
        "correct": 0,
        "exp": "Los equipos personales pueden no estar protegidos.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Preguntan que es un keylogger. Que haces?",
        "joke": false,
        "choices": [
            "Algo que registra lo que escribes",
            "Un teclado nuevo",
            "Un respaldo de textos, pero sin validar el riesgo",
            "Un traductor"
        ],
        "correct": 0,
        "exp": "Un keylogger puede robar contraseñas y mensajes.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Una tienda en linea ofrece precios demasiado bajos. Que haces?",
        "joke": false,
        "choices": [
            "Puede ser sitio fraudulento",
            "Siempre es promocion real, pero sin validar el riesgo",
            "Solo es diseño malo",
            "Significa que tiene HTTPS"
        ],
        "correct": 0,
        "exp": "El fraude usa ofertas atractivas para ganar clics.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Seguridad en la nube es responsabilidad de. Que haces?",
        "joke": false,
        "choices": [
            "Proveedor y cliente, cada uno en su parte",
            "Solo del proveedor",
            "Solo del cliente",
            "Solo de soporte tecnico, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En la nube la responsabilidad es compartida.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Correo firmado digitalmente significa. Que haces?",
        "joke": false,
        "choices": [
            "Se puede verificar autor e integridad",
            "Tiene una firma bonita al final, pero sin validar el riesgo",
            "Tiene letras mayusculas",
            "Viene de un jefe"
        ],
        "correct": 0,
        "exp": "Una firma digital ayuda a comprobar que no fue alterado.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Zero-day significa. Que haces?",
        "joke": false,
        "choices": [
            "Falla nueva sin parche disponible",
            "Un respaldo diario, pero sin validar el riesgo",
            "Un equipo sin uso",
            "Un correo sin leer"
        ],
        "correct": 0,
        "exp": "Es una falla que aun no tiene solucion publicada.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "SOC significa en la practica. Que haces?",
        "joke": false,
        "choices": [
            "Equipo que monitorea y responde alertas de seguridad",
            "Area que compra equipos",
            "Sistema de nomina, pero sin validar el riesgo",
            "Mesa de ayuda general, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "El SOC vigila señales de ataques o incidentes.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Capacitacion de seguridad sirve para. Que haces?",
        "joke": false,
        "choices": [
            "Reconocer riesgos y actuar mejor",
            "Castigar usuarios",
            "Quitar trabajo",
            "Reemplazar controles tecnicos, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La practica frecuente mejora la respuesta.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Evento e incidente de seguridad se diferencian en que. Que haces?",
        "joke": true,
        "choices": [
            "Un evento se observa; un incidente afecta o puede afectar la seguridad",
            "Son identicos, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Evento siempre es peor, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Incidente no se reporta, pero sin validar el riesgo, aunque no deja evidencia clara"
        ],
        "correct": 0,
        "exp": "No todo evento es incidente, pero puede convertirse en uno.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "La empresa monitorea sistemas corporativos. Que haces?",
        "joke": false,
        "choices": [
            "Debe estar avisado en politicas de uso",
            "Nunca puede hacerlo",
            "Solo puede mirar correos personales, pero sin validar el riesgo",
            "No requiere reglas"
        ],
        "correct": 0,
        "exp": "El monitoreo debe ser claro y proporcional.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Tu telefono se conecta solo a WiFi conocidas. Que haces?",
        "joke": false,
        "choices": [
            "Puede caer en una red falsa con el mismo nombre",
            "Siempre es mas seguro",
            "Ahorra bateria, pero sin validar el riesgo",
            "Bloquea phishing, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Un atacante puede imitar nombres de redes publicas.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "SIM swapping significa. Que haces?",
        "joke": false,
        "choices": [
            "Alguien logra mover tu numero a otra SIM",
            "Cambiar de telefono normalmente, pero sin validar el riesgo",
            "Perder señal por viaje",
            "Usar dos chips legales"
        ],
        "correct": 0,
        "exp": "Si roban tu numero, pueden recibir codigos SMS.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Privacidad y seguridad se relacionan asi. Que haces?",
        "joke": false,
        "choices": [
            "Seguridad protege datos; privacidad define uso adecuado",
            "Son lo mismo, pero sin validar el riesgo, pero sin validar el riesgo",
            "Privacidad solo es marketing",
            "Seguridad elimina privacidad"
        ],
        "correct": 0,
        "exp": "Un dato puede estar seguro pero usarse mal.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Las opciones por defecto de una app deben ser. Que haces?",
        "joke": false,
        "choices": [
            "Seguras para evitar errores del usuario",
            "Las mas rapidas aunque riesgosas, pero sin validar el riesgo",
            "Las mas abiertas posible",
            "Las mismas para todos sin pensar"
        ],
        "correct": 0,
        "exp": "Los valores por defecto influyen en la seguridad diaria.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Vas a tirar documentos con datos personales. Que haces?",
        "joke": false,
        "choices": [
            "Triturarlos o destruirlos de forma segura",
            "Tirarlos en basura normal",
            "Romperlos en dos",
            "Guardarlos en el escritorio, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "El papel tambien puede causar fuga de informacion.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Recibes correo de soporte Microsoft 365 con enlace urgente. Que haces?",
        "joke": false,
        "choices": [
            "Validar antes de hacer clic o ingresar datos",
            "Entrar porque usa marca conocida, pero sin validar el riesgo",
            "Responder con tu clave",
            "Reenviarlo a externos"
        ],
        "correct": 0,
        "exp": "Las marcas conocidas se usan mucho en phishing.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "BYOD significa usar dispositivo personal para trabajo. Que haces?",
        "joke": false,
        "choices": [
            "Debe cumplir reglas y controles definidos",
            "Siempre esta prohibido",
            "No requiere cuidado",
            "Evita toda responsabilidad, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "Si se permite, debe estar regulado.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un mensaje pide aprobar una compra urgente. Que haces?",
        "joke": false,
        "choices": [
            "Confirmar por otro canal antes de actuar",
            "Obedecer si parece venir del jefe, pero sin validar el riesgo",
            "Comprar y luego preguntar",
            "Mandar claves por foto"
        ],
        "correct": 0,
        "exp": "La urgencia es una señal comun de fraude.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un archivo pide contraseña para abrirse desde un correo raro. Que haces?",
        "joke": false,
        "choices": [
            "No abrir y reportar si no esperabas el archivo",
            "Abrirlo para revisar rapido",
            "Pedir contraseña al remitente raro, pero sin validar el riesgo",
            "Subirlo a una nube personal"
        ],
        "correct": 0,
        "exp": "Los archivos protegidos pueden evadir revisiones automaticas.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un link acortado llega por chat externo. Que haces?",
        "joke": false,
        "choices": [
            "Validar el destino antes de abrir",
            "Abrirlo si viene con emoji",
            "Mandarlo a otros",
            "Ignorarlo sin avisar si parece laboral"
        ],
        "correct": 0,
        "exp": "Los links acortados ocultan el destino real.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un contacto pide codigos de verificacion por mensaje. Que haces?",
        "joke": false,
        "choices": [
            "Nunca compartir codigos de verificacion",
            "Mandarlos si es confianza",
            "Enviar solo el ultimo digito, pero sin validar el riesgo",
            "Pedir que los borre despues"
        ],
        "correct": 0,
        "exp": "Los codigos son una llave de acceso temporal.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Ves un equipo desbloqueado de otro usuario. Que haces?",
        "joke": false,
        "choices": [
            "Avisar o bloquearlo sin revisar informacion",
            "Leer la pantalla",
            "Mandar un mensaje desde su cuenta, pero sin validar el riesgo",
            "Cambiar configuracion"
        ],
        "correct": 0,
        "exp": "Respetar sesiones ajenas tambien es seguridad.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "Un correo pide descargar una factura desde una pagina nueva. Que haces?",
        "joke": false,
        "choices": [
            "Validar proveedor y dominio antes de descargar",
            "Descargar y abrir rapido",
            "Compartir con contabilidad sin revisar, pero sin validar el riesgo",
            "Usar una computadora personal"
        ],
        "correct": 0,
        "exp": "Las facturas falsas son vector comun de malware.",
        "fw": [
            12,
            -12,
            -10,
            -10
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    }
]
};

/**
 * Baraja opciones conservando correct, fw y rep.
 * Asi la respuesta correcta no queda siempre en la posicion 0.
 */
function shuffleQuestionOptions(question) {
  const items = question.choices.map((choice, index) => ({
    choice,
    fw: Array.isArray(question.fw) ? question.fw[index] : undefined,
    rep: Array.isArray(question.rep) ? question.rep[index] : undefined,
    originalIndex: index,
  }));

  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  return {
    ...question,
    choices: items.map((item) => item.choice),
    correct: items.findIndex((item) => item.originalIndex === question.correct),
    fw: Array.isArray(question.fw) ? items.map((item) => item.fw) : question.fw,
    rep: Array.isArray(question.rep) ? items.map((item) => item.rep) : question.rep,
  };
}

function normalizeQuestionBank(questionBank) {
  return Object.fromEntries(
    Object.entries(questionBank).map(([level, questions]) => [
      level,
      questions.map((question) => shuffleQuestionOptions(question)),
    ])
  );
}

export const QB = normalizeQuestionBank(QB_RAW);
export const QB_EASY = QB.easy;
export default QB;
