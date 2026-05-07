// Banco de preguntas Guardianes - Nivel medio
// Revaluado: 100 preguntas únicas, tono usuario final y respuestas coherentes.
// Estructura compatible con src/data/questions.js

const QB_RAW = {
  "medium": [
    {
      "q": "Un sistema guarda información de clientes y varias áreas quieren consultarla. ¿Qué decisión conviene tomar?",
      "joke": true,
      "choices": [
        "Definir dueño del dato, permisos por rol y revisión periódica",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "La información de clientes debe tener responsable y acceso limitado.",
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
      "q": "Un proveedor manejará datos internos por primera vez. ¿Cuál es el control más adecuado?",
      "joke": false,
      "choices": [
        "Revisar contrato, controles de seguridad y alcance de datos antes de compartir",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "El riesgo de terceros debe evaluarse antes de entregar información.",
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
      "q": "Un área quiere lanzar una aplicación nueva en poco tiempo. ¿Cómo debe gestionarse?",
      "joke": false,
      "choices": [
        "Revisar seguridad desde el diseño y antes de producción",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "La seguridad funciona mejor cuando se incorpora desde el inicio.",
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
      "q": "Un proceso crítico no puede detenerse por muchas horas. ¿Qué acción reduce mejor el riesgo?",
      "joke": false,
      "choices": [
        "Definir RTO, RPO y plan de recuperación probado",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "La continuidad necesita tiempos objetivos y pruebas reales.",
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
      "q": "Se aprueba un cambio en producción. ¿Cuál es el enfoque correcto?",
      "joke": false,
      "choices": [
        "Probarlo, documentarlo y tener plan de regreso",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Los cambios controlados reducen fallas e incidentes.",
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
      "q": "Un equipo usa muchas aplicaciones de nube sin revisión. ¿Qué respuesta deja mejor control?",
      "joke": false,
      "choices": [
        "Inventariar aplicaciones y definir reglas de uso",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "El shadow IT deja datos fuera de control.",
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
      "q": "Un usuario pide permisos altos permanentes. ¿Qué medida es más apropiada?",
      "joke": false,
      "choices": [
        "Dar permisos mínimos, justificados y por tiempo limitado",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "El mínimo privilegio reduce impacto si la cuenta se compromete.",
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
      "q": "Una cuenta de servicio es usada por varias aplicaciones. ¿Cómo se debe resolver?",
      "joke": false,
      "choices": [
        "Separar identidades por aplicación y rotar secretos",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Las cuentas compartidas reducen trazabilidad.",
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
      "q": "Se necesita una estrategia de respaldos. ¿Qué opción mantiene trazabilidad?",
      "joke": false,
      "choices": [
        "Crear respaldos separados y probar restauración",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Un respaldo solo sirve si puede restaurarse.",
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
      "q": "Una brecha afecta datos personales. ¿Cuál sería la decisión responsable?",
      "joke": false,
      "choices": [
        "Activar respuesta, análisis legal y notificación cuando aplique",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Los datos personales requieren manejo formal.",
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
      "q": "Un reporte muestra un riesgo alto sin responsable. ¿Qué debe quedar definido?",
      "joke": false,
      "choices": [
        "Asignar dueño, plan de tratamiento y fecha de revisión",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Los riesgos necesitan responsable y seguimiento.",
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
      "q": "Se contrata un nuevo sistema SaaS. ¿Cuál es la práctica recomendada?",
      "joke": false,
      "choices": [
        "Revisar accesos, datos, contrato y salida del servicio",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "SaaS también requiere gobierno de seguridad.",
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
      "q": "Un empleado cambia de puesto. ¿Qué alternativa equilibra operación y seguridad?",
      "joke": false,
      "choices": [
        "Actualizar permisos según su nueva función",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Los accesos deben acompañar el rol real de la persona.",
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
      "q": "El SOC reporta demasiadas alertas repetidas. ¿Qué acción debe priorizarse?",
      "joke": false,
      "choices": [
        "Ajustar reglas y priorizar alertas por riesgo",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Las alertas deben ser útiles y accionables.",
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
      "q": "Un sistema crítico no tiene dueño claro. ¿Qué medida ayuda a evitar problemas futuros?",
      "joke": false,
      "choices": [
        "Asignar responsable de negocio y responsable técnico",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Sin dueño no hay decisiones claras sobre riesgo.",
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
      "q": "Un archivo contiene información confidencial. ¿Cuál opción protege mejor al negocio?",
      "joke": false,
      "choices": [
        "Clasificarlo y aplicar controles según sensibilidad",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "La clasificación guía cómo proteger la información.",
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
      "q": "Se monitorean sistemas corporativos. ¿Cómo conviene documentarlo?",
      "joke": false,
      "choices": [
        "Informarlo en políticas y hacerlo de forma proporcional",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "El monitoreo debe ser transparente y justificado.",
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
      "q": "Se evalúa aceptar un riesgo. ¿Qué respuesta evita una excepción informal?",
      "joke": false,
      "choices": [
        "Documentar aceptación, dueño, alcance y fecha de revisión",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Aceptar riesgo no debe ser una decisión informal.",
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
      "q": "Se quiere medir la respuesta a incidentes. ¿Cuál es el paso de gobierno correcto?",
      "joke": false,
      "choices": [
        "Medir tiempo de detección, contención y recuperación",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Las métricas muestran la madurez operativa.",
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
      "q": "Una auditoría pide evidencia de controles. ¿Qué decisión facilita seguimiento?",
      "joke": false,
      "choices": [
        "Entregar registros completos, trazables y sin alterar",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "La evidencia debe conservar integridad.",
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
      "q": "Una persona no necesita todos los datos para su trabajo. ¿Qué decisión conviene tomar?",
      "joke": false,
      "choices": [
        "Aplicar necesidad de saber y limitar el acceso",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "No todos los autorizados necesitan todos los datos.",
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
      "q": "Un sistema falla de forma inesperada. ¿Cuál es el control más adecuado?",
      "joke": false,
      "choices": [
        "Hacer que falle de forma segura y niegue accesos riesgosos",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Los sistemas deben protegerse incluso cuando fallan.",
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
      "q": "Se revisan logs de seguridad. ¿Cómo debe gestionarse?",
      "joke": false,
      "choices": [
        "Centralizarlos y protegerlos contra cambios",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Los atacantes pueden borrar logs locales.",
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
      "q": "Una API no está documentada. ¿Qué acción reduce mejor el riesgo?",
      "joke": true,
      "choices": [
        "Inventariarla y ponerla bajo controles",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Lo que no se conoce no se puede proteger bien.",
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
      "q": "Una aplicación valida datos solo en el navegador. ¿Cuál es el enfoque correcto?",
      "joke": false,
      "choices": [
        "Validar también en el servidor",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "El cliente puede manipularse; el servidor debe validar.",
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
      "q": "Un proyecto maneja tarjetas bancarias. ¿Qué respuesta deja mejor control?",
      "joke": false,
      "choices": [
        "Guardar lo mínimo y aplicar controles fuertes",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Los datos de pago tienen obligaciones especiales.",
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
      "q": "Un directivo pide acceso total por urgencia. ¿Qué medida es más apropiada?",
      "joke": false,
      "choices": [
        "Otorgar solo lo necesario con aprobación y vencimiento",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "La urgencia no elimina el control de acceso.",
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
      "q": "Un proceso depende de una sola persona. ¿Cómo se debe resolver?",
      "joke": false,
      "choices": [
        "Separar funciones y documentar respaldo operativo",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "La dependencia de una persona crea riesgo operacional.",
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
      "q": "La nube permite acceso desde cualquier país. ¿Qué opción mantiene trazabilidad?",
      "joke": false,
      "choices": [
        "Aplicar reglas por riesgo, ubicación y dispositivo",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "El acceso condicional reduce abuso de cuentas.",
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
      "q": "Un sistema viejo no se puede parchar. ¿Cuál sería la decisión responsable?",
      "joke": false,
      "choices": [
        "Aislarlo, monitorearlo y planear reemplazo",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Los sistemas legacy requieren controles compensatorios.",
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
      "q": "Se revisa continuidad del negocio. ¿Qué debe quedar definido?",
      "joke": false,
      "choices": [
        "Probar planes con ejercicios y evidencia",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Los planes no probados suelen fallar.",
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
      "q": "La empresa busca cumplir una norma. ¿Cuál es la práctica recomendada?",
      "joke": false,
      "choices": [
        "Cumplir requisitos y revisar riesgos reales",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Cumplir no siempre equivale a estar seguro.",
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
      "q": "Se detecta una cuenta inactiva con acceso. ¿Qué alternativa equilibra operación y seguridad?",
      "joke": false,
      "choices": [
        "Deshabilitarla y revisar actividad reciente",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Las cuentas abandonadas son un punto de entrada.",
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
      "q": "Un contrato no exige aviso de incidentes. ¿Qué acción debe priorizarse?",
      "joke": false,
      "choices": [
        "Agregar cláusula de notificación y tiempos",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "El contrato debe cubrir responsabilidades de seguridad.",
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
      "q": "Se compra una herramienta de seguridad nueva. ¿Qué medida ayuda a evitar problemas futuros?",
      "joke": false,
      "choices": [
        "Definir problema, responsables y medición de éxito",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "La herramienta debe resolver un riesgo claro.",
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
      "q": "Un empleado usa datos para un fin distinto al autorizado. ¿Cuál opción protege mejor al negocio?",
      "joke": false,
      "choices": [
        "Revisar finalidad, privacidad y autorización",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Los datos deben usarse para fines permitidos.",
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
      "q": "Se eliminan discos duros antiguos. ¿Cómo conviene documentarlo?",
      "joke": false,
      "choices": [
        "Usar borrado seguro o destrucción certificada",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "El formateo rápido puede dejar datos recuperables.",
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
      "q": "Un sistema de pagos requiere alta disponibilidad. ¿Qué respuesta evita una excepción informal?",
      "joke": false,
      "choices": [
        "Definir objetivos de recuperación con el negocio",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "La disponibilidad debe diseñarse según impacto real.",
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
      "q": "Un usuario reporta posible phishing. ¿Cuál es el paso de gobierno correcto?",
      "joke": false,
      "choices": [
        "Agradecer, analizar y bloquear si aplica",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Reportar debe ser fácil y sin castigo.",
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
      "q": "Un equipo tiene privilegios locales innecesarios. ¿Qué decisión facilita seguimiento?",
      "joke": false,
      "choices": [
        "Retirar privilegios y usar elevación controlada",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Los privilegios locales amplían el daño posible.",
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
      "q": "Un servicio requiere una clave secreta. ¿Qué decisión conviene tomar?",
      "joke": false,
      "choices": [
        "Guardarla en un gestor de secretos",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Los secretos no deben vivir en código o chats.",
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
      "q": "Se planea usar IA con datos internos. ¿Cuál es el control más adecuado?",
      "joke": false,
      "choices": [
        "Definir qué datos se pueden usar y bajo qué reglas",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "La IA pública puede retener o exponer información.",
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
      "q": "Ventas usa hojas con datos de clientes. ¿Cómo debe gestionarse?",
      "joke": false,
      "choices": [
        "Definir almacenamiento oficial y acceso controlado",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Las copias sueltas dificultan protección y borrado.",
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
      "q": "Se recibe un hallazgo de auditoría. ¿Qué acción reduce mejor el riesgo?",
      "joke": false,
      "choices": [
        "Asignar dueño, fecha y plan de remediación",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Los hallazgos deben cerrarse con evidencia.",
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
      "q": "Un usuario necesita acceso temporal. ¿Cuál es el enfoque correcto?",
      "joke": false,
      "choices": [
        "Dar acceso con vencimiento y registro",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "El acceso temporal no debe volverse permanente.",
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
      "q": "Se detecta fuga de información impresa. ¿Qué respuesta deja mejor control?",
      "joke": false,
      "choices": [
        "Investigar y reforzar impresión segura",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "La seguridad también aplica al papel.",
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
      "q": "Un área pide excepción a una política. ¿Qué medida es más apropiada?",
      "joke": true,
      "choices": [
        "Documentar motivo, riesgo, controles y fecha fin",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Las excepciones deben ser temporales y aprobadas.",
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
      "q": "Una aplicación externa pide demasiados permisos. ¿Cómo se debe resolver?",
      "joke": false,
      "choices": [
        "Revisar necesidad y negar permisos excesivos",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Los permisos amplios aumentan exposición.",
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
      "q": "Se necesita capacitar usuarios. ¿Qué opción mantiene trazabilidad?",
      "joke": false,
      "choices": [
        "Usar ejemplos claros y medir aprendizaje",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "La capacitación debe cambiar comportamientos.",
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
      "q": "Un sistema nuevo no tiene logs suficientes. ¿Cuál sería la decisión responsable?",
      "joke": false,
      "choices": [
        "Definir eventos importantes antes de operar",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Sin logs no se puede investigar bien.",
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
      "q": "Un área comparte datos con un tercero. ¿Qué debe quedar definido?",
      "joke": false,
      "choices": [
        "Minimizar datos y usar canal aprobado",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Compartir menos datos reduce impacto.",
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
      "q": "Se detecta configuración distinta entre equipos. ¿Cuál es la práctica recomendada?",
      "joke": false,
      "choices": [
        "Aplicar una configuración base segura",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Una base común reduce errores.",
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
      "q": "Un proyecto usa código abierto. ¿Qué alternativa equilibra operación y seguridad?",
      "joke": false,
      "choices": [
        "Revisar dependencias y mantenerlas actualizadas",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Las dependencias también tienen vulnerabilidades.",
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
      "q": "Se planea acceso remoto. ¿Qué acción debe priorizarse?",
      "joke": false,
      "choices": [
        "Usar MFA, canal seguro y registro de actividad",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "El acceso remoto debe ser controlado.",
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
      "q": "Un sistema muestra información técnica de errores. ¿Qué medida ayuda a evitar problemas futuros?",
      "joke": false,
      "choices": [
        "Ocultar detalles al usuario y registrar internamente",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Los detalles técnicos pueden ayudar a atacantes.",
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
      "q": "Un usuario pide borrar datos personales. ¿Cuál opción protege mejor al negocio?",
      "joke": false,
      "choices": [
        "Atenderlo mediante el proceso de privacidad",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Los derechos de datos requieren validación y trazabilidad.",
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
      "q": "Un proveedor termina contrato. ¿Cómo conviene documentarlo?",
      "joke": false,
      "choices": [
        "Retirar accesos y confirmar devolución o borrado de datos",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "El cierre del proveedor también cierra riesgos.",
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
      "q": "Un equipo trabaja fuera de oficina. ¿Qué respuesta evita una excepción informal?",
      "joke": false,
      "choices": [
        "Aplicar controles de dispositivo, conexión y datos",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "El trabajo remoto requiere controles consistentes.",
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
      "q": "Una cuenta admin no usa MFA. ¿Cuál es el paso de gobierno correcto?",
      "joke": false,
      "choices": [
        "Activar MFA fuerte de inmediato",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Las cuentas privilegiadas son objetivos principales.",
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
      "q": "Un sistema recibe datos de clientes. ¿Qué decisión facilita seguimiento?",
      "joke": false,
      "choices": [
        "Validar entradas y proteger datos desde el inicio",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Los datos deben cuidarse desde que entran.",
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
      "q": "Se analiza un incidente. ¿Qué decisión conviene tomar?",
      "joke": false,
      "choices": [
        "Preservar evidencia antes de limpiar",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "La evidencia ayuda a entender alcance y causa.",
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
      "q": "Una solución de nube tiene muchas opciones por defecto. ¿Cuál es el control más adecuado?",
      "joke": false,
      "choices": [
        "Configurar mínimo privilegio y revisar valores iniciales",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Los valores por defecto no siempre son seguros.",
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
      "q": "Un usuario ya no requiere un permiso. ¿Cómo debe gestionarse?",
      "joke": false,
      "choices": [
        "Retirarlo en la revisión periódica",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Los permisos innecesarios aumentan riesgo.",
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
      "q": "Se evalúa contratar seguro cyber. ¿Qué acción reduce mejor el riesgo?",
      "joke": false,
      "choices": [
        "Usarlo como transferencia parcial, no como sustituto de controles",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "El seguro no reemplaza la prevención.",
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
      "q": "Llega un indicador de amenaza al SOC. ¿Cuál es el enfoque correcto?",
      "joke": false,
      "choices": [
        "Validar si aplica al entorno y crear detección",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "La inteligencia debe convertirse en acción útil.",
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
      "q": "Un equipo expone servicios que no se usan. ¿Qué respuesta deja mejor control?",
      "joke": false,
      "choices": [
        "Cerrar servicios innecesarios",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Menos servicios expuestos significa menos superficie de ataque.",
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
      "q": "Se prepara reporte para dirección. ¿Qué medida es más apropiada?",
      "joke": false,
      "choices": [
        "Explicar riesgo, impacto y avance de controles",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Dirección necesita lenguaje de negocio.",
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
      "q": "Se implementa una nueva política. ¿Cómo se debe resolver?",
      "joke": false,
      "choices": [
        "Comunicarla, capacitar y medir cumplimiento",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Una política no aplicada no protege.",
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
      "q": "Una cuenta tiene muchos intentos fallidos. ¿Qué opción mantiene trazabilidad?",
      "joke": false,
      "choices": [
        "Investigar posible ataque o contraseña comprometida",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Los intentos fallidos pueden ser señal temprana.",
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
      "q": "Un sistema está expuesto a internet. ¿Cuál sería la decisión responsable?",
      "joke": true,
      "choices": [
        "Reducir superficie, parchar y monitorear",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Todo servicio público necesita protección extra.",
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
      "q": "Un archivo importante se borra por error. ¿Qué debe quedar definido?",
      "joke": false,
      "choices": [
        "Restaurar desde respaldo probado",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "La recuperación depende de respaldos útiles.",
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
      "q": "Se diseña proceso de baja de personal. ¿Cuál es la práctica recomendada?",
      "joke": false,
      "choices": [
        "Cerrar accesos, recuperar equipos y validar pendientes",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "La baja debe ejecutarse el mismo día.",
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
      "q": "Un sistema requiere datos de salud. ¿Qué alternativa equilibra operación y seguridad?",
      "joke": false,
      "choices": [
        "Aplicar controles reforzados y limitar acceso",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Los datos sensibles necesitan mayor protección.",
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
      "q": "Se sospecha uso de cuenta compartida. ¿Qué acción debe priorizarse?",
      "joke": false,
      "choices": [
        "Eliminarla y crear identidades individuales",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Las identidades individuales dan trazabilidad.",
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
      "q": "Un proceso crítico no tiene responsable suplente. ¿Qué medida ayuda a evitar problemas futuros?",
      "joke": false,
      "choices": [
        "Nombrar respaldo y documentar conocimiento",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "La operación no debe depender de una sola persona.",
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
      "q": "Se revisa riesgo de correo externo. ¿Cuál opción protege mejor al negocio?",
      "joke": false,
      "choices": [
        "Configurar protecciones y educar usuarios",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Correo externo es una vía común de ataque.",
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
      "q": "Una persona reporta error de seguridad. ¿Cómo conviene documentarlo?",
      "joke": false,
      "choices": [
        "Recibirlo sin culpar y guiar el reporte",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Una cultura sin culpa mejora reportes tempranos.",
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
      "q": "Se detecta actividad fuera de horario. ¿Qué respuesta evita una excepción informal?",
      "joke": false,
      "choices": [
        "Revisar si es normal o sospechosa",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "El contexto define si una actividad es riesgo.",
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
      "q": "Se crea una nueva base de datos. ¿Cuál es el paso de gobierno correcto?",
      "joke": false,
      "choices": [
        "Definir cifrado, accesos y respaldos desde el inicio",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "La base debe nacer con controles.",
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
      "q": "Un reporte contiene demasiados datos personales. ¿Qué decisión facilita seguimiento?",
      "joke": false,
      "choices": [
        "Reducir datos al mínimo necesario",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "La minimización reduce exposición.",
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
      "q": "Un correo usa una marca conocida. ¿Qué decisión conviene tomar?",
      "joke": false,
      "choices": [
        "Validar remitente y enlaces, no solo el logo",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Los atacantes copian marcas conocidas.",
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
      "q": "Un equipo no cumple configuración base. ¿Cuál es el control más adecuado?",
      "joke": false,
      "choices": [
        "Corregirlo o aislarlo hasta cumplir",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Los equipos fuera de estándar elevan riesgo.",
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
      "q": "Un usuario solicita excepción de MFA. ¿Cómo debe gestionarse?",
      "joke": false,
      "choices": [
        "Evaluar riesgo y usar alternativa aprobada si procede",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Las excepciones de MFA deben ser muy controladas.",
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
      "q": "Una aplicación guarda datos sin cifrar. ¿Qué acción reduce mejor el riesgo?",
      "joke": false,
      "choices": [
        "Evaluar sensibilidad y aplicar cifrado adecuado",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "El cifrado protege datos ante accesos indebidos.",
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
      "q": "Un proyecto cambia de proveedor. ¿Cuál es el enfoque correcto?",
      "joke": false,
      "choices": [
        "Retirar accesos del proveedor anterior",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "El cambio de proveedor debe cerrar accesos antiguos.",
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
      "q": "Una herramienta nueva manda datos a internet. ¿Qué respuesta deja mejor control?",
      "joke": false,
      "choices": [
        "Revisar destino, contrato y aprobación antes de usarla",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "El flujo de datos externos debe conocerse.",
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
      "q": "Un plan de respuesta no se ha probado. ¿Qué medida es más apropiada?",
      "joke": false,
      "choices": [
        "Hacer ejercicio de mesa y corregir huecos",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Los planes se validan con práctica.",
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
      "q": "Se quiere reducir riesgo de fraude interno. ¿Cómo se debe resolver?",
      "joke": false,
      "choices": [
        "Separar funciones, registrar acciones y revisar permisos",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "El fraude interno se reduce con controles cruzados.",
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
      "q": "Un sistema tiene datos duplicados en muchas carpetas. ¿Qué opción mantiene trazabilidad?",
      "joke": false,
      "choices": [
        "Centralizar y controlar copias",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Las copias dispersas elevan exposición.",
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
      "q": "Se evalúa una compra de tecnología. ¿Cuál sería la decisión responsable?",
      "joke": false,
      "choices": [
        "Incluir seguridad, privacidad y soporte desde el inicio",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "La seguridad debe considerarse antes de comprar.",
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
      "q": "Dirección pregunta por ciberseguridad. ¿Qué debe quedar definido?",
      "joke": false,
      "choices": [
        "Presentar riesgos, impacto y avance de controles",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "La conversación debe enfocarse en riesgo de negocio.",
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
      "q": "Un empleado reporta pérdida de celular corporativo. ¿Cuál es la práctica recomendada?",
      "joke": false,
      "choices": [
        "Bloquear o borrar remoto y registrar incidente",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Los dispositivos perdidos pueden exponer accesos.",
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
      "q": "Un proceso requiere aprobación doble. ¿Qué alternativa equilibra operación y seguridad?",
      "joke": true,
      "choices": [
        "Mantenerla para acciones de alto impacto",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "La doble aprobación reduce errores y fraude.",
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
      "q": "Se requiere compartir información con auditor externo. ¿Qué acción debe priorizarse?",
      "joke": false,
      "choices": [
        "Compartir solo lo necesario por canal seguro",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "La auditoría no justifica enviar más datos de los requeridos.",
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
      "q": "Un tablero muestra indicadores sensibles a muchas áreas. ¿Qué medida ayuda a evitar problemas futuros?",
      "joke": false,
      "choices": [
        "Limitar vistas según rol y necesidad",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "Los tableros también deben tener control de acceso.",
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
      "q": "Una cuenta de servicio no rota su clave. ¿Cuál opción protege mejor al negocio?",
      "joke": false,
      "choices": [
        "Planear rotación y llevarla a un gestor de secretos",
        "Aprobarlo verbalmente para avanzar rápido",
        "Dejarlo sin responsable hasta que falle",
        "Compartir acceso amplio para evitar tickets"
      ],
      "correct": 0,
      "exp": "Las claves antiguas elevan riesgo de abuso.",
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
      "q": "Se revisa un proceso manual con datos sensibles. ¿Cómo conviene documentarlo?",
      "joke": false,
      "choices": [
        "Agregar controles, registro y revisión periódica",
        "Esperar a que ocurra un incidente",
        "Ocultar el caso para evitar trabajo",
        "Dar permisos generales sin revisión"
      ],
      "correct": 0,
      "exp": "Los procesos manuales también requieren controles.",
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
      "q": "Una aplicación permite exportar todos los datos. ¿Qué respuesta evita una excepción informal?",
      "joke": false,
      "choices": [
        "Limitar exportaciones y registrar cada descarga",
        "Resolverlo por chat informal",
        "Eliminar evidencias para cerrar rápido",
        "Depender de una sola persona"
      ],
      "correct": 0,
      "exp": "Las exportaciones masivas pueden facilitar fugas.",
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
      "q": "Un equipo de trabajo comparte archivos por enlaces públicos. ¿Cuál es el paso de gobierno correcto?",
      "joke": false,
      "choices": [
        "Cambiar a enlaces limitados y con vencimiento",
        "Postergar la revisión indefinidamente",
        "Cambiar solo el nombre del recurso",
        "Permitirlo por costumbre"
      ],
      "correct": 0,
      "exp": "Los enlaces públicos pueden circular fuera de control.",
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
      "q": "Un sistema no tiene inventario actualizado. ¿Qué decisión facilita seguimiento?",
      "joke": false,
      "choices": [
        "Registrar activos, dueños y criticidad",
        "Confiar solo en buena fe",
        "Ignorar la documentación",
        "Usar cuentas compartidas"
      ],
      "correct": 0,
      "exp": "No se puede proteger lo que no se conoce.",
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

export const QB = QB_RAW;
export const QB_MEDIUM = QB.medium;
export default QB;
