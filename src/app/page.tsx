import BotonAgenda from "@/components/BotonAgenda";
import CasoReal from "@/components/CasoReal";
import { AGENDA_URL, CORREO } from "@/config/contacto";

const servicios = [
  {
    titulo: "Automatización de procesos",
    texto:
      "Las tareas repetitivas, como cotizaciones, recordatorios o reportes, se hacen solas.",
  },
  {
    titulo: "Webs y herramientas a medida",
    texto: "Tu sitio, tu agenda o un panel simple para ordenar tu negocio.",
  },
  {
    titulo: "Ahorro en servidores y seguridad",
    texto:
      "Revisamos cuánto pagas por tus servicios digitales y lo ordenamos para que pagues solo lo que usas.",
  },
];

const pasos = [
  {
    titulo: "Diagnóstico gratis",
    texto: "30 minutos para entender tu negocio.",
  },
  {
    titulo: "Propuesta con precio cerrado",
    texto: "sabes cuánto pagas antes de empezar.",
  },
  {
    titulo: "Implementación y entrega",
    texto: "te dejamos todo funcionando y te explicamos cómo usarlo.",
  },
];

const contenedor = "mx-auto w-full max-w-5xl px-4 sm:px-6";

export default function Home() {
  const faltanDatos = !AGENDA_URL || !CORREO;

  return (
    <>
      <header className="border-b border-line">
        <div className={`${contenedor} py-4`}>
          <p className="text-lg font-bold tracking-tight">Automa</p>
        </div>
      </header>

      <main className="flex-1">
        <section aria-labelledby="inicio-titulo">
          <div className={`${contenedor} pb-16 pt-12 sm:pb-24 sm:pt-20`}>
            <h1
              id="inicio-titulo"
              className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl"
            >
              Automatizamos tu pyme para que gaste menos y avance más rápido.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Ordenamos tus procesos, tu web y tus servidores para que ahorres
              tiempo y plata. Sin tecnicismos.
            </p>
            <div className="mt-8">
              <BotonAgenda />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="servicios-titulo"
          className="border-t border-line"
        >
          <div className={`${contenedor} py-16 sm:py-20`}>
            <h2
              id="servicios-titulo"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Servicios
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {servicios.map((servicio) => (
                <li
                  key={servicio.titulo}
                  className="rounded-xl border border-line p-6"
                >
                  <h3 className="text-lg font-semibold">{servicio.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {servicio.texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CasoReal />

        <section aria-labelledby="como-trabajamos-titulo">
          <div className={`${contenedor} py-16 sm:py-20`}>
            <h2
              id="como-trabajamos-titulo"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Cómo trabajamos
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-3">
              {pasos.map((paso, i) => (
                <li key={paso.titulo} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-semibold text-on-accent"
                  >
                    {i + 1}
                  </span>
                  <p className="leading-relaxed">
                    <strong className="font-semibold">{paso.titulo}:</strong>{" "}
                    <span className="text-muted">{paso.texto}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="contacto"
          aria-labelledby="contacto-titulo"
          className="border-t border-line bg-surface"
        >
          <div className={`${contenedor} py-16 sm:py-20`}>
            <h2
              id="contacto-titulo"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Conversemos
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              Elige un horario para tu diagnóstico gratis o escríbenos.
            </p>
            {AGENDA_URL && (
              <div className="mt-8">
                <BotonAgenda />
              </div>
            )}
            {CORREO && (
              <p className="mt-4">
                <a
                  href={`mailto:${CORREO}`}
                  className="font-medium text-accent underline underline-offset-4 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {CORREO}
                </a>
              </p>
            )}
            {faltanDatos && (
              <p className="mt-6 font-medium">Datos de contacto pendientes</p>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className={`${contenedor} py-6`}>
          <p className="text-sm text-muted">Automa © 2026</p>
        </div>
      </footer>
    </>
  );
}
