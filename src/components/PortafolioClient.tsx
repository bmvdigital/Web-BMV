"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const BranchingTree = dynamic(() => import("./BranchingTree"), { ssr: false });

const projects = [
  {
    id: "eta-aviacion",
    num: "01",
    name: "ETA AVIACIÓN",
    category: "DESARROLLO WEB",
    url: "https://etaaviacion.com/",
    year: "2024",
    tags: ["Next.js", "UI/UX", "Diseño Corporativo"],
    description:
      "Sitio web corporativo para empresa líder en servicios de aviación en México. " +
      "Diseño moderno y profesional que transmite confianza y solidez institucional. " +
      "Optimizado para SEO, velocidad de carga y conversión.",
    color: "#6EE010",
    gradient: "from-[#0a1628] to-[#1a2a4a]",
  },
];

export default function PortafolioClient() {
  const [active, setActive] = useState(projects[0].id);
  const current = projects.find((p) => p.id === active) ?? projects[0];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-0 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_400px] gap-12 items-end">
          {/* Left: text */}
          <div className="pb-16">
            <p className="section-tag">PORTAFOLIO</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              CONSTRUIDOS<br />
              EN EL BORDE DE<br />
              <span className="text-[#6EE010]">LO EXPONENCIAL.</span>
            </h1>
            <p className="mt-8 text-white/40 text-sm max-w-lg leading-relaxed tracking-wide">
              Cada proyecto es la historia de un reto convertido en solución digital.
              Trabajo real, resultados medibles.
            </p>
          </div>

          {/* Right: generative branching tree — overflow-visible so canopy bleeds past column */}
          <div className="hidden md:block h-[560px]" style={{ overflow: "visible" }}>
            <BranchingTree className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Portfolio layout — sidebar + main */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[180px_1fr] gap-12">
          {/* Sidebar project index */}
          <nav className="flex flex-col gap-3 pt-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">PROYECTOS</p>
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`text-left text-[10px] tracking-[0.15em] uppercase flex items-center gap-2 transition-colors ${
                  active === p.id ? "text-[#6EE010]" : "text-white/30 hover:text-white/60"
                }`}
              >
                {active === p.id && <span className="w-1 h-1 rounded-full bg-[#6EE010]" />}
                {p.name}
              </button>
            ))}
          </nav>

          {/* Main project display */}
          <div>
            <ScrollReveal key={current.id}>
              {/* Project image / preview */}
              <div
                className={`relative rounded-xl overflow-hidden aspect-[16/8] bg-gradient-to-br ${current.gradient} mb-8 flex items-center justify-center group`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex flex-col items-center gap-4 text-center"
                >
                  <span className="text-4xl md:text-6xl font-black uppercase tracking-widest text-white/30">
                    {current.name}
                  </span>
                  <span className="bracket-btn text-[10px]">VISITAR SITIO</span>
                </a>

                {/* Counter */}
                <div className="absolute top-6 right-6 counter-label text-base">
                  {current.num} / {String(projects.length).padStart(2, "0")}
                </div>

                {/* Corner brackets */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/20" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/20" />
              </div>

              {/* Project info */}
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide mb-3">
                    {current.name}
                  </h2>
                  <div className="line-sep" />
                  <p className="text-white/40 text-sm leading-relaxed">{current.description}</p>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">CATEGORÍA</p>
                    <p className="text-sm font-medium" style={{ color: current.color }}>{current.category}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">AÑO</p>
                    <p className="text-sm font-medium text-white">{current.year}</p>
                  </div>
                  <div className="mt-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">TECNOLOGÍAS</p>
                    <div className="flex flex-wrap gap-2">
                      {current.tags.map((tag) => (
                        <span key={tag} className="text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 border border-white/10 rounded-full text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bracket-btn text-[10px] pl-0"
                    >
                      VER PROYECTO EN VIVO
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA — work with us */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <p className="section-tag">¿SIGUIENTE PROYECTO?</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              TU PROYECTO<br />
              <span className="text-[#6EE010]">AQUÍ.</span>
            </h2>
          </ScrollReveal>
          <Link href="/contacto" className="bracket-btn text-[10px]">TRABAJEMOS JUNTOS</Link>
        </div>
      </section>
    </>
  );
}
