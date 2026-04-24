import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

const courses = [
  {
    num: "01",
    title: "FUNDAMENTOS DE IA",
    duration: "8 horas",
    level: "Principiante",
    body: "Conceptos esenciales, historia, tipos de IA, machine learning y deep learning. Sin matemáticas complejas, todo práctico.",
  },
  {
    num: "02",
    title: "PROMPT ENGINEERING",
    duration: "6 horas",
    level: "Intermedio",
    body: "Domina el arte de comunicarte con modelos de lenguaje. Técnicas avanzadas para obtener resultados precisos y consistentes.",
  },
  {
    num: "03",
    title: "AUTOMATIZACIÓN CON IA",
    duration: "12 horas",
    level: "Intermedio",
    body: "Construye flujos de trabajo automatizados con Make, Zapier y APIs de IA. Elimina tareas repetitivas de tu empresa.",
  },
  {
    num: "04",
    title: "DESARROLLO CON LLMS",
    duration: "16 horas",
    level: "Avanzado",
    body: "LangChain, embeddings, RAG y agentes autónomos. Integra modelos de lenguaje en aplicaciones reales de producción.",
  },
  {
    num: "05",
    title: "IA PARA EQUIPOS",
    duration: "Personalizado",
    level: "Empresarial",
    body: "Formación in-company adaptada al contexto de tu industria. Entrenamos a tu equipo para aprovechar la IA en su día a día.",
  },
];

export const metadata = {
  title: "Cursos de Inteligencia Artificial en México | Prompt Engineering & LLMs",
  description: "Formación práctica en IA para empresas y profesionales en México. Prompt engineering, automatización con ChatGPT, LangChain, desarrollo con LLMs y IA para equipos. Online y presencial.",
  keywords: ["cursos inteligencia artificial México", "curso ChatGPT", "prompt engineering", "LangChain curso", "automatización IA", "formación IA empresas", "curso LLMs"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/servicios/cursos-ia" },
  openGraph: {
    title: "Cursos de Inteligencia Artificial | BMV Digital México",
    description: "De cero a producción con IA. Prompt engineering, automatización, LangChain y desarrollo con LLMs. Cursos online y presenciales para equipos y empresas.",
    url: "https://www.bmvdigital.com.mx/servicios/cursos-ia",
  },
};

export default function CursosIAPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bmvdigital.com.mx" },
          { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.bmvdigital.com.mx/servicios" },
          { "@type": "ListItem", position: 3, name: "Cursos de IA", item: "https://www.bmvdigital.com.mx/servicios/cursos-ia" },
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Cursos de Inteligencia Artificial",
        provider: { "@type": "Organization", name: "BMV Digital", url: "https://www.bmvdigital.com.mx" },
        description: "Formación práctica en inteligencia artificial para empresas y profesionales en México. Incluye cursos de Fundamentos de IA, Prompt Engineering, Automatización con IA, Desarrollo con LLMs y programas corporativos personalizados.",
        areaServed: { "@type": "Country", name: "Mexico" },
        serviceType: "Formación en Inteligencia Artificial",
        url: "https://www.bmvdigital.com.mx/servicios/cursos-ia",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué cursos de inteligencia artificial ofrecen?", acceptedAnswer: { "@type": "Answer", text: "Ofrecemos 5 niveles: Fundamentos de IA (8h), Prompt Engineering (6h), Automatización con IA (12h), Desarrollo con LLMs usando LangChain (16h) y cursos corporativos personalizados para equipos empresariales." } },
          { "@type": "Question", name: "¿Necesito conocimientos previos de programación para los cursos de IA?", acceptedAnswer: { "@type": "Answer", text: "Depende del curso. Los cursos de Fundamentos de IA y Prompt Engineering no requieren programación. Para Automatización con IA se recomienda conocimiento básico. Para Desarrollo con LLMs sí se requiere experiencia en Python." } },
          { "@type": "Question", name: "¿Los cursos de IA son en línea o presenciales?", acceptedAnswer: { "@type": "Answer", text: "Ofrecemos ambas modalidades: online en vivo con instructor, grabado on-demand para aprender a tu ritmo, talleres presenciales y formación in-company en las instalaciones de tu empresa." } },
          { "@type": "Question", name: "¿Qué es el Prompt Engineering y para qué sirve?", acceptedAnswer: { "@type": "Answer", text: "El Prompt Engineering es el arte y la ciencia de comunicarse eficazmente con modelos de IA como ChatGPT. Aprender a escribir prompts precisos y estructurados permite obtener resultados de mucho mayor calidad, automatizar tareas y construir flujos de trabajo inteligentes sin escribir código." } },
          { "@type": "Question", name: "¿Pueden capacitar a todo mi equipo en inteligencia artificial?", acceptedAnswer: { "@type": "Answer", text: "Sí. Ofrecemos programas de formación corporativa personalizados según el nivel y las necesidades de tu equipo. Desde una sesión introductoria de 2 horas hasta programas intensivos de varias semanas. Adaptamos el contenido a tu industria específica." } },
        ]
      }} />

      <section className="relative pt-40 pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / CURSOS DE IA</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              INTELIGENCIA<br />
              <span style={{ color: "#1ABC9C" }}>ARTIFICIAL.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 tracking-wide">
              La IA no es el futuro — es el presente. Los equipos que la dominan hoy
              tendrán una ventaja insuperable mañana. Nuestros cursos van directo al grano.
            </p>
            <Link href="/contacto" className="bracket-btn text-[10px] pl-0">INSCRIBIRSE</Link>
          </div>
        </div>
        <div className="absolute right-8 top-24 text-[200px] font-black text-white/[0.02] leading-none select-none hidden md:block">05</div>
      </section>

      {/* Why learn */}
      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { stat: "85%", label: "DE LOS TRABAJOS CAMBIARÁN CON LA IA EN 10 AÑOS" },
            { stat: "3x", label: "MÁS PRODUCTIVIDAD EN EQUIPOS QUE USAN IA CORRECTAMENTE" },
            { stat: "0", label: "PREREQUISITOS. COMENZAMOS DESDE DONDE ESTÁS TÚ" },
          ].map((item, i) => (
            <ScrollReveal key={item.stat} delay={i * 100}>
              <div className="border-t-2 border-[#1ABC9C] pt-6">
                <p className="text-5xl font-black text-[#1ABC9C] mb-3">{item.stat}</p>
                <p className="text-xs tracking-[0.15em] uppercase text-white/40 leading-relaxed">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">CURSOS DISPONIBLES</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-16">DE CERO<br />A PRODUCCIÓN.</h2>
          </ScrollReveal>

          <div className="flex flex-col divide-y divide-white/5">
            {courses.map((c, i) => (
              <ScrollReveal key={c.num} delay={i * 80}>
                <div className="py-10 grid md:grid-cols-[80px_1fr_160px] gap-6 items-start group hover:bg-[#111]/50 px-4 -mx-4 transition-colors">
                  <span className="counter-label">{c.num}</span>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-wide mb-2 group-hover:text-[#1ABC9C] transition-colors">{c.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed max-w-lg">{c.body}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-[#1ABC9C] mb-1">{c.duration}</p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-white/30">{c.level}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-16 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mr-4">FORMATOS</span>
          {["Online en Vivo", "Grabado On-Demand", "In-Company", "Workshops", "Bootcamp Intensivo"].map((f) => (
            <span key={f} className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-white/10 rounded-full text-white/40 hover:border-[#1ABC9C]/40 hover:text-[#1ABC9C] transition-colors">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">PREGUNTAS FRECUENTES</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-12">TODO SOBRE<br /><span style={{ color: "#1ABC9C" }}>NUESTROS CURSOS.</span></h2>
          </ScrollReveal>
          <div className="flex flex-col divide-y divide-white/5">
            {[
              { q: "¿Qué cursos de inteligencia artificial ofrecen?", a: "Ofrecemos 5 niveles: Fundamentos de IA (8h), Prompt Engineering (6h), Automatización con IA (12h), Desarrollo con LLMs usando LangChain (16h) y cursos corporativos personalizados para equipos empresariales." },
              { q: "¿Necesito conocimientos previos de programación?", a: "Depende del curso. Fundamentos de IA y Prompt Engineering no requieren programación. Para Automatización con IA se recomienda conocimiento básico. Para Desarrollo con LLMs sí se requiere experiencia en Python." },
              { q: "¿Los cursos son en línea o presenciales?", a: "Ofrecemos ambas modalidades: online en vivo con instructor, grabado on-demand para aprender a tu ritmo, talleres presenciales y formación in-company en las instalaciones de tu empresa." },
              { q: "¿Qué es el Prompt Engineering y para qué sirve?", a: "El Prompt Engineering es el arte y la ciencia de comunicarse eficazmente con modelos de IA como ChatGPT. Aprender a escribir prompts precisos y estructurados permite obtener resultados de mayor calidad, automatizar tareas y construir flujos de trabajo inteligentes sin escribir código." },
              { q: "¿Pueden capacitar a todo mi equipo?", a: "Sí. Ofrecemos programas de formación corporativa personalizados según el nivel y las necesidades de tu equipo. Desde una sesión introductoria de 2 horas hasta programas intensivos de varias semanas. Adaptamos el contenido a tu industria específica." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <details className="py-6 group cursor-pointer">
                  <summary className="flex items-center justify-between text-sm font-bold uppercase tracking-wide list-none">
                    {item.q}
                    <span style={{ color: "#1ABC9C" }} className="text-xl group-open:rotate-45 transition-transform ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-3xl">{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black uppercase">¿TU EQUIPO<br />LISTO PARA LA IA?</h2>
          </ScrollReveal>
          <Link href="/contacto" className="bracket-btn text-[10px]">INSCRÍBETE HOY</Link>
        </div>
      </section>
    </>
  );
}
