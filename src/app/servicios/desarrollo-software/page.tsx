import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { title: "SISTEMAS A MEDIDA", body: "Software que encaja perfectamente con tus procesos de negocio. Sin compromisos, sin funciones innecesarias." },
  { title: "APIS & MICROSERVICIOS", body: "Arquitecturas distribuidas, APIs RESTful y GraphQL. Integraciones con cualquier plataforma del mercado." },
  { title: "AUTOMATIZACIÓN", body: "Eliminamos el trabajo repetitivo de tu equipo. Workflows automáticos, notificaciones inteligentes y más." },
  { title: "APLICACIONES MÓVILES", body: "Apps nativas y multiplataforma (iOS & Android) con React Native. Una sola base de código, dos mercados." },
  { title: "CLOUD & DEVOPS", body: "Infraestructura en la nube, CI/CD, contenedores Docker y Kubernetes. Tu software siempre disponible." },
  { title: "SEGURIDAD", body: "Auditorías de seguridad, autenticación robusta, cifrado de datos y cumplimiento de normativas (GDPR, ISO)." },
];

export default function DesarrolloSoftwarePage() {
  return (
    <>
      <section className="relative pt-40 pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / DESARROLLO DE SOFTWARE</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
              SOFTWARE<br />
              <span style={{ color: "#9B59B6" }}>SIN LÍMITES.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 tracking-wide">
              Construimos el software que tu negocio necesita, no el que está disponible en el mercado.
              Arquitecturas sólidas, código limpio y soluciones que escalan con tu crecimiento.
            </p>
            <Link href="/contacto" className="bracket-btn text-[10px] pl-0">COTIZAR PROYECTO</Link>
          </div>
        </div>
        <div className="absolute right-8 top-24 text-[200px] font-black text-white/[0.02] leading-none select-none hidden md:block">03</div>
      </section>

      <section className="py-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">QUÉ CONSTRUIMOS</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-16">TECNOLOGÍA<br />PARA CRECER.</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors group">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-[#9B59B6] transition-colors">{f.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mr-4">STACK</span>
          {["Node.js", "Python", "Go", "React Native", "Docker", "Kubernetes", "AWS", "GCP", "PostgreSQL", "Redis"].map((tech) => (
            <span key={tech} className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-white/10 rounded-full text-white/40 hover:border-[#9B59B6]/40 hover:text-[#9B59B6] transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black uppercase">¿TIENES UNA IDEA<br />DE PRODUCTO?</h2>
          </ScrollReveal>
          <Link href="/contacto" className="bracket-btn text-[10px]">CONSTRUYÁMOSLA</Link>
        </div>
      </section>
    </>
  );
}
