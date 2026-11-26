import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { CURSOS, SITE, TURNOS } from "../data/cursos";
import { Mapa } from "./Mapa";

/* ---------- Encabezado de sección reutilizable ---------- */
export const Encabezado = ({ numero, rotulo, titulo, children }) => (
  <div className="grid gap-4 border-t-2 border-tinta pt-6 md:grid-cols-[1fr_1.2fr] md:items-end">
    <div>
      <p className="rotulo">
        {numero && <span className="text-tinta">{numero}</span>} {rotulo}
      </p>
      <h2 className="titulo mt-3">{titulo}</h2>
    </div>
    {children && <div className="text-lg text-gris md:pb-1">{children}</div>}
  </div>
);

/* ---------- Cómo inscribirse en 3 pasos ---------- */
export const Pasos = () => {
  const pasos = [
    {
      t: "Elegí tu curso",
      d: "Mirá la lista y fijate en qué turno se dicta cada curso.",
      cta: <Link href="/cursos" className="font-bold underline decoration-amarillo decoration-[3px] underline-offset-4 hover:bg-amarillo">Ver cursos</Link>,
    },
    {
      t: "Completá el formulario",
      d: "Llená la inscripción online con tus datos. Es un formulario corto de Google.",
      cta: (
        <a href={SITE.inscripcionUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-amarillo decoration-[3px] underline-offset-4 hover:bg-amarillo">
          Ir al formulario
        </a>
      ),
    },
    {
      t: "Si tenés dudas, escribinos",
      d: "Te respondemos por WhatsApp o Instagram. Preguntá lo que necesites.",
      cta: (
        <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-amarillo decoration-[3px] underline-offset-4 hover:bg-amarillo">
          Abrir WhatsApp
        </a>
      ),
    },
  ];
  return (
    <section id="pasos" className="py-20">
      <div className="contenedor">
        <Encabezado numero="02" rotulo="Inscripción" titulo="¿Cómo me inscribo?">
          Son tres pasos simples.
        </Encabezado>
        <ol className="mt-12 grid md:grid-cols-3">
          {pasos.map((p, i) => (
            <li
              key={p.t}
              className={`border-linea py-6 md:px-8 md:py-0 ${i > 0 ? "border-t md:border-l md:border-t-0" : ""} ${i === 0 ? "md:pl-0" : ""}`}
            >
              <span className="font-titulo text-8xl font-extrabold leading-none text-amarillo [-webkit-text-stroke:2px_#161616]">
                {i + 1}
              </span>
              <h3 className="mt-4 font-titulo text-3xl font-bold uppercase leading-none">{p.t}</h3>
              <p className="mt-3 text-gris">{p.d}</p>
              <p className="mt-4">{p.cta}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

/* ---------- Horarios ---------- */
export const Horarios = () => (
  <section id="horarios" className="bg-papel2 py-20">
    <div className="contenedor">
      <Encabezado numero="03" rotulo="Horarios" titulo="¿Qué curso hay en cada turno?" />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {Object.entries(TURNOS).map(([id, t]) => (
          <div key={id} className="border-2 border-tinta bg-papel">
            <div
              className={`flex items-baseline justify-between px-6 py-4 ${
                id === "manana" ? "bg-amarillo text-tinta" : "bg-tinta text-papel"
              }`}
            >
              <h3 className="font-titulo text-3xl font-extrabold uppercase">Turno {t.nombre.toLowerCase()}</h3>
              <p className="font-titulo text-2xl font-bold">{t.horario}</p>
            </div>
            <ul className="divide-y divide-linea px-6">
              {CURSOS.filter((c) => c.turnos.includes(id)).map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="group flex items-center justify-between py-3.5 text-lg font-semibold">
                    {c.nombre}
                    <span className="text-gris transition-transform group-hover:translate-x-1 group-hover:text-tinta">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- Ubicación ---------- */
export const Ubicacion = () => (
  <section id="ubicacion" className="py-20">
    <div className="contenedor">
      <Encabezado numero="04" rotulo="Ubicación" titulo="¿Dónde estamos?">
        Estamos en barrio La Favorita, en la Ciudad de Mendoza. Tocá &quot;Cómo llegar&quot; y Google Maps te arma el recorrido.
      </Encabezado>
      <div className="mt-10">
        <Mapa />
      </div>
    </div>
  </section>
);

/* ---------- Bloque final de contacto ---------- */
export const ContactoBanda = ({ titulo = "¿Arrancamos?" }) => (
  <section className="bg-amarillo">
    <div className="contenedor grid gap-8 py-16 md:grid-cols-[1.2fr_1fr] md:items-center">
      <div>
        <h2 className="font-titulo text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">{titulo}</h2>
        <p className="mt-4 max-w-md text-xl">
          Inscribite online o escribinos y te ayudamos a elegir el curso que mejor te queda.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <a href={SITE.inscripcionUrl} target="_blank" rel="noopener noreferrer" className="btn-oscuro">
          Inscribirme ahora
        </a>
        <div className="grid grid-cols-2 gap-3">
          <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-borde">
            <FaWhatsapp className="text-2xl" /> WhatsApp
          </a>
          <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-borde">
            <FaInstagram className="text-2xl" /> Instagram
          </a>
        </div>
      </div>
    </div>
  </section>
);
