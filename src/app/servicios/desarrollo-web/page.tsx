import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

const features = [
  { title: "DISEÑO UI/UX", body: "Interfaces que convierten visitantes en clientes. Diseño centrado en el usuario, pruebas A/B y optimización continua." },
  { title: "DESARROLLO FRONTEND", body: "React, Next.js y tecnologías modernas. Sitios rápidos, accesibles y listos para SEO desde el primer día." },
  { title: "BACKEND & APIS", body: "Arquitecturas robustas, bases de datos optimizadas y APIs que resisten el crecimiento de tu negocio." },
  { title: "E-COMMERCE", body: "Tiendas online con experiencias de compra fluidas, pagos seguros e integración con tus sistemas existentes." },
  { title: "WEB APPS & SAAS", body: "Plataformas SaaS completas con autenticación, roles de usuario, facturación y paneles de control." },
  { title: "MANTENIMIENTO", body: "Tu sitio siempre actualizado, seguro y funcionando. Soporte técnico continuo y mejoras periódicas." },
  { title: "AUDITORÍA GEO", body: "Optimizamos tu sitio para que los buscadores con IA (ChatGPT, Perplexity, Gemini) te recomienden. La próxima frontera del SEO." },
];

const process = [
  { num: "01", title: "DISCOVERY", body: "Analizamos tu negocio, tu mercado y tus objetivos para definir la estrategia digital correcta." },
  { num: "02", title: "DISEÑO", body: "Wireframes, prototipos interactivos y diseño visual. Tú apruebas antes de escribir una línea de código." },
  { num: "03", title: "DESARROLLO", body: "Construcción ágil con entregas incrementales. Ves el progreso real desde la primera semana." },
  { num: "04", title: "LANZAMIENTO", body: "Deploy, pruebas de rendimiento, SEO técnico y monitoreo. Tu sitio sale al mundo en óptimas condiciones." },
];

export const metadata = {
  title: "Desarrollo Web Profesional en México | Next.js & React",
  description: "Diseño y desarrollo web profesional en México. Sitios web, e-commerce y aplicaciones SaaS con Next.js, React y TypeScript. Alto rendimiento, SEO técnico incluido.",
  keywords: ["desarrollo web México", "diseño web profesional", "Next.js México", "React México", "e-commerce México", "web apps SaaS"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/servicios/desarrollo-web" },
  openGraph: {
    title: "Desarrollo Web Profesional | BMV Digital México",
    description: "Sitios web, e-commerce y aplicaciones web de alto rendimiento. Next.js, React, TypeScript. SEO técnico incluido desde el día uno.",
    url: "https://www.bmvdigital.com.mx/servicios/desarrollo-web",
  },
};

export default function DesarrolloWebPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bmvdigital.com.mx" },
          { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.bmvdigital.com.mx/servicios" },
          { "@type": "ListItem", position: 3, name: "Desarrollo Web", item: "https://www.bmvdigital.com.mx/servicios/desarrollo-web" },
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Desarrollo Web Profesional",
        provider: { "@type": "Organization", name: "BMV Digital", url: "https://www.bmvdigital.com.mx" },
        description: "Diseño y desarrollo de sitios web, aplicaciones web y plataformas SaaS con Next.js, React y TypeScript. Incluye SEO técnico, diseño UI/UX y optimización de rendimiento.",
        areaServed: { "@type": "Country", name: "Mexico" },
        serviceType: "Desarrollo Web",
        url: "https://www.bmvdigital.com.mx/servicios/desarrollo-web",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cuánto cuesta desarrollar una página web en México?", acceptedAnswer: { "@type": "Answer", text: "El costo de una página web en México varía según el tipo de proyecto. Una landing page puede costar desde $15,000 MXN, un sitio corporativo entre $30,000 y $80,000 MXN, y una plataforma SaaS o e-commerce desde $80,000 MXN en adelante. En BMV Digital ofrecemos presupuesto sin costo." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda el desarrollo de un sitio web?", acceptedAnswer: { "@type": "Answer", text: "Una landing page tarda entre 1 y 2 semanas. Un sitio corporativo completo entre 3 y 6 semanas. Una aplicación web o plataforma SaaS puede tomar entre 2 y 6 meses dependiendo de la complejidad." } },
          { "@type": "Question", name: "¿Qué tecnologías utilizan para el desarrollo web?", acceptedAnswer: { "@type": "Answer", text: "Utilizamos Next.js y React para el frontend, Node.js o Python para el backend, y bases de datos como PostgreSQL o MongoDB. Todos nuestros proyectos incluyen TypeScript para mayor seguridad del código y son desplegados en plataformas como Vercel o AWS." } },
          { "@type": "Question", name: "¿El desarrollo web incluye SEO?", acceptedAnswer: { "@type": "Answer", text: "Sí. Todos nuestros proyectos de desarrollo web incluyen SEO técnico desde el primer día: velocidad de carga, Core Web Vitals, metadata optimizada, datos estructurados (Schema.org), sitemap XML y robots.txt configurados correctamente." } },
          { "@type": "Question", name: "¿Pueden desarrollar tiendas en línea o e-commerce?", acceptedAnswer: { "@type": "Answer", text: "Sí. Desarrollamos tiendas en línea completas con carrito de compras, pasarelas de pago (Stripe, PayPal, MercadoPago), gestión de inventario y paneles de administración. También integramos con plataformas como Shopify según las necesidades del proyecto." } },
        ]
      }} />

      {/* Hero */}
      <section className="relative pt-28 md:pt-40 pb-16 md:pb-24 px-6 md:px-16 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-end">
          <div>
            <p className="section-tag">SERVICIOS / DESARROLLO WEB</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-none tracking-tight">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
          {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Figma", "GEO / LLM SEO"].map((tech) => (
            <span key={tech} className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 border border-white/10 rounded-full text-white/40 hover:border-[#6EE010]/40 hover:text-[#6EE010] transition-colors">
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
              { q: "¿Cuánto cuesta desarrollar una página web en México?", a: "El costo varía según el proyecto: una landing page desde $15,000 MXN, un sitio corporativo entre $30,000 y $80,000 MXN, y una plataforma SaaS desde $80,000 MXN. Ofrecemos presupuesto sin costo ni compromiso." },
              { q: "¿Cuánto tiempo tarda el desarrollo?", a: "Una landing page tarda 1-2 semanas. Un sitio corporativo 3-6 semanas. Una aplicación web o SaaS entre 2 y 6 meses según complejidad." },
              { q: "¿Qué tecnologías utilizan?", a: "Next.js, React y TypeScript en el frontend. Node.js o Python en el backend. PostgreSQL o MongoDB para bases de datos. Desplegamos en Vercel o AWS." },
              { q: "¿El desarrollo incluye SEO?", a: "Sí. Todos nuestros proyectos incluyen SEO técnico: velocidad, Core Web Vitals, metadata, Schema.org, sitemap XML y robots.txt correctamente configurados." },
              { q: "¿Desarrollan e-commerce o tiendas en línea?", a: "Sí. Tiendas completas con carrito, pagos (Stripe, MercadoPago), inventario y panel de administración. También integramos Shopify si es la mejor opción para tu caso." },
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

      {/* CTA */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase">
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
