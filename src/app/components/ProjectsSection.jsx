"use client";
import React, { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { ProjectCard } from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { getTechnologyColorClass, getTechnologyIcon } from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Soldadura",
    description:
      "Domina el arte de trabajar con metal y convierte tus ideas en realidad. En nuestro taller de soldadura, aprenderás a cortar, unir y moldear piezas metálicas con técnicas modernas y seguras, preparándote para una carrera llena de oportunidades en la industria.",
    image: "/images/projects/soldadura.webp",
    tag: ["Todos", "Mañana", "Tarde"],

    previewUrl: "/soldadura",
  },
  {
    id: 2,
    title: "Textil",
    description:
      "Explora el fascinante mundo de la moda y la confección. En el taller textil, desarrollarás habilidades en diseño, costura y patronaje, creando prendas únicas y funcionales mientras potencias tu creatividad y técnica.",
    image: "/images/projects/textil.webp",
    tag: ["Todos", "Mañana", "Tarde"],

    previewUrl: "/textil",
  },
  {
    id: 3,
    title: "Carpintería",
    description:
      "Descubre el arte de la madera en nuestro taller de carpintería. Desde muebles hasta estructuras, aprenderás a diseñar, cortar y ensamblar piezas únicas, desarrollando una habilidad práctica y creativa que tiene demanda en múltiples áreas.",
    image: "/images/projects/carpinteria.webp",
    tag: ["Todos", "Mañana"],

    previewUrl: "/carpinteria",
  },
  {
    id: 4,
    title: "Gas",
    description:
      "Aprende a trabajar con uno de los recursos más importantes de los hogares y la industria. En el taller de gas, te formarás en instalación, mantenimiento y reparación de sistemas de gas con énfasis en la seguridad y eficiencia.",
    image: "/images/projects/gas.webp",
    tag: ["Todos", "Mañana"],

    previewUrl: "/gas",
  },
  {
    id: 5,
    title: " Informática aplicada a la industria Textil",
    description:
      "Optimiza la producción textil con tecnología. En nuestro taller de Informática Aplicada a la Industria Textil, aprenderás a utilizar software especializado para el diseño de patrones, control de calidad, gestión de inventarios y automatización de procesos, mejorando la eficiencia y precisión en cada etapa de la producción.",
    image: "/images/projects/informatica.webp",
    tag: ["Todos", "Mañana", "Tarde"],

    previewUrl: "/informatica",
  },
  {
    id: 6,
    title: "Peluquería y Estética Personal",
    description:
      "Exprésate y ayuda a otros a reflejar su mejor versión. En nuestro taller de peluquería, aprenderás técnicas modernas de corte, peinado y coloración, con una formación integral para destacar en el mundo de la belleza.",
    image: "/images/projects/peluqueria.webp",
    tag: ["Todos", "Tarde"],

    previewUrl: "/peluqueria",
  },
  {
    id: 7,
    title: "Marroquineria",
    description:
      "Conviértete en un maestro del cuero y los accesorios. En el taller de marroquinería, aprenderás a diseñar y fabricar bolsos, carteras y otros productos personalizados, combinando técnica y creatividad para dar vida a piezas únicas.",
    image: "/images/projects/marroquineria.webp",
    tag: ["Todos", "Tarde"],

    previewUrl: "/marroquineria",
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-40 mb-6">
        Cursos
      </h2>
      <h3 className="text-center font-bold text-white mt-4 mb-6">
        turno mañana de 8:30 a 12:30hs y Turno tarde de 15:00 a 18:00hs
      </h3>
      <div className=" text-white text-4xl z-0 font-bold flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          OnClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />

        <ProjectTag
          OnClick={handleTagChange}
          name="Mañana"
          isSelected={tag === "Mañana"}
        />
        <ProjectTag
          OnClick={handleTagChange}
          name="Tarde"
          isSelected={tag === "Tarde"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </>
  );
};
