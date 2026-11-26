import { HiLocationMarker } from "react-icons/hi";
import { SITE, TURNOS, mapaComoLlegarUrl, mapaEmbedUrl } from "../data/cursos";

// Mapa de Google + ficha con la dirección y el botón "Cómo llegar".
export const Mapa = () => (
  <div className="grid border-2 border-tinta lg:grid-cols-[1fr_1.6fr]">
    <div className="flex flex-col bg-papel">
      <p className="bg-tinta px-5 py-2.5 font-titulo text-lg font-bold uppercase tracking-[0.15em] text-amarillo">
        Dirección
      </p>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex gap-3">
          <HiLocationMarker className="mt-1 h-7 w-7 shrink-0" aria-hidden />
          <div>
            <p className="font-titulo text-3xl font-extrabold uppercase leading-none">{SITE.nombre}</p>
            <p className="mt-2 text-lg">{SITE.direccion}</p>
            {SITE.referencia && <p className="mt-1 text-gris">{SITE.referencia}</p>}
          </div>
        </div>
        <dl className="mt-6 divide-y divide-linea border-y border-linea">
          {Object.values(TURNOS).map((t) => (
            <div key={t.nombre} className="flex items-baseline justify-between py-2.5">
              <dt className="font-semibold">Turno {t.nombre.toLowerCase()}</dt>
              <dd className="font-titulo text-xl font-bold">{t.horario}</dd>
            </div>
          ))}
        </dl>
        <a
          href={mapaComoLlegarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primario mt-6 lg:mt-auto"
        >
          Cómo llegar
        </a>
      </div>
    </div>
    <div className="relative min-h-[320px] border-t-2 border-tinta bg-papel2 lg:min-h-[440px] lg:border-l-2 lg:border-t-0">
      <iframe
        title={`Mapa: ubicación del ${SITE.nombre}`}
        src={mapaEmbedUrl()}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  </div>
);
