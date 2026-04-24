import dynamic from "next/dynamic";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

const ParticleWave = dynamic(() => import("@/components/ParticleWave"), { ssr: false });

const services = [
  {
    id: "desarrollo-web",
    num: "01",
    title: "DESARROLLO WEB",
    short: "Sitios y aplicaciones web de alto rendimiento, diseñadas para convertir.",
  },
  {
    id: "analisis-datos",
    num: "02",
    title: "ANÁLISIS DE DATOS",
    short: "Transformamos datos en decisiones. Dashboards, reportes y modelos predictivos.",
  },
  {
    id: "desarrollo-software",
    num: "03",
    title: "DESARROLLO DE SOFTWARE",
    short: "Software a medida que escala con tu negocio. Desde MVPs hasta sistemas empresariales.",
  },
  {
    id: "auditoria-seo",
    num: "04",
    title: "AUDITORÍA SEO",
    short: "Analizamos y optimizamos tu presencia en buscadores para dominar tu mercado.",
  },
  {
    id: "cursos-ia",
    num: "05",
    title: "CURSOS DE IA",
    short: "Formación práctica en inteligencia artificial. De cero a producción.",
  },
  {
    id: "auditoria-geo",
    num: "06",
    title: "AUDITORÍA GEO",
    short: "Optimización para buscadores con IA: ChatGPT, Perplexity, Gemini y más.",
  },
];

export const metadata = {
  title: "BMV Digital | Desarrollo Web, Software, SEO & IA en México",
  description: "Empresa mexicana de tecnología SaaS. Desarrollo web profesional, análisis de datos, software a medida, auditoría SEO, optimización GEO para buscadores con IA (ChatGPT, Perplexity, Gemini) y cursos de inteligencia artificial.",
  keywords: ["BMV Digital", "desarrollo web México", "agencia digital México", "software empresarial", "SEO México", "GEO IA", "cursos inteligencia artificial"],
  alternates: { canonical: "https://www.bmvdigital.com.mx" },
  openGraph: {
    title: "BMV Digital | Tecnología SaaS para Empresas en México",
    description: "Desarrollo web, análisis de datos, software a medida, auditoría SEO, optimización GEO e IA. Soluciones digitales que generan resultados reales.",
    url: "https://www.bmvdigital.com.mx",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.bmvdigital.com.mx/#webpage",
        url: "https://www.bmvdigital.com.mx",
        name: "BMV Digital — Desarrollo Web, Software, SEO & IA en México",
        description: "Empresa mexicana de tecnología SaaS especializada en desarrollo web, análisis de datos, software a medida, auditoría SEO, GEO para buscadores con IA y cursos de inteligencia artificial.",
        isPartOf: { "@id": "https://www.bmvdigital.com.mx/#website" },
        publisher: { "@id": "https://www.bmvdigital.com.mx/#organization" },
        inLanguage: "es-MX",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".section-tag"],
        },
      }} />
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        {/* Particle canvas */}
        <div className="absolute inset-0 z-0">
          <ParticleWave />
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />

        {/* Hero content */}
        <div className="relative z-20 px-6 md:px-16 max-w-5xl">
          <p className="section-tag mb-6">BMV DIGITAL</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight text-white mb-8">
            EL FUTURO<br />
            NO LLEGA.<br />
            <span className="text-[#6EE010]">LO CONSTRUIMOS.</span>
          </h1>
          <p className="text-sm md:text-base text-white/50 max-w-md leading-relaxed mb-10 tracking-wide">
            Soluciones SaaS de vanguardia. Desarrollo web, software, datos,<br className="hidden md:block" />
            SEO e inteligencia artificial — todo bajo un mismo techo.
          </p>
          <Link href="/servicios" className="bracket-btn text-[11px]">
            EXPLORAR SERVICIOS
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 md:left-16 z-20">
          <span className="scroll-label">SCROLL PARA EXPLORAR</span>
        </div>

        {/* Right corner label */}
        <div className="absolute bottom-8 right-6 md:right-16 z-20">
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/30">POR QUÉ BMV</span>
        </div>
      </section>

      {/* ── POR QUÉ BMV ──────────────────────────────────────── */}
      <section id="por-que-bmv" className="py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <p className="section-tag">POR QUÉ BMV</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
              MUÉVETE A LA<br />
              VELOCIDAD DEL<br />
              <span className="text-[#6EE010]">AVANCE.</span>
            </h2>
            <div className="line-sep" />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              No somos una agencia tradicional. Somos un equipo de ingenieros y
              estrategas digitales que combinan tecnología de punta con visión de negocio.
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {[
              { num: "01", title: "SIN TIEMPOS MUERTOS.", body: "Empezamos desde el día uno. Sin meses de reuniones, sin burocracia. Acción inmediata sobre lo que importa." },
              { num: "02", title: "CONSTRUIR. MEDIR. ITERAR.", body: "Metodología ágil real. Cada entrega es funcional y medible. Mejoramos con datos, no con suposiciones." },
              { num: "03", title: "TECNOLOGÍA QUE ESCALA.", body: "Nuestras soluciones crecen contigo. Desde MVP hasta arquitectura enterprise, estamos listos." },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 120}>
                <div className="border border-white/10 rounded-lg p-6 hover:border-[#6EE010]/40 transition-colors group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider">{item.title}</h3>
                    <span className="counter-label">{item.num}</span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS PREVIEW ────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="section-tag">SERVICIOS</p>
                <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                  QUÉ<br />HACEMOS
                </h2>
              </div>
              <Link href="/servicios" className="bracket-btn text-[10px] hidden md:inline-flex">
                VER TODO
              </Link>
            </div>
          </ScrollReveal>

          {/* Services list — sidebar + content style */}
          <div className="grid md:grid-cols-[200px_1fr] gap-10">
            {/* Sidebar index */}
            <nav className="hidden md:flex flex-col gap-3 pt-2">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/servicios/${s.id}`}
                  className="text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-[#6EE010] transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {s.title}
                </Link>
              ))}
            </nav>

            {/* Cards */}
            <div className="flex flex-col divide-y divide-white/5">
              {services.map((s, i) => (
                <ScrollReveal key={s.id} delay={i * 80}>
                  <Link
                    href={`/servicios/${s.id}`}
                    className="flex items-center justify-between py-7 group"
                  >
                    <div className="flex items-center gap-8">
                      <span className="counter-label w-8">{s.num}</span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide group-hover:text-[#6EE010] transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-white/40 text-xs mt-1 max-w-md hidden md:block">{s.short}</p>
                      </div>
                    </div>
                    <span className="text-white/20 group-hover:text-[#6EE010] transition-colors text-2xl">→</span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/servicios" className="bracket-btn text-[10px] pl-0">
              VER TODOS LOS SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTAFOLIO PREVIEW ───────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="section-tag">PORTAFOLIO</p>
                <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                  NUESTRO<br />TRABAJO
                </h2>
              </div>
              <Link href="/portafolio" className="bracket-btn text-[10px] hidden md:inline-flex">
                VER TODO
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Link href="/portafolio" className="group block">
              <div className="relative overflow-hidden rounded-xl bg-[#111] border border-white/5 hover:border-[#6EE010]/30 transition-colors">
                {/* Image placeholder */}
                <div className="relative aspect-[16/7] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-[#6EE010]/0 group-hover:bg-[#6EE010]/5 transition-all duration-500" />
                  <span className="text-white/20 text-6xl font-black uppercase tracking-widest">ETA AVIACIÓN</span>
                </div>

                <div className="p-8 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-wide mb-2">ETA AVIACIÓN</h3>
                    <div className="line-sep" />
                    <p className="text-white/40 text-xs max-w-lg leading-relaxed">
                      Diseño y desarrollo del sitio web corporativo para empresa líder en servicios de aviación.
                      Plataforma moderna, rápida y orientada a la conversión.
                    </p>
                  </div>
                  <span className="counter-label">01 / 01</span>
                </div>

                <div className="px-8 pb-8">
                  <span className="bracket-btn text-[10px] pl-0 text-[#6EE010] group-hover:text-white transition-colors">
                    VER PROYECTO
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5 text-center">
        <ScrollReveal>
          <p className="section-tag justify-center">EMPECEMOS</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8 max-w-3xl mx-auto">
            LISTO PARA<br />
            DAR EL SIGUIENTE<br />
            <span className="text-[#6EE010]">PASO?</span>
          </h2>
          <Link href="/contacto" className="bracket-btn text-[11px] inline-flex">
            TRABAJEMOS JUNTOS
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
