import "./globals.css";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MobileCTA } from "./components/MobileCTA";

const titulo = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-titulo",
  display: "swap",
});

const cuerpo = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cuerpo",
  display: "swap",
});

export const metadata = {
  title: "CCT 6-048 | Cursos de oficios",
  description:
    "Cursos prácticos de Soldadura, Textil, Carpintería, Gas, Informática y Peluquería en Mendoza. Turno mañana y tarde.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${titulo.variable} ${cuerpo.variable}`}>
      <body className="bg-papel font-cuerpo text-tinta antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-amarillo focus:px-4 focus:py-2 focus:font-bold"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
