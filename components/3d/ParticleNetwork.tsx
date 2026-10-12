"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const NODE_COUNT = 90;
const MAX_DIST = 180;       // max distance to draw an edge
const MOUSE_REPEL = 100;    // repel radius
const NODE_COLOR = "209,120,60";   // warm orange-ish nodes
const LINE_COLOR  = "209,100,40";  // orange lines

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animId = 0;
    let mouse = { x: -9999, y: -9999 };
    let particles: Particle[] = [];

    /* ── helpers ── */
    const resize = () => {
      width  = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width  = width  * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const makeParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 1.6 + Math.random() * 1.8,
      opacity: 0.50 + Math.random() * 0.45,
    });

    const init = () => {
      const isMobile = width < 640;
      const count = isMobile ? 32 : NODE_COUNT;
      particles = Array.from({ length: count }, makeParticle);
    };

    /* ── draw ── */
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const isMobile = width < 640;
      const maxDist = isMobile ? 110 : MAX_DIST;

      // update positions
      for (const p of particles) {
        // gentle mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_REPEL * MOUSE_REPEL && d2 > 0) {
          const d = Math.sqrt(d2);
          const force = (MOUSE_REPEL - d) / MOUSE_REPEL * 0.6;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }

        // velocity damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        // cap speed
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 1.2) { p.vx = (p.vx / spd) * 1.2; p.vy = (p.vy / spd) * 1.2; }

        p.x += p.vx;
        p.y += p.vy;

        // wrap around edges
        if (p.x < -10) p.x = width  + 10;
        if (p.x > width  + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
      }

      // draw edges
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${LINE_COLOR},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // draw nodes
      for (const p of particles) {
        // outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        grd.addColorStop(0,   `rgba(${NODE_COLOR},${p.opacity * 0.35})`);
        grd.addColorStop(1,   "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${NODE_COLOR},${p.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    /* ── mouse ── */
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse = { x: -9999, y: -9999 }; };

    const onResize = () => { resize(); };

    resize();
    init();
    draw();

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
