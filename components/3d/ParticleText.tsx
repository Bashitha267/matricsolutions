"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Particle physics constants ─── */
const STIFFNESS   = 0.072;   // spring return force
const DAMPING     = 0.80;    // velocity friction
const MOUSE_R     = 110;     // mouse repel radius (px)
const MOUSE_F     = 7;       // repel force magnitude
const DRIFT_AMP   = 0.35;    // idle drift amplitude
const SAMPLE_GAP  = 4;       // pixel sampling gap (lower = more particles, heavier)

interface Particle {
  x: number;   // current
  y: number;
  tx: number;  // target (text pixel)
  ty: number;
  vx: number;  // velocity
  vy: number;
  color: string;
  size: number;
  phase: number; // random drift phase
}

interface Props {
  /** width of the canvas in CSS px — defaults to parent fill */
  height?: number;
  className?: string;
}

export default function ParticleText({ height = 220, className = "" }: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const ptRef      = useRef<Particle[]>([]);
  const mouseRef   = useRef({ x: -9999, y: -9999 });
  const animRef    = useRef<number>(0);
  const pausedRef  = useRef(false);

  /* ── build / rebuild particle array from rendered text ── */
  const buildParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W   = canvas.offsetWidth  || window.innerWidth;
    const H   = height;
    const dpr = Math.min(window.devicePixelRatio, 2);

    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width  = W + "px";
    canvas.style.height = H + "px";

    /* — Offscreen canvas — render two lines of text — */
    const off    = document.createElement("canvas");
    off.width    = W * dpr;
    off.height   = H * dpr;
    const octx   = off.getContext("2d")!;
    const line1 = "WE CAN HELP YOU GROW YOUR";
    const line2 = "BUSINESS.";

    // Target safe width: 90% of available canvas width so text has side padding
    const maxTextWidth = W * dpr * 0.90;

    let fs = Math.min(W * 0.055, 64);
    octx.font = `900 ${fs * dpr}px Montserrat, "Arial Black", sans-serif`;

    const w1 = octx.measureText(line1).width;
    const w2 = octx.measureText(line2).width;
    const maxW = Math.max(w1, w2);

    if (maxW > maxTextWidth && maxW > 0) {
      fs = Math.floor(fs * (maxTextWidth / maxW));
    }
    fs = Math.max(fs, 16);

    const lh     = fs * 1.26;
    const cx     = (W / 2) * dpr;
    const cy1    = (H / 2 - lh * 0.52) * dpr;
    const cy2    = (H / 2 + lh * 0.52) * dpr;

    octx.font        = `900 ${fs * dpr}px Montserrat, "Arial Black", sans-serif`;
    octx.textAlign   = "center";
    octx.textBaseline = "middle";

    /* Line 1 — white */
    octx.fillStyle = "#ffffff";
    octx.fillText(line1, cx, cy1);

    /* Line 2 — orange */
    octx.fillStyle = "#e35c24";
    octx.fillText(line2, cx, cy2);

    /* — Sample pixels — */
    const imageData = octx.getImageData(0, 0, off.width, off.height);
    const data      = imageData.data;
    const gap       = Math.ceil(SAMPLE_GAP * dpr);
    const particles: Particle[] = [];

    for (let y = 0; y < off.height; y += gap) {
      for (let x = 0; x < off.width; x += gap) {
        const i = (y * off.width + x) * 4;
        if (data[i + 3] < 100) continue;

        const r  = data[i];
        const g  = data[i + 1];
        const b  = data[i + 2];

        /* scatter origin: burst from random direction */
        const angle = Math.random() * Math.PI * 2;
        const dist  = Math.random() * Math.max(W, H) * 0.9;
        const ox    = W / 2 + Math.cos(angle) * dist;
        const oy    = H / 2 + Math.sin(angle) * dist;

        particles.push({
          x:     ox,
          y:     oy,
          tx:    x / dpr,
          ty:    y / dpr,
          vx:    0,
          vy:    0,
          color: `rgb(${r},${g},${b})`,
          size:  1.2 + Math.random() * 1.4,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    ptRef.current = particles;
  }, [height]);

  /* ── animation loop ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* Wait for fonts so pixel sampling is accurate */
    const start = () => {
      buildParticles();

      const ctx = canvas.getContext("2d")!;
      const dpr = Math.min(window.devicePixelRatio, 2);
      let t     = 0;

      const loop = () => {
        animRef.current = requestAnimationFrame(loop);
        if (pausedRef.current) return;
        t += 0.016;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        for (const p of ptRef.current) {
          /* mouse repulsion */
          const dx   = p.x - mx;
          const dy   = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_R && dist > 0) {
            const force = ((MOUSE_R - dist) / MOUSE_R) * MOUSE_F;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }

          /* spring back to target + idle sine drift */
          const drift = Math.sin(t * 1.2 + p.phase) * DRIFT_AMP;
          p.vx += (p.tx + drift - p.x) * STIFFNESS;
          p.vy += (p.ty + drift - p.y) * STIFFNESS;

          /* dampen */
          p.vx *= DAMPING;
          p.vy *= DAMPING;
          p.x  += p.vx;
          p.y  += p.vy;

          /* draw dot */
          ctx.beginPath();
          ctx.arc(p.x * dpr, p.y * dpr, p.size * dpr, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      };

      loop();
    };

    document.fonts.ready.then(start);

    /* mouse */
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    /* touch */
    const onTouch = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouseRef.current = { x: t.clientX - r.left, y: t.clientY - r.top };
    };
    const onTouchEnd = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    /* resize */
    const onResize = () => buildParticles();
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    /* Intersection Observer — pause when off-screen */
    const io = new IntersectionObserver(
      ([entry]) => { pausedRef.current = !entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(canvas);

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("touchend", onTouchEnd);
      ro.disconnect();
      io.disconnect();
    };
  }, [buildParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height }}
    />
  );
}
