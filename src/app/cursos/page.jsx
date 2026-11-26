import { CourseGrid } from "../components/CourseGrid";
import { ContactoBanda } from "../components/HomeSections";

export const metadata = {
  title: "Cursos | CCT 6-048",
  description: "Todos los cursos del CCT 6-048 con sus horarios de turno mañana y tarde.",
};

export default function Cursos() {
  return (
    <>
      <section className="pb-20 pt-[72px]">
        <div className="contenedor">
          <div className="border-b-2 border-tinta py-12">
            <p className="rotulo">Cursos</p>
            <h1 className="mt-3 font-titulo text-7xl font-extrabold uppercase leading-[0.9] sm:text-8xl">
              Elegí tu curso
            </h1>
            <p className="mt-5 max-w-xl text-xl text-gris">
              Filtrá por el turno que mejor te queda y tocá un curso para ver todos los detalles.
            </p>
          </div>
          <div className="mt-10">
            <CourseGrid />
          </div>
        </div>
      </section>
      <ContactoBanda />
    </>
  );
}
