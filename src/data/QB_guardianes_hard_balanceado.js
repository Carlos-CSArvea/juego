// Banco de preguntas Guardianes - Nivel hard
// Tono usuario final: claro, directo y poco tecnico.
// Total: 100 preguntas.

const QB_RAW = {
  hard: [
    {
        "q": "Escenario critico: varias cuentas intentan entrar con la misma contraseña comun. Cual es la accion mas segura?",
        "joke": true,
        "choices": [
            "Bloquear el patron, forzar MFA y revisar cuentas afectadas",
            "Cambiar solo la clave del primer usuario",
            "Ignorar si nadie entro, pero sin validar el riesgo",
            "Quitar bloqueo por intentos, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un atacante entro por la cuenta de un proveedor. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Cortar acceso del proveedor y revisar que pudo ver o cambiar",
            "Borrar la cuenta sin revisar, pero sin validar el riesgo, pero sin validar el riesgo",
            "Pedir disculpa y seguir, pero sin validar el riesgo",
            "Dar acceso nuevo para no afectar servicio"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: aparece una regla que reenvia correos a un dominio externo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Desactivar la regla, revisar la cuenta y buscar otros cambios",
            "Dejarla si el usuario no se queja",
            "Cambiar asunto de correos, pero sin validar el riesgo, pero sin validar el riesgo",
            "Borrar mensajes antiguos, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: los respaldos tambien fueron cifrados por ransomware. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Usar respaldos aislados e inmutables en la estrategia",
            "Hacer mas respaldos en el mismo servidor, pero sin validar el riesgo",
            "Guardar respaldos sin control",
            "Pagar de inmediato sin analizar"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un servicio critico queda expuesto a internet por error. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Cerrar exposicion, revisar accesos y buscar actividad rara",
            "Ocultarlo cambiando nombre, pero sin validar el riesgo, pero sin validar el riesgo",
            "Esperar a la ventana mensual",
            "Publicar aviso interno nada mas"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una cuenta con permisos altos inicia sesion desde ubicacion rara. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Bloquear sesion y validar identidad con el usuario",
            "Ignorar si la contraseña es correcta",
            "Dar mas permisos, pero sin validar el riesgo, pero sin validar el riesgo",
            "Borrar alerta, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema de nube tiene llaves publicas en un repositorio. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revocar llaves, revisar uso y mover secretos a un gestor",
            "Cambiar nombre del repositorio",
            "Borrar solo el commit visible",
            "Pedir que nadie mire, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un colaborador usa una herramienta IA publica con datos internos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Detener el uso y revisar que datos se compartieron",
            "Permitirlo si dio buen resultado",
            "Subir mas datos para mejorar respuesta, pero sin validar el riesgo",
            "Copiar respuestas sin revisar"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detecta trafico raro saliendo de un equipo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aislar el equipo y revisar posible malware o fuga",
            "Reiniciar y continuar",
            "Desactivar monitoreo",
            "Cambiar el cable de red, pero sin validar el riesgo, aunque no deja evidencia clara"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un proveedor avisa tarde que tuvo una brecha. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Activar plan de terceros y revisar obligaciones contractuales",
            "Aceptar la explicacion sin evidencia, pero sin validar el riesgo",
            "Ignorar si el servicio funciona",
            "Compartir mas datos para investigar"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: la cuenta de un directivo manda solicitudes extrañas. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Validar por otro canal y revisar posible compromiso",
            "Cumplir porque es directivo, pero sin validar el riesgo",
            "Responder con informacion",
            "Reenviar a todo el equipo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un usuario reporta que aprobo una solicitud MFA por error. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Cambiar credenciales, cerrar sesiones y revisar actividad",
            "Decirle que tenga mas cuidado y cerrar",
            "Quitar MFA, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Ignorar si ya paso, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se descubre una cuenta admin compartida. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Eliminar uso compartido y crear cuentas individuales",
            "Cambiar la clave y seguir",
            "Compartirla solo por correo seguro, pero sin validar el riesgo",
            "Usarla solo en emergencia"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema viejo no soporta MFA. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aislarlo y crear controles compensatorios mientras se reemplaza",
            "Dejarlo igual por ser viejo, pero sin validar el riesgo",
            "Publicarlo sin restricciones, pero sin validar el riesgo, pero sin validar el riesgo",
            "Quitar contraseña, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detectan muchos archivos comprimidos saliendo por correo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Bloquear envio y revisar si hay fuga de datos",
            "Permitirlo por productividad",
            "Cambiar extension del archivo, pero sin validar el riesgo",
            "Borrar registros"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: alguien intenta iniciar sesion a muchas cuentas lentamente. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Tratarlo como password spraying y ajustar controles",
            "Ignorarlo por ser lento",
            "Bajar alertas, pero sin validar el riesgo",
            "Reiniciar servidor, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una aplicacion critica no registra accesos de administradores. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Activar registro y revisar acciones privilegiadas",
            "Confiar en los admins",
            "Guardar capturas manuales, pero sin validar el riesgo",
            "Borrar usuarios viejos"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un equipo de desarrollo usa paquetes de internet sin revisar. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revisar dependencias y usar repositorios aprobados",
            "Instalar todo paquete popular",
            "Copiar codigo sin fuente",
            "Desactivar analisis, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una API permite ver datos cambiando un numero en la URL. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Corregir autorizacion por usuario y revisar accesos previos",
            "Ocultar el numero con otro nombre",
            "Pedir a usuarios no hacerlo, pero sin validar el riesgo",
            "Cambiar colores de la pagina, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detecta correo que roba sesion aunque habia MFA. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Usar MFA resistente a phishing y revisar tokens activos",
            "Quitar MFA por no servir, pero sin validar el riesgo, pero sin validar el riesgo",
            "Cambiar logo del portal, pero sin validar el riesgo",
            "Ignorar si paso una vez, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un atacante creo una cuenta local en un servidor. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Deshabilitarla, revisar origen y buscar persistencia",
            "Cambiarle nombre, pero sin validar el riesgo",
            "Usarla para soporte, pero sin validar el riesgo, pero sin validar el riesgo",
            "Borrar solo el acceso directo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: hay demasiados permisos en carpetas compartidas. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aplicar minimo privilegio y revisar accesos reales",
            "Dar acceso a todos, pero sin validar el riesgo, pero sin validar el riesgo",
            "Mover carpetas a escritorio",
            "Quitar auditoria, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema de pagos muestra errores con datos internos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Corregir mensajes y registrar detalles solo internamente",
            "Mostrar mas detalles al usuario",
            "Borrar logs, pero sin validar el riesgo, pero sin validar el riesgo",
            "Ignorar si solo pasa a veces"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un celular corporativo perdido seguia con correo abierto. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Bloquear dispositivo, cerrar sesiones y revisar acceso",
            "Esperar a que lo devuelvan",
            "Mandar mensaje al telefono",
            "Cambiar solo PIN, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sitio falso copia el login corporativo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Bloquear dominio, avisar usuarios y revisar credenciales usadas",
            "Solo cambiar diseño del login, pero sin validar el riesgo",
            "Esperar que nadie caiga, pero sin validar el riesgo",
            "Compartir el link para advertir, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un archivo con macros llego a muchas personas. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Bloquearlo, buscar ejecuciones y avisar a usuarios",
            "Pedir que no lo abran si quieren, pero sin validar el riesgo",
            "Abrirlo en una laptop vieja",
            "Borrar solo tu copia"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un usuario tiene permisos que no corresponden a su area. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Corregir permisos y revisar quien los autorizo",
            "Dejarlos por si ayudan",
            "Ocultarlos en el sistema, pero sin validar el riesgo",
            "Dar los mismos a todos"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema de produccion no tiene plan de regreso. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "No cambiar hasta tener rollback probado",
            "Cambiar y cruzar dedos",
            "Guardar una captura antes, pero sin validar el riesgo",
            "Avisar despues"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se sospecha fuga por impresiones. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revisar logs de impresion y activar impresion segura",
            "Quitar todas las impresoras",
            "No investigar para evitar conflictos",
            "Cambiar papel, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un correo de proveedor trae factura con enlace raro. Cual es la accion mas segura?",
        "joke": true,
        "choices": [
            "Validar por canal conocido antes de descargar",
            "Abrir por urgencia",
            "Mandarlo a contabilidad, pero sin validar el riesgo",
            "Descargar en casa"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un usuario conecta equipo personal a red interna. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aplicar control de acceso a red y revisar el equipo",
            "Permitir si trabaja bien",
            "Ignorar si es visitante",
            "Compartir clave WiFi interna, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un tablero muestra datos de clientes a demasiadas areas. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Limitar vistas segun necesidad de negocio",
            "Dejarlo abierto para transparencia, pero sin validar el riesgo",
            "Exportarlo a Excel",
            "Quitar contraseñas"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una alerta critica se repite cada noche. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Investigar causa y documentar respuesta",
            "Silenciarla sin revisar",
            "Eliminar regla",
            "Apagar monitoreo nocturno, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una cuenta de servicio no rota clave desde hace años. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Rotarla con plan y usar gestor de secretos",
            "Dejarla para no romper sistemas, pero sin validar el riesgo",
            "Compartirla por correo",
            "Ponerla en documento"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detecta actividad rara en horarios de vacaciones. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Verificar si el usuario esta ausente y cerrar riesgo",
            "Ignorar por ser vacaciones",
            "Cambiar nombre de usuario",
            "Borrar eventos, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un proveedor requiere acceso remoto permanente. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aprobar acceso temporal, registrado y revisado",
            "Abrir VPN permanente, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Compartir una cuenta",
            "Quitar monitoreo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se reciben muchas quejas por correos sospechosos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Buscar campaña activa y bloquear indicadores",
            "Responder uno por uno sin investigar, pero sin validar el riesgo",
            "Pedir que borren todo",
            "Desactivar correo externo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un empleado descarga base completa sin razon clara. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Validar necesidad y revisar posible fuga",
            "Asumir que era trabajo normal, pero sin validar el riesgo",
            "Aumentar cuota de descarga",
            "Borrar alerta"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un control falla y permite acceso abierto. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Cerrar acceso por defecto hasta corregir",
            "Dejar abierto para no afectar, pero sin validar el riesgo",
            "Avisar sin cambiar nada",
            "Crear excepcion permanente"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un servidor no aparece en inventario. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Inventariarlo, asignar dueño y revisar exposicion",
            "Ignorarlo porque funciona",
            "Apagarlo sin revisar",
            "Cambiarle IP, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un reporte de cumplimiento oculta hallazgos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Corregir reporte y mantener evidencia real",
            "Aceptar version bonita, pero sin validar el riesgo",
            "Eliminar pruebas",
            "Cambiar fechas"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un usuario usa correo personal para trabajo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Migrar comunicacion a canal corporativo",
            "Permitirlo si es rapido",
            "Reenviar datos sensibles, pero sin validar el riesgo",
            "Guardar claves ahi"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un equipo admin usa la misma clave local. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Usar administracion segura de contraseñas locales",
            "Mantener por facilidad, pero sin validar el riesgo, aunque no deja evidencia clara",
            "Poner clave en manual",
            "Compartirla con todos"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una app movil corporativa guarda datos sin bloqueo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Exigir bloqueo, cifrado y borrado remoto",
            "Confiar en el usuario, pero sin validar el riesgo",
            "Guardar todo local",
            "No pedir PIN"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se requiere compartir datos con auditor externo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Compartir solo lo necesario por canal seguro",
            "Mandar base completa",
            "Usar correo personal",
            "Quitar marcas de clasificacion, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detecta un enlace malicioso despues de varios clics. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Identificar usuarios afectados y cerrar sesiones si aplica",
            "Solo borrar el correo original",
            "No avisar para evitar panico",
            "Cambiar asunto, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema tiene usuarios genericos como ventas1. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Cambiar a usuarios individuales trazables",
            "Seguir usando genericos",
            "Compartir clave por turno, pero sin validar el riesgo",
            "No registrar acciones"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un incidente afecta a clientes. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Coordinar comunicacion legal, negocio y seguridad",
            "Publicar detalles sin validar, pero sin validar el riesgo",
            "Ocultarlo indefinidamente",
            "Culpar al proveedor"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un archivo sensible esta publico por enlace. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revocar enlace y revisar accesos previos",
            "Cambiar nombre del archivo, pero sin validar el riesgo",
            "Esperar que nadie lo abra",
            "Mandar otro enlace"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un empleado instala extension de navegador desconocida. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revisar permisos y bloquear extensiones no aprobadas",
            "Permitir todas, pero sin validar el riesgo",
            "Ignorar si es gratis, pero sin validar el riesgo, pero sin validar el riesgo",
            "Pedir que la use solo poco"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema critico depende de una clave en texto plano. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Moverla a gestor de secretos y rotarla",
            "Ocultarla cambiando nombre, pero sin validar el riesgo",
            "Dejarla porque funciona",
            "Mandarla a soporte"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un ataque usa marca corporativa en redes sociales. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Reportar perfiles falsos y avisar a usuarios",
            "Ignorar redes sociales",
            "Responder publicamente con datos, pero sin validar el riesgo",
            "Compartir el perfil"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un colaborador copia datos a USB. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revisar autorizacion y aplicar controles de medios",
            "Permitir si es rapido",
            "No registrar el evento",
            "Usar USB personal, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un nuevo sistema no tiene pruebas de seguridad. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "No pasarlo a produccion sin revision minima",
            "Publicarlo y revisar despues, pero sin validar el riesgo",
            "Confiar en proveedor",
            "Quitar autenticacion"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un servidor tiene muchas cuentas antiguas. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Deshabilitar cuentas sin uso y revisar permisos",
            "Mantenerlas por historia, pero sin validar el riesgo",
            "Cambiarles nombre",
            "Ignorar si no molestan"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un ejecutivo pide saltar controles por urgencia. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Escalar y buscar alternativa segura",
            "Saltar controles sin registro, pero sin validar el riesgo",
            "Prestar cuenta admin",
            "Quitar logs"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detecta informacion confidencial en papelera comun. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Investigar y reforzar destruccion segura",
            "Ignorar si ya esta rota, pero sin validar el riesgo",
            "Tomar foto y compartir",
            "Mezclar con mas basura"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un equipo se conecta a paises no esperados. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revisar sesion, dispositivo y cuenta afectada",
            "Bloquear todo internet, pero sin validar el riesgo",
            "Ignorar si usa VPN",
            "Cambiar zona horaria"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se planea migracion a nube. Cual es la accion mas segura?",
        "joke": true,
        "choices": [
            "Definir seguridad, identidad y registros desde el inicio",
            "Subir todo y configurar luego",
            "Usar una cuenta admin, pero sin validar el riesgo, pero sin validar el riesgo",
            "No hacer inventario, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un tercero pide datos para soporte. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Validar identidad, contrato y minimo necesario",
            "Enviar todo para acelerar",
            "Usar WhatsApp, pero sin validar el riesgo, pero sin validar el riesgo",
            "No registrar entrega"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una alerta muestra uso de herramienta remota no aprobada. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aislar equipo y validar si hubo acceso no autorizado",
            "Permitir si soluciona problemas",
            "Cambiar icono, pero sin validar el riesgo",
            "Borrar acceso directo, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema muestra todos los clientes a cualquier usuario. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Corregir permisos por rol y necesidad",
            "Dejarlo para eficiencia",
            "Pedir que no miren",
            "Ocultar columnas visualmente, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una clave de API queda en historial de chat. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revocarla y crear una nueva por canal seguro",
            "Borrar mensaje y seguir, pero sin validar el riesgo",
            "Pedir que no la usen",
            "Cambiar nombre"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un equipo de soporte pide contraseña de usuario. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Usar proceso de restablecimiento, no pedir contraseña",
            "Pedirla solo por telefono",
            "Guardarla en ticket, pero sin validar el riesgo, pero sin validar el riesgo",
            "Mandarla por correo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema no tiene dueño para aprobar accesos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Asignar dueño antes de otorgar permisos",
            "Dar acceso por solicitud",
            "Usar criterio de TI solamente, pero sin validar el riesgo",
            "Aprobar todo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un usuario reporta popups y redirecciones. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revisar posible malware o extension maliciosa",
            "Pedir que cierre ventanas, pero sin validar el riesgo",
            "Instalar mas extensiones",
            "Ignorar si puede trabajar"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sitio de proveedor cambia dominio sin aviso. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Validar por canal oficial antes de ingresar",
            "Entrar si se ve igual",
            "Guardar clave en navegador, pero sin validar el riesgo",
            "Compartir el link"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se necesita enviar archivo grande sensible. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Usar plataforma aprobada con permisos y vencimiento",
            "Usar nube personal publica",
            "Partirlo en correos, pero sin validar el riesgo, pero sin validar el riesgo",
            "Mandarlo sin clave, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema permite exportar todos los datos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Registrar exportaciones y limitar por rol",
            "Permitir a cualquiera",
            "Ocultar boton en pantalla, pero sin validar el riesgo",
            "Borrar historial"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un usuario falla varios simulacros. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Reforzar capacitacion sin exponerlo publicamente",
            "Publicar su nombre",
            "Quitarle equipo, pero sin validar el riesgo, pero sin validar el riesgo",
            "Ignorar aprendizaje"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un incidente requiere decisiones rapidas. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Seguir roles definidos y comunicacion aprobada",
            "Improvisar por chat",
            "Dejar que cualquiera decida, pero sin validar el riesgo",
            "No documentar nada"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una base de datos de pruebas usa datos reales. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Anonimizar o usar datos ficticios",
            "Usar datos reales por facilidad, pero sin validar el riesgo",
            "Compartir copia completa",
            "No proteger ambiente"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un usuario pide acceso desde dispositivo no registrado. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Validar dispositivo o negar acceso segun politica",
            "Permitir por urgencia",
            "Quitar registro de dispositivo",
            "Compartir token, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un control de seguridad genera falsos positivos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Ajustarlo con evidencia, no apagarlo sin analisis",
            "Apagarlo por molestia",
            "Eliminar la regla, pero sin validar el riesgo, pero sin validar el riesgo",
            "Ignorar todas las alertas"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un equipo muestra pantalla de rescate. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aislarlo, reportar y preservar evidencia",
            "Pagar desde cuenta personal",
            "Reiniciar hasta que arranque, pero sin validar el riesgo",
            "Compartir captura en redes"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un correo interno contiene datos de mas personas de las necesarias. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aplicar minimizacion de datos",
            "Enviar copia a todos",
            "Guardar por si acaso",
            "No revisar destinatarios, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una herramienta de seguridad pide permisos altos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Revisar proveedor, necesidad y aprobacion",
            "Aceptar siempre",
            "Instalar en todos sin prueba, pero sin validar el riesgo",
            "Compartir clave admin"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema no tiene bloqueo por intentos fallidos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Agregar bloqueo inteligente y monitoreo",
            "Dejar intentos ilimitados, pero sin validar el riesgo",
            "Cambiar color del login",
            "Quitar contraseñas"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detecta conexion remota fuera de horario. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Validar si estaba autorizada y revisar actividad",
            "Ignorar si fue exitosa",
            "Borrar conexion, pero sin validar el riesgo, pero sin validar el riesgo",
            "Cambiar monitor, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un archivo importante se envia al destinatario equivocado. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Reportar de inmediato y activar contencion",
            "Pedir que lo ignore y ya, pero sin validar el riesgo",
            "Borrar tu copia",
            "No decir nada"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se configura acceso a proveedores. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Separar cuentas, limitar tiempo y registrar acciones",
            "Usar una cuenta compartida",
            "Dar admin permanente, pero sin validar el riesgo, pero sin validar el riesgo",
            "No pedir MFA, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un dashboard ejecutivo muestra datos sensibles en sala abierta. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Limitar visualizacion y usar modo presentacion",
            "Dejarlo siempre abierto",
            "Tomar fotos para reporte",
            "Publicarlo en pantallas comunes, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un servicio no soporta cifrado moderno. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Evaluar reemplazo o aislarlo con controles",
            "Seguir usandolo igual",
            "Bajar seguridad de todos, pero sin validar el riesgo",
            "Ignorar certificados"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una alerta indica descarga masiva de archivos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Confirmar legitimidad y bloquear si es sospechoso",
            "Aumentar limite, pero sin validar el riesgo, pero sin validar el riesgo",
            "No revisar porque es usuario interno",
            "Eliminar alerta, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un proveedor pide instalar agente en equipos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Evaluar seguridad del agente y alcance de permisos",
            "Instalarlo sin revisar",
            "Darle admin local, pero sin validar el riesgo, pero sin validar el riesgo",
            "No avisar a usuarios"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una cuenta tiene correo y aplicaciones abiertas en equipo perdido. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Cerrar sesiones, bloquear equipo y revisar actividad",
            "Esperar recuperacion, pero sin validar el riesgo, pero sin validar el riesgo",
            "Cambiar solo clave WiFi",
            "No registrar incidente"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema publico no tiene proteccion contra bots. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Agregar controles de abuso y monitoreo",
            "Aceptar trafico ilimitado, pero sin validar el riesgo",
            "Quitar logs por volumen",
            "Bloquear usuarios reales"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se sospecha robo de datos lento. Cual es la accion mas segura?",
        "joke": true,
        "choices": [
            "Revisar volumen, destinos y comportamiento normal",
            "Mirar solo antivirus",
            "Ignorar por ser poco trafico, pero sin validar el riesgo",
            "Cerrar internet a todos"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una app nueva pide iniciar con cuenta personal. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Usar identidad corporativa y politicas de acceso",
            "Usar cuentas personales, pero sin validar el riesgo",
            "Compartir un usuario",
            "No registrar accesos"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un archivo se comparte con enlace publico permanente. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Cambiar a acceso limitado y vencimiento",
            "Dejarlo publico por comodidad, pero sin validar el riesgo",
            "Poner nombre dificil",
            "Confiar en que nadie lo ve"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un equipo no tiene antivirus activo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Reactivarlo o aislar hasta corregir",
            "Usarlo igual",
            "Instalar software no aprobado, pero sin validar el riesgo",
            "Ignorar si esta rapido"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detecta un patron de fraude por correo. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Bloquear indicadores y comunicar señales a usuarios",
            "Callar para no alarmar",
            "Responder al atacante",
            "Reenviar el fraude, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un proyecto termina. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Cerrar accesos, archivar datos y retirar secretos",
            "Dejar todo abierto, pero sin validar el riesgo, pero sin validar el riesgo",
            "Compartir claves al siguiente proyecto",
            "No revisar permisos"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un usuario abre archivo sospechoso. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Reportar y revisar equipo aunque no vea sintomas",
            "Esperar a que falle",
            "Borrar archivo y callar",
            "Mandarlo a otros, pero sin validar el riesgo, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un sistema permite contraseñas debiles. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aplicar politica fuerte y MFA",
            "Permitirlas para no molestar, pero sin validar el riesgo",
            "Usar misma clave inicial",
            "Quitar caducidad sin control"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un empleado se equivoca y reporta rapido. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Aprovechar el reporte para contener y aprender",
            "Culparlo publicamente",
            "Ocultar el error",
            "Ignorar el aprendizaje, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se requiere aprobar acceso a datos sensibles. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Validar necesidad, dueño del dato y tiempo de acceso",
            "Dar acceso completo, pero sin validar el riesgo, pero sin validar el riesgo",
            "Aprobar por amistad, pero sin validar el riesgo",
            "Enviar copia local, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: una cuenta se usa desde dos paises en minutos. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Tratar como señal de riesgo y cerrar sesion",
            "Ignorar por viajes, pero sin validar el riesgo",
            "Cambiar idioma",
            "Aumentar permisos"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: un proveedor no acepta requisitos de seguridad. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Evaluar riesgo y decidir si se contrata o no",
            "Contratar de todos modos",
            "Omitir clausulas",
            "Dar menos informacion verbal, pero sin validar el riesgo"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
        "q": "Escenario critico: se detecta uso de software pirata. Cual es la accion mas segura?",
        "joke": false,
        "choices": [
            "Retirarlo y usar software aprobado",
            "Permitirlo si funciona, pero sin validar el riesgo",
            "Ignorar licencia",
            "Desactivar antivirus"
        ],
        "correct": 0,
        "exp": "En escenarios criticos importa contener rapido, validar el alcance y dejar evidencia clara para seguimiento.",
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
export const QB_HARD = QB.hard;
export default QB;
