import React, { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const AmbientBackground: React.FC = () => {
  const reduced = usePrefersReducedMotion();
  const [parallax, setParallax] = useState({ mx: 0, my: 0, sy: 0 });

  useEffect(() => {
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      const mx = (e.clientX / window.innerWidth - 0.5) * 2;
      const my = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax((p) => ({ ...p, mx, my }));
    };

    const onScroll = () => {
      const sy = Math.min(1, window.scrollY / 1200);
      setParallax((p) => ({ ...p, sy }));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduced]);

  const tx1 = reduced ? 0 : parallax.mx * 28 + parallax.sy * -12;
  const ty1 = reduced ? 0 : parallax.my * 18 + parallax.sy * 20;
  const tx2 = reduced ? 0 : parallax.mx * -22 + parallax.sy * 10;
  const ty2 = reduced ? 0 : parallax.my * -14 + parallax.sy * -16;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] motion-safe:transition-transform motion-safe:duration-300 ease-out"
        style={{ transform: `translate3d(${tx1}px, ${ty1}px, 0)` }}
      />
      <div
        className="absolute bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[120px] motion-safe:transition-transform motion-safe:duration-300 ease-out"
        style={{ transform: `translate3d(${tx2}px, ${ty2}px, 0)` }}
      />
      <div className="hero-gradient absolute inset-0 opacity-40" />
    </div>
  );
};

export default AmbientBackground;
