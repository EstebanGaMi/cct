import { HeroSection } from "./components/HeroSection";
import { CourseGrid } from "./components/CourseGrid";
import { Encabezado, Pasos, Horarios, Ubicacion, ContactoBanda } from "./components/HomeSections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="cursos" className="py-20">
        <div className="contenedor">
          <Encabezado numero="01" rotulo="Cursos" titulo="¿Qué querés aprender?">
            Tocá un curso para ver qué se aprende, en qué turno se dicta y fotos del taller.
          </Encabezado>
          <div className="mt-10">
            <CourseGrid />
          </div>
        </div>
      </section>
      <Pasos />
      <Horarios />
      <Ubicacion />
      <ContactoBanda />
    </>
  );
}
