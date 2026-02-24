"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  size: number;
};

export function DitherCursor({
  baseSize = 6,
  grid = 8,
  spawn = 12,
  fade = 0.018,
  color = "#ff2bd6",
  blur = 0,
  gravity = 0.09,
  friction = 0.97,
  maxDots = 1800,
  fallDistance = 120,
}: {
  baseSize?: number;
  grid?: number;
  spawn?: number;
  fade?: number;
  color?: string;
  blur?: number;
  gravity?: number;
  friction?: number;
  maxDots?: number;
  fallDistance?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, moved: false });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.moved = true;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;

    const tick = () => {
      const { x, y, moved } = mouseRef.current;
      mouseRef.current.moved = false;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (moved) {
        for (let i = 0; i < spawn; i++) {
          // Snap to grid with jitter
          const jx = (Math.random() - 0.5) * grid * 3;
          const jy = (Math.random() - 0.5) * grid * 3;
          const sx = Math.round((x + jx) / grid) * grid;
          const sy = Math.round((y + jy) / grid) * grid;

          // Initial velocity: mostly downward with some lateral scatter
          const vx = (Math.random() - 0.5) * 1.5;
          const vy = Math.random() * -1.5; // slight upward burst then gravity pulls down

          const max = 0.6 + Math.random() * 0.8; // life budget (seconds-ish)

          // Vary dot sizes for visual richness
          const dotSize = grid * (0.4 + Math.random() * 0.6);

          dotsRef.current.push({
            x: sx,
            y: sy,
            vx,
            vy,
            life: max,
            max,
            size: dotSize,
          });
        }

        if (dotsRef.current.length > maxDots) {
          dotsRef.current.splice(0, dotsRef.current.length - maxDots);
        }
      }

      if (blur > 0) ctx.filter = `blur(${blur}px)`;
      else ctx.filter = "none";

      for (let i = dotsRef.current.length - 1; i >= 0; i--) {
        const d = dotsRef.current[i];

        // Physics
        d.vy += gravity;
        d.vx *= friction;
        d.vy *= friction;

        // Snap movement to grid so pixels "fall" in discrete steps
        // Move continuously but render on grid
        d.x += d.vx;
        d.y += d.vy;

        d.life -= fade;

        if (d.life <= 0) {
          dotsRef.current.splice(i, 1);
          continue;
        }

        // Life fraction: start solid, fade out in last 40% of life
        const lifeFrac = d.life / d.max;

        // Alpha: full opacity for most of life, then fade
        const fadeThreshold = 0.4;
        const a = lifeFrac > fadeThreshold ? 1 : lifeFrac / fadeThreshold;

        // Snap render position to grid for that dither aesthetic
        const rx = Math.round(d.x / grid) * grid;
        const ry = Math.round(d.y / grid) * grid;
        const sz = Math.round(d.size / grid) * grid || grid;

        ctx.globalAlpha = Math.max(0, a);
        ctx.fillStyle = color;
        ctx.fillRect(rx - sz / 2, ry - sz / 2, sz, sz);
      }

      ctx.globalAlpha = 1;
      ctx.filter = "none";

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [
    baseSize,
    grid,
    spawn,
    fade,
    color,
    blur,
    gravity,
    friction,
    maxDots,
    fallDistance,
  ]);

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-5" />
  );
}
