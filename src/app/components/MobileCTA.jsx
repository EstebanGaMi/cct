import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../data/cursos";

// Barra fija abajo en celulares: las dos acciones más importantes siempre a mano.
export const MobileCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t-2 border-tinta md:hidden">
    <a
      href={SITE.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-tinta py-4 font-titulo text-xl font-bold uppercase text-papel"
    >
      <FaWhatsapp className="text-2xl text-[#25D366]" /> Consultar
    </a>
    <a
      href={SITE.inscripcionUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-amarillo py-4 font-titulo text-xl font-bold uppercase text-tinta"
    >
      Inscribirme
    </a>
  </div>
);
