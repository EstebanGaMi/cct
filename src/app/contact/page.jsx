import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Form } from "../components/Form";
import { Mapa } from "../components/Mapa";
import { SITE, TURNOS } from "../data/cursos";

export const metadata = {
  title: "Contacto | CCT 6-048",
  description: "Escribinos por WhatsApp, Instagram o desde el formulario.",
};

const Canal = ({ href, icono, nombre, dato }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-5 border-b border-linea py-5 transition-colors hover:bg-amarillo"
  >
    <span className="grid h-14 w-14 shrink-0 place-items-center bg-tinta text-3xl text-papel">{icono}</span>
    <span className="flex-1">
      <span className="block font-titulo text-3xl font-extrabold uppercase leading-none">{nombre}</span>
      <span className="mt-1 block text-lg text-gris group-hover:text-tinta">{dato}</span>
    </span>
    <span className="pr-2 font-titulo text-2xl font-bold transition-transform group-hover:translate-x-1">→</span>
  </a>
);

export default function Contact() {
  return (
    <section className="pb-20 pt-[72px]">
      <div className="contenedor">
        <div className="border-b-2 border-tinta py-12">
          <p className="rotulo">Contacto</p>
          <h1 className="mt-3 font-titulo text-7xl font-extrabold uppercase leading-[0.9] sm:text-8xl">
            ¿Tenés dudas?
          </h1>
          <p className="mt-5 max-w-xl text-xl text-gris">
            Escribinos por donde te quede más cómodo. La forma más rápida es WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="border-t border-linea">
              <Canal href={SITE.whatsappUrl} icono={<FaWhatsapp />} nombre="WhatsApp" dato={SITE.whatsappTexto} />
              <Canal href={SITE.instagramUrl} icono={<FaInstagram />} nombre="Instagram" dato={SITE.instagramTexto} />
            </div>
            <div className="mt-8 border-2 border-tinta">
              <p className="bg-tinta px-4 py-2 font-titulo text-lg font-bold uppercase tracking-[0.15em] text-amarillo">
                Horarios
              </p>
              <dl className="divide-y divide-linea px-4">
                {Object.values(TURNOS).map((t) => (
                  <div key={t.nombre} className="flex items-baseline justify-between py-3">
                    <dt className="font-semibold">Turno {t.nombre.toLowerCase()}</dt>
                    <dd className="font-titulo text-xl font-bold">{t.horario}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Form />
        </div>

        <div className="mt-16">
          <p className="rotulo">Ubicación</p>
          <h2 className="titulo mt-3">¿Dónde estamos?</h2>
          <div className="mt-8">
            <Mapa />
          </div>
        </div>
      </div>
    </section>
  );
}
