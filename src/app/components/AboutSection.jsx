"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import {
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoGithub,
  BiLogoBlender,
  BiPlus,
} from "react-icons/bi";
import { TbBrandNextjs, TbBrandFigma, TbSchool } from "react-icons/tb";
import { SiMysql, SiExpress } from "react-icons/si";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="text-white text-lg">
        El taller de soldadura está diseñado para que los estudiantes adquieran
        habilidades prácticas y conocimientos teóricos necesarios para
        desenvolverse en el campo de la soldadura. A lo largo del curso, se
        aborda desde la seguridad hasta la ejecución de técnicas avanzadas, con
        un enfoque en la calidad y el manejo adecuado de herramientas.
        <ul className="text-sky-600 flex gap-5 flex-wrap list-disc">
          <span className=" list-none"></span>
          <li>
            Introducción a la Soldadura: Conceptos básicos, tipos de soldadura y
            aplicaciones industriales.
          </li>
          <li>
            Seguridad e Higiene: Normas de seguridad, uso de elementos de
            protección personal y prevención de riesgos laborales.
          </li>
          <li>
            {" "}
            Equipos y Herramientas Identificación y manejo de equipos de
            soldadura eléctrica, MIG/MAG y TIG. Mantenimiento básico de
            herramientas.
          </li>
          <li>
            {" "}
            Materiales y Consumibles: Tipos de metales y sus propiedades.
            Selección y almacenamiento de consumibles (electrodos, gases, etc.).
          </li>
          <li>
            {" "}
            Técnicas de Soldadura: Práctica de cordones en diferentes posiciones
            (horizontal, vertical, sobrecabeza). Ejecución de uniones soldadas
            según estándares básicos.
          </li>
          <li>
            Corte y Preparación de Materiales: Uso de equipos de corte
            (oxiacetileno y plasma). Preparación de bordes para diferentes tipos
            de soldadura.
          </li>
          <li>
            Interpretación de Planos Técnicos: Lectura de planos básicos para
            soldadura. Uso de herramientas de medición y marcación.
          </li>
          <li>
            Control de Calidad Identificación de defectos comunes. Pruebas
            visuales y ensayos básicos de resistencia y acabado.
          </li>
        </ul>
        El curso finaliza con evaluaciones prácticas, asegurando que los
        estudiantes puedan aplicar lo aprendido en proyectos reales o tareas
        laborales.
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Interpretación de Planos
        </li>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Control de Calidad en Soldadura
        </li>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Técnicas de Soldadura
        </li>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Introducción a la Soldadura
        </li>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Seguridad e Higiene en el Trabajo
        </li>
        <li className="flex">
          <TbSchool className="text-2xl mr-3" />
          Herramientas y Equipos de Soldadura
        </li>
      </ul>
    ),
  },
  {
    title: "certifications",
    id: "certifications",
    content: (
      <ul className="grid grid-cols-6 gap-4">
        <li>
          <Image
            src={"/images/certificates/1.webp"}
            alt="certificado1"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/2.webp"}
            alt="certificado2"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/3.webp"}
            alt="certificado3"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/4.webp"}
            alt="certificado4"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/5.webp"}
            alt="certificado5"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/6.webp"}
            alt="certificado6"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/7.webp"}
            alt="certificado7"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/8.webp"}
            alt="certificado8"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/9.webp"}
            alt="certificado9"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/10.webp"}
            alt="certificado10"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Image
            src={"/images/certificates/11.webp"}
            alt="certificado10"
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/esteban-garay-4baa94202/details/certifications/"
            target="_blank"
          >
            <BiPlus className="text-6xl sm:text-4xl flex justify-center text-center items-center cursor-pointer hover:text-purple-600" />
          </Link>
        </li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white z-10">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <Image
          src={"/images/projects/soldadura.webp"}
          alt="about"
          className="rounded-lg max-w-full h-auto mx-auto md:mx-0"
          width={550}
          height={550}
          style={{ width: "auto", height: "auto" }}
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sobre el{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600">
              Curso
            </span>{" "}
          </h2>
          <p className="text-base lg:text-xm">
            ¡Hola! Soy Esteban Garay, profesor de soldadura y técnico
            electromecánico con formación en programación y electrónica. A mis
            24 años, he tenido la oportunidad de trabajar en importantes
            empresas del sector, acumulando experiencia práctica y técnica. Sin
            embargo, descubrí que mi verdadera pasión no solo está en el trabajo
            con metales y tecnología, sino en compartir mis conocimientos y
            formar a las nuevas generaciones. Enseñar no es solo mi vocación, es
            la forma en la que dejo mi huella, inspirando a otros a construir su
            futuro.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Plan de Estudio{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Conocimientos{""}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Proyectos{""}
            </TabButton>
          </div>
          <div className="mt-8">
            {" "}
            {TAB_DATA.find((t) => t.id === tab).content}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
