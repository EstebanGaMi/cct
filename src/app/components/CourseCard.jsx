import Link from "next/link";
import Image from "next/image";
import { CURSOS, TURNOS } from "../data/cursos";

export const turnosTexto = (turnos) => turnos.map((t) => TURNOS[t].nombre).join(" y ");

export const numeroCurso = (slug) =>
  String(CURSOS.findIndex((c) => c.slug === slug) + 1).padStart(2, "0");

export const CourseCard = ({ curso }) => (
  <Link
    href={`/${curso.slug}`}
    className="group flex h-full flex-col border border-linea bg-papel transition-colors hover:border-tinta"
  >
    <div className="relative aspect-[3/2] overflow-hidden bg-papel2">
      <Image
        src={curso.imagen}
        alt={curso.nombre}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute left-0 top-0 bg-tinta px-3 py-1 font-titulo text-lg font-bold text-amarillo">
        {numeroCurso(curso.slug)}
      </span>
    </div>
    <div className="flex flex-1 flex-col p-5">
      <h3 className="font-titulo text-3xl font-extrabold uppercase leading-none">{curso.nombre}</h3>
      <p className="mt-3 flex-1 text-gris">{curso.resumen}</p>
      <div className="mt-5 flex items-center justify-between border-t border-linea pt-4">
        <span className="text-sm font-semibold uppercase tracking-wider text-gris">
          Turno {turnosTexto(curso.turnos).toLowerCase()}
        </span>
        <span className="font-titulo text-lg font-bold uppercase transition-transform group-hover:translate-x-1">
          Ver curso →
        </span>
      </div>
    </div>
  </Link>
);
