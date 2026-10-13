// Sección autocontenida: para quitarla, borra este archivo y su uso en src/app/page.tsx.
export default function CasoReal() {
  return (
    <section
      aria-labelledby="caso-real-titulo"
      className="border-y border-line bg-surface"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="caso-real-titulo"
          className="text-sm font-semibold uppercase tracking-wider text-accent"
        >
          Caso real
        </h2>
        <p className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-balance sm:text-3xl">
          Bajamos en un <strong className="text-accent">88%</strong> el costo
          mensual de servidores de una plataforma digital, en 6 días y sin
          cortes de servicio.
        </p>
      </div>
    </section>
  );
}
