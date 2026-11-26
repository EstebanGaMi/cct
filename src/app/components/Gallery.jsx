"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const Gallery = ({ fotos, nombre }) => {
  const [abierta, setAbierta] = useState(null);

  const mover = useCallback(
    (d) => setAbierta((i) => (i + d + fotos.length) % fotos.length),
    [fotos.length]
  );

  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setAbierta(null);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierta, mover]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {fotos.map((src, i) => (
          <li key={src}>
            <button
              onClick={() => setAbierta(i)}
              className="group relative block aspect-square w-full overflow-hidden bg-papel2"
              aria-label={`Ver foto ${i + 1} de ${nombre} en grande`}
            >
              <Image
                src={src}
                alt={`Foto ${i + 1} del taller de ${nombre}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-0 left-0 bg-tinta px-2 py-0.5 font-titulo font-bold text-amarillo opacity-0 transition-opacity group-hover:opacity-100">
                Ampliar
              </span>
            </button>
          </li>
        ))}
      </ul>

      {abierta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${abierta + 1} de ${fotos.length}`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-tinta/95 p-4"
          onClick={() => setAbierta(null)}
        >
          <div className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={fotos[abierta]}
              alt={`Foto ${abierta + 1} del taller de ${nombre}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setAbierta(null)}
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center bg-amarillo text-tinta"
            aria-label="Cerrar"
          >
            <HiX className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); mover(-1); }}
            className="absolute left-3 grid h-12 w-12 place-items-center bg-papel text-tinta"
            aria-label="Foto anterior"
          >
            <HiChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); mover(1); }}
            className="absolute right-3 grid h-12 w-12 place-items-center bg-papel text-tinta"
            aria-label="Foto siguiente"
          >
            <HiChevronRight className="h-8 w-8" />
          </button>
          <p className="absolute bottom-4 bg-papel px-3 py-1 font-titulo text-lg font-bold text-tinta">
            {abierta + 1} / {fotos.length}
          </p>
        </div>
      )}
    </>
  );
};
