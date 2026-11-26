// Toda la información del sitio vive en este archivo.
// Para cambiar un horario, un texto o agregar un curso, editá solo acá.

export const SITE = {
  nombre: "CCT 6-048",
  inscripcionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScqV9g3TIHn226ntKLu6JCACjpXW6EszN6BXYZleKGOlVbr5g/viewform?usp=header",
  // wa.me necesita el número con código de país (54) + 9 + característica sin 0.
  whatsappUrl:
    "https://wa.me/5492616105602?text=" +
    encodeURIComponent("¡Hola! Quiero información sobre los cursos del CCT."),
  whatsappTexto: "261 610-5602",
  instagramUrl: "https://www.instagram.com/cct6048/",
  instagramTexto: "@cct6048",

  // Ubicación. Para cambiarla:
  // - direccion / referencia: el texto que se muestra en la página.
  // - mapaEmbed: el link del mapa (en Google Maps: Compartir > Insertar un mapa > copiar el src del iframe).
  // - coordenadas: latitud,longitud del lugar, para el botón "Cómo llegar".
  direccion: "Barrio La Favorita, Acceso 2, Ciudad de Mendoza",
  referencia: "A unos 3 km al oeste del Cerro de la Gloria",
  mapaEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.145089849417!2d-68.90922302426326!3d-32.89433197361458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967de27ff36055e9%3A0x9db78c79523dab2b!2sCCT%20N%C2%B0%206048%20SIN%20NOMBRE!5e0!3m2!1ses-419!2sar!4v1795667454028!5m2!1ses-419!2sar",
  coordenadas: "-32.89433197361458,-68.90922302426326",
};

export const mapaEmbedUrl = () => SITE.mapaEmbed;

export const mapaComoLlegarUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${SITE.coordenadas}`;

export const TURNOS = {
  manana: { nombre: "Mañana", horario: "8:30 a 12:30 hs" },
  tarde: { nombre: "Tarde", horario: "15:00 a 18:00 hs" },
};

export const CURSOS = [
  {
    slug: "soldadura",
    nombre: "Soldadura",
    imagen: "/images/projects/soldadura.webp",
    resumen:
      "Aprendé a cortar, unir y dar forma al metal con técnicas modernas y seguras.",
    descripcion:
      "En el taller de soldadura vas a trabajar con equipos reales desde la primera clase. Arrancamos por la seguridad y avanzamos hasta hacer uniones soldadas como se piden en la industria.",
    turnos: ["manana", "tarde"],
    aprendes: [
      "Qué es la soldadura, sus tipos y dónde se usa",
      "Normas de seguridad y uso de ropa de protección",
      "Manejo de equipos eléctricos, MIG/MAG y TIG",
      "Tipos de metales, electrodos y gases",
      "Cordones en distintas posiciones (horizontal, vertical, sobrecabeza)",
      "Corte con oxiacetileno y plasma",
      "Lectura de planos y uso de herramientas de medición",
      "Cómo detectar defectos y controlar la calidad",
    ],
    final:
      "El curso termina con evaluaciones prácticas para que puedas usar lo aprendido en trabajos reales.",
    fotos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      (n) => `/images/certificates/soldadura/${n}.jpg`
    ),
  },
  {
    slug: "textil",
    nombre: "Textil",
    imagen: "/images/projects/textil.webp",
    resumen:
      "Diseñá y cosé tus propias prendas: costura, moldería y confección.",
    descripcion:
      "En el taller textil vas a aprender a usar máquinas de coser, elegir telas y armar prendas completas, desde el molde hasta la terminación.",
    turnos: ["manana", "tarde"],
    aprendes: [
      "Introducción a la confección",
      "Uso de máquinas de coser",
      "Tipos de telas y para qué sirve cada una",
      "Moldes (patrones) y cortes",
      "Técnicas de costura",
      "Control de calidad de las prendas",
    ],
    fotos: [1, 2, 3].map((n) => `/images/certificates/textil/${n}.jpg`),
  },
  {
    slug: "carpinteria",
    nombre: "Carpintería",
    imagen: "/images/projects/carpinteria.webp",
    resumen:
      "Hacé muebles y piezas de madera: diseño, corte y armado.",
    descripcion:
      "En el taller de carpintería vas a diseñar, cortar y ensamblar piezas de madera, desde muebles hasta estructuras. Es un oficio práctico y creativo con mucha salida laboral.",
    turnos: ["manana"],
    aprendes: [
      "Tipos de madera y sus usos",
      "Uso seguro de herramientas manuales y máquinas",
      "Medición, marcado y corte",
      "Uniones y ensamblado de piezas",
      "Terminaciones y acabados",
    ],
    fotos: [],
  },
  {
    slug: "gas",
    nombre: "Gas",
    imagen: "/images/projects/gas.webp",
    resumen:
      "Instalá, mantené y repará sistemas de gas de forma segura.",
    descripcion:
      "En el taller de gas vas a aprender a trabajar con instalaciones de hogares y comercios, siempre poniendo primero la seguridad.",
    turnos: ["manana"],
    aprendes: [
      "Instalación de sistemas de gas",
      "Mantenimiento preventivo",
      "Reparación de instalaciones",
      "Normas de seguridad y prevención de riesgos",
      "Uso eficiente del gas",
    ],
    fotos: [1, 2, 3, 4, 5].map((n) => `/images/certificates/gas/${n}.jpg`),
  },
  {
    slug: "informatica",
    nombre: "Informática para la industria textil",
    nombreCorto: "Informática",
    imagen: "/images/projects/informatica.webp",
    resumen:
      "Usá la computadora para diseñar moldes y organizar la producción textil.",
    descripcion:
      "En este taller vas a aprender a usar programas especiales para diseñar moldes, controlar la calidad, llevar el inventario y automatizar tareas de un taller textil.",
    turnos: ["manana", "tarde"],
    aprendes: [
      "Programas de diseño de moldes",
      "Control de calidad con herramientas digitales",
      "Manejo de inventario (stock)",
      "Automatización de tareas de producción",
    ],
    fotos: [],
  },
  {
    slug: "peluqueria",
    nombre: "Peluquería y estética",
    nombreCorto: "Peluquería",
    imagen: "/images/projects/peluqueria.webp",
    resumen:
      "Cortes, peinados y coloración con técnicas actuales.",
    descripcion:
      "En el taller de peluquería vas a aprender técnicas modernas de corte, peinado y color, con una formación completa para trabajar en el mundo de la belleza.",
    turnos: ["tarde"],
    aprendes: [
      "Técnicas de corte",
      "Peinados",
      "Coloración",
      "Higiene y cuidado del cabello",
      "Atención al cliente",
    ],
    fotos: [1, 2, 3].map((n) => `/images/certificates/peluqueria/${n}.jpg`),
  },
];

export const getCurso = (slug) => CURSOS.find((c) => c.slug === slug);
