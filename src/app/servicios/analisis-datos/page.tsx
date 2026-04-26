import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

const features = [
  { title: "DASHBOARDS INTERACTIVOS", body: "Visualizaciones en tiempo real que transforman datos complejos en insights accionables para tu equipo." },
  { title: "REPORTES AUTOMATIZADOS", body: "Reportes periódicos que llegan solos. Sin trabajo manual, sin retrasos. Siempre con los datos más frescos." },
  { title: "MODELOS PREDICTIVOS", body: "Machine learning aplicado a tu negocio: predice demanda, detecta anomalías y anticipa comportamientos." },
  { title: "INTEGRACIÓN DE DATOS", body: "Unificamos tus fuentes de datos en un único repositorio limpio y estructurado. ELT/ETL a medida." },
  { title: "ANÁLISIS DE MERCADO", body: "Benchmarking competitivo, análisis de tendencias y segmentación de mercado basados en datos reales." },
  { title: "DATA GOVERNANCE", body: "Establecemos procesos, políticas y estándares para que tus datos sean confiables, seguros y gobernados." },
];

export const metadata = {
  title: "Análisis de Datos Empresariales en México | Power BI & Python",
  description: "Transformamos tus datos en decisiones estratégicas. Dashboards interactivos, reportes automatizados, modelos predictivos y análisis de negocio con Python, SQL y Power BI.",
  keywords: ["análisis de datos México", "Business Intelligence", "Power BI México", "Python análisis", "machine learning empresarial", "dashboard interactivo"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/servicios/analisis-datos" },
  openGraph: {
    title: "Análisis de Datos Empresariales | BMV Digital",
    description: "Dashboards, reportes automáticos y modelos predictivos. Convierte tus datos en ventaja competitiva con Python, SQL y Power BI.",
    url: "https://www.bmvdigital.com.mx/servicios/analisis-datos",
  },
};

export default function AnalisisDatosPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bmvdigital.com.mx" },
          { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.bmvdigital.com.mx/servicios" },
          { "@type": "ListItem", position: 3, name: "Análisis de Datos", item: "https://www.bmvdigital.com.mx/servicios/analisis-datos" },
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Análisis de Datos Empresariales",
        provider: { "@type": "Organization", name: "BMV Digital", url: "https://www.bmvdigital.com.mx" },
        description: "Dashboards interactivos, reportes automatizados, modelos predictivos y análisis de negocio con Python, SQL y Power BI.",
        areaServed: { "@type": "Country", name: "Mexico" },
        serviceType: "Análisis de Datos",
        url: "https://www.bmvdigital.com.mx/servicios/analisis-datos",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué es el análisis de datos empresariales?", acceptedAnswer: { "@type": "Answer", text: "El análisis de datos empresariales es el proceso de examinar datos para descubrir patrones, tendencias e insights que guían decisiones estratégicas. Incluye dashboards, reportes y modelos predictivos que permiten a las empresas actuar con base en evidencia en lugar de suposiciones." } },
          { "@type": "Question", name: "¿Qué herramientas utilizan para análisis de datos?", acceptedAnswer: { "@type": "Answer", text: "Trabajamos con Python, Pandas, SQL, Power BI, Tableau, dbt, Apache Spark, BigQuery y Snowflake, seleccionando las herramientas más adecuadas según el volumen de datos y las necesidades específicas de cada empresa." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda implementar un dashboard de Business Intelligence?", acceptedAnswer: { "@type": "Answer", text: "Un dashboard básico puede estar listo en 1-2 semanas. Uno complejo con múltiples fuentes de datos, transformaciones avanzadas y acceso para varios equipos puede tomar entre 1 y 2 meses." } },
          { "@type": "Question", name: "¿Pueden integrar datos de múltiples sistemas?", acceptedAnswer: { "@type": "Answer", text: "Sí. Conectamos CRMs, ERPs, bases de datos, APIs y hojas de cálculo en un único repositorio centralizado mediante procesos ETL/ELT. Tu equipo accede a todos los datos desde un solo lugar, sin silos de información." } },
          { "@type": "Question", name: "¿Qué es un modelo predictivo y para qué sirve en mi empresa?", acceptedAnswer: { "@type": "Answer", text: "Un modelo predictivo es un algoritmo de machine learning que analiza datos históricos para predecir comportamientos futuros: demanda de productos, churn de clientes, anomalías financieras o tendencias de mercado. Permite anticiparse y tomar decisiones más inteligentes antes de que ocurran los problemas." } },
        ]
      }} />

      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / ANÁLISIS DE DATOS</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              DATOS QUE<br />
              <span style={{ color: "#5B8FA8" }}>DECIDEN.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 tracking-wide">
              El 90% de los datos empresariales nunca se analizan. Nosotros cambiamos eso.
              Convertimos tu información en la ventaja competitiva que tu negocio necesita.
            </p>
            <Link href="/contacto" className="bracket-btn text-[10px] pl-0">
              ANALICEMOS TUS DATOS
            </Link>
          </div>
        </div>
        <div className="absolute right-8 top-24 text-[200px] font-black text-white/[0.02] leading-none select-none hidden md:block">02</div>
      </section>

      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">CAPACIDADES</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-16">DE LOS DATOS<br />A LAS DECISIONES.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors group">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-[#5B8FA8] transition-colors">{f.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mr-4">HERRAMIENTAS</span>
          {["Python", "SQL", "Power BI", "Tableau", "Pandas", "Spark", "dbt", "Airflow", "BigQuery", "Snowflake"].map((tech) => (
            <span key={tech} className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-white/10 rounded-full text-white/40 hover:border-[#5B8FA8]/40 hover:text-[#5B8FA8] transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section — visible content for GEO */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">PREGUNTAS FRECUENTES</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-12">LO QUE MÁS<br />NOS PREGUNTAN.</h2>
          </ScrollReveal>
          <div className="flex flex-col divide-y divide-white/5">
            {[
              { q: "¿Qué es el análisis de datos empresariales?", a: "Es el proceso de examinar datos para descubrir patrones, tendencias e insights que guían decisiones estratégicas. Incluye dashboards, reportes y modelos predictivos que permiten actuar con base en evidencia." },
              { q: "¿Qué herramientas utilizan para análisis de datos?", a: "Python, Pandas, SQL, Power BI, Tableau, dbt, Apache Spark, BigQuery y Snowflake. Elegimos las herramientas más adecuadas según el volumen de datos y las necesidades de tu empresa." },
              { q: "¿Cuánto tiempo tarda implementar un dashboard de Business Intelligence?", a: "Un dashboard básico en 1-2 semanas. Uno complejo con múltiples fuentes de datos y acceso para varios equipos puede tomar entre 1 y 2 meses." },
              { q: "¿Pueden integrar datos de múltiples sistemas?", a: "Sí. Conectamos CRMs, ERPs, bases de datos, APIs y hojas de cálculo en un único repositorio centralizado mediante procesos ETL/ELT. Sin silos de información." },
              { q: "¿Qué es un modelo predictivo y para qué sirve en mi empresa?", a: "Un algoritmo de machine learning que analiza datos históricos para predecir comportamientos futuros: demanda, churn de clientes, anomalías financieras o tendencias de mercado. Permite anticiparse y decidir mejor." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <details className="py-6 group cursor-pointer">
                  <summary className="flex items-center justify-between text-sm font-bold uppercase tracking-wide list-none">
                    {item.q}
                    <span className="text-[#5B8FA8] text-xl group-open:rotate-45 transition-transform ml-4 flex-shrink-0">+</span>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase">¿TUS DATOS<br />TRABAJAN PARA TI?</h2>
          </ScrollReveal>
          <Link href="/contacto" className="bracket-btn text-[10px]">HABLEMOS</Link>
        </div>
      </section>
    </>
  );
}
