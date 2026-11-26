"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { SITE } from "../data/cursos";

const links = [
  { title: "Inicio", path: "/" },
  { title: "Cursos", path: "/cursos" },
  { title: "Horarios", path: "/#horarios" },
  { title: "Cómo inscribirme", path: "/#pasos" },
  { title: "Dónde estamos", path: "/#ubicacion" },
  { title: "Contacto", path: "/contact" },
];

export const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const pathname = usePathname();

  useEffect(() => setAbierto(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-papel/95 backdrop-blur-sm">
      <nav className="contenedor flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="CCT 6-048, ir al inicio">
          <Image src="/images/logo.svg" alt="" width={44} height={44} priority />
          <span className="font-titulo text-2xl font-extrabold uppercase leading-none tracking-tight">
            CCT <span className="text-gris">6-048</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => {
            const activo = l.path === pathname;
            return (
              <li key={l.path}>
                <Link
                  href={l.path}
                  className={`border-b-[3px] py-1 font-semibold transition-colors ${
                    activo ? "border-amarillo" : "border-transparent hover:border-tinta"
                  }`}
                >
                  {l.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={SITE.inscripcionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primario hidden !px-5 !py-2 !text-lg lg:inline-flex"
        >
          Inscribirme
        </a>

        <button
          onClick={() => setAbierto(!abierto)}
          className="grid h-12 w-12 place-items-center border-2 border-tinta lg:hidden"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={abierto}
        >
          {abierto ? <HiX className="h-7 w-7" /> : <HiMenuAlt4 className="h-7 w-7" />}
        </button>
      </nav>

      {abierto && (
        <ul className="border-t border-linea bg-papel lg:hidden">
          {links.map((l) => (
            <li key={l.path} className="border-b border-linea">
              <Link
                href={l.path}
                onClick={() => setAbierto(false)}
                className="contenedor block py-4 font-titulo text-2xl font-bold uppercase hover:bg-amarillo"
              >
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
