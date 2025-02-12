"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import { BiPlus } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";
import Link from "next/link";

export const AboutSection = ({ area }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Datos dinámicos para cada área
  const TAB_DATA = {
    soldadura: [
      {
        title: "Programa",
        id: "skills",
        content: (
          <div className="text-white text-lg">
            El taller de soldadura está diseñado para que los estudiantes
            adquieran habilidades prácticas y conocimientos teóricos necesarios
            para desenvolverse en el campo de la soldadura. A lo largo del
            curso, se aborda desde la seguridad hasta la ejecución de técnicas
            avanzadas, con un enfoque en la calidad y el manejo adecuado de
            herramientas.
            <ul className="text-sky-600 flex gap-5 flex-wrap list-disc">
              <li>
                Introducción a la Soldadura: Conceptos básicos, tipos de
                soldadura y aplicaciones industriales.
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
                Selección y almacenamiento de consumibles (electrodos, gases,
                etc.).
              </li>
              <li>
                {" "}
                Técnicas de Soldadura: Práctica de cordones en diferentes
                posiciones (horizontal, vertical, sobrecabeza). Ejecución de
                uniones soldadas según estándares básicos.
              </li>
              <li>
                Corte y Preparación de Materiales: Uso de equipos de corte
                (oxiacetileno y plasma). Preparación de bordes para diferentes
                tipos de soldadura.
              </li>
              <li>
                Interpretación de Planos Técnicos: Lectura de planos básicos
                para soldadura. Uso de herramientas de medición y marcación.
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
        title: "Habilidades",
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
        title: "Fotos",
        id: "certifications",
        content: (
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Image
                src={`/images/certificates/${area}/1.webp`}
                alt="certificado1"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/2.webp`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            {/* Agrega más certificados según sea necesario */}
            <li>
              <Link href={`https://www.instagram.com/cct6048/`} target="_blank">
                <BiPlus className="text-6xl sm:text-4xl flex justify-center text-center items-center cursor-pointer hover:text-purple-600" />
              </Link>
            </li>
          </ul>
        ),
      },
    ],
    textil: [
      {
        title: "Programa",
        id: "skills",
        content: (
          <div className="text-white text-lg">
            El taller de textil está diseñado para que los estudiantes adquieran
            habilidades prácticas y conocimientos teóricos necesarios para
            desenvolverse en el campo de la confección.
            <ul className="text-sky-600 flex gap-5 flex-wrap list-disc">
              <li>Introducción a la Confección</li>
              <li>Uso de Máquinas de Coser</li>
              <li>Tipos de Telas</li>
              <li>Patrones y Cortes</li>
              <li>Técnicas de Costura</li>
              <li>Control de Calidad en Textiles</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Habilidades",
        id: "education",
        content: (
          <ul>
            <li className="flex">
              <TbSchool className="text-2xl mr-3" />
              Patrones y Cortes
            </li>
            <li className="flex">
              <TbSchool className="text-2xl mr-3" />
              Técnicas de Costura
            </li>
            <li className="flex">
              <TbSchool className="text-2xl mr-3" />
              Uso de Máquinas de Coser
            </li>
          </ul>
        ),
      },
      {
        title: "Fotos",
        id: "certifications",
        content: (
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Image
                src={`/images/certificates/${area}/1.jpg`}
                alt="certificado1"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/2.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/3.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            {/* Agrega más certificados según sea necesario */}
            <li>
              <Link href={`https://www.instagram.com/cct6048/`} target="_blank">
                <BiPlus className="text-6xl sm:text-4xl flex justify-center text-center items-center cursor-pointer hover:text-purple-600" />
              </Link>
            </li>
          </ul>
        ),
      },
    ],
    carpinteria: [
      {
        title: "Fotos",
        id: "certifications",
        content: (
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Image
                src={`/images/certificates/${area}/1.webp`}
                alt="certificado1"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/2.webp`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            {/* Agrega más certificados según sea necesario */}
            <li>
              <Link href={`https://www.instagram.com/cct6048/`} target="_blank">
                <BiPlus className="text-6xl sm:text-4xl flex justify-center text-center items-center cursor-pointer hover:text-purple-600" />
              </Link>
            </li>
          </ul>
        ),
      },
    ],
    gas: [
      {
        title: "Fotos",
        id: "certifications",
        content: (
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Image
                src={`/images/certificates/${area}/1.jpg`}
                alt="certificado1"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/2.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/3.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/4.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/5.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Link href={`https://www.instagram.com/cct6048/`} target="_blank">
                <BiPlus className="text-6xl sm:text-4xl flex justify-center text-center items-center cursor-pointer hover:text-purple-600" />
              </Link>
            </li>
          </ul>
        ),
      },
    ],
    informatica: [
      {
        title: "Fotos",
        id: "certifications",
        content: (
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Image
                src={`/images/certificates/${area}/1.webp`}
                alt="certificado1"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/2.webp`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            {/* Agrega más certificados según sea necesario */}
            <li>
              <Link
                href={`https://www.linkedin.com/in/esteban-garay-4baa94202/details/certifications/`}
                target="_blank"
              >
                <BiPlus className="text-6xl sm:text-4xl flex justify-center text-center items-center cursor-pointer hover:text-purple-600" />
              </Link>
            </li>
          </ul>
        ),
      },
    ],
    peluqueria: [
      {
        title: "Fotos",
        id: "certifications",
        content: (
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Image
                src={`/images/certificates/${area}/1.jpg`}
                alt="certificado1"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/2.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/3.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>{" "}
            <li>
              <Image
                src={`/images/certificates/${area}/3.jpg`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Link
                href={`https://www.linkedin.com/in/esteban-garay-4baa94202/details/certifications/`}
                target="_blank"
              >
                <BiPlus className="text-6xl sm:text-4xl flex justify-center text-center items-center cursor-pointer hover:text-purple-600" />
              </Link>
            </li>
          </ul>
        ),
      },
    ],
    marroquineria: [
      {
        title: "Fotos",
        id: "certifications",
        content: (
          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Image
                src={`/images/certificates/${area}/1.webp`}
                alt="certificado1"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            <li>
              <Image
                src={`/images/certificates/${area}/2.webp`}
                alt="certificado2"
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </li>
            {/* Agrega más certificados según sea necesario */}
            <li>
              <Link
                href={`https://www.linkedin.com/in/esteban-garay-4baa94202/details/certifications/`}
                target="_blank"
              >
                <BiPlus className="text-6xl sm:text-4xl flex justify-center text-center items-center cursor-pointer hover:text-purple-600" />
              </Link>
            </li>
          </ul>
        ),
      },
    ],

    // Agrega más áreas (carpinteria, peluqueria, etc.) siguiendo el mismo patrón
  };

  const currentTabs = TAB_DATA[area] || [];

  return (
    <section className="text-white z-10">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-8 xl:px-16">
        <Image
          src={`/images/projects/${area}.webp`}
          alt="about"
          className="rounded-lg max-w-full h-auto mx-auto md:mx-0"
          width={550}
          height={550}
          // style={{ width: "auto", height: "auto" }}
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sobre el{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-600">
              Curso de {area}
            </span>{" "}
          </h2>
          {/* <p className="text-base lg:text-xm">
            ¡Hola! Soy Esteban Garay, profesor de {area} y técnico
            electromecánico con formación en programación y electrónica...
          </p> */}
          <div className="flex flex-row justify-start mt-8">
            {currentTabs.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {currentTabs.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};
