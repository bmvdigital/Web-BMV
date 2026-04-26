import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PortafolioClient from "@/components/PortafolioClient";

export const metadata: Metadata = {
  title: "Portafolio de Proyectos Web en México | BMV Digital",
  description: "Proyectos de desarrollo web, software y tecnología realizados por BMV Digital. Casos de éxito reales: diseño, desarrollo y resultados medibles para empresas mexicanas.",
  keywords: ["portafolio desarrollo web México", "casos de éxito agencia digital", "proyectos web México", "ETA Aviación"],
  alternates: { canonical: "https://www.bmvdigital.com.mx/portafolio" },
  openGraph: {
    title: "Portafolio | BMV Digital México",
    description: "Proyectos reales, resultados reales. Casos de éxito de desarrollo web y tecnología para empresas mexicanas.",
    url: "https://www.bmvdigital.com.mx/portafolio",
  },
};

export default function PortafolioPage() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.bmvdigital.com.mx" },
          { "@type": "ListItem", position: 2, name: "Portafolio", item: "https://www.bmvdigital.com.mx/portafolio" },
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Portafolio BMV Digital",
        description: "Proyectos de desarrollo web y tecnología realizados por BMV Digital para empresas mexicanas.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "CreativeWork",
              name: "ETA Aviación — Sitio Web Corporativo",
              url: "https://etaaviacion.com/",
              description: "Diseño y desarrollo del sitio web corporativo para empresa líder en servicios de aviación en México.",
              creator: { "@type": "Organization", name: "BMV Digital" },
            }
          }
        ]
      }} />
      <PortafolioClient />
    </>
  );
}
