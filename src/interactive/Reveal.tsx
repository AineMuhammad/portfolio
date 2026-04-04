import React, { useRef } from "react";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useInViewOnce } from "../hooks/useInViewOnce";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

const Reveal: React.FC<RevealProps> = ({ children, className, delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const visible = useInViewOnce(ref, { disabled: reduced });

  return (
    <div
      ref={ref}
      className={cn(
        !reduced && "duration-700 ease-out [transition-property:opacity,transform]",
        !visible && !reduced && "translate-y-8 opacity-0",
        visible && "translate-y-0 opacity-100",
        className
      )}
      style={
        reduced || !visible
          ? undefined
          : { transitionDelay: `${delayMs}ms` }
      }
    >
      {children}
    </div>
  );
};

export default Reveal;
