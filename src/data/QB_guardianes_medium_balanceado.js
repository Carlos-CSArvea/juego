// Banco de preguntas Guardianes - Nivel medium
// Tono usuario final: claro, directo y poco tecnico.
// Total: 100 preguntas.

const QB_RAW = {
  medium: [
    {
        "q": "En la organizacion, un sistema guarda informacion de clientes. Cual es la mejor decision?",
        "joke": true,
        "choices": [
            "Definir quien es dueño del dato y quien puede verlo",
            "Dar acceso a todos para trabajar mas rapido, pero sin validar el riesgo",
            "Copiar la base a hojas personales",
            "Ocultar el sistema a auditoria"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proveedor manejara datos internos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Firmar acuerdos y revisar sus controles antes de compartir",
            "Confiar solo por reputacion, pero sin validar el riesgo, pero sin validar el riesgo",
            "Enviar datos antes de revisar contrato",
            "Dar acceso amplio de prueba, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una area quiere lanzar una app nueva. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar seguridad desde el diseño, no al final",
            "Probar seguridad solo el ultimo dia, pero sin validar el riesgo",
            "Publicarla y corregir luego",
            "Quitar validaciones para avanzar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proceso no puede detenerse por muchas horas. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Definir cuanto tiempo puede estar caido y preparar recuperacion",
            "Esperar al incidente para decidir, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Comprar mas computadoras sin plan",
            "Guardar solo capturas del proceso"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se aprueba un cambio en produccion. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Probarlo antes, documentarlo y tener plan de regreso",
            "Cambiar directo sin aviso",
            "Pedir permiso despues, pero sin validar el riesgo, pero sin validar el riesgo",
            "Quitar logs para evitar ruido"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo de trabajo usa muchas apps de nube. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Inventariar apps y aplicar reglas de uso",
            "Permitir cualquiera si ayuda al trabajo, pero sin validar el riesgo",
            "Bloquear todo sin revisar",
            "Pedir contraseñas por correo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un usuario pide permisos altos permanentes. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Dar permisos minimos y por tiempo limitado",
            "Dar admin para evitar tickets, pero sin validar el riesgo",
            "Compartir una cuenta admin",
            "Quitar MFA para facilitar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una cuenta de servicio es usada por varias aplicaciones. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Separar cuentas para tener trazabilidad",
            "Usar una cuenta compartida para todo, pero sin validar el riesgo",
            "Poner la clave en el codigo",
            "No cambiarla nunca"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo necesita respaldos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Hacer respaldos separados y probar restauracion",
            "Guardar copia en la misma carpeta, pero sin validar el riesgo",
            "Respaldar solo al final del año",
            "Confiar en que nunca fallara"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una brecha afecta datos personales. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Activar el proceso de notificacion y respuesta",
            "Esperar a ver si se hace publica, pero sin validar el riesgo",
            "Borrar evidencias locales",
            "Avisar solo por chat informal"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un reporte de seguridad muestra riesgo alto. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar impacto y decidir tratamiento formal",
            "Ignorarlo si no hay incidente, pero sin validar el riesgo",
            "Eliminar el reporte",
            "Mandarlo sin responsable"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se contrata un nuevo sistema SaaS. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar acceso, datos, contrato y salida del servicio",
            "Usarlo con cuentas personales, pero sin validar el riesgo",
            "Subir datos antes de aprobar",
            "Aceptar terminos sin revisar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un empleado cambia de puesto. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Actualizar permisos segun su nueva funcion",
            "Mantener permisos antiguos por comodidad, pero sin validar el riesgo",
            "Dar permisos de ambas areas para siempre",
            "Prestar la cuenta anterior"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, el SOC reporta muchas alertas repetidas. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Ajustar reglas y priorizar las de mayor riesgo",
            "Cerrar todas sin revisar",
            "Desactivar alertas de noche, pero sin validar el riesgo",
            "Eliminar logs antiguos"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema critico no tiene dueño claro. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Asignar responsable de negocio y tecnico",
            "Dejarlo sin dueño si funciona, pero sin validar el riesgo",
            "Asignarlo al primer usuario",
            "Evitar documentarlo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un archivo contiene datos sensibles. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Clasificarlo y aplicar controles segun sensibilidad",
            "Mandarlo por cualquier canal, pero sin validar el riesgo",
            "Ponerle nombre generico",
            "Guardarlo en escritorio"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se requiere monitoreo de empleados en sistemas corporativos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Avisarlo en politicas y hacerlo de forma proporcional",
            "Hacerlo sin informar nunca",
            "Monitorear equipos personales sin permiso, pero sin validar el riesgo",
            "Publicar actividad de usuarios"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se evalua aceptar un riesgo. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Documentar aceptacion, dueño y fecha de revision",
            "Aceptarlo verbalmente",
            "No informarlo a nadie",
            "Eliminar el control sin registro, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se necesita medir respuesta a incidentes. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Medir tiempo de deteccion y de recuperacion",
            "Contar solo numero de computadoras, pero sin validar el riesgo",
            "Medir color de reportes",
            "Ignorar tendencias"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una auditoria pide evidencia. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Entregar registros completos y trazables",
            "Mandar capturas sueltas sin contexto, pero sin validar el riesgo",
            "Modificar fechas para que coincidan",
            "Borrar hallazgos menores"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una persona no necesita todos los datos para su trabajo. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Aplicar necesidad de saber",
            "Permitir acceso total por confianza",
            "Mandar copia completa",
            "Quitar contraseñas"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema falla de forma inesperada. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Debe quedar en modo seguro y negar accesos riesgosos",
            "Debe abrir todo para no detener operacion",
            "Debe mostrar claves al usuario",
            "Debe borrar logs, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se revisan logs de seguridad. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Centralizarlos y protegerlos contra cambios",
            "Guardarlos solo localmente",
            "Permitir que cualquiera los borre, pero sin validar el riesgo",
            "Desactivarlos por espacio"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una API no esta documentada. Cual es la mejor decision?",
        "joke": true,
        "choices": [
            "Inventariarla y ponerla bajo controles",
            "Dejarla porque nadie la conoce",
            "Abrirla para pruebas publicas",
            "Ocultarla del equipo de seguridad, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una app valida datos solo en pantalla del usuario. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Validar tambien en el servidor",
            "Confiar en el navegador",
            "Quitar validacion para ser rapido",
            "Guardar errores en pantalla"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proyecto maneja tarjetas bancarias. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Reducir datos guardados y protegerlos con controles fuertes",
            "Guardar CVV para comodidad, pero sin validar el riesgo, pero sin validar el riesgo",
            "Mandar tarjetas por correo, pero sin validar el riesgo",
            "Copiar datos a Excel personal"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un directivo pide acceso a todo por urgencia. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Dar acceso necesario y aprobado",
            "Dar todo sin fecha limite, pero sin validar el riesgo",
            "Quitar revisiones",
            "Compartir otra cuenta"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proceso depende de una sola persona. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Separar funciones y documentar respaldo",
            "Aceptar el riesgo sin plan",
            "Dar todas las claves a esa persona, pero sin validar el riesgo",
            "No capacitar a nadie mas"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una nube permite acceso desde cualquier pais. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Aplicar reglas por riesgo, ubicacion y dispositivo",
            "Permitir todo por facilidad",
            "Quitar MFA, pero sin validar el riesgo, pero sin validar el riesgo",
            "Usar una clave compartida"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema viejo no se puede parchar. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Aislarlo, monitorearlo y planear reemplazo",
            "Exponerlo igual",
            "Apagar controles, pero sin validar el riesgo, aunque no deja evidencia clara",
            "No documentarlo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se revisa continuidad del negocio. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Probar planes con ejercicios y evidencias",
            "Leer el plan una vez al año, pero sin validar el riesgo",
            "No involucrar areas",
            "Asumir que TI resuelve todo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una empresa quiere cumplir norma. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Cumplir requisitos y tambien revisar riesgos reales",
            "Pensar que cumplir es suficiente siempre, pero sin validar el riesgo",
            "Hacer solo documentos",
            "Ignorar amenazas actuales"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se detecta cuenta inactiva con acceso. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Deshabilitarla y revisar actividad",
            "Mantenerla por si se usa luego, pero sin validar el riesgo",
            "Cambiarle el nombre",
            "Compartirla temporalmente"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un contrato no exige aviso de incidentes. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Agregar clausula de notificacion y tiempos",
            "Confiar en buena voluntad",
            "No pedir auditoria",
            "Evitar hablar de incidentes, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se compra herramienta de seguridad nueva. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Definir problema, responsables y medicion",
            "Comprar por moda",
            "Instalar sin proceso, pero sin validar el riesgo",
            "Usarla sin capacitar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un empleado usa datos para otro fin. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar privacidad y finalidad autorizada",
            "Permitirlo si parece util, pero sin validar el riesgo",
            "Copiar todos los datos",
            "Omitir aviso al usuario"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se eliminan discos duros antiguos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Usar borrado seguro o destruccion certificada",
            "Tirarlos a reciclaje sin borrar, pero sin validar el riesgo",
            "Formatear rapido y listo",
            "Venderlos tal cual"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema de pagos requiere alta disponibilidad. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Definir RTO y RPO segun negocio",
            "Usar una sola copia",
            "No probar recuperacion",
            "Depender de memoria del equipo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un usuario reporta posible phishing. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Agradecer, analizar y bloquear si aplica",
            "Culpar al usuario",
            "Ignorar por ser simulacro",
            "Reenviar el correo a todos, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo tiene privilegios locales innecesarios. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Retirar privilegios y usar elevacion controlada",
            "Dejar admin permanente, pero sin validar el riesgo",
            "Compartir admin local",
            "Desactivar auditoria"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un servicio requiere una clave secreta. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Guardarla en gestor de secretos",
            "Ponerla en el codigo",
            "Mandarla por chat",
            "Usarla en todos los ambientes, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se planea usar IA con datos internos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar que datos se suben y reglas de uso",
            "Subir bases completas para probar, pero sin validar el riesgo",
            "Usar cuentas personales",
            "Copiar datos de clientes"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo de ventas usa hojas con datos de clientes. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Definir almacenamiento oficial y acceso controlado",
            "Compartir por correo personal",
            "Duplicar versiones, pero sin validar el riesgo",
            "Quitar protecciones, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se recibe hallazgo de auditoria. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Asignar dueño, fecha y plan de remediacion",
            "Archivarlo sin accion",
            "Discutir sin evidencia, pero sin validar el riesgo",
            "Eliminarlo del tablero"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un usuario necesita acceso temporal. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Dar acceso con vencimiento",
            "Dar acceso permanente, pero sin validar el riesgo",
            "Prestar cuenta",
            "Quitar aprobaciones"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se detecta fuga de informacion impresa. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Activar investigacion y reforzar impresion segura",
            "Culpar sin evidencia",
            "Ocultar el caso, pero sin validar el riesgo",
            "Publicar nombres, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, el area pide excepcion a una politica. Cual es la mejor decision?",
        "joke": true,
        "choices": [
            "Documentar motivo, riesgo, controles y fecha fin",
            "Aprobar verbalmente",
            "Dejarla indefinida",
            "No avisar a seguridad, pero sin validar el riesgo, aunque no deja evidencia clara"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una aplicacion externa pide demasiados permisos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar necesidad y negar permisos excesivos",
            "Aceptar todo para terminar, pero sin validar el riesgo",
            "Usarla con datos reales",
            "Ignorar permisos"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se necesita capacitar usuarios. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Usar ejemplos claros y medir aprendizaje",
            "Enviar solo un PDF largo",
            "Hacerlo una vez y olvidar, pero sin validar el riesgo",
            "Usar lenguaje muy tecnico"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema nuevo no tiene logs suficientes. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Definir eventos importantes antes de operar",
            "Activar logs despues del primer incidente, pero sin validar el riesgo",
            "Guardar solo errores visuales",
            "No registrar accesos"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, el area comparte datos con un tercero. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Minimizar datos y usar canal aprobado",
            "Mandar todo para que el tercero decida",
            "No firmar acuerdo",
            "Usar correos personales"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se detecta configuracion distinta entre equipos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Aplicar una configuracion base segura",
            "Dejar cada equipo distinto, pero sin validar el riesgo",
            "Corregir solo los visibles",
            "No documentar cambios"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proyecto usa codigo abierto. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar dependencias y mantenerlas actualizadas",
            "Usar cualquier paquete popular",
            "Ignorar licencias y vulnerabilidades, pero sin validar el riesgo",
            "Copiar codigo sin revisar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se planea acceso remoto. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Usar MFA, VPN o acceso seguro y registro",
            "Abrir escritorio remoto a internet, pero sin validar el riesgo",
            "Compartir una clave comun",
            "Quitar bloqueo por intentos"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema muestra informacion de errores. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Ocultar detalles tecnicos al usuario y registrar internamente",
            "Mostrar todo para ayudar, pero sin validar el riesgo, pero sin validar el riesgo",
            "Mandar errores por correo publico",
            "No guardar registro, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un usuario pide borrar datos personales. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar proceso de privacidad y atender segun politica",
            "Ignorarlo si es complicado",
            "Borrar sin validar identidad, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Mandar datos a cualquiera"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proveedor termina contrato. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Retirar accesos y confirmar devolucion o borrado de datos",
            "Dejar accesos por si vuelve",
            "No pedir evidencia, pero sin validar el riesgo",
            "Permitir uso de datos, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo trabaja fuera de oficina. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Aplicar controles de equipo, conexion y datos",
            "Permitir cualquier red",
            "Eliminar MFA, pero sin validar el riesgo, pero sin validar el riesgo",
            "Guardar archivos locales sin control"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una cuenta admin no usa MFA. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Activar MFA fuerte de inmediato",
            "Dejarla por ser interna, pero sin validar el riesgo",
            "Usar clave mas corta",
            "Compartirla con soporte"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema recibe datos de clientes. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Validar datos y protegerlos desde entrada",
            "Confiar en que todos escriben bien, pero sin validar el riesgo",
            "Guardar datos sin revisar",
            "Mostrar datos completos en logs"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se analiza un incidente. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Preservar evidencia antes de limpiar",
            "Formatear de inmediato siempre",
            "Borrar archivos sospechosos primero, pero sin validar el riesgo",
            "Reiniciar sin avisar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una solucion de nube ofrece muchas opciones. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Configurar minimo privilegio y revisar valores por defecto",
            "Aceptar todo por defecto, pero sin validar el riesgo, pero sin validar el riesgo",
            "Abrir acceso publico, pero sin validar el riesgo",
            "Usar claves compartidas, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un usuario ya no requiere un permiso. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Retirarlo en la revision periodica",
            "Dejarlo por si acaso",
            "Darlo a su equipo completo, pero sin validar el riesgo",
            "No revisar permisos"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se evalua seguro cyber. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Verlo como transferencia parcial, no sustituto de controles",
            "Creer que elimina riesgos, pero sin validar el riesgo, pero sin validar el riesgo",
            "Quitar respaldos, pero sin validar el riesgo",
            "Reducir monitoreo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un indicador de amenaza llega al SOC. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Validar si aplica al entorno y crear deteccion",
            "Copiarlo sin revisar",
            "Ignorarlo siempre",
            "Publicarlo en abierto, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo usa puertos no necesarios. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Cerrar servicios que no se usan",
            "Abrir todos para pruebas, pero sin validar el riesgo",
            "No revisar puertos",
            "Permitir acceso publico"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se prepara reporte a direccion. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Explicar riesgo en lenguaje de negocio",
            "Usar solo siglas tecnicas, pero sin validar el riesgo",
            "Omitir impacto",
            "Mostrar solo herramientas"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se implementa nueva politica. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Comunicarla, capacitar y medir cumplimiento",
            "Publicarla sin explicar",
            "Aplicarla solo a nuevos usuarios, pero sin validar el riesgo",
            "No revisar excepciones"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una cuenta tiene muchos intentos fallidos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Investigar posible ataque o contraseña comprometida",
            "Ignorar si al final entra",
            "Bajar bloqueo, pero sin validar el riesgo",
            "Quitar registro, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema esta expuesto a internet. Cual es la mejor decision?",
        "joke": true,
        "choices": [
            "Reducir superficie, parchar y monitorear",
            "Asumir que nadie lo encontrara, pero sin validar el riesgo",
            "Ocultar nombre del servidor",
            "Quitar autenticacion"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un archivo importante se borra por error. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Restaurar desde respaldo probado",
            "Buscar copias en chats personales",
            "Pedir a todos que revisen USBs",
            "Crear otro desde cero sin analizar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se diseña proceso de baja de personal. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Cerrar accesos, recuperar equipos y validar pendientes",
            "Esperar a fin de mes, pero sin validar el riesgo, pero sin validar el riesgo",
            "Dejar correo activo por siempre",
            "Dar la cuenta al reemplazo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema requiere datos de salud. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Aplicar controles reforzados y limitar acceso",
            "Tratarlos como datos normales, pero sin validar el riesgo",
            "Mandarlos por correo abierto",
            "Usarlos para otros fines"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se sospecha uso de cuenta compartida. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Eliminarla y crear identidades individuales",
            "Mantenerla por comodidad",
            "Cambiar clave una vez al año",
            "Usarla solo en emergencias sin registro, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proceso critico no tiene responsable suplente. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Nombrar respaldo y documentar conocimiento",
            "Depender de una persona",
            "Esperar vacaciones para resolver, pero sin validar el riesgo",
            "Quitar controles"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se revisa riesgo de correo externo. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Configurar protecciones y educar usuarios",
            "Bloquear todo correo externo sin analizar, pero sin validar el riesgo",
            "Permitir adjuntos siempre",
            "Desactivar filtros"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una persona reporta error de seguridad. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Recibirlo sin culpar y guiar el reporte",
            "Ignorarlo si no es tecnico, pero sin validar el riesgo",
            "Pedir que no avise",
            "Regañarlo por preguntar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se detecta actividad fuera de horario. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar si es normal o sospechosa",
            "Ignorar por ser de noche, pero sin validar el riesgo",
            "Cerrar todas las cuentas",
            "Borrar logs"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se crea nueva base de datos. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Definir cifrado, accesos y respaldos desde el inicio",
            "Subir datos y configurar despues",
            "Usar clave compartida, pero sin validar el riesgo, pero sin validar el riesgo",
            "No registrar accesos, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un reporte contiene demasiados datos personales. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Reducir datos al minimo necesario",
            "Agregar mas datos por si sirven, pero sin validar el riesgo",
            "Enviar version completa a todos",
            "Dejarlo publico"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se detecta correo con marca conocida. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Validar remitente y enlaces, no solo el logo",
            "Confiar por el logo",
            "Hacer clic si se ve bonito, pero sin validar el riesgo",
            "Responder con datos"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo no cumple configuracion base. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Corregirlo o aislarlo hasta cumplir",
            "Permitirlo por ser urgente, pero sin validar el riesgo",
            "Eliminarlo del inventario",
            "Apagar alertas"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un usuario solicita excepcion de MFA. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Evaluar riesgo y usar alternativa aprobada si procede",
            "Quitar MFA sin fecha fin",
            "Compartir token de otro usuario",
            "Ignorar el caso, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una aplicacion guarda datos sin cifrar. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Evaluar sensibilidad y aplicar cifrado adecuado",
            "Dejarlo si nadie lo ve",
            "Cambiar solo el nombre del archivo, pero sin validar el riesgo",
            "Moverlo a otra carpeta"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo de proyecto cambia proveedores. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Retirar accesos del proveedor anterior",
            "Mantenerlos hasta nuevo aviso",
            "Pasar cuentas al nuevo proveedor, pero sin validar el riesgo",
            "No revisar contratos"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una herramienta nueva manda datos a internet. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Revisar destino y aprobacion antes de usarla",
            "Permitirla si funciona bien, pero sin validar el riesgo",
            "Ignorar trafico externo",
            "Instalarla en todos"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un plan de respuesta no se ha probado. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Hacer ejercicio de mesa y corregir huecos",
            "Esperar un incidente real, pero sin validar el riesgo",
            "Guardar el plan en PDF",
            "Revisarlo solo una vez"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se quiere reducir riesgo de fraude interno. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Separar funciones, registrar acciones y revisar permisos",
            "Confiar solo en buena fe, pero sin validar el riesgo, pero sin validar el riesgo",
            "Dar menos vacaciones, pero sin validar el riesgo",
            "Quitar auditorias, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema tiene datos duplicados en muchas carpetas. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Centralizar y controlar copias",
            "Dejar copias por comodidad, pero sin validar el riesgo",
            "Mandar todo por correo",
            "No clasificar informacion"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se evalua una compra de tecnologia. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Incluir seguridad, privacidad y soporte desde el inicio",
            "Comprar primero y revisar despues",
            "Ignorar contratos, pero sin validar el riesgo, pero sin validar el riesgo",
            "Usar prueba con datos reales"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, la direccion pregunta por ciberseguridad. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Presentar riesgos, impacto y avance de controles",
            "Mostrar solo nombres de herramientas",
            "Usar solo lenguaje tecnico",
            "Ocultar problemas, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un empleado reporta perdida de celular corporativo. Cual es la mejor decision?",
        "joke": false,
        "choices": [
            "Bloquear o borrar remoto y registrar incidente",
            "Esperar a que lo encuentre, pero sin validar el riesgo",
            "Pedirle que compre otro",
            "No avisar a nadie"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proceso requiere aprobacion doble. Cual es la mejor decision?",
        "joke": true,
        "choices": [
            "Mantenerla para acciones de alto impacto",
            "Quitarla por rapidez",
            "Permitir aprobacion propia",
            "Hacerla por mensaje informal, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un sistema guarda informacion de clientes. Que accion corresponde?",
        "joke": true,
        "choices": [
            "Definir quien es dueño del dato y quien puede verlo",
            "Dar acceso a todos para trabajar mas rapido, pero sin validar el riesgo",
            "Copiar la base a hojas personales",
            "Ocultar el sistema a auditoria"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara. Aplica el mismo principio en casos similares.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proveedor manejara datos internos. Que accion corresponde?",
        "joke": false,
        "choices": [
            "Firmar acuerdos y revisar sus controles antes de compartir",
            "Confiar solo por reputacion, pero sin validar el riesgo, pero sin validar el riesgo",
            "Enviar datos antes de revisar contrato",
            "Dar acceso amplio de prueba, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara. Aplica el mismo principio en casos similares.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, una area quiere lanzar una app nueva. Que accion corresponde?",
        "joke": false,
        "choices": [
            "Revisar seguridad desde el diseño, no al final",
            "Probar seguridad solo el ultimo dia, pero sin validar el riesgo",
            "Publicarla y corregir luego",
            "Quitar validaciones para avanzar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara. Aplica el mismo principio en casos similares.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un proceso no puede detenerse por muchas horas. Que accion corresponde?",
        "joke": false,
        "choices": [
            "Definir cuanto tiempo puede estar caido y preparar recuperacion",
            "Esperar al incidente para decidir, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Comprar mas computadoras sin plan",
            "Guardar solo capturas del proceso"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara. Aplica el mismo principio en casos similares.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, se aprueba un cambio en produccion. Que accion corresponde?",
        "joke": false,
        "choices": [
            "Probarlo antes, documentarlo y tener plan de regreso",
            "Cambiar directo sin aviso",
            "Pedir permiso despues, pero sin validar el riesgo, pero sin validar el riesgo",
            "Quitar logs para evitar ruido"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara. Aplica el mismo principio en casos similares.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un equipo de trabajo usa muchas apps de nube. Que accion corresponde?",
        "joke": false,
        "choices": [
            "Inventariar apps y aplicar reglas de uso",
            "Permitir cualquiera si ayuda al trabajo, pero sin validar el riesgo",
            "Bloquear todo sin revisar",
            "Pedir contraseñas por correo"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara. Aplica el mismo principio en casos similares.",
        "fw": [
            18,
            -14,
            -12,
            -12
        ],
        "rep": [
            1,
            -1,
            -1,
            -1
        ]
    },
    {
        "q": "En la organizacion, un usuario pide permisos altos permanentes. Que accion corresponde?",
        "joke": false,
        "choices": [
            "Dar permisos minimos y por tiempo limitado",
            "Dar admin para evitar tickets, pero sin validar el riesgo",
            "Compartir una cuenta admin",
            "Quitar MFA para facilitar"
        ],
        "correct": 0,
        "exp": "La decision correcta reduce riesgo sin frenar el trabajo y deja trazabilidad clara. Aplica el mismo principio en casos similares.",
        "fw": [
            18,
            -14,
            -12,
            -12
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
export const QB_MEDIUM = QB.medium;
export default QB;
