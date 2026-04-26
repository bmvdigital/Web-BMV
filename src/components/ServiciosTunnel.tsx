"use client";

import dynamic from "next/dynamic";

// Dynamic import disables SSR so Three.js (which needs window) only runs on client
const ParticleTunnel = dynamic(() => import("./ParticleTunnel"), { ssr: false });

export default function ServiciosTunnel() {
  return <ParticleTunnel className="w-full h-full" />;
}
