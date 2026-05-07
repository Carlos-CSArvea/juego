// Banco de preguntas Guardianes - Nivel difícil
// Revaluado: 100 preguntas únicas, tono usuario final y respuestas coherentes.
// Estructura compatible con src/data/questions.js

const QB_RAW = {
  "hard": [
    {
      "q": "Varias cuentas intentan entrar con la misma contraseña común. ¿Cuál es la respuesta más segura?",
      "joke": true,
      "choices": [
        "Bloquear el patrón, forzar MFA y revisar cuentas afectadas",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Puede tratarse de password spraying; se debe contener y revisar alcance.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un atacante entró usando la cuenta de un proveedor. ¿Qué acción debe tomarse primero?",
      "joke": false,
      "choices": [
        "Cortar el acceso del proveedor y revisar qué pudo ver o cambiar",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "El acceso de terceros debe contenerse rápido y revisarse con evidencia.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Aparece una regla que reenvía correos a un dominio externo. ¿Cómo conviene contener el riesgo?",
      "joke": false,
      "choices": [
        "Desactivar la regla, revisar la cuenta y buscar otros cambios",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Las reglas de reenvío pueden usarse para robar información.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Los respaldos también fueron cifrados por ransomware. ¿Qué medida reduce mejor el impacto?",
      "joke": false,
      "choices": [
        "Usar respaldos aislados e inmutables dentro de la estrategia",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Los respaldos deben resistir el compromiso del entorno principal.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un servicio crítico quedó expuesto a internet por error. ¿Cuál sería el siguiente paso?",
      "joke": false,
      "choices": [
        "Cerrar la exposición, revisar accesos y buscar actividad sospechosa",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "La exposición pública accidental requiere contención inmediata.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una cuenta con permisos altos inicia sesión desde una ubicación inusual. ¿Qué decisión protege mejor la operación?",
      "joke": false,
      "choices": [
        "Bloquear la sesión y validar identidad con el usuario",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Las cuentas privilegiadas requieren respuesta estricta.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Llaves de nube aparecen publicadas en un repositorio. ¿Cómo debe responder el equipo?",
      "joke": false,
      "choices": [
        "Revocar llaves, revisar uso y mover secretos a un gestor",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Un secreto publicado debe considerarse comprometido.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un colaborador usa una herramienta de IA pública con datos internos. ¿Qué opción evita mayor daño?",
      "joke": false,
      "choices": [
        "Detener el uso y revisar qué datos se compartieron",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Los datos internos no deben subirse sin autorización.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se detecta tráfico raro saliendo de un equipo. ¿Qué control debe aplicarse?",
      "joke": false,
      "choices": [
        "Aislar el equipo y revisar posible malware o fuga",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "El tráfico anómalo puede indicar compromiso o exfiltración.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un proveedor avisa tarde que tuvo una brecha. ¿Cuál es la acción prioritaria?",
      "joke": false,
      "choices": [
        "Activar el plan de terceros y revisar obligaciones contractuales",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Una brecha de proveedor puede afectar datos propios.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "La cuenta de un directivo manda solicitudes extrañas. ¿Qué respuesta deja mejor evidencia?",
      "joke": false,
      "choices": [
        "Validar por otro canal y revisar posible compromiso",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Las cuentas de directivos son usadas en fraudes.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un usuario aprobó una solicitud MFA por error. ¿Qué alternativa es más prudente?",
      "joke": false,
      "choices": [
        "Cambiar credenciales, cerrar sesiones y revisar actividad",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Una aprobación MFA indebida puede abrir una sesión real.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se descubre una cuenta administradora compartida. ¿Cómo se debe manejar el incidente?",
      "joke": false,
      "choices": [
        "Eliminar el uso compartido y crear cuentas individuales",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Las cuentas compartidas impiden trazabilidad.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema viejo no soporta MFA. ¿Qué acción ayuda a recuperar control?",
      "joke": false,
      "choices": [
        "Aislarlo y crear controles compensatorios mientras se reemplaza",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Un sistema legacy requiere reducción de exposición.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se detectan muchos archivos comprimidos saliendo por correo. ¿Qué medida limita mejor el alcance?",
      "joke": false,
      "choices": [
        "Bloquear el envío y revisar si hay fuga de datos",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "La salida masiva de archivos puede indicar exfiltración.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Alguien intenta iniciar sesión a muchas cuentas lentamente. ¿Qué opción protege mejor los datos?",
      "joke": false,
      "choices": [
        "Tratarlo como password spraying y ajustar controles",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Los ataques lentos buscan evitar bloqueos tradicionales.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una aplicación crítica no registra accesos de administradores. ¿Qué decisión reduce exposición?",
      "joke": false,
      "choices": [
        "Activar registro y revisar acciones privilegiadas",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los accesos privilegiados deben auditarse.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Desarrollo instala paquetes de internet sin revisión. ¿Cuál es la forma correcta de proceder?",
      "joke": false,
      "choices": [
        "Revisar dependencias y usar repositorios aprobados",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "La cadena de suministro puede introducir código malicioso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una API permite ver datos cambiando un número en la URL. ¿Qué acción mantiene mejor la trazabilidad?",
      "joke": false,
      "choices": [
        "Corregir autorización por usuario y revisar accesos previos",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Cada objeto debe validar si el usuario tiene permiso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un correo roba sesión aunque había MFA. ¿Qué respuesta evita escalar el incidente?",
      "joke": false,
      "choices": [
        "Usar MFA resistente a phishing y revisar tokens activos",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Algunos ataques roban sesiones ya autenticadas.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un atacante creó una cuenta local en un servidor. ¿Cuál es la respuesta más segura?",
      "joke": false,
      "choices": [
        "Deshabilitarla, revisar origen y buscar persistencia",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Crear cuentas locales es una forma común de mantener acceso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Hay demasiados permisos en carpetas compartidas. ¿Qué acción debe tomarse primero?",
      "joke": false,
      "choices": [
        "Aplicar mínimo privilegio y revisar accesos reales",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los permisos amplios facilitan fuga o abuso de datos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema de pagos muestra errores con datos internos. ¿Cómo conviene contener el riesgo?",
      "joke": false,
      "choices": [
        "Corregir mensajes y registrar detalles solo internamente",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Los errores visibles no deben revelar información técnica.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un celular corporativo perdido seguía con correo abierto. ¿Qué medida reduce mejor el impacto?",
      "joke": true,
      "choices": [
        "Bloquear dispositivo, cerrar sesiones y revisar acceso",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Los dispositivos perdidos pueden exponer datos y sesiones.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sitio falso copia el inicio de sesión corporativo. ¿Cuál sería el siguiente paso?",
      "joke": false,
      "choices": [
        "Bloquear dominio, avisar usuarios y revisar credenciales usadas",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Los sitios falsos buscan robar credenciales.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un archivo con macros llegó a muchas personas. ¿Qué decisión protege mejor la operación?",
      "joke": false,
      "choices": [
        "Bloquearlo, buscar ejecuciones y avisar a usuarios",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Las macros maliciosas pueden comprometer equipos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un usuario tiene permisos que no corresponden a su área. ¿Cómo debe responder el equipo?",
      "joke": false,
      "choices": [
        "Corregir permisos y revisar quién los autorizó",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los permisos fuera de rol deben investigarse.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema de producción no tiene plan de regreso. ¿Qué opción evita mayor daño?",
      "joke": false,
      "choices": [
        "No cambiar hasta tener rollback probado",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Todo cambio crítico necesita una forma segura de revertirse.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se sospecha fuga por impresiones. ¿Qué control debe aplicarse?",
      "joke": false,
      "choices": [
        "Revisar logs de impresión y activar impresión segura",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "El papel puede ser canal de fuga.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un proveedor envía una factura con enlace raro. ¿Cuál es la acción prioritaria?",
      "joke": false,
      "choices": [
        "Validar por canal conocido antes de descargar",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Las facturas falsas se usan para phishing y malware.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un usuario conecta equipo personal a red interna. ¿Qué respuesta deja mejor evidencia?",
      "joke": false,
      "choices": [
        "Aplicar control de acceso a red y revisar el equipo",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Equipos no gestionados pueden introducir riesgos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un tablero muestra datos de clientes a demasiadas áreas. ¿Qué alternativa es más prudente?",
      "joke": false,
      "choices": [
        "Limitar vistas según necesidad de negocio",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los tableros también requieren control de acceso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una alerta crítica se repite cada noche. ¿Cómo se debe manejar el incidente?",
      "joke": false,
      "choices": [
        "Investigar causa y documentar respuesta",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Silenciar sin revisar puede ocultar un ataque real.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una cuenta de servicio no rota clave desde hace años. ¿Qué acción ayuda a recuperar control?",
      "joke": false,
      "choices": [
        "Rotarla con plan y usar gestor de secretos",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Las credenciales antiguas aumentan exposición.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se detecta actividad rara durante vacaciones del usuario. ¿Qué medida limita mejor el alcance?",
      "joke": false,
      "choices": [
        "Verificar ausencia y cerrar sesiones sospechosas",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Actividad cuando el usuario no trabaja puede indicar compromiso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un proveedor requiere acceso remoto permanente. ¿Qué opción protege mejor los datos?",
      "joke": false,
      "choices": [
        "Aprobar acceso temporal, registrado y revisado",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "El acceso remoto de terceros debe tener límite y trazabilidad.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se reciben muchas quejas por correos sospechosos. ¿Qué decisión reduce exposición?",
      "joke": false,
      "choices": [
        "Buscar campaña activa y bloquear indicadores",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Múltiples reportes pueden indicar ataque masivo.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un empleado descarga una base completa sin razón clara. ¿Cuál es la forma correcta de proceder?",
      "joke": false,
      "choices": [
        "Validar necesidad y revisar posible fuga",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Las descargas masivas pueden ser exfiltración.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un control falla y permite acceso abierto. ¿Qué acción mantiene mejor la trazabilidad?",
      "joke": false,
      "choices": [
        "Cerrar acceso por defecto hasta corregir",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Ante falla, el sistema debe quedar seguro.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un servidor no aparece en inventario. ¿Qué respuesta evita escalar el incidente?",
      "joke": false,
      "choices": [
        "Inventariarlo, asignar dueño y revisar exposición",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Los activos desconocidos no se protegen bien.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un reporte de cumplimiento oculta hallazgos. ¿Cuál es la respuesta más segura?",
      "joke": false,
      "choices": [
        "Corregir reporte y mantener evidencia real",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "La dirección necesita visibilidad honesta del riesgo.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un usuario usa correo personal para trabajo. ¿Qué acción debe tomarse primero?",
      "joke": false,
      "choices": [
        "Migrar comunicación a canal corporativo",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los correos personales no tienen controles corporativos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Equipos administradores usan la misma clave local. ¿Cómo conviene contener el riesgo?",
      "joke": false,
      "choices": [
        "Usar administración segura de contraseñas locales",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "La misma clave local facilita movimiento entre equipos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una app móvil corporativa guarda datos sin bloqueo. ¿Qué medida reduce mejor el impacto?",
      "joke": false,
      "choices": [
        "Exigir bloqueo, cifrado y borrado remoto",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Los móviles pueden perderse o ser robados.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se requiere compartir datos con auditor externo. ¿Cuál sería el siguiente paso?",
      "joke": false,
      "choices": [
        "Compartir solo lo necesario por canal seguro",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "La auditoría no justifica entregar datos de más.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se detecta un enlace malicioso después de varios clics. ¿Qué decisión protege mejor la operación?",
      "joke": false,
      "choices": [
        "Identificar usuarios afectados y cerrar sesiones si aplica",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Debe revisarse quién pudo exponer credenciales.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema tiene usuarios genéricos como ventas1. ¿Cómo debe responder el equipo?",
      "joke": true,
      "choices": [
        "Cambiar a usuarios individuales trazables",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Las cuentas genéricas impiden atribuir acciones.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un incidente afecta a clientes. ¿Qué opción evita mayor daño?",
      "joke": false,
      "choices": [
        "Coordinar comunicación legal, negocio y seguridad",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "La comunicación de incidentes debe ser controlada.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un archivo sensible está público por enlace. ¿Qué control debe aplicarse?",
      "joke": false,
      "choices": [
        "Revocar enlace y revisar accesos previos",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Un enlace público puede haber sido compartido fuera.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un empleado instala una extensión de navegador desconocida. ¿Cuál es la acción prioritaria?",
      "joke": false,
      "choices": [
        "Revisar permisos y bloquear extensiones no aprobadas",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Las extensiones pueden leer información del navegador.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema crítico depende de una clave en texto plano. ¿Qué respuesta deja mejor evidencia?",
      "joke": false,
      "choices": [
        "Moverla a gestor de secretos y rotarla",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Las claves visibles deben considerarse comprometidas.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un ataque usa la marca corporativa en redes sociales. ¿Qué alternativa es más prudente?",
      "joke": false,
      "choices": [
        "Reportar perfiles falsos y avisar a usuarios",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "La suplantación de marca puede engañar a clientes.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un colaborador copia datos a USB. ¿Cómo se debe manejar el incidente?",
      "joke": false,
      "choices": [
        "Revisar autorización y aplicar controles de medios",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Los medios extraíbles pueden facilitar fuga.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un nuevo sistema no tiene pruebas de seguridad. ¿Qué acción ayuda a recuperar control?",
      "joke": false,
      "choices": [
        "No pasarlo a producción sin revisión mínima",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Los sistemas deben revisarse antes de exponerse.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un servidor tiene muchas cuentas antiguas. ¿Qué medida limita mejor el alcance?",
      "joke": false,
      "choices": [
        "Deshabilitar cuentas sin uso y revisar permisos",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Las cuentas viejas son rutas de acceso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un ejecutivo pide saltar controles por urgencia. ¿Qué opción protege mejor los datos?",
      "joke": false,
      "choices": [
        "Escalar y buscar alternativa segura",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "La urgencia no justifica perder control.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se detecta información confidencial en papelera común. ¿Qué decisión reduce exposición?",
      "joke": false,
      "choices": [
        "Investigar y reforzar destrucción segura",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los documentos sensibles deben destruirse correctamente.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un equipo se conecta a países no esperados. ¿Cuál es la forma correcta de proceder?",
      "joke": false,
      "choices": [
        "Revisar sesión, dispositivo y cuenta afectada",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "La ubicación inusual puede indicar uso indebido.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se planea una migración a nube. ¿Qué acción mantiene mejor la trazabilidad?",
      "joke": false,
      "choices": [
        "Definir seguridad, identidad y registros desde el inicio",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "La nube debe diseñarse con controles desde el primer día.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un tercero pide datos para soporte. ¿Qué respuesta evita escalar el incidente?",
      "joke": false,
      "choices": [
        "Validar identidad, contrato y mínimo necesario",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "El soporte no justifica compartir datos sin control.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una alerta muestra uso de herramienta remota no aprobada. ¿Cuál es la respuesta más segura?",
      "joke": false,
      "choices": [
        "Aislar equipo y validar si hubo acceso no autorizado",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Las herramientas remotas pueden usarse para fraude.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema muestra todos los clientes a cualquier usuario. ¿Qué acción debe tomarse primero?",
      "joke": false,
      "choices": [
        "Corregir permisos por rol y necesidad",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "La exposición interna también es riesgo.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una clave de API queda en historial de chat. ¿Cómo conviene contener el riesgo?",
      "joke": false,
      "choices": [
        "Revocarla y crear una nueva por canal seguro",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Una clave expuesta debe rotarse.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Soporte pide la contraseña de un usuario. ¿Qué medida reduce mejor el impacto?",
      "joke": false,
      "choices": [
        "Usar restablecimiento, nunca pedir la contraseña",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Soporte no debe conocer contraseñas.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema no tiene dueño para aprobar accesos. ¿Cuál sería el siguiente paso?",
      "joke": false,
      "choices": [
        "Asignar dueño antes de otorgar permisos",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "El dueño del sistema o dato debe autorizar accesos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un usuario reporta popups y redirecciones. ¿Qué decisión protege mejor la operación?",
      "joke": false,
      "choices": [
        "Revisar posible malware o extensión maliciosa",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Redirecciones inesperadas pueden indicar compromiso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sitio de proveedor cambia dominio sin aviso. ¿Cómo debe responder el equipo?",
      "joke": false,
      "choices": [
        "Validar por canal oficial antes de ingresar",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los cambios de dominio pueden usarse para engañar.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se necesita enviar un archivo grande sensible. ¿Qué opción evita mayor daño?",
      "joke": false,
      "choices": [
        "Usar plataforma aprobada con permisos y vencimiento",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Los archivos sensibles requieren control de acceso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema permite exportar todos los datos. ¿Qué control debe aplicarse?",
      "joke": false,
      "choices": [
        "Registrar exportaciones y limitar por rol",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "La exportación masiva debe estar controlada.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un usuario falla varios simulacros. ¿Cuál es la acción prioritaria?",
      "joke": true,
      "choices": [
        "Reforzar capacitación sin exponerlo públicamente",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "La capacitación debe corregir, no humillar.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un incidente requiere decisiones rápidas. ¿Qué respuesta deja mejor evidencia?",
      "joke": false,
      "choices": [
        "Seguir roles definidos y comunicación aprobada",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "La improvisación aumenta el daño.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una base de datos de pruebas usa datos reales. ¿Qué alternativa es más prudente?",
      "joke": false,
      "choices": [
        "Anonimizar o usar datos ficticios",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los ambientes de prueba también pueden filtrar datos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un usuario pide acceso desde dispositivo no registrado. ¿Cómo se debe manejar el incidente?",
      "joke": false,
      "choices": [
        "Validar dispositivo o negar acceso según política",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Dispositivos no gestionados elevan riesgo.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un control de seguridad genera falsos positivos. ¿Qué acción ayuda a recuperar control?",
      "joke": false,
      "choices": [
        "Ajustarlo con evidencia, no apagarlo sin análisis",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Los controles deben calibrarse, no eliminarse sin revisión.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un equipo muestra pantalla de rescate. ¿Qué medida limita mejor el alcance?",
      "joke": false,
      "choices": [
        "Aislarlo, reportar y preservar evidencia",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Puede tratarse de ransomware.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un correo interno contiene datos de más personas de las necesarias. ¿Qué opción protege mejor los datos?",
      "joke": false,
      "choices": [
        "Aplicar minimización de datos",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Menos datos reducen impacto de exposición.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una herramienta de seguridad pide permisos altos. ¿Qué decisión reduce exposición?",
      "joke": false,
      "choices": [
        "Revisar proveedor, necesidad y aprobación",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los permisos altos requieren justificación.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema no tiene bloqueo por intentos fallidos. ¿Cuál es la forma correcta de proceder?",
      "joke": false,
      "choices": [
        "Agregar bloqueo inteligente y monitoreo",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Los intentos ilimitados facilitan ataques de contraseña.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se detecta conexión remota fuera de horario. ¿Qué acción mantiene mejor la trazabilidad?",
      "joke": false,
      "choices": [
        "Validar si estaba autorizada y revisar actividad",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Los accesos remotos deben revisarse por contexto.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un archivo importante se envía al destinatario equivocado. ¿Qué respuesta evita escalar el incidente?",
      "joke": false,
      "choices": [
        "Reportar de inmediato y activar contención",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Los errores de envío pueden ser incidentes de datos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se configura acceso a proveedores. ¿Cuál es la respuesta más segura?",
      "joke": false,
      "choices": [
        "Separar cuentas, limitar tiempo y registrar acciones",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "El acceso de proveedores debe ser específico.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un dashboard ejecutivo muestra datos sensibles en sala abierta. ¿Qué acción debe tomarse primero?",
      "joke": false,
      "choices": [
        "Limitar visualización y usar modo presentación",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Las pantallas abiertas pueden filtrar información.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un servicio no soporta cifrado moderno. ¿Cómo conviene contener el riesgo?",
      "joke": false,
      "choices": [
        "Evaluar reemplazo o aislarlo con controles",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Protocolos antiguos elevan exposición.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una alerta indica descarga masiva de archivos. ¿Qué medida reduce mejor el impacto?",
      "joke": false,
      "choices": [
        "Confirmar legitimidad y bloquear si es sospechoso",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Las descargas masivas pueden indicar fuga.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un proveedor pide instalar un agente en equipos. ¿Cuál sería el siguiente paso?",
      "joke": false,
      "choices": [
        "Evaluar seguridad del agente y alcance de permisos",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Un agente con permisos altos puede aumentar riesgo.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una cuenta queda abierta en un equipo perdido. ¿Qué decisión protege mejor la operación?",
      "joke": false,
      "choices": [
        "Cerrar sesiones, bloquear equipo y revisar actividad",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Las sesiones abiertas pueden usarse sin contraseña.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema público no tiene protección contra bots. ¿Cómo debe responder el equipo?",
      "joke": false,
      "choices": [
        "Agregar controles de abuso y monitoreo",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "Los bots pueden saturar o abusar servicios.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se sospecha robo de datos lento. ¿Qué opción evita mayor daño?",
      "joke": false,
      "choices": [
        "Revisar volumen, destinos y comportamiento normal",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "La fuga lenta puede pasar desapercibida.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una app nueva pide iniciar con cuenta personal. ¿Qué control debe aplicarse?",
      "joke": false,
      "choices": [
        "Usar identidad corporativa y políticas de acceso",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "Las cuentas personales reducen control.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un archivo se comparte con enlace público permanente. ¿Cuál es la acción prioritaria?",
      "joke": false,
      "choices": [
        "Cambiar a acceso limitado y vencimiento",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Los enlaces permanentes se salen de control.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un equipo no tiene antivirus activo. ¿Qué respuesta deja mejor evidencia?",
      "joke": false,
      "choices": [
        "Reactivarlo o aislar hasta corregir",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Un equipo sin protección aumenta riesgo.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se detecta un patrón de fraude por correo. ¿Qué alternativa es más prudente?",
      "joke": false,
      "choices": [
        "Bloquear indicadores y comunicar señales a usuarios",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "La comunicación ayuda a cortar la campaña.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un proyecto termina. ¿Cómo se debe manejar el incidente?",
      "joke": true,
      "choices": [
        "Cerrar accesos, archivar datos y retirar secretos",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "El cierre del proyecto debe cerrar permisos.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un usuario abre un archivo sospechoso. ¿Qué acción ayuda a recuperar control?",
      "joke": false,
      "choices": [
        "Reportar y revisar equipo aunque no vea síntomas",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "No todos los incidentes muestran señales visibles.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un sistema permite contraseñas débiles. ¿Qué medida limita mejor el alcance?",
      "joke": false,
      "choices": [
        "Aplicar política fuerte y MFA",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "Las contraseñas débiles facilitan acceso indebido.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un empleado se equivoca y reporta rápido. ¿Qué opción protege mejor los datos?",
      "joke": false,
      "choices": [
        "Aprovechar el reporte para contener y aprender",
        "Reiniciar todo sin investigar",
        "Borrar registros para limpiar rápido",
        "Esperar a que el problema desaparezca"
      ],
      "correct": 0,
      "exp": "Reportar temprano mejora la respuesta.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se requiere aprobar acceso a datos sensibles. ¿Qué decisión reduce exposición?",
      "joke": false,
      "choices": [
        "Validar necesidad, dueño del dato y tiempo de acceso",
        "Confiar en que fue un error aislado",
        "Dar más permisos para resolver rápido",
        "Avisar solo por chat informal"
      ],
      "correct": 0,
      "exp": "El acceso sensible debe justificarse.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Una cuenta se usa desde dos países en minutos. ¿Cuál es la forma correcta de proceder?",
      "joke": false,
      "choices": [
        "Tratarlo como señal de riesgo y cerrar sesión",
        "Desactivar monitoreo para evitar ruido",
        "Pagar o aceptar sin análisis",
        "Cambiar nombres sin corregir la causa"
      ],
      "correct": 0,
      "exp": "Viajes imposibles suelen indicar compromiso.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Un proveedor no acepta requisitos de seguridad. ¿Qué acción mantiene mejor la trazabilidad?",
      "joke": false,
      "choices": [
        "Evaluar riesgo y decidir si se contrata o no",
        "Eliminar evidencias antes de revisar",
        "Seguir operando igual",
        "Publicar detalles sin validación"
      ],
      "correct": 0,
      "exp": "No todo proveedor debe aceptarse.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    },
    {
      "q": "Se detecta uso de software pirata. ¿Qué respuesta evita escalar el incidente?",
      "joke": false,
      "choices": [
        "Retirarlo y usar software aprobado",
        "Mover el problema a otro equipo",
        "Cerrar el ticket sin responsable",
        "Permitir una excepción permanente"
      ],
      "correct": 0,
      "exp": "El software pirata puede incluir malware o problemas legales.",
      "fw": [
        26,
        -22,
        -18,
        -18
      ],
      "rep": [
        2,
        -2,
        -1,
        -1
      ]
    }
  ]
};

export const QB = QB_RAW;
export const QB_HARD = QB.hard;
export default QB;
