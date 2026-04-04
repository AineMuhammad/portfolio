import React, { useState } from "react";
import { coreArchitectures, techGrid, timeline } from "../data/portfolioContent";
import TiltCard from "../interactive/TiltCard";
import { cn } from "../utils/cn";

const ExperienceTimeline: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setExpanded((s) => ({ ...s, [id]: !s[id] }));

  return (
    <section
      id="mastery"
      className="blueprint-grid min-h-screen scroll-mt-24 bg-background pb-24 pt-8"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <header className="mb-16 flex flex-col items-end justify-between gap-12 md:mb-24 md:flex-row">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-12 bg-primary" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                System_chronology
              </span>
            </div>
            <h2 className="mb-8 font-headline text-4xl font-bold leading-none tracking-tighter md:text-6xl lg:text-7xl">
              The{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                schematic
              </span>{" "}
              of a full-stack career.
            </h2>
            <p className="max-w-xl font-body text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Enterprise 3D and AI delivery, serverless backends, and research
              foundations—chronological audit of roles and systems shipped.
            </p>
          </div>
          <div className="hidden text-right md:block">
            <div className="inline-block rounded-xl border border-outline-variant/10 bg-surface-container-low p-6 backdrop-blur-xl">
              <div className="mb-2 font-mono text-[10px] text-primary">
                NETWORK_STATUS: OPERATIONAL
              </div>
              <div className="grid grid-cols-5 gap-1">
                <div className="h-8 w-2 bg-primary" />
                <div className="h-6 w-2 bg-primary/60" />
                <div className="h-10 w-2 bg-secondary" />
                <div className="h-4 w-2 bg-primary/40" />
                <div className="h-7 w-2 bg-secondary/80" />
              </div>
            </div>
          </div>
        </header>

        <div className="relative">
          <div className="glow-line absolute bottom-0 left-8 top-0 w-px opacity-30 md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((entry) => {
            const isRight = entry.side === "right";
            const iconColor =
              entry.border === "primary" ? "text-primary" : "text-secondary";
            const ring =
              entry.border === "primary"
                ? "border-primary group-hover:shadow-[0_0_20px_rgba(143,245,255,0.6)]"
                : "border-secondary group-hover:shadow-[0_0_20px_rgba(214,116,255,0.6)]";
            const isOpen = !!expanded[entry.id];

            return (
              <div key={entry.id} className="group relative mb-24 md:mb-40">
                <div
                  className={`flex flex-col items-center md:flex-row ${isRight ? "md:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`hidden w-1/2 md:block ${isRight ? "pl-16 text-left" : "pr-16 text-right"}`}
                  >
                    <h3 className="font-headline text-3xl font-bold text-on-surface">
                      {entry.title}
                    </h3>
                    <div
                      className={`mt-1 font-mono text-sm tracking-widest ${entry.border === "primary" ? "text-secondary" : "text-tertiary"}`}
                    >
                      {`${entry.org} // ${entry.period}`}
                    </div>
                  </div>

                  <div
                    className={`absolute left-8 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-background bg-background transition-all group-hover:scale-110 md:left-1/2 ${ring}`}
                  >
                    <span
                      className={`material-symbols-outlined text-xl ${iconColor}`}
                    >
                      {entry.icon}
                    </span>
                  </div>

                  <div
                    className={`w-full pl-20 md:w-1/2 ${isRight ? "md:pr-16 md:pl-0" : "md:pl-16"}`}
                  >
                    <TiltCard maxDeg={3} className="rounded-xl">
                      <div
                        className={`rounded-xl bg-surface-container-low p-8 backdrop-blur-xl transition-colors group-hover:bg-surface-container-high ${
                          isRight
                            ? entry.border === "primary"
                              ? "border-r-4 border-primary/40 md:text-right"
                              : "border-r-4 border-secondary/40 md:text-right"
                            : entry.border === "primary"
                              ? "border-l-4 border-primary/40"
                              : "border-l-4 border-secondary/40"
                        }`}
                      >
                        <div className="mb-4 md:hidden">
                          <h3 className="font-headline text-2xl font-bold text-on-surface">
                            {entry.title}
                          </h3>
                          <div className="mt-1 font-mono text-xs tracking-widest text-secondary">
                            {`${entry.org} // ${entry.period}`}
                          </div>
                        </div>
                        <p className="mb-4 leading-relaxed text-on-surface-variant">
                          {entry.summary}
                        </p>

                        {entry.details && entry.details.length > 0 ? (
                          <div className="mb-4">
                            <button
                              type="button"
                              onClick={() => toggle(entry.id)}
                              className={cn(
                                "font-headline text-xs font-bold uppercase tracking-widest text-primary underline-offset-4 hover:underline",
                                isRight && "md:ml-auto md:block"
                              )}
                              aria-expanded={isOpen}
                            >
                              {isOpen ? "− Hide details" : "+ Details"}
                            </button>
                            {isOpen ? (
                              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-on-surface-variant">
                                {entry.details.map((d) => (
                                  <li key={d}>{d}</li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        ) : null}

                        <div
                          className={`flex flex-wrap gap-2 ${isRight ? "md:justify-end" : ""}`}
                        >
                          {entry.tags.map((t) => (
                            <span
                              key={t}
                              className={`rounded-full bg-surface-variant px-3 py-1 font-mono text-[10px] tracking-wider ${iconColor}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </TiltCard>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <section className="mt-24">
          <h3 className="mb-12 flex items-center gap-4 font-headline text-2xl font-bold">
            <span className="material-symbols-outlined text-primary">memory</span>
            SYSTEM_CAPABILITIES
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {techGrid.map((cell) => (
              <TiltCard key={cell.name} maxDeg={4} className="rounded-lg">
                <div className="flex flex-col gap-3 border border-outline-variant/10 bg-surface-container-low p-4 transition-all hover:bg-surface-container-high">
                  <span className="font-headline text-xs uppercase text-primary opacity-50 group-hover:opacity-100">
                    {cell.category}
                  </span>
                  <span className="font-headline font-bold text-on-surface">
                    {cell.name}
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-12 flex items-center gap-4">
            <h3 className="font-headline text-3xl font-extrabold uppercase tracking-tighter">
              Core_architectures
            </h3>
            <div className="h-px flex-grow bg-outline-variant/30" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {coreArchitectures.map((block) => (
              <TiltCard
                key={block.title}
                className={`rounded-xl ${block.span}`}
                maxDeg={3}
              >
                <div className="group relative h-full overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low p-10">
                  {block.body ? (
                    <>
                      <div className="absolute right-0 top-0 p-4 opacity-30">
                        <span className="material-symbols-outlined text-6xl text-secondary transition-transform group-hover:rotate-0">
                          {block.icon}
                        </span>
                      </div>
                      <h4 className="mb-4 font-headline text-2xl font-bold text-primary">
                        {block.title}
                      </h4>
                      <p className="text-sm leading-loose text-on-surface-variant">
                        {block.body}
                      </p>
                    </>
                  ) : (
                    <>
                      <h4
                        className={`mb-4 font-headline text-xl font-bold ${block.accent === "primary" ? "text-primary" : "text-secondary"}`}
                      >
                        {block.title}
                      </h4>
                      <ul className="space-y-3 font-mono text-xs text-on-surface-variant">
                        {block.list?.map((li) => (
                          <li key={li} className="flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${block.accent === "primary" ? "bg-primary" : "bg-secondary"}`}
                            />
                            {li}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
