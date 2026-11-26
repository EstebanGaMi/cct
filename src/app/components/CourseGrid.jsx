"use client";
import { useState } from "react";
import { CURSOS, TURNOS } from "../data/cursos";
import { CourseCard } from "./CourseCard";

const FILTROS = [
  { id: "todos", label: "Todos" },
  { id: "manana", label: `Mañana · ${TURNOS.manana.horario}` },
  { id: "tarde", label: `Tarde · ${TURNOS.tarde.horario}` },
];

export const CourseGrid = () => {
  const [filtro, setFiltro] = useState("todos");
  const lista =
    filtro === "todos" ? CURSOS : CURSOS.filter((c) => c.turnos.includes(filtro));

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="group"
          aria-label="Filtrar cursos por turno"
          className="flex flex-col border-2 border-tinta sm:inline-flex sm:flex-row"
        >
          {FILTROS.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              aria-pressed={filtro === f.id}
              className={`px-4 py-2.5 font-titulo text-lg font-bold uppercase tracking-wide transition-colors ${
                i > 0 ? "border-t-2 border-tinta sm:border-l-2 sm:border-t-0" : ""
              } ${filtro === f.id ? "bg-tinta text-amarillo" : "hover:bg-amarillo"}`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="text-gris" aria-live="polite">
          {lista.length} {lista.length === 1 ? "curso" : "cursos"}
        </p>
      </div>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((c) => (
          <li key={c.slug}>
            <CourseCard curso={c} />
          </li>
        ))}
      </ul>
    </div>
  );
};
