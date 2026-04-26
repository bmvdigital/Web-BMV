"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleTunnel({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth || window.innerWidth;
    const H = mount.clientHeight || 700;

    const scene = new THREE.Scene();
    // Wide FOV creates the dramatic perspective that makes the tunnel walls converge
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 200);
    camera.position.set(0, 0, 0);
    camera.lookAt(0, 0, -50);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Tunnel geometry parameters
    const DEPTH = 100;       // tunnel length along Z
    const RADIUS = 22;       // cylinder radius
    const RING_COUNT = 60;   // rings evenly spaced along Z
    const PER_RING = 90;     // particles per ring (evenly angled + jitter)
    const EXTRA = 1400;      // scattered interior particles
    const NEAR_CUTOFF = 5;   // z at which particles loop back to the far end
    const LOOP_RANGE = DEPTH + NEAR_CUTOFF;

    const totalCount = RING_COUNT * PER_RING + EXTRA;
    const xVals = new Float32Array(totalCount);
    const yVals = new Float32Array(totalCount);
    const zVals = new Float32Array(totalCount);

    let idx = 0;

    // Tunnel wall rings — evenly spaced angles + small jitter gives the "lattice" look
    for (let r = 0; r < RING_COUNT; r++) {
      for (let p = 0; p < PER_RING; p++) {
        const base = (p / PER_RING) * Math.PI * 2;
        const angle = base + (Math.random() - 0.5) * 0.15;
        const rad = RADIUS + (Math.random() - 0.5) * 3.5;
        xVals[idx] = Math.cos(angle) * rad;
        yVals[idx] = Math.sin(angle) * rad;
        zVals[idx] = -Math.random() * DEPTH;
        idx++;
      }
    }

    // Interior scattered particles — biased toward the walls for depth
    for (let s = 0; s < EXTRA; s++) {
      const angle = Math.random() * Math.PI * 2;
      // sqrt bias: more particles near radius, fewer at center
      const rad = RADIUS * Math.sqrt(0.1 + Math.random() * 0.9);
      xVals[idx] = Math.cos(angle) * rad;
      yVals[idx] = Math.sin(angle) * rad;
      zVals[idx] = -Math.random() * DEPTH;
      idx++;
    }

    const positions = new Float32Array(totalCount * 3);
    for (let i = 0; i < totalCount; i++) {
      positions[i * 3] = xVals[i];
      positions[i * 3 + 1] = yVals[i];
      positions[i * 3 + 2] = zVals[i];
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.17,
      transparent: true,
      opacity: 0.58,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

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
    const FLY_SPEED = 10; // units/second — how fast you fly through

    const pos = geometry.attributes.position.array as Float32Array;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Advance every particle toward camera, loop seamlessly at near cutoff
      for (let i = 0; i < totalCount; i++) {
        zVals[i] += delta * FLY_SPEED;
        if (zVals[i] > NEAR_CUTOFF) zVals[i] -= LOOP_RANGE;
        pos[i * 3 + 2] = zVals[i];
      }
      geometry.attributes.position.needsUpdate = true;

      // Slow tunnel rotation around its own axis for a breathing, alive feel
      points.rotation.z += delta * 0.028;

      // Subtle camera drift from mouse — moves center of view slightly
      camera.position.x += (mouse.x * 1.4 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.9 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, -50);

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
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`w-full h-full ${className}`} />;
}
