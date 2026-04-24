import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactoClient from "@/components/ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Solicita tu Proyecto con BMV Digital México",
  description: "Contáctanos para tu proyecto de desarrollo web, software, análisis de datos, SEO, GEO o cursos de IA. Respondemos en menos de 24 horas con propuesta inicial sin costo.",
  keywords: ["contacto BMV Digital", "solicitar cotización desarrollo web", "agencia digital México contacto"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/contacto" },
  openGraph: {
    title: "Contacto | BMV Digital México",
    description: "Cuéntanos tu proyecto. Respondemos en menos de 24 horas con una propuesta inicial sin costo ni compromiso.",
    url: "https://www.bmvdigital.com.mx/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://www.bmvdigital.com.mx/contacto",
        name: "Contacto BMV Digital",
        description: "Página de contacto de BMV Digital. Solicita una cotización o más información sobre nuestros servicios de tecnología.",
        url: "https://www.bmvdigital.com.mx/contacto",
        mainEntity: {
          "@type": "Organization",
          name: "BMV Digital",
          email: "contacto@bmvdigital.com.mx",
          url: "https://www.bmvdigital.com.mx",
          areaServed: { "@type": "Country", name: "Mexico" },
        }
      }} />
      <ContactoClient />
    </>
  );
}
