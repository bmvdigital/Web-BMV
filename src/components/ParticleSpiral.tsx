"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleSpiral({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 500);
    camera.position.set(0, 0, 80);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Spiral / shell formation
    const COUNT = 4000;
    const positions = new Float32Array(COUNT * 3);
    const opacities = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const t = i / COUNT;
      const turns = 6;
      const angle = t * Math.PI * 2 * turns;
      const radius = t * 30;
      const spread = (Math.random() - 0.5) * 3;

      positions[i * 3 + 0] = Math.cos(angle) * (radius + spread);
      positions[i * 3 + 1] = (t - 0.5) * 60 + (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = Math.sin(angle) * (radius + spread);
      opacities[i] = Math.random() * 0.7 + 0.3;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.4,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    });

    const spiral = new THREE.Points(geometry, material);
    scene.add(spiral);

    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      spiral.rotation.y = t * 0.12;
      spiral.rotation.x = Math.sin(t * 0.08) * 0.15;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
}
