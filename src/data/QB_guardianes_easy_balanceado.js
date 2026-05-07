// Banco de preguntas Guardianes - Nivel fácil
// Revaluado: 100 preguntas únicas, tono usuario final y respuestas coherentes.
// Estructura compatible con src/data/questions.js

const QB_RAW = {
  "easy": [
    {
      "q": "Recibes un correo de Recursos Humanos con un enlace para actualizar tus datos personales, pero el dominio no es el oficial. ¿Cuál es la forma correcta de actuar?",
      "joke": true,
      "choices": [
        "No abrir el enlace y reportar el correo por el canal definido",
        "Responder con tus datos para no retrasar el trámite",
        "Reenviar el correo a varios compañeros",
        "Abrir el enlace desde el celular personal"
      ],
      "correct": 0,
      "exp": "Un dominio extraño y una solicitud de datos personales son señales de phishing.",
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
      "q": "Un compañero te pide tu usuario y contraseña para terminar un reporte urgente. ¿Qué opción es más segura?",
      "joke": false,
      "choices": [
        "No compartir tu cuenta y pedir que solicite acceso por el proceso correcto",
        "Prestarla solo durante unos minutos",
        "Mandarla por chat para que quede evidencia",
        "Cambiarla después de prestarla"
      ],
      "correct": 0,
      "exp": "Las cuentas son personales; cualquier acción quedaría asociada a ti.",
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
      "q": "Un enlace parece corporativo, pero al pasar el mouse muestra una dirección diferente. ¿Qué deberías hacer primero?",
      "joke": false,
      "choices": [
        "No hacer clic y validar el enlace por un canal oficial",
        "Abrirlo porque el texto se ve correcto",
        "Copiarlo y probarlo en incógnito",
        "Pedir a alguien más que lo abra"
      ],
      "correct": 0,
      "exp": "El texto visible puede engañar; el destino real del enlace es lo importante.",
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
      "q": "Encuentras una memoria USB desconocida en una sala de juntas. ¿Cuál es la mejor respuesta?",
      "joke": false,
      "choices": [
        "Entregarla a Seguridad o TI sin conectarla",
        "Conectarla para identificar al dueño",
        "Abrirla en un equipo viejo",
        "Guardarla por si alguien la reclama"
      ],
      "correct": 0,
      "exp": "Una USB desconocida puede contener software malicioso.",
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
      "q": "Tu computadora muestra una pantalla indicando que tus archivos fueron cifrados y pide dinero. ¿Qué decisión evita mayor riesgo?",
      "joke": false,
      "choices": [
        "Desconectar la red y reportar de inmediato",
        "Pagar para recuperar rápido",
        "Reiniciar varias veces",
        "Buscar una solución en internet antes de avisar"
      ],
      "correct": 0,
      "exp": "Puede ser ransomware; la prioridad es contener y reportar.",
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
      "q": "Necesitas crear una contraseña nueva para una cuenta importante. ¿Cómo conviene responder?",
      "joke": false,
      "choices": [
        "Usar una frase larga que no incluya datos personales",
        "Usar tu fecha de nacimiento con símbolos",
        "Usar el nombre de tu mascota",
        "Repetir una contraseña que ya recuerdas"
      ],
      "correct": 0,
      "exp": "Las frases largas y únicas son mejores que datos personales.",
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
      "q": "Recibes varias solicitudes de aprobación MFA que no iniciaste. ¿Qué acción protege mejor tus accesos?",
      "joke": false,
      "choices": [
        "Rechazarlas y avisar a Seguridad o TI",
        "Aprobar una para que dejen de llegar",
        "Apagar el teléfono por un rato",
        "Esperar a que se resuelva solo"
      ],
      "correct": 0,
      "exp": "Solicitudes MFA inesperadas pueden indicar que alguien tiene tu contraseña.",
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
      "q": "Alguien que dice ser soporte te llama y pide instalar una herramienta de control remoto. ¿Qué opción ayuda a cuidar la información?",
      "joke": false,
      "choices": [
        "Cortar la llamada y validar con el canal oficial de soporte",
        "Instalarla si conoce tu nombre",
        "Darle acceso solo para revisar",
        "Pedirle que mande un correo y seguir sus pasos"
      ],
      "correct": 0,
      "exp": "El soporte real debe verificarse por canales oficiales.",
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
      "q": "Una persona intenta entrar contigo por una puerta restringida sin identificarse. ¿Cuál sería el paso adecuado?",
      "joke": false,
      "choices": [
        "Pedir que se registre o use su propio acceso",
        "Dejarla pasar por cortesía",
        "Abrirle si trae prisa",
        "Acompañarla sin registrarla"
      ],
      "correct": 0,
      "exp": "Evitar el tailgating protege áreas restringidas.",
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
      "q": "El navegador muestra una alerta de certificado al entrar a un portal de proveedor. ¿Qué comportamiento es correcto?",
      "joke": false,
      "choices": [
        "No continuar y validar con TI o con el proveedor",
        "Aceptar la excepción si ya usaste el sitio",
        "Cambiar de navegador",
        "Desactivar la alerta temporalmente"
      ],
      "correct": 0,
      "exp": "Una alerta de certificado puede indicar un sitio falso o una conexión insegura.",
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
      "q": "Usas la misma contraseña en varias páginas. ¿Qué acción reduce el riesgo?",
      "joke": false,
      "choices": [
        "Cambiar a contraseñas únicas por servicio",
        "Mantenerla si es larga",
        "Cambiar solo la del correo",
        "Anotarla para no olvidarla"
      ],
      "correct": 0,
      "exp": "Si una contraseña se filtra, pueden probarla en otras cuentas.",
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
      "q": "Te preguntan qué significa la triada CIA en seguridad de la información. ¿Cómo debes manejar la situación?",
      "joke": false,
      "choices": [
        "Confidencialidad, integridad y disponibilidad",
        "Control, identidad y auditoría",
        "Cifrado, internet y acceso",
        "Cliente, información y archivo"
      ],
      "correct": 0,
      "exp": "La triada CIA resume los tres objetivos básicos de seguridad.",
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
      "q": "Te llega un archivo llamado Factura.pdf.exe. ¿Qué opción sigue las buenas prácticas?",
      "joke": false,
      "choices": [
        "No abrirlo y reportarlo",
        "Abrirlo porque parece una factura",
        "Renombrarlo como PDF",
        "Mandarlo a un compañero para revisar"
      ],
      "correct": 0,
      "exp": "La doble extensión puede ocultar un archivo ejecutable malicioso.",
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
      "q": "Nómina te avisa que recibió una solicitud para cambiar tu cuenta bancaria. ¿Cuál respuesta es más prudente?",
      "joke": false,
      "choices": [
        "Reportarlo porque puede ser suplantación",
        "Esperar a que Nómina lo resuelva sola",
        "Cambiar también tu correo",
        "Responder que no fuiste tú y no hacer nada más"
      ],
      "correct": 0,
      "exp": "Las solicitudes bancarias inesperadas pueden ser fraude.",
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
      "q": "Te levantas de tu lugar por unos minutos. ¿Qué harías para evitar un incidente?",
      "joke": false,
      "choices": [
        "Bloquear la sesión antes de irte",
        "Dejar el equipo abierto si estás cerca",
        "Cerrar solo el navegador",
        "Bajar el brillo de pantalla"
      ],
      "correct": 0,
      "exp": "Un equipo desbloqueado permite que otra persona use tus accesos.",
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
      "q": "Necesitas revisar correo mientras estás en una cafetería con WiFi abierto. ¿Qué medida es la adecuada?",
      "joke": false,
      "choices": [
        "Usar red móvil o VPN corporativa si aplica",
        "Conectarte porque el sitio usa HTTPS",
        "Pedir la clave del café y entrar",
        "Pedir a otra persona que revise tu correo"
      ],
      "correct": 0,
      "exp": "Las redes abiertas pueden ser inseguras o falsas.",
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
      "q": "Ves un código QR pegado encima de un cartel oficial. ¿Qué respuesta protege mejor a la empresa?",
      "joke": false,
      "choices": [
        "No escanearlo y reportarlo",
        "Escanearlo si ofrece descuento",
        "Tomarle foto para probar después",
        "Compartirlo con el equipo"
      ],
      "correct": 0,
      "exp": "Un QR reemplazado puede llevar a una página falsa.",
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
      "q": "Una app de linterna pide acceso a contactos, micrófono y ubicación. ¿Cuál es la reacción correcta?",
      "joke": true,
      "choices": [
        "No instalarla porque pide permisos excesivos",
        "Instalarla y quitar permisos después",
        "Instalarla si tiene buenas reseñas",
        "Aceptar permisos solo una vez"
      ],
      "correct": 0,
      "exp": "Una app debe pedir solo permisos necesarios.",
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
      "q": "Un documento con datos de clientes queda olvidado en la impresora. ¿Qué opción mantiene la seguridad?",
      "joke": false,
      "choices": [
        "Resguardarlo y avisar por el canal correspondiente",
        "Dejarlo por si regresa el dueño",
        "Tomarle foto y enviarla por chat",
        "Tirarlo a la basura común"
      ],
      "correct": 0,
      "exp": "Los documentos impresos también pueden exponer información.",
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
      "q": "Tu director pide por correo comprar tarjetas de regalo fuera de horario. ¿Cómo debes proceder?",
      "joke": false,
      "choices": [
        "Validar por llamada o canal oficial antes de actuar",
        "Comprar si el mensaje parece urgente",
        "Enviar los códigos y pedir factura",
        "Responder pidiendo más detalles"
      ],
      "correct": 0,
      "exp": "Las compras urgentes de tarjetas suelen usarse en fraudes.",
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
      "q": "Tu equipo pide aplicar actualizaciones de seguridad. ¿Cuál es la forma correcta de actuar?",
      "joke": false,
      "choices": [
        "Guardar tu trabajo y actualizar en cuanto sea posible",
        "Posponerlo indefinidamente",
        "Cancelar si todo funciona bien",
        "Desactivar las alertas"
      ],
      "correct": 0,
      "exp": "Las actualizaciones corrigen fallas conocidas.",
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
      "q": "Debes enviar información sensible. ¿Qué opción es más segura?",
      "joke": false,
      "choices": [
        "Usar un canal aprobado y protegido",
        "Mandarla por correo normal si urge",
        "Ponerla en un ZIP sin contraseña",
        "Dividirla en varios correos"
      ],
      "correct": 0,
      "exp": "La información sensible requiere controles adicionales.",
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
      "q": "Un equipo compartido ofrece guardar tu contraseña. ¿Qué deberías hacer primero?",
      "joke": false,
      "choices": [
        "Rechazar y cerrar sesión al terminar",
        "Aceptar si es equipo de oficina",
        "Guardar solo contraseñas simples",
        "Borrar el historial después"
      ],
      "correct": 0,
      "exp": "No debes guardar contraseñas en equipos compartidos.",
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
      "q": "Un mensaje usa miedo o urgencia para pedirte información. ¿Cuál es la mejor respuesta?",
      "joke": false,
      "choices": [
        "Detenerte y validar antes de responder",
        "Responder rápido para evitar problemas",
        "Pedir que lo manden por correo",
        "Hacerlo si dice venir de un jefe"
      ],
      "correct": 0,
      "exp": "La ingeniería social busca que actúes sin pensar.",
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
      "q": "Te preguntan qué es malware. ¿Qué decisión evita mayor riesgo?",
      "joke": false,
      "choices": [
        "Software creado para dañar, robar o espiar",
        "Un error normal del sistema",
        "Una actualización pesada",
        "Un archivo grande"
      ],
      "correct": 0,
      "exp": "Malware es código malicioso.",
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
      "q": "El antivirus bloquea un archivo descargado. ¿Cómo conviene responder?",
      "joke": false,
      "choices": [
        "No forzar la apertura y consultar a TI",
        "Moverlo a una carpeta excluida",
        "Desactivar el antivirus un momento",
        "Probarlo en otro equipo"
      ],
      "correct": 0,
      "exp": "No debes saltarte una protección de seguridad.",
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
      "q": "Un proveedor pide acceso a un sistema interno. ¿Qué acción protege mejor tus accesos?",
      "joke": false,
      "choices": [
        "Dar solo acceso aprobado y necesario",
        "Prestar tu cuenta temporalmente",
        "Dar permisos amplios para evitar bloqueos",
        "Enviar capturas del sistema"
      ],
      "correct": 0,
      "exp": "Los terceros deben tener acceso limitado y autorizado.",
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
      "q": "Una pregunta de seguridad pide el nombre de tu mascota. ¿Qué opción ayuda a cuidar la información?",
      "joke": false,
      "choices": [
        "No usar respuestas reales fáciles de buscar",
        "Usar exactamente el dato real",
        "Publicarlo para recordarlo",
        "Usar la misma respuesta en todos lados"
      ],
      "correct": 0,
      "exp": "Esa información puede encontrarse en redes sociales.",
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
      "q": "Quieres respaldar información importante. ¿Cuál sería el paso adecuado?",
      "joke": false,
      "choices": [
        "Tener copias separadas y probar restauración",
        "Guardar todo en el mismo equipo",
        "Respaldar solo cuando algo falle",
        "Confiar en una sola memoria USB"
      ],
      "correct": 0,
      "exp": "Un respaldo sirve si realmente se puede restaurar.",
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
      "q": "Te preguntan para qué sirve un EDR o antivirus avanzado. ¿Qué comportamiento es correcto?",
      "joke": false,
      "choices": [
        "Detecta comportamientos sospechosos y ayuda a responder",
        "Hace que internet vaya más rápido",
        "Reemplaza todas las políticas",
        "Cifra todos los documentos"
      ],
      "correct": 0,
      "exp": "Estas herramientas ayudan a detectar actividad anormal.",
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
      "q": "Vas a proyectar pantalla en una reunión. ¿Qué acción reduce el riesgo?",
      "joke": false,
      "choices": [
        "Silenciar notificaciones antes de presentar",
        "Confiar en que nadie mira",
        "Cerrar solo el correo",
        "Tapar la pantalla si aparece algo"
      ],
      "correct": 0,
      "exp": "Las notificaciones pueden mostrar información sensible.",
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
      "q": "Un sistema prueba muchas contraseñas hasta acertar. ¿Cómo debes manejar la situación?",
      "joke": false,
      "choices": [
        "Es un ataque de fuerza bruta",
        "Es una copia de seguridad",
        "Es una actualización",
        "Es una encuesta de seguridad"
      ],
      "correct": 0,
      "exp": "La fuerza bruta intenta adivinar claves automáticamente.",
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
      "q": "Te piden cambiar la contraseña y piensas usar Verano1, Verano2, Verano3. ¿Qué opción sigue las buenas prácticas?",
      "joke": false,
      "choices": [
        "Evitar patrones predecibles",
        "Usar el patrón porque es fácil",
        "Cambiar solo una letra",
        "Usar el mes actual siempre"
      ],
      "correct": 0,
      "exp": "Los patrones simples son fáciles de adivinar.",
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
      "q": "Quieres guardar muchas contraseñas distintas. ¿Cuál respuesta es más prudente?",
      "joke": false,
      "choices": [
        "Usar un gestor de contraseñas aprobado",
        "Guardarlas en una nota sin clave",
        "Mandártelas por chat",
        "Usar una sola para todo"
      ],
      "correct": 0,
      "exp": "Un gestor ayuda a usar claves únicas sin memorizarlas todas.",
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
      "q": "Vas a desechar una memoria USB corporativa. ¿Qué harías para evitar un incidente?",
      "joke": true,
      "choices": [
        "Solicitar borrado seguro o destrucción controlada",
        "Borrar archivos y regalarla",
        "Formatearla rápido",
        "Tirarla a la basura"
      ],
      "correct": 0,
      "exp": "Borrar archivos no siempre elimina la información.",
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
      "q": "Trabajas con datos sensibles en un lugar público. ¿Qué medida es la adecuada?",
      "joke": false,
      "choices": [
        "Evitarlo o usar filtro de privacidad",
        "Bajar un poco el brillo",
        "Confiar en que nadie entiende",
        "Sentarte junto a la ventana"
      ],
      "correct": 0,
      "exp": "Alguien puede ver tu pantalla en espacios públicos.",
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
      "q": "Un sitio usa HTTPS. ¿Qué respuesta protege mejor a la empresa?",
      "joke": false,
      "choices": [
        "Validar el sitio aunque la conexión vaya cifrada",
        "Confiar siempre porque tiene candado",
        "Ingresar datos sin revisar",
        "Pensar que evita todo fraude"
      ],
      "correct": 0,
      "exp": "HTTPS ayuda, pero no prueba que el sitio sea legítimo.",
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
      "q": "Te conectas desde una red externa para trabajar. ¿Cuál es la reacción correcta?",
      "joke": false,
      "choices": [
        "Usar VPN corporativa si aplica",
        "Entrar directo sin revisión",
        "Usar cualquier WiFi abierto",
        "Compartir red con desconocidos"
      ],
      "correct": 0,
      "exp": "La VPN protege mejor el acceso a recursos internos.",
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
      "q": "Una reunión externa pide instalar un complemento desconocido. ¿Qué opción mantiene la seguridad?",
      "joke": false,
      "choices": [
        "Validar antes de instalarlo",
        "Instalarlo si la reunión es urgente",
        "Reenviarlo a todos para probar",
        "Ignorarlo sin avisar"
      ],
      "correct": 0,
      "exp": "Los falsos complementos pueden instalar malware.",
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
      "q": "Un documento de Office pide habilitar macros. ¿Cómo debes proceder?",
      "joke": false,
      "choices": [
        "No habilitarlas si el origen no está validado",
        "Activarlas para ver el contenido",
        "Activarlas solo un minuto",
        "Pedir a otro que lo abra"
      ],
      "correct": 0,
      "exp": "Las macros pueden ejecutar código malicioso.",
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
      "q": "Una laptop tiene cifrado de disco. ¿Cuál es la forma correcta de actuar?",
      "joke": false,
      "choices": [
        "Mantenerlo activo para proteger datos si el equipo se pierde",
        "Desactivarlo para ahorrar tiempo",
        "Pensar que evita correos phishing",
        "Creer que aumenta la batería"
      ],
      "correct": 0,
      "exp": "El cifrado protege información almacenada.",
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
      "q": "Una página muestra errores internos con detalles técnicos. ¿Qué opción es más segura?",
      "joke": false,
      "choices": [
        "Reportarlo porque puede revelar información sensible",
        "Compartir el error en redes",
        "Ignorarlo siempre",
        "Usarlo para intentar acceder"
      ],
      "correct": 0,
      "exp": "Los errores técnicos no deben exponerse al usuario.",
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
      "q": "Te preguntan para qué sirven los logs. ¿Qué deberías hacer primero?",
      "joke": false,
      "choices": [
        "Registrar acciones para investigar y detectar problemas",
        "Ocupar espacio sin utilidad",
        "Decorar reportes",
        "Reemplazar respaldos"
      ],
      "correct": 0,
      "exp": "Sin registros es difícil saber qué ocurrió.",
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
      "q": "Autenticación y autorización parecen lo mismo. ¿Cuál es la mejor respuesta?",
      "joke": false,
      "choices": [
        "Recordar que autenticación confirma identidad y autorización define permisos",
        "Tratarlas como una sola cosa",
        "Pensar que autorización va antes del login",
        "Usarlas solo en bancos"
      ],
      "correct": 0,
      "exp": "Primero se valida identidad y luego permisos.",
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
      "q": "Una persona deja la empresa. ¿Qué decisión evita mayor riesgo?",
      "joke": false,
      "choices": [
        "Cerrar sus accesos de inmediato según proceso",
        "Dejarlos por si regresa",
        "Cerrarlos cuando alguien lo recuerde",
        "Prestar su cuenta al reemplazo"
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
      "q": "Descargas software desde una página no oficial. ¿Cómo conviene responder?",
      "joke": false,
      "choices": [
        "Evitarlo porque puede venir alterado o con malware",
        "Confiar porque es gratis",
        "Instalarlo para ahorrar tiempo",
        "Compartirlo con otros"
      ],
      "correct": 0,
      "exp": "Los sitios no oficiales son una fuente común de malware.",
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
      "q": "Subes documentos corporativos a una nube personal. ¿Qué acción protege mejor tus accesos?",
      "joke": false,
      "choices": [
        "Evitarlo porque salen de canales protegidos",
        "Hacerlo si la carpeta es privada",
        "Usarlo para ahorrar espacio",
        "Compartir el enlace solo a conocidos"
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
      "q": "Dejas Bluetooth visible todo el tiempo. ¿Qué opción ayuda a cuidar la información?",
      "joke": false,
      "choices": [
        "Desactivarlo cuando no lo necesites",
        "Mantenerlo visible siempre",
        "Compartirlo con desconocidos",
        "Ignorar solicitudes de conexión"
      ],
      "correct": 0,
      "exp": "Conviene activar conexiones solo cuando se necesitan.",
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
      "q": "Pierdes una laptop corporativa. ¿Cuál sería el paso adecuado?",
      "joke": false,
      "choices": [
        "Reportar de inmediato a TI o Seguridad",
        "Esperar a ver si aparece",
        "Comprar otra primero",
        "Cambiar solo tus contraseñas personales"
      ],
      "correct": 0,
      "exp": "El reporte rápido permite bloquear o borrar el equipo.",
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
      "q": "Recibes un simulacro de phishing. ¿Qué comportamiento es correcto?",
      "joke": false,
      "choices": [
        "Reportarlo como si fuera real",
        "Ignorarlo porque es prueba",
        "Compartirlo para bromear",
        "Responder al remitente"
      ],
      "correct": 0,
      "exp": "El objetivo es practicar la reacción correcta.",
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
      "q": "Un enlace visible no coincide con el destino real. ¿Qué acción reduce el riesgo?",
      "joke": false,
      "choices": [
        "No hacer clic y reportarlo",
        "Confiar si el texto parece formal",
        "Abrirlo en modo incógnito",
        "Pedir a un compañero que lo abra"
      ],
      "correct": 0,
      "exp": "El texto del enlace puede ocultar otro destino.",
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
      "q": "Comparten capturas de clientes por WhatsApp. ¿Cómo debes manejar la situación?",
      "joke": true,
      "choices": [
        "Usar canales corporativos aprobados",
        "Hacerlo si el grupo es interno",
        "Borrarlas después y listo",
        "Mandarlas solo de noche"
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
      "q": "AnyDesk aparece en una solicitud de soporte inesperada. ¿Qué opción sigue las buenas prácticas?",
      "joke": false,
      "choices": [
        "Sospechar y validar con TI",
        "Aceptar si el antivirus lo permite",
        "Instalar y ver qué pasa",
        "Dar acceso solo lectura"
      ],
      "correct": 0,
      "exp": "Las herramientas remotas legítimas también se usan en fraudes.",
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
      "q": "Te preguntan qué datos son sensibles. ¿Cuál respuesta es más prudente?",
      "joke": false,
      "choices": [
        "Identificar salud, biometría, finanzas y datos personales delicados",
        "Marcar solo el nombre de la empresa",
        "Incluir el color favorito",
        "Usar la extensión telefónica pública"
      ],
      "correct": 0,
      "exp": "Algunos datos requieren más protección que otros.",
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
      "q": "Te hablan de SPF, DKIM y DMARC. ¿Qué harías para evitar un incidente?",
      "joke": false,
      "choices": [
        "Reconocer que ayudan a reducir correos falsos",
        "Pensar que cifran todos los adjuntos",
        "Confundirlos con antivirus",
        "Usarlos como redes WiFi"
      ],
      "correct": 0,
      "exp": "Estos controles ayudan contra suplantación de correo.",
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
      "q": "Un familiar quiere usar tu laptop corporativa. ¿Qué medida es la adecuada?",
      "joke": false,
      "choices": [
        "No permitirlo porque es equipo de trabajo",
        "Dejarlo si solo estudia",
        "Crear una carpeta para esa persona",
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
      "q": "Sospechas que tu cuenta fue comprometida. ¿Qué respuesta protege mejor a la empresa?",
      "joke": false,
      "choices": [
        "Reportar de inmediato y seguir indicaciones",
        "Cambiar la clave y no avisar",
        "Borrar correos raros",
        "Esperar a ver si vuelve a pasar"
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
      "q": "El navegador avisa que tu clave apareció en una filtración. ¿Cuál es la reacción correcta?",
      "joke": false,
      "choices": [
        "Cambiarla donde se usó y no reutilizarla",
        "Ignorar si aún funciona",
        "Esperar confirmación pública",
        "Solo cerrar sesión"
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
      "q": "Te preguntan cuál es un control físico. ¿Qué opción mantiene la seguridad?",
      "joke": false,
      "choices": [
        "Tarjeta de acceso, cámara o guardia",
        "Antivirus",
        "Cifrado de correo",
        "Contraseña larga"
      ],
      "correct": 0,
      "exp": "Los controles físicos protegen espacios y equipos.",
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
      "q": "Clasificar información significa. ¿Cómo debes proceder?",
      "joke": false,
      "choices": [
        "Etiquetarla según su sensibilidad",
        "Ordenar archivos por nombre",
        "Comprimir carpetas viejas",
        "Borrar duplicados"
      ],
      "correct": 0,
      "exp": "La clasificación indica cómo debe protegerse la información.",
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
      "q": "Un equipo usa una app no aprobada para trabajar. ¿Cuál es la forma correcta de actuar?",
      "joke": false,
      "choices": [
        "Reportarla para revisar si es shadow IT",
        "Usarla porque ayuda",
        "Compartir accesos con el equipo",
        "Ignorarla porque solo afecta al usuario"
      ],
      "correct": 0,
      "exp": "Las apps no aprobadas quedan fuera de control.",
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
      "q": "Alguien mira tu pantalla o teclado mientras escribes. ¿Qué opción es más segura?",
      "joke": false,
      "choices": [
        "Proteger tu pantalla porque puede ser shoulder surfing",
        "Pensar que no importa",
        "Dictar la contraseña más rápido",
        "Mostrarle el proceso completo"
      ],
      "correct": 0,
      "exp": "Ver por encima del hombro también puede robar información.",
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
      "q": "Recibes un SMS del banco con un enlace urgente. ¿Qué deberías hacer primero?",
      "joke": false,
      "choices": [
        "Entrar por la app o sitio oficial, no por el enlace",
        "Abrirlo rápido",
        "Responder con tus datos",
        "Compartirlo en redes"
      ],
      "correct": 0,
      "exp": "Los SMS también pueden usarse para phishing.",
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
      "q": "Te llaman para pedir datos con tono urgente. ¿Cuál es la mejor respuesta?",
      "joke": false,
      "choices": [
        "Validar por canal oficial antes de dar información",
        "Dar datos si suena profesional",
        "Grabar y continuar",
        "Pedir que llamen más tarde"
      ],
      "correct": 0,
      "exp": "Las llamadas también se usan para engañar.",
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
      "q": "Un proveedor entrega una USB en una reunión. ¿Qué decisión evita mayor riesgo?",
      "joke": false,
      "choices": [
        "Pedir un canal aprobado o revisión por TI",
        "Conectarla en tu laptop",
        "Conectarla al proyector",
        "Llevarla a casa"
      ],
      "correct": 0,
      "exp": "Los medios extraíbles deben revisarse antes de usarse.",
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
      "q": "Tu equipo está lento y muestra procesos raros. ¿Cómo conviene responder?",
      "joke": false,
      "choices": [
        "Reportar a TI porque podría ser malware",
        "Ignorarlo siempre",
        "Instalar más programas",
        "Desactivar el antivirus"
      ],
      "correct": 0,
      "exp": "Los cambios extraños de comportamiento deben revisarse.",
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
      "q": "Hablas de proyectos confidenciales en público. ¿Qué acción protege mejor tus accesos?",
      "joke": false,
      "choices": [
        "Evitarlo porque alguien podría escuchar información sensible",
        "Hablar bajo y continuar",
        "Usar nombres abreviados",
        "Confiar en que nadie entiende"
      ],
      "correct": 0,
      "exp": "La información también puede fugarse por conversaciones.",
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
      "q": "Un parche pide reiniciar el equipo. ¿Qué opción ayuda a cuidar la información?",
      "joke": false,
      "choices": [
        "Reiniciar cuando sea posible para completar la actualización",
        "Cancelarlo para siempre",
        "Apagar sin actualizar",
        "Desinstalar el parche"
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
      "q": "Te preguntan qué es un certificado digital. ¿Cuál sería el paso adecuado?",
      "joke": true,
      "choices": [
        "Un elemento que ayuda a comprobar la identidad de un sitio o servicio",
        "Una contraseña guardada",
        "Una imagen del navegador",
        "Una cookie común"
      ],
      "correct": 0,
      "exp": "Los certificados ayudan a crear conexiones confiables.",
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
      "q": "Te preguntan qué hace un firewall personal. ¿Qué comportamiento es correcto?",
      "joke": false,
      "choices": [
        "Filtrar conexiones en el propio equipo",
        "Limpiar archivos temporales",
        "Ordenar contraseñas",
        "Aumentar memoria"
      ],
      "correct": 0,
      "exp": "Un firewall ayuda a controlar conexiones.",
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
      "q": "Usas huella o rostro en el teléfono corporativo. ¿Qué acción reduce el riesgo?",
      "joke": false,
      "choices": [
        "Mantenerlo porque agrega protección al desbloqueo",
        "Pensar que elimina todos los riesgos",
        "Compartir tu huella",
        "Evitar actualizaciones"
      ],
      "correct": 0,
      "exp": "La biometría ayuda, pero no sustituye buenas prácticas.",
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
      "q": "Datos en reposo, tránsito y uso significan. ¿Cómo debes manejar la situación?",
      "joke": false,
      "choices": [
        "Guardados, viajando o abiertos mientras se usan",
        "Tres marcas de antivirus",
        "Tres tipos de usuarios",
        "Tres turnos de trabajo"
      ],
      "correct": 0,
      "exp": "Cada estado de los datos requiere cuidados distintos.",
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
      "q": "Quieres reducir riesgos en tus cuentas. ¿Qué opción sigue las buenas prácticas?",
      "joke": false,
      "choices": [
        "Usar MFA, contraseñas únicas, parches y cuidado con enlaces",
        "Confiar solo en antivirus",
        "Cambiar de correo cada mes",
        "Evitar internet por completo"
      ],
      "correct": 0,
      "exp": "Varios hábitos juntos reducen mucho el riesgo.",
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
      "q": "Separación de funciones busca. ¿Cuál respuesta es más prudente?",
      "joke": false,
      "choices": [
        "Evitar que una sola persona controle todo un proceso sensible",
        "Separar escritorios por color",
        "Ahorrar espacio",
        "Evitar reuniones"
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
      "q": "Baseline de seguridad significa. ¿Qué harías para evitar un incidente?",
      "joke": false,
      "choices": [
        "Configuración mínima segura que deben cumplir los equipos",
        "Foto inicial de un equipo",
        "Respaldo de vacaciones",
        "Nombre del antivirus"
      ],
      "correct": 0,
      "exp": "Una base común evita configuraciones inseguras.",
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
      "q": "Aparece una ventana de permisos elevados que no solicitaste. ¿Qué medida es la adecuada?",
      "joke": false,
      "choices": [
        "Cancelar y consultar qué la provocó",
        "Aprobar para cerrarla rápido",
        "Ignorar y dejarla abierta",
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
      "q": "Detectas un correo sospechoso. ¿Qué respuesta protege mejor a la empresa?",
      "joke": false,
      "choices": [
        "Reportarlo con el botón o canal definido",
        "Responder preguntando si es real",
        "Reenviarlo a todos",
        "Hacer clic para confirmar"
      ],
      "correct": 0,
      "exp": "Reportar ayuda a proteger a más personas.",
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
      "q": "Usas equipo personal para sistemas corporativos. ¿Cuál es la reacción correcta?",
      "joke": false,
      "choices": [
        "Evitarlo si no cumple controles de seguridad requeridos",
        "Tratarlo igual que uno corporativo",
        "Usarlo porque es tuyo",
        "Entrar sin VPN ni controles"
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
      "q": "Te preguntan qué es un keylogger. ¿Qué opción mantiene la seguridad?",
      "joke": false,
      "choices": [
        "Algo que registra lo que escribes",
        "Un teclado nuevo",
        "Un respaldo de textos",
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
      "q": "Una tienda en línea ofrece precios demasiado bajos. ¿Cómo debes proceder?",
      "joke": false,
      "choices": [
        "Sospechar que puede ser un sitio fraudulento",
        "Confiar siempre en la promoción",
        "Comprar por rapidez",
        "Pensar que HTTPS elimina todo riesgo"
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
      "q": "Seguridad en la nube es responsabilidad de. ¿Cuál es la forma correcta de actuar?",
      "joke": false,
      "choices": [
        "Proveedor y cliente, cada uno en su parte",
        "Solo del proveedor",
        "Solo del cliente",
        "Solo de soporte técnico"
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
      "q": "Un correo firmado digitalmente indica. ¿Qué opción es más segura?",
      "joke": false,
      "choices": [
        "Que se puede verificar autor e integridad",
        "Que tiene una firma bonita al final",
        "Que viene en mayúsculas",
        "Que siempre viene de un jefe"
      ],
      "correct": 0,
      "exp": "La firma digital ayuda a comprobar que no fue alterado.",
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
      "q": "Zero-day significa. ¿Qué deberías hacer primero?",
      "joke": false,
      "choices": [
        "Falla nueva sin parche disponible",
        "Respaldo diario",
        "Equipo sin uso",
        "Correo sin leer"
      ],
      "correct": 0,
      "exp": "Es una falla que aún no tiene solución publicada.",
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
      "q": "En la práctica, un SOC es. ¿Cuál es la mejor respuesta?",
      "joke": false,
      "choices": [
        "Un equipo que monitorea y responde alertas de seguridad",
        "El área que compra equipos",
        "Un sistema de nómina",
        "Una mesa de ayuda general"
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
      "q": "La capacitación de seguridad sirve para. ¿Qué decisión evita mayor riesgo?",
      "joke": false,
      "choices": [
        "Reconocer riesgos y actuar mejor",
        "Castigar usuarios",
        "Quitar trabajo",
        "Reemplazar controles técnicos"
      ],
      "correct": 0,
      "exp": "La práctica frecuente mejora la respuesta.",
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
      "q": "Evento e incidente de seguridad se diferencian en que. ¿Cómo conviene responder?",
      "joke": true,
      "choices": [
        "Un evento se observa; un incidente afecta o puede afectar la seguridad",
        "Son idénticos",
        "Un evento siempre es peor",
        "Un incidente nunca se reporta"
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
      "q": "La empresa monitorea sistemas corporativos. ¿Qué acción protege mejor tus accesos?",
      "joke": false,
      "choices": [
        "Debe avisarlo en políticas de uso",
        "Nunca puede hacerlo",
        "Solo puede mirar correos personales",
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
      "q": "Tu teléfono se conecta automáticamente a redes WiFi conocidas. ¿Qué opción ayuda a cuidar la información?",
      "joke": false,
      "choices": [
        "Revisar porque puede caer en una red falsa con el mismo nombre",
        "Confiar siempre",
        "Usarlo para evitar datos móviles",
        "Desactivar alertas de red"
      ],
      "correct": 0,
      "exp": "Un atacante puede imitar nombres de redes públicas.",
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
      "q": "SIM swapping significa. ¿Cuál sería el paso adecuado?",
      "joke": false,
      "choices": [
        "Que alguien logra mover tu número a otra SIM",
        "Cambiar de teléfono normalmente",
        "Perder señal por viaje",
        "Usar dos chips legales"
      ],
      "correct": 0,
      "exp": "Si roban tu número, podrían recibir códigos SMS.",
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
      "q": "Privacidad y seguridad se relacionan así. ¿Qué comportamiento es correcto?",
      "joke": false,
      "choices": [
        "Seguridad protege datos; privacidad define su uso adecuado",
        "Son exactamente lo mismo",
        "Privacidad solo es marketing",
        "Seguridad elimina privacidad"
      ],
      "correct": 0,
      "exp": "Un dato puede estar seguro y aun así usarse mal.",
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
      "q": "Las opciones por defecto de una app deben ser. ¿Qué acción reduce el riesgo?",
      "joke": false,
      "choices": [
        "Seguras para evitar errores del usuario",
        "Las más rápidas aunque sean riesgosas",
        "Las más abiertas posible",
        "Las mismas para todos sin revisar"
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
      "q": "Vas a tirar documentos con datos personales. ¿Cómo debes manejar la situación?",
      "joke": false,
      "choices": [
        "Triturarlos o destruirlos de forma segura",
        "Tirarlos en basura normal",
        "Romperlos en dos",
        "Guardarlos en el escritorio"
      ],
      "correct": 0,
      "exp": "El papel también puede causar fuga de información.",
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
      "q": "Recibes correo de soporte Microsoft 365 con enlace urgente. ¿Qué opción sigue las buenas prácticas?",
      "joke": false,
      "choices": [
        "Validar antes de hacer clic o ingresar datos",
        "Entrar porque usa marca conocida",
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
      "q": "BYOD significa usar dispositivo personal para trabajo. ¿Cuál respuesta es más prudente?",
      "joke": false,
      "choices": [
        "Permitirlo solo si cumple reglas y controles definidos",
        "Permitirlo siempre",
        "Tratarlo como equipo corporativo sin revisión",
        "Usarlo para evitar controles"
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
      "q": "Un mensaje pide aprobar una compra urgente. ¿Qué harías para evitar un incidente?",
      "joke": false,
      "choices": [
        "Confirmar por otro canal antes de actuar",
        "Obedecer si parece venir del jefe",
        "Comprar y luego preguntar",
        "Mandar claves por foto"
      ],
      "correct": 0,
      "exp": "La urgencia es una señal común de fraude.",
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
      "q": "Un archivo con contraseña llega desde un correo raro. ¿Qué medida es la adecuada?",
      "joke": false,
      "choices": [
        "No abrirlo si no esperabas el archivo",
        "Abrirlo para revisar rápido",
        "Pedir la contraseña al remitente raro",
        "Subirlo a una nube personal"
      ],
      "correct": 0,
      "exp": "Los archivos protegidos pueden evadir revisiones automáticas.",
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
      "q": "Un link acortado llega por chat externo. ¿Qué respuesta protege mejor a la empresa?",
      "joke": false,
      "choices": [
        "Validar el destino antes de abrir",
        "Abrirlo si viene con emoji",
        "Mandarlo a otros",
        "Ignorarlo aunque parezca laboral"
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
      "q": "Un contacto pide códigos de verificación por mensaje. ¿Cuál es la reacción correcta?",
      "joke": false,
      "choices": [
        "Nunca compartir códigos de verificación",
        "Mandarlos si es de confianza",
        "Enviar solo el último dígito",
        "Pedir que los borre después"
      ],
      "correct": 0,
      "exp": "Los códigos son llaves de acceso temporal.",
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
      "q": "Ves un equipo desbloqueado de otro usuario. ¿Qué opción mantiene la seguridad?",
      "joke": false,
      "choices": [
        "Avisar o bloquearlo sin revisar información",
        "Leer la pantalla",
        "Mandar un mensaje desde su cuenta",
        "Cambiar configuración"
      ],
      "correct": 0,
      "exp": "Respetar sesiones ajenas también es seguridad.",
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
      "q": "Un correo pide descargar una factura desde una página nueva. ¿Cómo debes proceder?",
      "joke": false,
      "choices": [
        "Validar proveedor y dominio antes de descargar",
        "Descargar y abrir rápido",
        "Compartirlo con contabilidad sin revisar",
        "Usar una computadora personal"
      ],
      "correct": 0,
      "exp": "Las facturas falsas son un vector común de malware.",
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

export const QB = QB_RAW;
export const QB_EASY = QB.easy;
export default QB;
