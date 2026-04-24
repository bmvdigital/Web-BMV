"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#por-que-bmv", label: "POR QUÉ BMV" },
  { href: "/servicios", label: "SERVICIOS" },
  { href: "/portafolio", label: "PORTAFOLIO" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <BmvLogo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href.split("/#")[0]))
                    ? "text-[#6EE010]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contacto" className="hidden md:block bracket-btn text-[10px]">
          TRABAJEMOS JUNTOS
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 border-t border-white/5" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col bg-[#0a0a0a] px-6 py-4 gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-[#6EE010] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contacto" className="bracket-btn text-[10px] pl-0">
              TRABAJEMOS JUNTOS
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

function BmvLogo() {
  return (
    <svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orbital rings */}
      <g transform="translate(16,16)">
        {/* Outer ring - tilted */}
        <ellipse cx="0" cy="0" rx="13" ry="5" stroke="#6EE010" strokeWidth="2" fill="none"
          transform="rotate(-35)" />
        {/* Inner ring - tilted other way */}
        <ellipse cx="0" cy="0" rx="13" ry="5" stroke="white" strokeWidth="1.5" fill="none"
          transform="rotate(35)" />
        {/* Center dot */}
        <circle cx="0" cy="0" r="2.5" fill="#6EE010" />
      </g>
      {/* BMV text */}
      <text x="34" y="20" fill="white" fontSize="16" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">
        BMV
      </text>
      {/* DIGITAL text */}
      <text x="34" y="32" fill="white" fontSize="8" fontWeight="400" fontFamily="sans-serif" letterSpacing="4">
        DIGITAL
      </text>
    </svg>
  );
}
