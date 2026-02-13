import os from "node:os";
import ms from "ms";

console.log("Información del sistema operativo:");
console.log("Tipo de SO:", os.type());
console.log("Plataforma:", os.platform());
console.log("Arquitectura:", os.arch());
console.log("Memoria total (bytes):", os.totalmem());
console.log("Memoria libre (bytes):", os.freemem());
console.log("Directorio home del usuario:", os.homedir());
console.log(
  "Tiempo de actividad del sistema (segundos):",
  ms(os.uptime() * 1000, { long: true }),
); // long: true returns "1 hour" instead of "1h"

// console.log("CPUS:", os.cpus());
// console.log("Interfaces de red:", os.networkInterfaces());
