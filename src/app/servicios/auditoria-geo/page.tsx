import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

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

export const metadata = {
  title: "Auditoría GEO — Optimización para Buscadores con IA | BMV Digital",
  description: "Generative Engine Optimization (GEO): optimizamos tu marca para aparecer en respuestas de ChatGPT, Perplexity, Gemini y Copilot. La nueva frontera del posicionamiento digital.",
  keywords: ["GEO generative engine optimization", "optimización ChatGPT", "SEO para IA", "Perplexity SEO", "Gemini optimización", "LLM SEO México", "buscadores IA"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/servicios/auditoria-geo" },
  openGraph: {
    title: "Auditoría GEO — Optimización para Buscadores con IA | BMV Digital",
    description: "¿Aparece tu marca cuando alguien le pregunta a ChatGPT o Perplexity? Con GEO optimizamos tu presencia en los buscadores de nueva generación.",
    url: "https://www.bmvdigital.com.mx/servicios/auditoria-geo",
  },
};

export default function AuditoriaGeoPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bmvdigital.com.mx" },
          { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.bmvdigital.com.mx/servicios" },
          { "@type": "ListItem", position: 3, name: "Auditoría GEO", item: "https://www.bmvdigital.com.mx/servicios/auditoria-geo" },
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Auditoría GEO — Generative Engine Optimization",
        provider: { "@type": "Organization", name: "BMV Digital", url: "https://www.bmvdigital.com.mx" },
        description: "Optimización de presencia digital para buscadores con inteligencia artificial generativa: ChatGPT, Perplexity, Gemini, Microsoft Copilot y Claude. Incluye auditoría de citabilidad, optimización de contenido y monitoreo continuo.",
        areaServed: { "@type": "Country", name: "Mexico" },
        serviceType: "GEO Generative Engine Optimization",
        url: "https://www.bmvdigital.com.mx/servicios/auditoria-geo",
        keywords: "GEO, Generative Engine Optimization, ChatGPT SEO, Perplexity SEO, LLM optimization",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué es GEO (Generative Engine Optimization)?", acceptedAnswer: { "@type": "Answer", text: "GEO o Generative Engine Optimization es la disciplina de optimizar el contenido y la presencia digital de una marca para aparecer citada en las respuestas de los motores de búsqueda basados en inteligencia artificial generativa, como ChatGPT Search, Perplexity AI, Google Gemini y Microsoft Copilot. Mientras el SEO tradicional busca posicionar en resultados de Google, el GEO busca que los modelos de lenguaje (LLMs) mencionen y recomienden tu marca cuando los usuarios hacen preguntas relacionadas con tu industria." } },
          { "@type": "Question", name: "¿Por qué necesito GEO si ya tengo SEO?", acceptedAnswer: { "@type": "Answer", text: "El SEO y el GEO son complementarios pero distintos. El 40% de las búsquedas ya son respondidas directamente por IA sin que el usuario haga clic en ningún resultado. Si tu marca no está optimizada para los buscadores generativos, estás perdiendo visibilidad ante una audiencia creciente que confía en ChatGPT, Perplexity y Gemini para encontrar proveedores, servicios y recomendaciones. El GEO es la nueva capa de visibilidad que el SEO tradicional no cubre." } },
          { "@type": "Question", name: "¿Cómo sé si ChatGPT o Perplexity mencionan mi marca?", acceptedAnswer: { "@type": "Answer", text: "En una auditoría GEO de BMV Digital analizamos sistemáticamente si tu marca, productos o servicios aparecen en las respuestas de los principales LLMs cuando los usuarios hacen preguntas de tu industria. Realizamos cientos de consultas de prueba en ChatGPT, Perplexity, Gemini y Copilot para mapear tu presencia actual y la de tus competidores en estos buscadores." } },
          { "@type": "Question", name: "¿Qué técnicas se usan en la optimización GEO?", acceptedAnswer: { "@type": "Answer", text: "Las principales técnicas de GEO incluyen: optimización de contenido para que sea fácilmente citado por LLMs (claro, autoritativo y estructurado), implementación de datos estructurados Schema.org avanzados, creación de contenido en formato FAQ y Q&A que los modelos prefieren citar, estrategia de autoridad y credibilidad de la marca, optimización de menciones en fuentes que los LLMs consultan (Wikipedia, medios de comunicación, directorios de autoridad) y monitoreo continuo de presencia en respuestas de IA." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda en verse resultados de GEO?", acceptedAnswer: { "@type": "Answer", text: "Los primeros cambios en la presencia GEO pueden observarse entre 4 y 8 semanas después de implementar las optimizaciones, ya que los LLMs actualizan sus índices periódicamente. Los resultados completos y sostenidos generalmente se ven entre 3 y 6 meses. Es importante monitorear continuamente, ya que los modelos de IA se actualizan con frecuencia." } },
          { "@type": "Question", name: "¿El GEO reemplaza al SEO tradicional?", acceptedAnswer: { "@type": "Answer", text: "No, el GEO complementa al SEO tradicional. Ambos son necesarios en 2025 y 2026. El SEO sigue siendo esencial para el tráfico orgánico de Google, mientras que el GEO captura la visibilidad en los buscadores generativos. En BMV Digital ofrecemos auditorías integradas SEO + GEO para cubrir ambas dimensiones del posicionamiento digital." } },
        ]
      }} />

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

      {/* FAQ */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">PREGUNTAS FRECUENTES</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-12">TODO SOBRE<br /><span style={{ color: "#A855F7" }}>GEO.</span></h2>
          </ScrollReveal>
          <div className="flex flex-col divide-y divide-white/5">
            {[
              { q: "¿Qué es GEO (Generative Engine Optimization)?", a: "GEO es la disciplina de optimizar tu presencia digital para que los buscadores con IA (ChatGPT, Perplexity, Gemini, Copilot) mencionen y recomienden tu marca. Mientras el SEO posiciona en Google, el GEO te posiciona en la nueva generación de buscadores." },
              { q: "¿Por qué necesito GEO si ya tengo SEO?", a: "El 40% de las búsquedas ya son respondidas directamente por IA sin que el usuario haga clic. Si tu marca no está optimizada para LLMs, estás perdiendo visibilidad ante una audiencia que crece exponencialmente. El GEO cubre la capa que el SEO tradicional no alcanza." },
              { q: "¿Cómo sé si ChatGPT menciona mi marca?", a: "En una auditoría GEO analizamos cientos de consultas en ChatGPT, Perplexity, Gemini y Copilot para mapear si tu marca aparece cuando los usuarios buscan servicios de tu industria. También benchmarkeamos tu presencia vs. la de tus competidores." },
              { q: "¿Qué técnicas usa el GEO?", a: "Contenido optimizado para citabilidad por LLMs, Schema.org avanzado, secciones FAQ estructuradas, estrategia de autoridad de marca, optimización en fuentes que los LLMs consultan (medios, directorios) y monitoreo continuo." },
              { q: "¿Cuánto tarda en verse resultados?", a: "Primeros cambios en 4-8 semanas (los LLMs actualizan periódicamente). Resultados completos entre 3 y 6 meses. El monitoreo continuo es esencial ya que los modelos se actualizan con frecuencia." },
              { q: "¿GEO reemplaza al SEO?", a: "No, se complementan. El SEO sigue siendo vital para tráfico orgánico de Google. El GEO captura visibilidad en buscadores generativos. En BMV Digital ofrecemos auditorías integradas SEO + GEO." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <details className="py-6 group cursor-pointer">
                  <summary className="flex items-center justify-between text-sm font-bold uppercase tracking-wide list-none">
                    {item.q}
                    <span style={{ color: "#A855F7" }} className="text-xl group-open:rotate-45 transition-transform ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-3xl">{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
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
