import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";

const features = [
  { title: "SISTEMAS A MEDIDA", body: "Software que encaja perfectamente con tus procesos de negocio. Sin compromisos, sin funciones innecesarias." },
  { title: "APIS & MICROSERVICIOS", body: "Arquitecturas distribuidas, APIs RESTful y GraphQL. Integraciones con cualquier plataforma del mercado." },
  { title: "AUTOMATIZACIÓN", body: "Eliminamos el trabajo repetitivo de tu equipo. Workflows automáticos, notificaciones inteligentes y más." },
  { title: "APLICACIONES MÓVILES", body: "Apps nativas y multiplataforma (iOS & Android) con React Native. Una sola base de código, dos mercados." },
  { title: "CLOUD & DEVOPS", body: "Infraestructura en la nube, CI/CD, contenedores Docker y Kubernetes. Tu software siempre disponible." },
  { title: "SEGURIDAD", body: "Auditorías de seguridad, autenticación robusta, cifrado de datos y cumplimiento de normativas (GDPR, ISO)." },
];

export const metadata = {
  title: "Desarrollo de Software a Medida en México | APIs & Microservicios",
  description: "Software empresarial a medida: APIs REST, microservicios, automatizaciones, apps móviles y soluciones cloud. Arquitecturas escalables con Node.js, Python y Go.",
  keywords: ["desarrollo software México", "software a medida", "API REST México", "microservicios", "automatización empresarial", "apps móviles México"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/servicios/desarrollo-software" },
  openGraph: {
    title: "Desarrollo de Software a Medida | BMV Digital México",
    description: "Software empresarial que escala con tu negocio. APIs, microservicios, automatizaciones y apps móviles con Node.js, Python y Go.",
    url: "https://www.bmvdigital.com.mx/servicios/desarrollo-software",
  },
};

export default function DesarrolloSoftwarePage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bmvdigital.com.mx" },
          { "@type": "ListItem", position: 2, name: "Servicios", item: "https://www.bmvdigital.com.mx/servicios" },
          { "@type": "ListItem", position: 3, name: "Desarrollo de Software", item: "https://www.bmvdigital.com.mx/servicios/desarrollo-software" },
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Desarrollo de Software a Medida",
        provider: { "@type": "Organization", name: "BMV Digital", url: "https://www.bmvdigital.com.mx" },
        description: "Software empresarial a medida: APIs REST, microservicios, automatizaciones, apps móviles y soluciones cloud con Node.js, Python y Go.",
        areaServed: { "@type": "Country", name: "Mexico" },
        serviceType: "Desarrollo de Software",
        url: "https://www.bmvdigital.com.mx/servicios/desarrollo-software",
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué diferencia hay entre desarrollo de software a medida y usar un software estándar?", acceptedAnswer: { "@type": "Answer", text: "El software a medida se construye específicamente para los procesos de tu empresa, sin funciones innecesarias ni limitaciones. Se adapta exactamente a tu flujo de trabajo y escala con tu crecimiento, a diferencia del software estándar que obliga a adaptar tus procesos a sus restricciones." } },
          { "@type": "Question", name: "¿Cuánto cuesta desarrollar software empresarial en México?", acceptedAnswer: { "@type": "Answer", text: "Depende de la complejidad: una automatización simple desde $20,000 MXN, un sistema de gestión empresarial entre $80,000 y $300,000 MXN, y plataformas enterprise con múltiples módulos pueden superar $500,000 MXN. Ofrecemos cotización sin costo." } },
          { "@type": "Question", name: "¿Qué tecnologías utilizan para desarrollo de software?", acceptedAnswer: { "@type": "Answer", text: "Node.js, Python y Go para backend. React Native para apps móviles. Docker y Kubernetes para contenedores. AWS y GCP para infraestructura cloud. Elegimos el stack más adecuado para cada tipo de proyecto." } },
          { "@type": "Question", name: "¿Pueden integrar el software con sistemas que ya tenemos?", acceptedAnswer: { "@type": "Answer", text: "Sí. Desarrollamos conectores e integraciones con cualquier sistema: ERPs, CRMs, pasarelas de pago, APIs de terceros y bases de datos legacy. Tu nueva solución se conecta con lo que ya tienes sin interrumpir tu operación." } },
          { "@type": "Question", name: "¿Qué es un MVP y cuánto tarda en desarrollarse?", acceptedAnswer: { "@type": "Answer", text: "Un MVP (Mínimo Producto Viable) es la versión inicial de tu producto con las funciones esenciales. Tarda entre 4 y 12 semanas dependiendo de la complejidad, y permite validar tu idea de negocio antes de invertir en el producto completo." } },
        ]
      }} />

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

      {/* FAQ Section — visible content for GEO */}
      <section className="py-24 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-tag">PREGUNTAS FRECUENTES</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-12">LO QUE MÁS<br />NOS PREGUNTAN.</h2>
          </ScrollReveal>
          <div className="flex flex-col divide-y divide-white/5">
            {[
              { q: "¿Qué diferencia hay entre software a medida y un software estándar?", a: "El software a medida se construye específicamente para los procesos de tu empresa, sin funciones innecesarias ni limitaciones. Se adapta a tu flujo de trabajo y escala con tu crecimiento." },
              { q: "¿Cuánto cuesta desarrollar software empresarial en México?", a: "Una automatización simple desde $20,000 MXN, un sistema de gestión entre $80,000 y $300,000 MXN, y plataformas enterprise pueden superar $500,000 MXN. Ofrecemos cotización sin costo." },
              { q: "¿Qué tecnologías utilizan para desarrollo de software?", a: "Node.js, Python y Go para backend. React Native para apps móviles. Docker y Kubernetes para contenedores. AWS y GCP para infraestructura cloud." },
              { q: "¿Pueden integrar el software con sistemas que ya tenemos?", a: "Sí. Desarrollamos conectores e integraciones con ERPs, CRMs, pasarelas de pago, APIs de terceros y bases de datos legacy. Sin interrumpir tu operación actual." },
              { q: "¿Qué es un MVP y cuánto tarda en desarrollarse?", a: "Un MVP (Mínimo Producto Viable) es la versión inicial con las funciones esenciales. Tarda entre 4 y 12 semanas según la complejidad, y permite validar tu idea antes de invertir en el producto completo." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <details className="py-6 group cursor-pointer">
                  <summary className="flex items-center justify-between text-sm font-bold uppercase tracking-wide list-none">
                    {item.q}
                    <span className="text-[#9B59B6] text-xl group-open:rotate-45 transition-transform ml-4 flex-shrink-0">+</span>
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
            <h2 className="text-4xl md:text-5xl font-black uppercase">¿TIENES UNA IDEA<br />DE PRODUCTO?</h2>
          </ScrollReveal>
          <Link href="/contacto" className="bracket-btn text-[10px]">CONSTRUYÁMOSLA</Link>
        </div>
      </section>
    </>
  );
}
