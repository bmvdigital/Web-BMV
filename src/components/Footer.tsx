"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const ParticleSpiral = dynamic(() => import("./ParticleSpiral"), { ssr: false });

const navLinks = [
  { href: "/#por-que-bmv", label: "POR QUÉ BMV" },
  { href: "/servicios", label: "SERVICIOS" },
  { href: "/portafolio", label: "PORTAFOLIO" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden">
      {/* CTA strip */}
      <div className="grid md:grid-cols-2 min-h-[420px]">
        {/* Left: dark + spiral */}
        <div className="relative bg-[#0a0a0a] flex items-center justify-center overflow-hidden min-h-[280px]">
          <div className="absolute inset-0">
            <ParticleSpiral />
          </div>
          <div className="relative z-10 text-center px-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">Desde México para el mundo</p>
            <p className="text-2xl font-bold text-white">BMV Digital</p>
          </div>
        </div>

        {/* Right: green panel */}
        <div className="bg-[#6EE010] flex flex-col justify-between p-10 md:p-14">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-black/60 mb-2">IMPULSAMOS TU NEGOCIO.</p>
            <p className="text-[11px] tracking-[0.15em] uppercase text-black/70 font-medium leading-relaxed">
              TECNOLOGÍA SIN LÍMITES.<br />RESULTADOS QUE HABLAN.<br />ESCRÍBENOS Y CONSTRUYAMOS.
            </p>
          </div>

          <Link
            href="/contacto"
            className="bracket-btn bracket-btn-green inline-flex mt-8 text-[10px] pl-0"
          >
            CONTÁCTANOS
          </Link>

          {/* Decorative bars (inspired by WQF orange panel graphic) */}
          <div className="flex flex-col gap-3 items-end mt-8">
            {[80, 60, 40].map((w, i) => (
              <div
                key={i}
                className="h-8 bg-black/15 rounded-full"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-[#6EE010] border-t border-black/10">
        <div className="grid md:grid-cols-2">
          {/* Nav links */}
          <div className="px-10 md:px-14 py-10">
            <ul className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xl md:text-2xl font-bold text-black uppercase tracking-wider hover:opacity-60 transition-opacity"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right col */}
          <div className="px-10 md:px-14 py-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-black/50 mb-1">CONTACTO</p>
              <a
                href="mailto:contacto@bmvdigital.com.mx"
                className="text-sm font-medium text-black hover:opacity-60 transition-opacity"
              >
                contacto@bmvdigital.com.mx
              </a>
            </div>

            <div className="mt-8">
              <p className="text-[10px] tracking-[0.2em] uppercase text-black/50 mb-3">SÍGUENOS</p>
              <div className="flex gap-6">
                {["LinkedIn", "Instagram", "Facebook"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-[10px] tracking-[0.15em] uppercase text-black font-medium hover:opacity-50 transition-opacity"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <p className="text-[10px] text-black/40 mt-10">
              COPYRIGHT © {year} BMV DIGITAL. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
