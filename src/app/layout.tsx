import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const BASE_URL = "https://www.bmvdigital.com.mx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BMV Digital | Desarrollo Web, Software, SEO & IA en México",
    template: "%s | BMV Digital",
  },
  description:
    "Empresa mexicana de tecnología SaaS. Desarrollo web, análisis de datos, software a medida, auditoría SEO, optimización GEO para buscadores con IA y cursos de inteligencia artificial.",
  keywords: [
    "desarrollo web México",
    "agencia digital México",
    "software a medida",
    "análisis de datos",
    "auditoría SEO México",
    "GEO optimización IA",
    "cursos inteligencia artificial",
    "desarrollo software empresarial",
    "BMV Digital",
    "SaaS México",
  ],
  authors: [{ name: "BMV Digital", url: BASE_URL }],
  creator: "BMV Digital",
  publisher: "BMV Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: "BMV Digital",
    title: "BMV Digital | Desarrollo Web, Software, SEO & IA en México",
    description:
      "Soluciones tecnológicas de vanguardia: desarrollo web, análisis de datos, software, auditoría SEO, GEO para buscadores con IA y formación en inteligencia artificial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BMV Digital — Soluciones SaaS & Tecnología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMV Digital | Tecnología SaaS México",
    description:
      "Desarrollo web, software, análisis de datos, SEO, GEO e IA. Soluciones tecnológicas para empresas mexicanas y globales.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "",  // Add Google Search Console verification token here
  },
};

// Global Organization + WebSite schemas (GEO: entities LLMs index for brand authority)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "BMV Digital",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 200,
    height: 60,
  },
  description:
    "BMV Digital es una empresa mexicana especializada en servicios SaaS: desarrollo web profesional, análisis de datos empresariales, desarrollo de software a medida, auditoría SEO, optimización GEO para buscadores con inteligencia artificial (ChatGPT, Perplexity, Gemini) y cursos prácticos de inteligencia artificial.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
    addressLocality: "México",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "contacto@bmvdigital.com.mx",
      contactType: "customer service",
      availableLanguage: ["Spanish"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/bmvdigital",
    "https://www.instagram.com/bmvdigital",
    "https://www.facebook.com/bmvdigital",
  ],
  knowsAbout: [
    "Desarrollo Web",
    "Next.js",
    "React",
    "Análisis de Datos",
    "Machine Learning",
    "Desarrollo de Software",
    "SEO",
    "GEO Generative Engine Optimization",
    "Inteligencia Artificial",
    "LangChain",
    "ChatGPT",
    "Prompt Engineering",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios BMV Digital",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo Web" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Análisis de Datos" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo de Software" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auditoría SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auditoría GEO para Buscadores con IA" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cursos de Inteligencia Artificial" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "BMV Digital",
  description: "Soluciones SaaS y tecnología para empresas: desarrollo web, software, datos, SEO, GEO e IA.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "es-MX",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/servicios?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
