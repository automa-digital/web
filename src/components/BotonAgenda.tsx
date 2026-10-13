import { AGENDA_URL } from "@/config/contacto";

const clases =
  "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:w-auto";

const texto = "Agenda un diagnóstico gratis";

export default function BotonAgenda() {
  // Sin enlace de reservas, el botón lleva a la sección de contacto.
  if (!AGENDA_URL) {
    return (
      <a href="#contacto" className={clases}>
        {texto}
      </a>
    );
  }

  return (
    <a
      href={AGENDA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clases}
    >
      {texto}
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
      >
        <path d="M7 13 13 7M8 7h5v5" />
      </svg>
    </a>
  );
}
