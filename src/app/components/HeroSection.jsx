import Link from "next/link";
import Image from "next/image";
import { CURSOS, SITE, TURNOS } from "../data/cursos";

export const HeroSection = () => (
  <section className="border-b border-linea pt-[72px]">
    <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-20">
      <div className="flex flex-col justify-center">
        <p className="rotulo">Centro de Capacitación para el Trabajo · La Favorita, Mendoza</p>
        <h1 className="mt-5 font-titulo text-6xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          Aprendé un oficio.
          <br />
          <span className="bg-amarillo px-2 box-decoration-clone">Trabajá con</span>{" "}
          <span className="bg-amarillo px-2 box-decoration-clone">tus manos.</span>
        </h1>
        <p className="mt-7 max-w-lg text-xl text-gris">
          {CURSOS.length} cursos con práctica en taller:{" "}
          <span className="text-tinta">
            {CURSOS.map((c) => c.nombreCorto || c.nombre).join(", ").replace(/, ([^,]*)$/, " y $1")}.
          </span>
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={SITE.inscripcionUrl} target="_blank" rel="noopener noreferrer" className="btn-primario">
            Quiero inscribirme
          </a>
          <Link href="/cursos" className="btn-borde">
            Ver los cursos
          </Link>
        </div>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-papel2 sm:aspect-[4/3] lg:aspect-[4/5]">
          <Image
            src="/images/certificates/soldadura/1.jpg"
            alt="Estudiante soldando en el taller del CCT"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Cartel de horarios */}
        <div className="absolute -bottom-6 left-4 right-4 border-2 border-tinta bg-papel sm:left-auto sm:right-6 sm:w-80">
          <p className="bg-tinta px-4 py-2 font-titulo text-lg font-bold uppercase tracking-[0.15em] text-amarillo">
            Horarios
          </p>
          <dl className="divide-y divide-linea px-4">
            {Object.values(TURNOS).map((t) => (
              <div key={t.nombre} className="flex items-baseline justify-between py-2.5">
                <dt className="font-semibold">Turno {t.nombre.toLowerCase()}</dt>
                <dd className="font-titulo text-xl font-bold">{t.horario}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div className="h-6" />
  </section>
);
