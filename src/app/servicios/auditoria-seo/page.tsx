import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

const features = [
  { title: "AUDITORÍA TÉCNICA", body: "Análisis profundo de velocidad, Core Web Vitals, indexación, rastreo e infraestructura técnica de tu sitio." },
  { title: "SEO ON-PAGE", body: "Optimización de contenidos, estructura de URLs, metadatos, headings y arquitectura de información." },
  { title: "SEO OFF-PAGE", body: "Análisis de backlinks, estrategia de link building y construcción de autoridad de dominio." },
  { title: "INVESTIGACIÓN DE KEYWORDS", body: "Identificamos las palabras clave de mayor oportunidad en tu industria y trazamos la estrategia de contenido." },
  { title: "ANÁLISIS DE COMPETENCIA", body: "Mapeo completo de tu competencia digital: qué están haciendo, qué les funciona y cómo superarlos." },
  { title: "SEGUIMIENTO Y REPORTES", body: "Dashboard de métricas SEO en tiempo real. Posiciones, tráfico orgánico, conversiones y ROI claramente medidos." },
];

const auditItems = [
  "Revisión de estructura técnica",
  "Velocidad y Core Web Vitals",
  "Análisis de contenido",
  "Perfil de backlinks",
  "Búsqueda de keywords",
  "Análisis de competidores",
  "Errores de rastreo e indexación",
  "Experiencia móvil",
  "Datos estructurados (Schema)",
  "Plan de acción priorizado",
];

export const metadata = {
  title: "Auditoría SEO Profesional en México | SEO Técnico & Contenidos",
  description: "Auditoría SEO completa para empresas en México. Análisis técnico, Core Web Vitals, keywords, backlinks y estrategia de contenido. Mejora tu posicionamiento en Google.",
  keywords: ["auditoría SEO México", "consultoría SEO", "posicionamiento web México", "SEO técnico", "Core Web Vitals", "link building México"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/servicios/auditoria-seo" },
  openGraph: {
    title: "Auditoría SEO Profesional | BMV Digital México",
    description: "Análisis completo de tu presencia en Google: técnico, on-page, off-page y contenido. Plan de acción priorizado para dominar tu mercado.",
    url: "https://www.bmvdigital.com.mx/servicios/auditoria-seo",
  },
};

export default function AuditoriaSeoPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bmvdigital.com.mx" },
          { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.bmvdigital.com.mx/servicios" },
          { "@type": "ListItem", position: 3, name: "Auditoría SEO", item: "https://www.bmvdigital.com.mx/servicios/auditoria-seo" },
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Auditoría SEO Profesional",
        provider: { "@type": "Organization", name: "BMV Digital", url: "https://www.bmvdigital.com.mx" },
        description: "Auditoría completa de SEO técnico, on-page, off-page y contenido. Incluye análisis de Core Web Vitals, investigación de keywords, análisis de competencia y plan de acción priorizado.",
        areaServed: { "@type": "Country", name: "Mexico" },
        serviceType: "SEO",
        url: "https://www.bmvdigital.com.mx/servicios/auditoria-seo",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué incluye una auditoría SEO profesional?", acceptedAnswer: { "@type": "Answer", text: "Una auditoría SEO profesional incluye: análisis técnico del sitio (velocidad, indexación, Core Web Vitals), revisión de SEO on-page (títulos, meta descripciones, headings, URLs), análisis de backlinks, investigación de keywords, benchmarking de competidores y un plan de acción priorizado con recomendaciones específicas." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda en verse resultados de SEO?", acceptedAnswer: { "@type": "Answer", text: "Los primeros resultados de SEO se ven entre 3 y 6 meses para palabras clave de baja competencia. Para keywords más competitivas en mercados saturados, puede tomar entre 6 y 12 meses. El SEO es una inversión a largo plazo con resultados compuestos que crecen con el tiempo." } },
          { "@type": "Question", name: "¿Qué son los Core Web Vitals y por qué importan para el SEO?", acceptedAnswer: { "@type": "Answer", text: "Los Core Web Vitals son métricas de Google que miden la experiencia del usuario: LCP (velocidad de carga), FID/INP (interactividad) y CLS (estabilidad visual). Desde 2021 son un factor de posicionamiento directo en Google. Un sitio con buenos Core Web Vitals tiene ventaja sobre sus competidores en los resultados de búsqueda." } },
          { "@type": "Question", name: "¿Cuánto cuesta una auditoría SEO en México?", acceptedAnswer: { "@type": "Answer", text: "El costo de una auditoría SEO en México varía según la profundidad del análisis y el tamaño del sitio. Una auditoría básica puede costar entre $5,000 y $15,000 MXN. Una auditoría completa para sitios empresariales, con análisis técnico profundo y plan estratégico, entre $20,000 y $50,000 MXN. En BMV Digital ofrecemos diagnóstico inicial sin costo." } },
          { "@type": "Question", name: "¿Pueden ayudar con SEO local para mi negocio en México?", acceptedAnswer: { "@type": "Answer", text: "Sí. El SEO local es fundamental para negocios que atienden a clientes en una zona geográfica específica. Optimizamos tu perfil de Google Business, implementamos Schema de negocio local, gestionamos las citas NAP (Nombre, Dirección, Teléfono) y creamos contenido optimizado para búsquedas locales." } },
        ]
      }} />

      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / AUDITORÍA SEO</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              DOMINA<br />
              <span style={{ color: "#E67E22" }}>LOS BUSCADORES.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 tracking-wide">
              El 68% de las experiencias en línea comienzan en un buscador. Si no estás en la primera
              página, prácticamente no existes. Cambia eso con una auditoría SEO completa.
            </p>
            <Link href="/contacto" className="bracket-btn text-[10px] pl-0">SOLICITAR AUDITORÍA</Link>
          </div>
        </div>
        <div className="absolute right-8 top-24 text-[200px] font-black text-white/[0.02] leading-none select-none hidden md:block">04</div>
      </section>

      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <p className="section-tag">LA AUDITORÍA INCLUYE</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-10">TODO LO<br />QUE IMPORTA.</h2>
            <ul className="flex flex-col gap-3">
              {auditItems.map((item, i) => (
                <li key={item} className="flex items-center gap-4 text-sm text-white/60 py-3 border-b border-white/5">
                  <span className="counter-label w-6">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            <p className="section-tag">CAPACIDADES</p>
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="border border-white/5 p-6 hover:border-[#E67E22]/30 transition-colors group">
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3 group-hover:text-[#E67E22] transition-colors">{f.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">PREGUNTAS FRECUENTES</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-12">SEO SIN<br />MISTERIOS.</h2>
          </ScrollReveal>
          <div className="flex flex-col divide-y divide-white/5">
            {[
              { q: "¿Qué incluye una auditoría SEO profesional?", a: "Análisis técnico (velocidad, Core Web Vitals, indexación), SEO on-page (títulos, headings, URLs), análisis de backlinks, investigación de keywords, benchmark de competidores y plan de acción priorizado." },
              { q: "¿Cuánto tiempo tarda en verse resultados de SEO?", a: "Entre 3 y 6 meses para keywords de baja competencia. Para mercados más competitivos, entre 6 y 12 meses. El SEO es una inversión con resultados compuestos que crecen con el tiempo." },
              { q: "¿Qué son los Core Web Vitals y por qué importan?", a: "Son métricas de Google que miden la experiencia del usuario (velocidad, interactividad, estabilidad visual). Desde 2021 son factor directo de posicionamiento. Un sitio que los cumple tiene ventaja sobre su competencia." },
              { q: "¿Cuánto cuesta una auditoría SEO en México?", a: "Una auditoría básica desde $5,000 MXN. Una auditoría completa para sitios empresariales entre $20,000 y $50,000 MXN. Ofrecemos diagnóstico inicial sin costo." },
              { q: "¿Pueden ayudar con SEO local?", a: "Sí. Optimizamos Google Business, implementamos Schema local, gestionamos citas NAP y creamos contenido para búsquedas geográficas específicas en México." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <details className="py-6 group cursor-pointer">
                  <summary className="flex items-center justify-between text-sm font-bold uppercase tracking-wide list-none">
                    {item.q}
                    <span className="text-[#6EE010] text-xl group-open:rotate-45 transition-transform ml-4 flex-shrink-0">+</span>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase">¿CUÁNTO TRÁFICO<br />ESTÁS PERDIENDO?</h2>
          </ScrollReveal>
          <Link href="/contacto" className="bracket-btn text-[10px]">DESCÚBRELO HOY</Link>
        </div>
      </section>
    </>
  );
}
