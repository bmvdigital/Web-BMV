import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { title: "DASHBOARDS INTERACTIVOS", body: "Visualizaciones en tiempo real que transforman datos complejos en insights accionables para tu equipo." },
  { title: "REPORTES AUTOMATIZADOS", body: "Reportes periódicos que llegan solos. Sin trabajo manual, sin retrasos. Siempre con los datos más frescos." },
  { title: "MODELOS PREDICTIVOS", body: "Machine learning aplicado a tu negocio: predice demanda, detecta anomalías y anticipa comportamientos." },
  { title: "INTEGRACIÓN DE DATOS", body: "Unificamos tus fuentes de datos en un único repositorio limpio y estructurado. ELT/ETL a medida." },
  { title: "ANÁLISIS DE MERCADO", body: "Benchmarking competitivo, análisis de tendencias y segmentación de mercado basados en datos reales." },
  { title: "DATA GOVERNANCE", body: "Establecemos procesos, políticas y estándares para que tus datos sean confiables, seguros y gobernados." },
];

export default function AnalisisDatosPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / ANÁLISIS DE DATOS</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
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

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black uppercase">¿TUS DATOS<br />TRABAJAN PARA TI?</h2>
          </ScrollReveal>
          <Link href="/contacto" className="bracket-btn text-[10px]">HABLEMOS</Link>
        </div>
      </section>
    </>
  );
}
