import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import ServiciosTunnel from "@/components/ServiciosTunnel";

const services = [
  {
    id: "desarrollo-web",
    num: "01",
    title: "DESARROLLO WEB",
    tagline: "CREADO PARA CONVERTIR.",
    description:
      "Diseñamos y construimos sitios web y aplicaciones que no solo se ven bien — generan resultados. Desde landing pages hasta plataformas SaaS complejas.",
    tags: ["Next.js", "React", "UI/UX", "E-commerce", "Web Apps"],
    color: "#6EE010",
  },
  {
    id: "analisis-datos",
    num: "02",
    title: "ANÁLISIS DE DATOS",
    tagline: "DATOS QUE HABLAN.",
    description:
      "Convertimos tus datos en ventaja competitiva. Dashboards interactivos, reportes automatizados y modelos predictivos que guían decisiones estratégicas.",
    tags: ["Power BI", "Python", "SQL", "Machine Learning", "ETL"],
    color: "#5B8FA8",
  },
  {
    id: "desarrollo-software",
    num: "03",
    title: "DESARROLLO DE SOFTWARE",
    tagline: "SOFTWARE A TU MEDIDA.",
    description:
      "Creamos software que resuelve problemas reales. APIs robustas, sistemas de gestión, automatizaciones y soluciones enterprise con arquitectura escalable.",
    tags: ["API REST", "Node.js", "Python", "Microservicios", "Cloud"],
    color: "#9B59B6",
  },
  {
    id: "auditoria-seo",
    num: "04",
    title: "AUDITORÍA SEO",
    tagline: "VISIBILIDAD TOTAL.",
    description:
      "Analizamos tu presencia digital desde la raíz. Identificamos oportunidades, corregimos errores técnicos y trazamos la estrategia para dominar los buscadores.",
    tags: ["SEO Técnico", "On-Page", "Off-Page", "Core Web Vitals", "Analytics"],
    color: "#E67E22",
  },
  {
    id: "cursos-ia",
    num: "05",
    title: "CURSOS DE IA",
    tagline: "EL FUTURO ES HOY.",
    description:
      "Formación práctica en inteligencia artificial para equipos y empresas. Desde fundamentos hasta implementación en producción. Sin teoría vacía.",
    tags: ["ChatGPT", "LangChain", "Automatización", "Prompt Engineering", "APIs de IA"],
    color: "#1ABC9C",
  },
  {
    id: "auditoria-geo",
    num: "06",
    title: "AUDITORÍA GEO",
    tagline: "VISIBILIDAD EN LA IA.",
    description:
      "Generative Engine Optimization: optimizamos tu presencia para que los motores de búsqueda con IA (ChatGPT, Perplexity, Gemini, Copilot) recomienden tu marca.",
    tags: ["GEO", "ChatGPT", "Perplexity", "Gemini", "LLM SEO"],
    color: "#A855F7",
  },
];

export const metadata = {
  title: "Servicios de Tecnología y SaaS en México | BMV Digital",
  description: "Desarrollo web, análisis de datos, software a medida, auditoría SEO, optimización GEO para buscadores con IA y cursos de inteligencia artificial. Soluciones SaaS para empresas en México.",
  keywords: ["servicios tecnología México", "desarrollo web", "análisis datos", "software medida", "auditoría SEO", "GEO buscadores IA", "cursos IA México"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/servicios" },
  openGraph: {
    title: "Servicios de Tecnología | BMV Digital México",
    description: "6 servicios de tecnología diseñados para impulsar tu negocio: web, datos, software, SEO, GEO e IA.",
    url: "https://www.bmvdigital.com.mx/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bmvdigital.com.mx" },
          { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.bmvdigital.com.mx/servicios" },
        ]
      }} />
      {/* Hero */}
      <section className="relative min-h-[700px] md:min-h-[80vh] flex items-center pt-40 pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        {/* Particle tunnel fills the entire hero as a background */}
        <div className="absolute inset-0 z-0">
          <ServiciosTunnel />
        </div>

        {/* Left-side gradient so text stays readable over the tunnel */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />

        {/* Bottom fade to blend seamlessly into the next section */}
        <div className="absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-[2] max-w-6xl mx-auto w-full">
          <p className="section-tag">SERVICIOS</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tight">
            NACIDOS EN EL<br />
            BORDE DE LO<br />
            <span className="text-[#6EE010]">POSIBLE.</span>
          </h1>
          <p className="mt-8 text-white/40 text-sm max-w-lg leading-relaxed tracking-wide">
            Cada servicio que ofrecemos está diseñado para llevarte más allá de donde estás hoy.
            Tecnología de punta, estrategia inteligente, resultados medibles.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-8 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          {services.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 60}>
              <Link href={`/servicios/${s.id}`} className="group block">
                <div className="grid md:grid-cols-[80px_1fr_280px] gap-6 md:gap-10 py-12 border-b border-white/5 hover:border-white/10 transition-colors">
                  {/* Number */}
                  <div className="flex items-start">
                    <span className="counter-label text-base">{s.num}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-3 group-hover:text-[#6EE010] transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: s.color }}>
                      {s.tagline}
                    </p>
                    <div className="line-sep" />
                    <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                      {s.description}
                    </p>
                  </div>

                  {/* Tags + CTA */}
                  <div className="flex flex-col justify-between items-start md:items-end">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] tracking-[0.15em] uppercase px-3 py-1.5 border border-white/10 rounded-full text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="bracket-btn text-[10px] mt-6 pl-0 group-hover:text-[#6EE010] transition-colors">
                      VER MÁS
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-16 text-center border-t border-white/5">
        <ScrollReveal>
          <p className="section-tag justify-center">¿LISTO?</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            CONSTRUYAMOS<br />
            <span className="text-[#6EE010]">JUNTOS.</span>
          </h2>
          <Link href="/contacto" className="bracket-btn text-[11px] inline-flex">
            CONTÁCTANOS
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
