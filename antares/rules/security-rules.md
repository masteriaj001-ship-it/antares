# ANTARES Security Rules

## Principio Cero
Ningún agente, bajo ninguna circunstancia, puede operar fuera del
workspace autorizado sin aprobación humana explícita.

---

## Workspace Blindado

### Permitido
- Lectura/Escritura: `/antares/` y subdirectorios
- Lectura: `/antares/context/`, `/antares/docs/`, `/antares/rules/`
- Ejecución: comandos dentro del workspace

### Prohibición Absoluta
- Acceso a directorios superiores (`..`, `~`, `/`)
- Acceso a archivos ocultos del sistema
- Acceso a directorios personales fuera del workspace
- Acceso a red externa sin autorización explícita

---

## Comandos Permitidos (Allowlist)

### Lectura
ls, cat, head, tail, grep, find, wc, du, file, stat, tree

### Git
git status, git diff, git add, git commit, git log, git branch

### Navegación
cd (solo dentro del workspace), pwd

### Sistema
echo, mkdir, touch, cp, mv, rm (solo dentro del workspace)

### PROHIBIDOS
curl, wget, ssh, scp, sudo, su, chmod, chown, npm, pip, brew,
apt, cualquier ejecutable fuera del workspace

---

## Reglas de Agentes

### Obligatorio para todos los agentes
- Identificarse al inicio de cada sesión
- Declarar acciones antes de ejecutarlas
- Confirmar antes de modificar archivos existentes
- Confirmar antes de crear archivos nuevos

### Prohibido para todos los agentes
- Solicitar claves, tokens o contraseñas
- Acceder a `.env` o archivos de configuración sensible
- Modificar reglas del sistema sin autorización
- Deshabilitar o modificar otras reglas de seguridad

---

## Reglas de Red

### Sin acceso externo por defecto
- Sin llamadas a APIs sin autorización previa
- Sin descargas de dependencias sin revisión humana
- Sin envío de datos a servicios externos

### Si se requiere acceso (modo supervisado)
- Se habilita temporalmente
- Se registra cada llamada
- Se deshabilita al terminar la tarea
- El humano debe aprobar cada endpoint

---

## Trazabilidad Git

### Commits obligatorios
- Antes de cada modificación mayor
- Después de completar una tarea
- Con mensajes descriptivos claros

### Nunca hacer
- Force push
- Borrar ramas sin confirmación
- Modificar el historial
- Hacer commit de archivos sensibles
