import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BMV Digital | Soluciones SaaS & Tecnología",
  description:
    "Desarrollo web, análisis de datos, software a medida, auditoría SEO y cursos de inteligencia artificial para impulsar tu negocio.",
  keywords: "desarrollo web, SaaS, análisis de datos, SEO, inteligencia artificial, software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
