import React from "react";
import { capabilities, missionBlurb } from "../data/portfolioContent";
import TiltCard from "../interactive/TiltCard";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const CapabilitiesBento: React.FC = () => {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative z-10 bg-surface-container-low/50 px-6 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div>
            <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              SYSTEM_CAPABILITIES
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>
          <p className="max-w-md text-right font-body text-on-surface-variant">
            Modular engineering: AI, cloud, full-stack, and 3D - optimized for
            impact and low latency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {capabilities.map((c) => (
            <TiltCard
              key={c.key}
              className={`rounded-2xl ${c.span}`}
              maxDeg={c.glass ? 5 : 4}
            >
              <div
                className={`h-full rounded-2xl p-8 transition-all ${
                  c.glass
                    ? "glass-panel group hover:bg-surface-container-highest/60"
                    : `border border-outline-variant/10 bg-surface-container-low group ${
                        c.key === "scale"
                          ? "hover:border-secondary/40"
                          : "hover:border-primary/40"
                      }`
                }`}
              >
                <div className="mb-8 flex justify-between">
                  <span
                    className={`material-symbols-outlined text-4xl ${
                      c.key === "scale"
                        ? "text-secondary"
                        : c.key === "viz"
                          ? "text-tertiary"
                          : "text-primary"
                    }`}
                  >
                    {c.icon}
                  </span>
                  {c.step ? (
                    <span className="font-headline text-[10px] tracking-[0.2em] text-outline">
                      {c.step}
                    </span>
                  ) : null}
                </div>
                <h3 className="mb-4 font-headline text-xl font-bold sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mb-8 font-body text-sm leading-relaxed text-on-surface-variant">
                  {c.body}
                </p>
                {c.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface-container-highest px-3 py-1 font-headline text-[10px] uppercase tracking-widest text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </TiltCard>
          ))}

          <TiltCard className="md:col-span-3" maxDeg={3}>
            <div className="relative flex flex-col items-center gap-12 overflow-hidden rounded-2xl p-10 glass-panel md:flex-row">
              <div className="relative z-10 md:w-2/3">
                <h3 className="mb-6 font-headline text-2xl font-bold sm:text-3xl">
                  {missionBlurb.title}
                </h3>
                <p className="mb-8 font-body text-lg leading-relaxed text-on-surface-variant">
                  {missionBlurb.body}
                </p>
                <a
                  href={missionBlurb.href}
                  className="group flex items-center gap-3 font-headline text-xs font-bold uppercase tracking-widest text-primary"
                >
                  {missionBlurb.cta}
                  <span className="h-px w-12 bg-primary transition-all group-hover:w-16" />
                </a>
              </div>
              <div className="flex w-full justify-center md:w-1/3">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-2 border-dashed border-primary/30">
                  <div
                    className={`flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary/50 ${reduced ? "" : "animate-[spin_10s_linear_infinite]"}`}
                  >
                    <span className="material-symbols-outlined text-4xl text-primary">
                      view_in_ar
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesBento;

