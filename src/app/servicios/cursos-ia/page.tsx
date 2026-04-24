import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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

export default function CursosIAPage() {
  return (
    <>
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
