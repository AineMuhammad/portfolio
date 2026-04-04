import React from "react";
import { cn } from "../utils/cn";
import { ChapterId } from "../hooks/useActiveChapter";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const STEPS: { id: ChapterId; label: string }[] = [
  { id: "story", label: "Story" },
  { id: "projects", label: "Projects" },
  { id: "mastery", label: "Mastery" },
  { id: "connect", label: "Connect" },
];

type SectionRailProps = {
  active: ChapterId;
};

const SectionRail: React.FC<SectionRailProps> = ({ active }) => {
  const reduced = usePrefersReducedMotion();
  const idx = Math.max(
    0,
    STEPS.findIndex((s) => s.id === active)
  );
  const progress = (idx / (STEPS.length - 1)) * 100;

  return (
    <div
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 md:block xl:right-6"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-3 rounded-full border border-outline-variant/20 bg-surface-container-low/80 px-2 py-4 shadow-lg backdrop-blur-md">
        <div className="relative h-32 w-1 overflow-hidden rounded-full bg-surface-container-highest">
          <div
            className={cn(
              "absolute bottom-0 left-0 w-full rounded-full bg-gradient-to-t from-secondary to-primary",
              !reduced && "motion-safe:transition-[height] motion-safe:duration-500 ease-out"
            )}
            style={{ height: `${progress}%` }}
          />
        </div>
        <div className="flex flex-col gap-2">
          {STEPS.map((s) => {
            const on = s.id === active;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                title={s.label}
                className={cn(
                  "group relative flex h-2.5 w-2.5 items-center justify-center rounded-full border transition-colors",
                  on
                    ? "border-primary bg-primary shadow-[0_0_12px_rgba(143,245,255,0.5)]"
                    : "border-outline-variant/50 bg-transparent hover:border-primary/60"
                )}
              >
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded bg-surface-container-high px-2 py-1 font-headline text-[10px] font-bold uppercase tracking-wider text-on-surface opacity-0 transition-opacity group-hover:opacity-100">
                  {s.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionRail;
