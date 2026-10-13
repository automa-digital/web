import { AGENDA_URL, CORREO } from "./contacto";

// Se llama desde next.config.ts: si los datos de contacto no son válidos, el build falla.
// Vacíos están permitidos (la landing muestra "Datos de contacto pendientes").
export function validarContacto() {
  const errores: string[] = [];

  if (AGENDA_URL && !(AGENDA_URL.startsWith("https://") && URL.canParse(AGENDA_URL))) {
    errores.push(
      `AGENDA_URL ("${AGENDA_URL}") debe ser una URL válida que empiece con https://, por ejemplo https://cal.com/automa.`,
    );
  }

  if (CORREO && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CORREO)) {
    errores.push(
      `CORREO ("${CORREO}") debe tener forma de correo, por ejemplo hola@automa.cl.`,
    );
  }

  if (errores.length > 0) {
    throw new Error(
      `Datos de contacto inválidos en src/config/contacto.ts:\n- ${errores.join("\n- ")}\nCorrígelos o déjalos vacíos.`,
    );
  }
}
