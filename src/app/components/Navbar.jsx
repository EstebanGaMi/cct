"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { BsGridFill, BsGrid } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { MenuOverlay } from "./MenuOverlay";
import Image from "next/image";

// Definimos los enlaces de navegación
const navLinks = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Cursos",
    path: "/projects",
  },
  {
    title: "Inscripciones",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSeWsafIalDGPu5Tf06juy4ZrYWHhpFZnARoEosOpDoL1hyC1w/viewform?usp=sf_link",
    isExternal: true, // Indicamos que es un enlace externo
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0f175aa4] bg-opacity-95 rounded-b-3xl">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold my-[-40px] "
        >
          <Image
            className="mt-5 mb-2 invert-[60%] md:w-28 w-16"
            src={"/images/logo.svg"}
            alt="logo"
            width={100}
            height={100}
            priority
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              aria-label="gridButton"
              onClick={() => setNavbarOpen(true)}
              className=" flex items-center px-3 py-2 border-2 rounded border-slate-200 border-opacity-10 text-blue-500 hover:text-white hover:border-purple-500"
            >
              <BsGrid className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 border-opacity-10 text-blue-500 hover:text-white hover:border-purple-500"
            >
              <BsGridFill className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.isExternal ? (
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-gray-400 hover:text-white transition-colors text-xl"
                  >
                    {link.title}
                  </a>
                ) : (
                  // Enlace interno usando NavLink
                  <NavLink href={link.path} title={link.title} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      <section className="flex justify-around py-2 border border-slate-700 lg:border-none md:border-none">
        {/* <Link
          href="https://github.com/EstebanGaMi"
          target="_blank"
          aria-label="this is my github"
        >
          <AiOutlineGithub className="text-2xl text-white lg:hidden md:hidden hover:text-blue-500" />
        </Link> */}
        <Link
          href="https://www.instagram.com/cct6048/"
          target="_blank"
          aria-label="this is my instagram"
        >
          <AiOutlineInstagram className="text-2xl text-white lg:hidden md:hidden hover:text-blue-500" />
        </Link>
        {/* <Link
          href="https://www.linkedin.com/in/esteban-garay-4baa94202/"
          target="_blank"
          aria-label="this is my linkedin"
        >
          <AiOutlineLinkedin className="text-2xl text-white lg:hidden md:hidden hover:text-blue-500" />
        </Link> */}
      </section>
    </nav>
  );
};
