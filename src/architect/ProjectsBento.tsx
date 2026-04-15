import React, { useMemo, useState } from "react";
import {
  profile,
  projectCategoryIds,
  projects,
  type ProjectCategoryId,
  type ProjectFacet,
} from "../data/portfolioContent";
import TiltCard from "../interactive/TiltCard";
import { cn } from "../utils/cn";

const LABELS: Record<ProjectCategoryId, string> = {
  all: "All",
  "full-stack": "Full-stack",
  ai: "AI",
  "3d": "3D",
  admin: "Admin",
};

const ProjectsBento: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategoryId>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    const facet = filter as ProjectFacet;
    return projects.filter((p) =>
      (p.categories as readonly ProjectFacet[]).includes(facet)
    );
  }, [filter]);

  const [p1, p2] = visible;

  return (
    <section id="projects" className="relative z-10 scroll-mt-24 px-6 pb-16 pt-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-secondary" />
            <span className="font-headline text-xs uppercase tracking-[0.3em] text-secondary">
              Deployment log // selected work
            </span>
          </div>
          <h2 className="mb-8 font-headline text-5xl font-bold leading-[0.9] tracking-tighter text-on-surface md:text-7xl">
            ARCHITECTING{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              REAL SYSTEMS
            </span>
          </h2>
          <p className="mb-8 max-w-xl font-body text-lg leading-relaxed text-on-surface-variant">
            Full-stack apps and admin tools - CSV pipelines, RBAC, analytics, and
            secure media workflows - not vaporware demos.
          </p>

          <div className="flex flex-wrap gap-2">
            {projectCategoryIds.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 font-headline text-[10px] font-bold uppercase tracking-widest transition-colors",
                  filter === id
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-outline-variant/40 text-on-surface-variant hover:border-primary/50 hover:text-primary"
                )}
              >
                {LABELS[id]}
              </button>
            ))}
          </div>
        </header>

        {visible.length === 0 ? (
          <p className="font-mono text-sm text-on-surface-variant">
            No projects in this filter - try &quot;All&quot;.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            {p1 ? (
              <TiltCard className="md:col-span-8" maxDeg={4}>
                <article className="group relative overflow-hidden rounded-xl glass-card glow-hover transition-all duration-500">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={p1.image}
                      alt={p1.imageAlt}
                      className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background via-background/80 to-transparent p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {p1.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-primary/20 bg-surface-container-highest px-3 py-1 font-headline text-[10px] font-bold uppercase tracking-widest text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-2 font-headline text-2xl font-bold text-on-surface md:text-3xl">
                      {p1.title}
                    </h3>
                    <p className="mb-4 max-w-lg text-sm text-on-surface-variant">
                      {p1.description}
                    </p>
                    <span className="font-headline text-xs uppercase tracking-widest text-primary">
                      {p1.subtitle}
                    </span>
                  </div>
                </article>
              </TiltCard>
            ) : null}

            {p2 ? (
              <TiltCard className="md:col-span-4" maxDeg={5}>
                <article className="group relative flex flex-col overflow-hidden rounded-xl glass-card glow-hover transition-all duration-500">
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={p2.image}
                      alt={p2.imageAlt}
                      className="h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="mt-auto p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {p2.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-surface-container-highest px-2 py-0.5 font-headline text-[10px] font-bold uppercase tracking-tighter text-primary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-2 font-headline text-xl font-bold text-on-surface">
                      {p2.title}
                    </h3>
                    <p className="mb-4 text-xs leading-relaxed text-on-surface-variant">
                      {p2.description}
                    </p>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full border border-outline-variant py-2 text-center font-headline text-[10px] font-bold uppercase text-on-surface-variant transition-all hover:border-primary/50 hover:text-primary"
                    >
                      View_github
                    </a>
                  </div>
                </article>
              </TiltCard>
            ) : null}

            <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low md:col-span-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <span className="pointer-events-none select-none font-headline text-6xl font-black tracking-tighter text-primary/20 md:text-8xl">
                OPEN_SRC
              </span>
              <div className="relative z-10 p-6 text-center">
                <p className="mb-2 font-headline text-sm font-bold text-on-surface">
                  GitHub activity
                </p>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline text-xs uppercase tracking-widest text-primary underline-offset-4 hover:underline"
                >
                  github.com/ainemuhammad
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low md:col-span-6">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcvlh2RHnaHOS2sCAfepjolFuyPrhWtCT0GQYV2XYLJHIltM6isyKP42OcHMRDAqColOjB8YQ0Dnoi8BymYQ5kONGwRAG-4dVOh0piK50O84mXvp8PeIHa_js7k08kR9zy08C8iJHtDawGD_U1NID0R7FozmbGBI_ZNPAW-uNgZ24lPsZOuR82qlifNJkKDrh1mCK8a5vQJAtdaASeEQUyqU9JqXvvMHP6FfuwEqCwmUqvYIz44pHJH0CltsCZsfETUKTxY9haeyM"
                  alt="Hardware abstract"
                  className="h-full w-full object-cover opacity-40"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex gap-2">
                  <span className="rounded-full bg-surface-container-highest px-2 py-0.5 font-headline text-[10px] font-bold uppercase tracking-tighter text-secondary">
                    Education
                  </span>
                  <span className="rounded-full bg-surface-container-highest px-2 py-0.5 font-headline text-[10px] font-bold uppercase tracking-tighter text-primary">
                    M.S. AI
                  </span>
                </div>
                <h3 className="mb-2 font-headline text-xl font-bold text-on-surface">
                  SUNY_ALBANY | NUST
                </h3>
                <p className="text-xs leading-relaxed text-on-surface-variant">
                  M.S. Computer Science (AI), expected May 2027. B.S. Software
                  Engineering, July 2021.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="my-24 flex flex-col items-center">
          <div className="h-24 w-px bg-gradient-to-b from-primary to-transparent" />
          <div className="mt-8 font-headline text-[10px] uppercase tracking-[0.4em] text-on-surface-variant">
            End of project directory
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBento;

