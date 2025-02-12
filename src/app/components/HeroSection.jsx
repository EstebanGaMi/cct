"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="lg:pt-[100px] md:pt-[250px] pt-[180px]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-4xl lg:text-5xl sm:text-3xl lg:leading-normal font-extrabold">
            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-800  to-sky-300">
              Tenemos cursos de{" "}
            </div>
            <TypeAnimation
              className="text-2xl lg:text-3xl sm:text-xl"
              sequence={[
                "Soldadura",
                1000,
                "Peluquería",
                1000,
                "Carpintería",
                1000,
                "Informática",
                1000,
                "Textil",
                1000,
                "Marroquineria",
                1000,
                "Gas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
            ¿Querés aprender y divertirte mientras te preparás para tu futuro?
            En nuestro CCT de Mendoza, te ofrecemos talleres, cursos y
            actividades prácticas para que puedas estudiar lo que te gusta y
            desarrollar nuevas habilidades. ¡Sumate a nuestra comunidad y
            construyamos juntos tu camino hacia el éxito!"
          </p>

          <div>
            <Link href="/projects">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-gray-800 via-blue-800 to-sky-600 hover:bg-slate-500  text-white">
                Cursos
              </button>
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeWsafIalDGPu5Tf06juy4ZrYWHhpFZnARoEosOpDoL1hyC1w/viewform?usp=sf_link"
              target="_blank"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-gray-800 via-blue-800 to-sky-600 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Inscripciones
                </span>
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-slate-200 bg-opacity-10 w-[400px] h-[400px] relative ">
            <Image
              src="/images/logo.svg"
              alt="avatar"
              className="absolute rounded-3xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
