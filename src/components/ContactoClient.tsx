"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  "Desarrollo Web",
  "Análisis de Datos",
  "Desarrollo de Software",
  "Auditoría SEO",
  "Cursos de IA",
  "Otro",
];

export default function ContactoClient() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="section-tag">CONTACTO</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              HAGÁMOSLO<br />
              <span className="text-[#6EE010]">REALIDAD.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed tracking-wide">
              Cuéntanos tu proyecto. Respondemos en menos de 24 horas con una propuesta inicial
              sin costo ni compromiso. El primer paso es el más importante.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_360px] gap-20">
          {/* Form */}
          <ScrollReveal>
            {sent ? (
              <div className="flex flex-col items-start justify-center min-h-[400px]">
                <span className="text-[#6EE010] text-6xl font-black mb-4">✓</span>
                <h2 className="text-3xl font-black uppercase mb-4">MENSAJE ENVIADO</h2>
                <p className="text-white/40 text-sm">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">NOMBRE *</label>
                    <input
                      required
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white placeholder:text-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">EMAIL *</label>
                    <input
                      required
                      type="email"
                      placeholder="tu@empresa.com"
                      className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white placeholder:text-white/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Company + Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">EMPRESA</label>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white placeholder:text-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">TELÉFONO</label>
                    <input
                      type="tel"
                      placeholder="+52 (55) 0000-0000"
                      className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white placeholder:text-white/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Service selector */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">¿EN QUÉ PODEMOS AYUDARTE?</label>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggle(s)}
                        className={`text-[10px] tracking-[0.12em] uppercase px-4 py-2 border rounded-full transition-all ${
                          selected.includes(s)
                            ? "border-[#6EE010] text-[#6EE010] bg-[#6EE010]/10"
                            : "border-white/10 text-white/40 hover:border-white/30"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">PRESUPUESTO ESTIMADO</label>
                  <select className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white/60 transition-colors [&>option]:bg-[#0a0a0a]">
                    <option value="">Selecciona un rango</option>
                    <option>Menos de $20,000 MXN</option>
                    <option>$20,000 – $50,000 MXN</option>
                    <option>$50,000 – $150,000 MXN</option>
                    <option>$150,000+ MXN</option>
                    <option>Por definir</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">CUÉNTANOS TU PROYECTO *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe brevemente qué necesitas construir o mejorar..."
                    className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white placeholder:text-white/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bracket-btn text-[11px] self-start mt-2"
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact info */}
          <div className="flex flex-col gap-12 pt-2">
            <ScrollReveal>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">DATOS DE CONTACTO</p>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1">EMAIL</p>
                    <a href="mailto:contacto@bmvdigital.com.mx" className="text-sm text-white hover:text-[#6EE010] transition-colors">
                      contacto@bmvdigital.com.mx
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1">SITIO WEB</p>
                    <a href="https://www.bmvdigital.com.mx" target="_blank" rel="noopener noreferrer" className="text-sm text-white hover:text-[#6EE010] transition-colors">
                      www.bmvdigital.com.mx
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1">UBICACIÓN</p>
                    <p className="text-sm text-white/60">México · Remoto Global</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">REDES</p>
                <div className="flex flex-col gap-3">
                  {["LinkedIn", "Instagram", "Facebook"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-[#6EE010] transition-colors flex items-center gap-3"
                    >
                      <span className="w-4 h-px bg-current" />
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border border-white/5 p-6 rounded-lg">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">RESPUESTA GARANTIZADA</p>
                <p className="text-sm font-bold text-[#6EE010]">&lt; 24 HORAS</p>
                <p className="text-xs text-white/40 mt-2 leading-relaxed">
                  Nos comprometemos a revisar tu proyecto y responderte con una propuesta inicial sin costo.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
