import React, { useCallback, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxDeg?: number;
};

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className,
  maxDeg = 6,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ rx: py * -maxDeg, ry: px * maxDeg });
    },
    [maxDeg, reduced]
  );

  const reset = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "group [perspective:1200px] motion-safe:transition-shadow motion-safe:duration-300",
        "hover:shadow-[0_0_0_1px_rgba(143,245,255,0.15)]",
        className
      )}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <div
        className={cn(
          "h-full motion-safe:transition-transform motion-safe:duration-200 ease-out",
          reduced && "transform-none"
        )}
        style={
          reduced
            ? undefined
            : {
                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transformStyle: "preserve-3d",
              }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
