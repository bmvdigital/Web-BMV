import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { title: "DISEÑO UI/UX", body: "Interfaces que convierten visitantes en clientes. Diseño centrado en el usuario, pruebas A/B y optimización continua." },
  { title: "DESARROLLO FRONTEND", body: "React, Next.js y tecnologías modernas. Sitios rápidos, accesibles y listos para SEO desde el primer día." },
  { title: "BACKEND & APIS", body: "Arquitecturas robustas, bases de datos optimizadas y APIs que resisten el crecimiento de tu negocio." },
  { title: "E-COMMERCE", body: "Tiendas online con experiencias de compra fluidas, pagos seguros e integración con tus sistemas existentes." },
  { title: "WEB APPS & SAAS", body: "Plataformas SaaS completas con autenticación, roles de usuario, facturación y paneles de control." },
  { title: "MANTENIMIENTO", body: "Tu sitio siempre actualizado, seguro y funcionando. Soporte técnico continuo y mejoras periódicas." },
];

const process = [
  { num: "01", title: "DISCOVERY", body: "Analizamos tu negocio, tu mercado y tus objetivos para definir la estrategia digital correcta." },
  { num: "02", title: "DISEÑO", body: "Wireframes, prototipos interactivos y diseño visual. Tú apruebas antes de escribir una línea de código." },
  { num: "03", title: "DESARROLLO", body: "Construcción ágil con entregas incrementales. Ves el progreso real desde la primera semana." },
  { num: "04", title: "LANZAMIENTO", body: "Deploy, pruebas de rendimiento, SEO técnico y monitoreo. Tu sitio sale al mundo en óptimas condiciones." },
];

export default function DesarrolloWebPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / DESARROLLO WEB</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              WEB QUE<br />
              <span className="text-[#6EE010]">VENDE.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 tracking-wide">
              Diseñamos y desarrollamos presencias digitales de alto impacto. Cada proyecto
              comienza con un objetivo claro: generar resultados medibles para tu negocio.
            </p>
            <Link href="/contacto" className="bracket-btn text-[10px] pl-0">
              INICIAR PROYECTO
            </Link>
          </div>
        </div>

        <div className="absolute right-8 top-24 text-[200px] font-black text-white/[0.02] leading-none select-none hidden md:block">
          01
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">QUÉ INCLUYE</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-16">
              TODO LO QUE<br />NECESITAS.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors group">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-[#6EE010] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">PROCESO</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-16">
              CÓMO TRABAJAMOS.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 100}>
                <div className="border-t-2 border-[#6EE010] pt-6">
                  <span className="counter-label block mb-4">{p.num}</span>
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-3">{p.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mr-4">TECNOLOGÍAS</span>
          {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Figma"].map((tech) => (
            <span key={tech} className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-white/10 rounded-full text-white/40 hover:border-[#6EE010]/40 hover:text-[#6EE010] transition-colors">
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
              ¿TIENES UN<br />PROYECTO EN MENTE?
            </h2>
          </ScrollReveal>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contacto" className="bracket-btn text-[10px]">HABLEMOS</Link>
            <Link href="/portafolio" className="bracket-btn text-[10px]">VER PORTAFOLIO</Link>
          </div>
        </div>
      </section>
    </>
  );
}
