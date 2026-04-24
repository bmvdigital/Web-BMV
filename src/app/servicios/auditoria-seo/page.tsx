import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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

export default function AuditoriaSeoPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / AUDITORÍA SEO</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
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

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black uppercase">¿CUÁNTO TRÁFICO<br />ESTÁS PERDIENDO?</h2>
          </ScrollReveal>
          <Link href="/contacto" className="bracket-btn text-[10px]">DESCÚBRELO HOY</Link>
        </div>
      </section>
    </>
  );
}
