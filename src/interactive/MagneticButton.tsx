import React, { useCallback, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const MAX_PX = 10;
const STRENGTH = 0.22;

type MagneticButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  download?: boolean;
};

const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  className,
  children,
  download,
}) => {
  const wrap = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();
  const [off, setOff] = useState({ x: 0, y: 0 });

  const move = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !wrap.current) return;
      const r = wrap.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * STRENGTH;
      const dy = (e.clientY - cy) * STRENGTH;
      const x = Math.max(-MAX_PX, Math.min(MAX_PX, dx));
      const y = Math.max(-MAX_PX, Math.min(MAX_PX, dy));
      setOff({ x, y });
    },
    [reduced]
  );

  const leave = useCallback(() => setOff({ x: 0, y: 0 }), []);

  return (
    <a
      ref={wrap}
      href={href}
      download={download}
      className={cn("relative inline-block", className)}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      <span
        className={cn(
          "inline-flex items-center gap-4 motion-safe:transition-transform motion-safe:duration-150 ease-out"
        )}
        style={
          reduced
            ? undefined
            : { transform: `translate(${off.x}px, ${off.y}px)` }
        }
      >
        {children}
      </span>
    </a>
  );
};

export default MagneticButton;
