import Link from "next/link";
import {
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

function SocialNetworks() {
  return (
    <div className="fixed lg:top-[400px] md:top-[500px] hidden md:block ms:hidden right-0 transform -translate-y-1/2 rounded-3xl bg-green p-4 shadow-md bg-slate-50 bg-opacity-10 lg:mx-3 z-50">
      <div className="flex flex-col gap-6">
        <Link
          className="lg:text-4xl md:text-2xl hover:text-slate-200 text-[#2146ac]"
          href={"https://wa.me/2616105602"}
          target="_blank"
        >
          <AiOutlineWhatsApp />
        </Link>
        {/* <Link
          className="lg:text-4xl md:text-2xl hover:text-slate-200 text-[#2146ac]"
          href={"https://github.com/EstebanGaMi"}
          target="_blank"
        >
          <AiOutlineGithub />
        </Link> */}
        <Link
          className="lg:text-4xl md:text-2xl hover:text-slate-200 text-[#2146ac]"
          href={"https://www.instagram.com/cct6048/"}
          target="_blank"
        >
          <AiOutlineInstagram />
        </Link>
        {/* <Link
          className="lg:text-4xl md:text-2xl hover:text-slate-200  text-[#2146ac]"
          href={"https://www.linkedin.com/in/esteban-garay-4baa94202/"}
          target="_blank"
        >
          <AiOutlineLinkedin />
        </Link> */}
      </div>
    </div>
  );
}

export default SocialNetworks;
