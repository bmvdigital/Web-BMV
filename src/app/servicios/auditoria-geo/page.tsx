import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { title: "AUDITORÍA DE CITABILIDAD", body: "Analizamos si tu contenido es citado por ChatGPT, Perplexity, Gemini y Copilot cuando alguien hace preguntas de tu industria." },
  { title: "OPTIMIZACIÓN DE CONTENIDO", body: "Reestructuramos tu contenido para que los modelos de lenguaje lo entiendan, confíen y citen como fuente autoritativa." },
  { title: "DATOS ESTRUCTURADOS (SCHEMA)", body: "Implementamos marcado semántico avanzado que facilita que los LLMs extraigan y usen tu información correctamente." },
  { title: "ESTRATEGIA DE AUTORIDAD", body: "Construimos señales de credibilidad y autoridad que los modelos de IA utilizan para seleccionar sus fuentes de respuesta." },
  { title: "MONITOREO GEO", body: "Seguimiento continuo de en qué prompts y consultas aparece tu marca dentro de los principales buscadores con IA." },
  { title: "GEO + SEO INTEGRADO", body: "Combinamos la optimización para buscadores tradicionales con la nueva capa de visibilidad en motores generativos." },
];

const aiEngines = [
  { name: "ChatGPT", company: "OpenAI", share: "75%" },
  { name: "Perplexity", company: "Perplexity AI", share: "crecimiento acelerado" },
  { name: "Gemini", company: "Google", share: "integrado en Search" },
  { name: "Copilot", company: "Microsoft", share: "integrado en Bing" },
  { name: "Claude", company: "Anthropic", share: "en expansión" },
];

const auditItems = [
  "Análisis de presencia en respuestas de LLMs",
  "Evaluación de autoridad percibida por la IA",
  "Auditoría de contenido y estructura semántica",
  "Revisión de datos estructurados existentes",
  "Benchmark contra competidores en GEO",
  "Identificación de consultas de oportunidad",
  "Análisis de fuentes citadas por los LLMs",
  "Estrategia de contenido GEO-optimizado",
  "Implementación de Schema avanzado",
  "Plan de acción priorizado y medible",
];

export default function AuditoriaGeoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / AUDITORÍA GEO</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              SÉ LA FUENTE<br />
              <span style={{ color: "#A855F7" }}>QUE LA IA CITA.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 tracking-wide">
              El 40% de las búsquedas ya no terminan en un clic — las responde directamente
              la IA. Si tu marca no aparece en esas respuestas, estás perdiendo visibilidad
              ante la siguiente generación de buscadores.
            </p>
            <Link href="/contacto" className="bracket-btn text-[10px] pl-0">
              SOLICITAR AUDITORÍA GEO
            </Link>
          </div>
        </div>
        <div className="absolute right-8 top-24 text-[200px] font-black text-white/[0.02] leading-none select-none hidden md:block">
          GEO
        </div>
      </section>

      {/* What is GEO */}
      <section className="py-20 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="section-tag">¿QUÉ ES GEO?</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
              GENERATIVE ENGINE<br />OPTIMIZATION.
            </h2>
            <div className="line-sep" />
            <p className="text-white/40 text-sm leading-relaxed">
              GEO (Generative Engine Optimization) es la disciplina de optimizar tu contenido
              y presencia digital para aparecer en las respuestas de los modelos de inteligencia
              artificial. Mientras el SEO tradicional posiciona en Google, el GEO te posiciona
              en ChatGPT, Perplexity, Gemini y los demás buscadores generativos que están
              redefiniendo cómo las personas encuentran información.
            </p>
          </ScrollReveal>

          {/* AI Engines */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">MOTORES QUE OPTIMIZAMOS</p>
            {aiEngines.map((engine, i) => (
              <ScrollReveal key={engine.name} delay={i * 80}>
                <div className="flex items-center justify-between py-4 border-b border-white/5 group hover:border-[#A855F7]/30 transition-colors">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-wide group-hover:text-[#A855F7] transition-colors">
                      {engine.name}
                    </span>
                    <span className="text-[10px] text-white/30 ml-3 tracking-wider">{engine.company}</span>
                  </div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-white/30">{engine.share}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { stat: "40%", label: "DE LAS BÚSQUEDAS YA SON RESPONDIDAS DIRECTAMENTE POR IA SIN CLIC" },
            { stat: "60%", label: "DE LOS USUARIOS CONFÍAN MÁS EN RESPUESTAS DE IA QUE EN RESULTADOS ORGÁNICOS" },
            { stat: "2026", label: "AÑO EN QUE LOS BUSCADORES GENERATIVOS SUPERARÁN EL TRÁFICO TRADICIONAL" },
          ].map((item, i) => (
            <ScrollReveal key={item.stat} delay={i * 100}>
              <div className="border-t-2 border-[#A855F7] pt-6">
                <p className="text-5xl font-black text-[#A855F7] mb-3">{item.stat}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-white/40 leading-relaxed">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">CAPACIDADES</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-16">
              OPTIMIZACIÓN<br />PARA LA ERA IA.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors group">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-[#A855F7] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audit checklist */}
      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <p className="section-tag">LA AUDITORÍA INCLUYE</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-10">
              ANÁLISIS<br />COMPLETO.
            </h2>
            <ul className="flex flex-col gap-3">
              {auditItems.map((item, i) => (
                <li key={item} className="flex items-center gap-4 text-sm text-white/60 py-3 border-b border-white/5">
                  <span className="counter-label w-6">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-col gap-6">
              <p className="section-tag">GEO VS SEO TRADICIONAL</p>
              <div className="border border-white/5 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 gap-0">
                  <div className="p-4 bg-white/5 text-[10px] tracking-[0.15em] uppercase text-white/30" />
                  <div className="p-4 bg-white/5 text-[10px] tracking-[0.15em] uppercase text-white/50 text-center">SEO</div>
                  <div className="p-4 bg-[#A855F7]/10 text-[10px] tracking-[0.15em] uppercase text-[#A855F7] text-center">GEO</div>
                </div>
                {[
                  ["Objetivo", "Ranking en Google", "Citado por IA"],
                  ["Canal", "Buscadores clásicos", "LLMs & AI Search"],
                  ["Formato", "Keywords & links", "Contexto & autoridad"],
                  ["Métrica", "Posición / CTR", "Frecuencia de mención"],
                  ["Tendencia", "Maduró", "En explosión"],
                ].map(([label, seo, geo]) => (
                  <div key={label} className="grid grid-cols-3 border-t border-white/5">
                    <div className="p-4 text-[10px] tracking-[0.1em] uppercase text-white/30">{label}</div>
                    <div className="p-4 text-[10px] text-white/40 text-center">{seo}</div>
                    <div className="p-4 text-[10px] text-[#A855F7] text-center font-medium">{geo}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link href="/servicios/auditoria-seo" className="text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-4 h-px bg-current" />
                  VER TAMBIÉN: AUDITORÍA SEO TRADICIONAL
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech */}
      <section className="py-16 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mr-4">HERRAMIENTAS</span>
          {["ChatGPT Search", "Perplexity API", "Google Gemini", "Schema.org", "JSON-LD", "NLP Analysis", "Semrush", "Ahrefs"].map((tech) => (
            <span key={tech} className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-white/10 rounded-full text-white/40 hover:border-[#A855F7]/40 hover:text-[#A855F7] transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              ¿LA IA CONOCE<br />TU MARCA?
            </h2>
          </ScrollReveal>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contacto" className="bracket-btn text-[10px]">AUDITAR MI MARCA</Link>
            <Link href="/servicios/auditoria-seo" className="bracket-btn text-[10px]">VER AUDITORÍA SEO</Link>
          </div>
        </div>
      </section>
    </>
  );
}
