import Link from "next/link";
import Image from "next/image";
import { CURSOS, SITE, TURNOS, mapaComoLlegarUrl } from "../data/cursos";

export const Footer = () => (
  <footer className="bg-tinta text-papel/80">
    <div className="contenedor grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
      <div>
        <div className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="" width={48} height={48} className="invert" />
          <span className="font-titulo text-3xl font-extrabold uppercase leading-none text-papel">
            CCT 6-048
          </span>
        </div>
        <p className="mt-4 max-w-xs">
          Centro de Capacitación para el Trabajo. Cursos de oficios con práctica en taller.
        </p>
        <a href={mapaComoLlegarUrl()} target="_blank" rel="noopener noreferrer" className="mt-4 block max-w-xs text-papel hover:text-amarillo">
          {SITE.direccion} →
        </a>
      </div>

      <div>
        <h2 className="font-titulo text-lg font-bold uppercase tracking-[0.15em] text-amarillo">Cursos</h2>
        <ul className="mt-3 space-y-1.5">
          {CURSOS.map((c) => (
            <li key={c.slug}>
              <Link href={`/${c.slug}`} className="hover:text-amarillo">
                {c.nombreCorto || c.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-titulo text-lg font-bold uppercase tracking-[0.15em] text-amarillo">Horarios</h2>
        <ul className="mt-3 space-y-1.5">
          {Object.values(TURNOS).map((t) => (
            <li key={t.nombre}>
              {t.nombre}: <span className="text-papel">{t.horario}</span>
            </li>
          ))}
        </ul>
        <h2 className="mt-6 font-titulo text-lg font-bold uppercase tracking-[0.15em] text-amarillo">Contacto</h2>
        <ul className="mt-3 space-y-1.5">
          <li>
            <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amarillo">
              WhatsApp {SITE.whatsappTexto}
            </a>
          </li>
          <li>
            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amarillo">
              Instagram {SITE.instagramTexto}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <p className="contenedor py-5 text-sm text-papel/50">© {new Date().getFullYear()} CCT 6-048</p>
    </div>
  </footer>
);
