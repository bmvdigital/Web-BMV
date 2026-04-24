"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticleWaveProps {
  className?: string;
}

export default function ParticleWave({ className = "" }: ParticleWaveProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.set(0, 35, 70);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Grid particle wave
    const COLS = 90;
    const ROWS = 60;
    const SPACING = 2.2;
    const count = COLS * ROWS;

    const positions = new Float32Array(count * 3);
    const baseY = new Float32Array(count);

    let idx = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = (c - COLS / 2) * SPACING;
        const z = (r - ROWS / 2) * SPACING;
        positions[idx * 3 + 0] = x;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = z;
        baseY[idx] = 0;
        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Size attribute for varying particle sizes
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      sizes[i] = Math.random() * 1.5 + 0.5;
    }
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.3,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse influence
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize handler
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const pos = geometry.attributes.position.array as Float32Array;
      idx = 0;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = pos[idx * 3 + 0];
          const z = pos[idx * 3 + 2];
          // Wave function combining multiple sine waves
          const wave =
            Math.sin(x * 0.15 + t * 0.6) * 4 +
            Math.cos(z * 0.12 + t * 0.5) * 3 +
            Math.sin((x + z) * 0.08 + t * 0.4) * 2;
          pos[idx * 3 + 1] = wave;
          idx++;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // Subtle camera drift based on mouse
      camera.position.x += (mouse.x * 8 - camera.position.x) * 0.02;
      camera.position.y += (35 + mouse.y * 5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
}
