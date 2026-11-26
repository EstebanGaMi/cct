import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { CURSOS, SITE, TURNOS, getCurso } from "../data/cursos";
import { CourseCard, numeroCurso } from "./CourseCard";
import { Gallery } from "./Gallery";
import { ContactoBanda, Encabezado } from "./HomeSections";

export const cursoMetadata = (slug) => {
  const c = getCurso(slug);
  return {
    title: `Curso de ${c.nombre} | CCT 6-048`,
    description: c.resumen,
  };
};

export const CoursePage = ({ slug }) => {
  const curso = getCurso(slug);
  if (!curso) notFound();
  const corto = curso.nombreCorto || curso.nombre;
  // Los 3 cursos que siguen en la lista (para que cada página muestre otros distintos).
  const idx = CURSOS.findIndex((c) => c.slug === slug);
  const otros = [1, 2, 3].map((n) => CURSOS[(idx + n) % CURSOS.length]);
  const waCurso =
    `https://wa.me/5492616105602?text=` +
    encodeURIComponent(`¡Hola! Quiero información sobre el curso de ${curso.nombre}.`);

  return (
    <>
      {/* Encabezado */}
      <section className="border-b border-linea pt-[72px]">
        <div className="contenedor py-10 lg:py-14">
          <nav aria-label="Ruta" className="text-sm font-semibold uppercase tracking-wider text-gris">
            <Link href="/" className="hover:text-tinta">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/cursos" className="hover:text-tinta">Cursos</Link>
            <span className="mx-2">/</span>
            <span className="text-tinta">{corto}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="rotulo">
                <span className="text-tinta">Curso {numeroCurso(slug)}</span>
              </p>
              <h1 className="mt-3 font-titulo text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
                {curso.nombre}
              </h1>
              <p className="mt-6 text-xl text-gris">{curso.descripcion}</p>

              <table className="mt-8 w-full border-2 border-tinta text-left">
                <caption className="bg-tinta px-4 py-2 text-left font-titulo text-lg font-bold uppercase tracking-[0.15em] text-amarillo">
                  ¿Cuándo se cursa?
                </caption>
                <tbody className="divide-y divide-linea">
                  {Object.entries(TURNOS).map(([id, t]) => {
                    const hay = curso.turnos.includes(id);
                    return (
                      <tr key={id} className={hay ? "" : "text-gris/60"}>
                        <th scope="row" className="px-4 py-3 font-semibold">Turno {t.nombre.toLowerCase()}</th>
                        <td className="px-4 py-3 text-right font-titulo text-xl font-bold">
                          {hay ? t.horario : "No se dicta"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={SITE.inscripcionUrl} target="_blank" rel="noopener noreferrer" className="btn-primario">
                  Inscribirme
                </a>
                <a href={waCurso} target="_blank" rel="noopener noreferrer" className="btn-borde">
                  <FaWhatsapp className="text-2xl" /> Consultar por WhatsApp
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-papel2 lg:aspect-auto">
              <Image
                src={curso.imagen}
                alt={`Curso de ${curso.nombre}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qué vas a aprender */}
      <section className="py-20">
        <div className="contenedor">
          <Encabezado rotulo="Programa" titulo="¿Qué vas a aprender?" />
          <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {curso.aprendes.map((item, i) => (
              <li key={item} className="flex gap-5 border-b border-linea py-4">
                <span className="w-8 shrink-0 font-titulo text-2xl font-bold text-gris">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-0.5 text-lg font-medium">{item}</span>
              </li>
            ))}
          </ol>
          {curso.final && (
            <p className="mt-8 border-l-[6px] border-amarillo bg-papel2 px-5 py-4 text-lg font-medium">
              {curso.final}
            </p>
          )}
        </div>
      </section>

      {/* Fotos */}
      {curso.fotos.length > 0 && (
        <section className="pb-20">
          <div className="contenedor">
            <Encabezado rotulo="Taller" titulo="Fotos del taller">
              Tocá una foto para verla en grande.{" "}
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-tinta underline decoration-amarillo decoration-[3px] underline-offset-4">
                Más fotos en Instagram
              </a>
            </Encabezado>
            <div className="mt-10">
              <Gallery fotos={curso.fotos} nombre={curso.nombre} />
            </div>
          </div>
        </section>
      )}

      <ContactoBanda titulo={`¿Te sumás a ${corto}?`} />

      {/* Otros cursos */}
      <section className="py-20">
        <div className="contenedor">
          <Encabezado rotulo="Más cursos" titulo="También te puede interesar" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otros.map((c) => (
              <li key={c.slug}>
                <CourseCard curso={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
