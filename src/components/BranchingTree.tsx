"use client";

import { useEffect, useRef } from "react";

interface TipDot { ox: number; oy: number; size: number; alpha: number; }
interface Branch {
  x0: number; y0: number; angle: number; length: number; thickness: number;
  depth: number; growthProgress: number; growthSpeed: number;
  children: Branch[]; spawned: boolean;
  swayPhase: number; swayAmp: number; curvature: number;
  colorShift: number; hueShift: number; parent: Branch | null;
  strokeSeeds: number[]; tipDots: TipDot[];
}
interface Particle {
  x: number; y: number; vx: number; vy: number;
  size: number; alpha: number; phase: number; freq: number;
  life: number; lifeSpeed: number;
}

export default function BranchingTree({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current as HTMLDivElement;
    if (!mount) return;

    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;";
    mount.style.position = "relative";
    mount.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;

    let W = 0, H = 0;

    // Utilities
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const rand = (lo: number, hi: number) => Math.random() * (hi - lo) + lo;
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    const smoothstep = (a: number, b: number, t: number) => {
      t = Math.max(0, Math.min(1, (t - a) / (b - a)));
      return t * t * (3 - 2 * t);
    };

    // Config
    let MAX_DEPTH = 10;
    const GROWTH_SPEED_BASE = 0.006;
    const HOLD_DURATION = 400;
    const FADE_DURATION = 180;
    const WAIT_DURATION = 80;

    // Soft particle sprite
    let particleSprite: HTMLCanvasElement;
    function initParticleSprite() {
      particleSprite = document.createElement("canvas");
      particleSprite.width = 32; particleSprite.height = 32;
      const pctx = particleSprite.getContext("2d")!;
      const g = pctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, "rgba(230, 200, 155, 1)");
      g.addColorStop(0.3, "rgba(215, 175, 130, 0.5)");
      g.addColorStop(1, "rgba(200, 150, 100, 0)");
      pctx.fillStyle = g;
      pctx.fillRect(0, 0, 32, 32);
    }

    function resize() {
      W = canvas.width = mount.clientWidth;
      H = canvas.height = mount.clientHeight;
      initParticleSprite();
    }
    window.addEventListener("resize", resize);
    resize();

    // Particles
    const PARTICLE_COUNT = 50;
    let particles: Particle[] = [];

    function createParticle(fullRandom: boolean): Particle {
      return {
        x: rand(W * 0.15, W * 0.85),
        y: fullRandom ? rand(H * 0.1, H * 0.9) : rand(H * 0.5, H),
        vx: rand(-0.12, 0.12),
        vy: rand(-0.35, -0.06),
        size: rand(0.6, 2.2),
        alpha: rand(0.04, 0.2),
        phase: rand(0, Math.PI * 2),
        freq: rand(0.0004, 0.0015),
        life: fullRandom ? rand(0, 1) : 0,
        lifeSpeed: rand(0.0006, 0.0025),
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(createParticle(true));
    }

    function updateParticles(time: number) {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time * p.freq + p.phase) * 0.25;
        p.y += p.vy;
        p.life += p.lifeSpeed;
        if (p.life > 1 || p.y < -10 || p.x < -10 || p.x > W + 10) {
          particles[i] = createParticle(false);
        }
      }
    }

    function drawParticles(drawCtx: CanvasRenderingContext2D, globalAlpha: number) {
      for (const p of particles) {
        const lifeFade = p.life < 0.15 ? p.life / 0.15
                       : p.life > 0.8 ? (1 - p.life) / 0.2
                       : 1;
        const a = p.alpha * lifeFade * globalAlpha;
        if (a < 0.004) continue;
        const s = p.size * 3;
        drawCtx.globalAlpha = a;
        drawCtx.drawImage(particleSprite, p.x - s, p.y - s, s * 2, s * 2);
      }
      drawCtx.globalAlpha = 1;
    }

    // Warm amber → golden palette; CSS filter hue-rotates it to lime green
    const PALETTE = [
      { r: 78,  g: 45,  b: 14  },
      { r: 125, g: 76,  b: 28  },
      { r: 172, g: 118, b: 50  },
      { r: 205, g: 158, b: 82  },
      { r: 218, g: 182, b: 108 },
      { r: 215, g: 195, b: 135 },
    ];

    function colorForDepth(depth: number, hueShift: number) {
      const t = depth / MAX_DEPTH;
      const idx = t * (PALETTE.length - 1);
      const i0 = Math.floor(idx);
      const i1 = Math.min(PALETTE.length - 1, i0 + 1);
      const f = idx - i0;
      let r = lerp(PALETTE[i0].r, PALETTE[i1].r, f);
      let g = lerp(PALETTE[i0].g, PALETTE[i1].g, f);
      let b = lerp(PALETTE[i0].b, PALETTE[i1].b, f);
      if (hueShift !== undefined) {
        const strength = t * t * 22;
        r += hueShift * strength *  1.0;
        g += hueShift * strength * -0.5;
        b += hueShift * strength * -0.15;
      }
      return { r, g, b };
    }

    // Branch state
    let allBranches: Branch[] = [];
    let treeAlpha = 1;
    let treeState: "growing" | "holding" | "fading" | "waiting" = "growing";
    let holdTimer = 0, fadeTimer = 0, waitTimer = 0;

    function createTree() {
      allBranches = [];
      const trunkLen   = H * rand(0.23, 0.28);
      const trunkThick = Math.max(8, W * 0.015);
      const trunkAngle = -Math.PI / 2 + rand(-0.05, 0.05);
      const baseY      = H + trunkThick * 0.5;

      allBranches.push({
        x0: W / 2 + rand(-W * 0.03, W * 0.03),
        y0: baseY,
        angle: trunkAngle,
        length: trunkLen,
        thickness: trunkThick,
        depth: 0,
        growthProgress: 0,
        growthSpeed: GROWTH_SPEED_BASE * rand(0.9, 1.1),
        children: [],
        spawned: false,
        swayPhase: rand(0, Math.PI * 2),
        swayAmp: 0.0008,
        curvature: rand(-0.015, 0.015),
        colorShift: rand(-8, 8),
        hueShift: 0,
        parent: null,
        strokeSeeds: [rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1)],
        tipDots: [],
      });

      treeState = "growing";
      holdTimer = fadeTimer = waitTimer = 0;
      treeAlpha = 1;
      initParticles();
    }

    function spawnChildren(parent: Branch) {
      if (parent.depth >= MAX_DEPTH) return;

      let numChildren: number;
      if (parent.depth < 1)      numChildren = 2 + (Math.random() < 0.35 ? 1 : 0);
      else if (parent.depth < 3) numChildren = 2 + (Math.random() < 0.40 ? 1 : 0);
      else                       numChildren = Math.random() < 0.25 ? 3 : 2;

      const pruneChance = parent.depth <= 3 ? 0
                        : parent.depth <= 5 ? 0.10
                        : parent.depth <= 7 ? 0.22
                        : 0.35;
      if (Math.random() < pruneChance) numChildren = Math.max(1, numChildren - 1);

      const spread = parent.depth < 2 ? rand(0.32, 0.48) : rand(0.38, 0.6);

      for (let i = 0; i < numChildren; i++) {
        let angleOffset: number;
        if (numChildren === 1) {
          angleOffset = rand(-0.25, 0.25);
        } else if (numChildren === 2) {
          angleOffset = (i === 0 ? -1 : 1) * rand(0.18, spread);
        } else {
          angleOffset = (i - 1) * spread + rand(-0.1, 0.1);
        }

        const childDepth = parent.depth + 1;
        const ep = getBranchEnd(parent, 1, 0);

        const tipDots: TipDot[] = [];
        if (childDepth >= MAX_DEPTH) {
          const count = Math.random() < 0.4 ? 2 : 1;
          for (let d = 0; d < count; d++) {
            tipDots.push({ ox: rand(-2,2), oy: rand(-2,2), size: rand(0.8,1.6), alpha: rand(0.08,0.2) });
          }
        }

        const child: Branch = {
          x0: ep.x, y0: ep.y,
          angle: parent.angle + angleOffset,
          length:    parent.length    * rand(0.58, 0.76),
          thickness: Math.max(0.4, parent.thickness * rand(0.48, 0.67)),
          depth: childDepth,
          growthProgress: 0,
          growthSpeed: GROWTH_SPEED_BASE * rand(1.0, 1.5) * (1 + parent.depth * 0.1),
          children: [],
          spawned: false,
          swayPhase: rand(0, Math.PI * 2),
          swayAmp: 0.0018 * (parent.depth + 1) * rand(0.7, 1.3),
          curvature: rand(-0.04, 0.04) * (1 + parent.depth * 0.12),
          colorShift: rand(-12, 12),
          hueShift: Math.max(-1, Math.min(1, parent.hueShift + rand(-0.35, 0.35))),
          parent,
          strokeSeeds: [rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1)],
          tipDots,
        };

        parent.children.push(child);
        allBranches.push(child);
      }
    }

    // Interaction state
    let mouseActive = false;
    let windForce   = 0;
    let shakeAmount = 0;

    function getSwayAngle(branch: Branch, time: number): number {
      let total = 0;
      let b: Branch | null = branch;
      let depth = 0;
      while (b) {
        const a = b.swayAmp;
        total += Math.sin(time * 0.0005  + b.swayPhase)        * a;
        total += Math.sin(time * 0.0003  + b.swayPhase * 1.7)  * a * 0.6;
        total += Math.sin(time * 0.00012 + b.swayPhase * 0.4)  * a * 0.35;
        depth++;
        b = b.parent;
      }
      if (mouseActive)      total += windForce * 0.04 * depth;
      if (shakeAmount > 0.01) total += Math.sin(time * 0.015 + branch.swayPhase * 3) * shakeAmount * 0.06 * depth;
      return total;
    }

    function getBranchEnd(branch: Branch, progress: number, time: number) {
      const sway    = getSwayAngle(branch, time);
      const angle   = branch.angle + sway;
      const len     = branch.length * progress;
      const perpX   = -Math.sin(angle);
      const perpY   =  Math.cos(angle);
      const curveOff = branch.curvature * len;
      return {
        x: branch.x0 + Math.cos(angle) * len + perpX * curveOff,
        y: branch.y0 + Math.sin(angle) * len + perpY * curveOff,
      };
    }

    function recalcPositions(time: number) {
      for (const b of allBranches) {
        if (b.parent) {
          const pe = getBranchEnd(b.parent, 1, time);
          b.x0 = pe.x;
          b.y0 = pe.y;
        }
      }
    }

    function updateBranches(time: number): boolean {
      let allDone = true;
      for (const b of allBranches) {
        if (b.growthProgress < 1) {
          b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed);
          allDone = false;
        }
        if (b.growthProgress >= 0.65 && !b.spawned) {
          b.spawned = true;
          spawnChildren(b);
        }
      }
      return allDone;
    }

    function drawBranch(drawCtx: CanvasRenderingContext2D, b: Branch, time: number) {
      if (b.growthProgress <= 0) return;

      const sway     = getSwayAngle(b, time);
      const angle    = b.angle + sway;
      const progress = easeOutCubic(b.growthProgress);
      const len      = b.length * progress;

      const x1 = b.x0, y1 = b.y0;
      const perpX = -Math.sin(angle), perpY = Math.cos(angle);
      const curveOff = b.curvature * len * 1.4;

      const cpx1 = x1 + Math.cos(angle) * len * 0.33 + perpX * curveOff * 0.4;
      const cpy1 = y1 + Math.sin(angle) * len * 0.33 + perpY * curveOff * 0.4;
      const cpx2 = x1 + Math.cos(angle) * len * 0.66 + perpX * curveOff * 0.85;
      const cpy2 = y1 + Math.sin(angle) * len * 0.66 + perpY * curveOff * 0.85;
      const x2   = x1 + Math.cos(angle) * len + perpX * curveOff * 0.7;
      const y2   = y1 + Math.sin(angle) * len + perpY * curveOff * 0.7;

      const col    = colorForDepth(b.depth, b.hueShift);
      const depthT = b.depth / MAX_DEPTH;
      const baseAlpha = b.depth <= 1 ? 0.95
                      : b.depth <= 5 ? lerp(0.92, 0.7, depthT)
                      : lerp(0.7, 0.35, (depthT - 0.5) * 2);

      const strokeCount = b.depth < 3 ? 5 : b.depth < 6 ? 3 : 2;
      const thickBase   = b.thickness;
      const thickTaper  = lerp(thickBase, thickBase * 0.3, progress);

      for (let s = 0; s < strokeCount; s++) {
        const seed        = b.strokeSeeds[s] || 0;
        const normalizedS = strokeCount > 1 ? (s / (strokeCount - 1) - 0.5) : 0;
        const offsetAmt   = normalizedS * thickBase * 0.35 + seed * thickBase * 0.08;
        const ox = perpX * offsetAmt, oy = perpY * offsetAmt;

        const shift = normalizedS * 22 + b.colorShift * 0.3;
        const r  = Math.max(0, Math.min(255, col.r + shift));
        const g  = Math.max(0, Math.min(255, col.g + shift * 0.65));
        const bb = Math.max(0, Math.min(255, col.b + shift * 0.4));

        const isCore = s === Math.floor(strokeCount / 2);
        const alpha  = baseAlpha * (isCore ? 1.0 : 0.5);
        const thick  = thickTaper * (isCore ? 1.0 : lerp(0.65, 0.45, Math.abs(normalizedS)));

        drawCtx.beginPath();
        drawCtx.moveTo(x1 + ox, y1 + oy);
        drawCtx.bezierCurveTo(cpx1+ox, cpy1+oy, cpx2+ox, cpy2+oy, x2+ox, y2+oy);
        drawCtx.strokeStyle = `rgba(${r|0},${g|0},${bb|0},${alpha})`;
        drawCtx.lineWidth   = thick;
        drawCtx.lineCap     = "round";
        drawCtx.stroke();
      }

      // Ambient glow on mid-to-deep branches
      if (b.depth >= 4 && b.depth < MAX_DEPTH - 1 && b.growthProgress > 0.8) {
        const glowAlpha = smoothstep(0.8, 1.0, b.growthProgress) * 0.06 * (b.depth / MAX_DEPTH);
        const glowR = Math.max(4, thickBase * 2);
        const grd = drawCtx.createRadialGradient(x2, y2, 0, x2, y2, glowR);
        grd.addColorStop(0,   `rgba(${Math.min(255,col.r+30)|0},${Math.min(255,col.g+20)|0},${Math.min(255,col.b+15)|0},${glowAlpha})`);
        grd.addColorStop(0.5, `rgba(${col.r|0},${col.g|0},${col.b|0},${glowAlpha * 0.25})`);
        grd.addColorStop(1,   `rgba(${col.r|0},${col.g|0},${col.b|0},0)`);
        drawCtx.fillStyle = grd;
        drawCtx.beginPath();
        drawCtx.arc(x2, y2, glowR, 0, Math.PI * 2);
        drawCtx.fill();
      }

      // Luminous tip dots on terminal branches
      if (b.tipDots.length > 0 && b.growthProgress > 0.92) {
        const tipFade = smoothstep(0.92, 1.0, b.growthProgress);
        const tr = Math.min(255, col.r * 1.3 + 30);
        const tg2 = Math.min(255, col.g * 1.3 + 25);
        const tb  = Math.min(255, col.b * 1.2 + 20);
        for (const dot of b.tipDots) {
          const dx = x2 + dot.ox, dy = y2 + dot.oy;
          const da = tipFade * dot.alpha, ds = dot.size;
          const tg = drawCtx.createRadialGradient(dx, dy, 0, dx, dy, ds * 2);
          tg.addColorStop(0,   `rgba(${tr|0},${tg2|0},${tb|0},${da * 0.6})`);
          tg.addColorStop(0.5, `rgba(${col.r|0},${col.g|0},${col.b|0},${da * 0.15})`);
          tg.addColorStop(1,   `rgba(${col.r|0},${col.g|0},${col.b|0},0)`);
          drawCtx.fillStyle = tg;
          drawCtx.beginPath();
          drawCtx.arc(dx, dy, ds * 2, 0, Math.PI * 2);
          drawCtx.fill();
        }
      }
    }

    function drawScene(time: number) {
      // Transparent canvas — tree floats over the page background, no solid box
      ctx.clearRect(0, 0, W, H);

      if (treeAlpha > 0.05) {
        // Warm canopy glow behind crown
        const cx = W / 2, cy = H * 0.38;
        const canopyGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, H * 0.42);
        canopyGlow.addColorStop(0,   `rgba(60,36,12,${0.2 * treeAlpha})`);
        canopyGlow.addColorStop(0.5, `rgba(35,20,8,${0.08 * treeAlpha})`);
        canopyGlow.addColorStop(1,   "rgba(10,10,10,0)");
        ctx.fillStyle = canopyGlow;
        ctx.fillRect(0, 0, W, H);

        // Ground glow
        const groundGrad = ctx.createRadialGradient(W/2, H, 0, W/2, H, H * 0.3);
        groundGrad.addColorStop(0, `rgba(70,42,12,${0.1 * treeAlpha})`);
        groundGrad.addColorStop(1, "rgba(10,10,10,0)");
        ctx.fillStyle = groundGrad;
        ctx.fillRect(0, H * 0.55, W, H * 0.45);
      }

      recalcPositions(time);

      ctx.save();
      ctx.globalAlpha = treeAlpha;
      for (const b of allBranches) drawBranch(ctx, b, time);
      ctx.restore();

      updateParticles(time);
      ctx.save();
      drawParticles(ctx, treeAlpha);
      ctx.restore();
    }

    // State machine
    let running = true;

    function frame(time: number) {
      if (shakeAmount > 0.01) shakeAmount *= 0.95; else shakeAmount = 0;

      switch (treeState) {
        case "growing": {
          const done = updateBranches(time);
          drawScene(time);
          if (done) { treeState = "holding"; holdTimer = 0; }
          break;
        }
        case "holding": {
          drawScene(time);
          holdTimer++;
          if (holdTimer >= HOLD_DURATION) { treeState = "fading"; fadeTimer = 0; }
          break;
        }
        case "fading": {
          fadeTimer++;
          treeAlpha = Math.max(0, 1 - fadeTimer / FADE_DURATION);
          drawScene(time);
          if (fadeTimer >= FADE_DURATION) { treeState = "waiting"; waitTimer = 0; }
          break;
        }
        case "waiting": {
          ctx.clearRect(0, 0, W, H);
          waitTimer++;
          if (waitTimer >= WAIT_DURATION) createTree();
          break;
        }
      }
      if (running) requestAnimationFrame(frame);
    }

    // Visibility pause
    const onVisibility = () => {
      if (document.hidden) { running = false; }
      else if (!running) { running = true; requestAnimationFrame(frame); }
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Mouse — wind on hover, shake on click
    const onMouseMove = (e: MouseEvent) => {
      mouseActive = true;
      windForce = (e.clientX - canvas.getBoundingClientRect().left - W / 2) / (W / 2);
    };
    const onMouseLeave = () => { mouseActive = false; windForce = 0; };
    const onClick = () => { shakeAmount = 1.0; };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("click", onClick);

    createTree();
    requestAnimationFrame(frame);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("click", onClick);
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, []);

  // hue-rotate(90deg) shifts warm amber palette → lime green to match brand.
  // Radial mask fades all four edges so there is no rectangular hard border.
  return (
    <div
      ref={mountRef}
      className={`w-full h-full ${className}`}
      style={{
        filter: "hue-rotate(90deg) saturate(1.2)",
        maskImage:
          "radial-gradient(ellipse 88% 88% at 50% 58%, black 28%, rgba(0,0,0,0.7) 55%, transparent 82%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 88% 88% at 50% 58%, black 28%, rgba(0,0,0,0.7) 55%, transparent 82%)",
      }}
    />
  );
}
