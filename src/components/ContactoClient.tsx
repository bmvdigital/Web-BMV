"use client";

import { useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const WA_NUMBER = "529936010071";

const services = [
  "Desarrollo Web",
  "Análisis de Datos",
  "Desarrollo de Software",
  "Auditoría SEO",
  "Auditoría GEO",
  "Cursos de IA",
  "Otro",
];

export default function ContactoClient() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const budgetRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const toggle = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const company = companyRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const budget = budgetRef.current?.value || "";
    const msg = messageRef.current?.value || "";

    const text = [
      `👋 *Nuevo mensaje desde BMV Digital*`,
      ``,
      `👤 *Nombre:* ${name}`,
      email    && `📧 *Email:* ${email}`,
      company  && `🏢 *Empresa:* ${company}`,
      phone    && `📱 *Teléfono:* ${phone}`,
      selected.length && `🛠️ *Servicios:* ${selected.join(", ")}`,
      budget   && `💰 *Presupuesto:* ${budget}`,
      ``,
      `📝 *Proyecto:*`,
      msg,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-12 md:pb-16 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-end">
          <div>
            <p className="section-tag">CONTACTO</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              HAGÁMOSLO<br />
              <span className="text-[#6EE010]">REALIDAD.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed tracking-wide">
              Cuéntanos tu proyecto. Te respondemos directo por WhatsApp con una
              propuesta inicial sin costo ni compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_360px] gap-12 md:gap-20">

          {/* Form */}
          <ScrollReveal>
            {sent ? (
              <div className="flex flex-col items-start justify-center min-h-[400px]">
                <span className="text-[#6EE010] text-6xl font-black mb-4">✓</span>
                <h2 className="text-3xl font-black uppercase mb-4">¡MENSAJE ENVIADO!</h2>
                <p className="text-white/40 text-sm mb-6">
                  Se abrió WhatsApp con tu mensaje. Si no se abrió automáticamente,
                  escríbenos directamente al{" "}
                  <a
                    href={`https://wa.me/${WA_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6EE010] hover:underline"
                  >
                    +52 993 601 0071
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bracket-btn text-[10px] pl-0"
                >
                  ENVIAR OTRO MENSAJE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">NOMBRE *</label>
                    <input
                      ref={nameRef}
                      required
                      type="text"
                      placeholder="Tu nombre"
                      className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white placeholder:text-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">EMAIL *</label>
                    <input
                      ref={emailRef}
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
                      ref={companyRef}
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white placeholder:text-white/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-white/40">TELÉFONO</label>
                    <input
                      ref={phoneRef}
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
                  <select
                    ref={budgetRef}
                    className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white/60 transition-colors [&>option]:bg-[#0a0a0a]"
                  >
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
                    ref={messageRef}
                    required
                    rows={5}
                    placeholder="Describe brevemente qué necesitas construir o mejorar..."
                    className="bg-transparent border-b border-white/10 focus:border-[#6EE010] outline-none py-3 text-sm text-white placeholder:text-white/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bracket-btn text-[11px] self-start mt-2 flex items-center gap-3"
                >
                  <WhatsAppIcon />
                  ENVIAR POR WHATSAPP
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact info */}
          <div className="flex flex-col gap-12 pt-2">
            <ScrollReveal>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">CONTACTO DIRECTO</p>
                <div className="flex flex-col gap-6">
                  {/* WhatsApp */}
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1">WHATSAPP</p>
                    <a
                      href={`https://wa.me/${WA_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-[#6EE010] transition-colors flex items-center gap-2"
                    >
                      <WhatsAppIcon />
                      +52 993 601 0071
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-white/30 mb-1">EMAIL</p>
                    <a href="mailto:contacto@bmvdigital.com.mx" className="text-sm text-white hover:text-[#6EE010] transition-colors">
                      contacto@bmvdigital.com.mx
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
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#6EE010]/20 hover:border-[#6EE010]/60 p-6 rounded-lg transition-colors group"
              >
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-3">RESPUESTA GARANTIZADA</p>
                <p className="text-sm font-bold text-[#6EE010] flex items-center gap-2">
                  <WhatsAppIcon />
                  ESCRÍBENOS AHORA
                </p>
                <p className="text-xs text-white/40 mt-2 leading-relaxed">
                  Respondemos en menos de 24 horas con propuesta inicial sin costo.
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
