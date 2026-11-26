"use client";
import { useState } from "react";

export const Form = () => {
  const [estado, setEstado] = useState({ tipo: "idle", texto: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEstado({ tipo: "enviando", texto: "" });
    try {
      const response = await fetch(event.target.action, {
        method: "POST",
        body: new FormData(event.target),
        headers: { accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok) {
        setEstado({
          tipo: "error",
          texto: result.errors?.map((e) => e.message).join(", ") || "No se pudo enviar. Probá de nuevo.",
        });
        return;
      }
      event.target.reset();
      setEstado({ tipo: "ok", texto: "¡Mensaje enviado! Te vamos a responder pronto." });
    } catch {
      setEstado({ tipo: "error", texto: "No se pudo enviar. Revisá tu conexión y probá de nuevo." });
    }
  };

  const campo =
    "w-full border-2 border-linea bg-papel px-4 py-3 text-lg outline-none transition-colors focus:border-tinta";

  return (
    <form
      action="https://formspree.io/f/xjvqpzrl"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-5 border-2 border-tinta bg-papel p-6 sm:p-8"
    >
      <div>
        <label htmlFor="names" className="mb-2 block font-titulo text-xl font-bold uppercase">
          Tu nombre
        </label>
        <input id="names" name="names" type="text" required autoComplete="name" className={campo} placeholder="Ej: María Pérez" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block font-titulo text-xl font-bold uppercase">
          Tu email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={campo} placeholder="Ej: maria@gmail.com" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block font-titulo text-xl font-bold uppercase">
          Tu consulta
        </label>
        <textarea id="message" name="message" required rows={5} className={`${campo} resize-none`} placeholder="Ej: ¿Qué necesito para anotarme en Soldadura?" />
      </div>
      <button type="submit" disabled={estado.tipo === "enviando"} className="btn-primario w-full disabled:opacity-60">
        {estado.tipo === "enviando" ? "Enviando..." : "Enviar consulta"}
      </button>
      {estado.texto && (
        <p
          role="status"
          className={`border-2 p-4 text-center font-bold ${
            estado.tipo === "ok" ? "border-green-700 bg-green-50 text-green-900" : "border-red-700 bg-red-50 text-red-900"
          }`}
        >
          {estado.texto}
        </p>
      )}
    </form>
  );
};
