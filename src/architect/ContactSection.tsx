import React from "react";
import { profile } from "../data/portfolioContent";

const ContactSection: React.FC = () => {
  return (
    <section
      id="connect"
      className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 px-6 pb-20 pt-12 sm:px-8"
    >
      <div className="pointer-events-none absolute top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col justify-start">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-secondary">
            System.connect()
          </span>
          <h2 className="mb-6 font-headline text-5xl font-black leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
            LET&apos;S <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              BUILD
            </span>{" "}
            <br />
            BEYOND.
          </h2>
          <p className="max-w-md font-body text-lg leading-relaxed text-on-surface-variant">
            Collaborations, architecture reviews, or full-stack / AI
            opportunities - reach out via the form or links below.
          </p>

          <div className="mt-12 space-y-4">
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-outline">
              Network links
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-surface-container-low px-5 py-3 transition-all hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined text-secondary transition-colors group-hover:text-primary">
                  code
                </span>
                <span className="font-headline text-sm font-bold uppercase tracking-tight">
                  GitHub
                </span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-surface-container-low px-5 py-3 transition-all hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined text-secondary transition-colors group-hover:text-primary">
                  hub
                </span>
                <span className="font-headline text-sm font-bold uppercase tracking-tight">
                  LinkedIn
                </span>
              </a>
              <a
                href={profile.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-surface-container-low px-5 py-3 transition-all hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined text-secondary transition-colors group-hover:text-primary">
                  language
                </span>
                <span className="font-headline text-sm font-bold uppercase tracking-tight">
                  Portfolio
                </span>
              </a>
            </div>
            <p className="pt-4 font-mono text-sm text-on-surface-variant">
              {profile.email} | {profile.phone}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="glass-panel rounded-xl border border-outline-variant/20 p-8 shadow-2xl md:p-12">
            <form
              action={profile.formspree}
              method="POST"
              className="space-y-8"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="group space-y-2">
                  <label className="font-headline text-xs font-bold uppercase tracking-widest text-primary/60 transition-colors group-focus-within:text-primary">
                    Identifier
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full border-0 border-b border-outline-variant bg-transparent py-3 text-on-surface placeholder:text-on-surface-variant/55 focus:border-primary focus:ring-0"
                    placeholder="Full name"
                    type="text"
                  />
                </div>
                <div className="group space-y-2">
                  <label className="font-headline text-xs font-bold uppercase tracking-widest text-primary/60 transition-colors group-focus-within:text-primary">
                    Protocol
                  </label>
                  <input
                    name="email"
                    required
                    className="w-full border-0 border-b border-outline-variant bg-transparent py-3 text-on-surface placeholder:text-on-surface-variant/55 focus:border-primary focus:ring-0"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
              </div>
              <div className="group space-y-2">
                <label className="font-headline text-xs font-bold uppercase tracking-widest text-primary/60 transition-colors group-focus-within:text-primary">
                  Subject area
                </label>
                <select
                  name="subject"
                  className="w-full border-0 border-b border-outline-variant bg-transparent py-3 text-on-surface-variant focus:border-primary focus:text-on-surface focus:ring-0"
                  defaultValue="AI & full-stack"
                >
                  <option className="bg-surface">AI & full-stack</option>
                  <option className="bg-surface">3D & configurators</option>
                  <option className="bg-surface">Cloud / AWS</option>
                  <option className="bg-surface">General</option>
                </select>
              </div>
              <div className="group space-y-2">
                <label className="font-headline text-xs font-bold uppercase tracking-widest text-primary/60 transition-colors group-focus-within:text-primary">
                  Message payload
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none border-0 border-b border-outline-variant bg-transparent py-3 text-on-surface placeholder:text-on-surface-variant/55 focus:border-primary focus:ring-0"
                  placeholder="How can we collaborate?"
                />
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary p-px"
                >
                  <div className="flex items-center justify-center gap-3 rounded-[7px] bg-surface-container-lowest py-4 transition-all group-hover:bg-transparent">
                    <span className="font-headline font-black uppercase tracking-[0.2em] text-on-surface">
                      Initialize transmission
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:text-surface">
                      send
                    </span>
                  </div>
                </button>
              </div>
            </form>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-outline-variant/30 pt-6 opacity-80">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-mono text-[10px] uppercase tracking-tighter">
                  System status: ready
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-tighter text-on-surface-variant">
                {profile.coords}
              </span>
            </div>
          </div>

          <div className="relative mt-8 h-48 overflow-hidden rounded-xl border border-outline-variant/20 opacity-40 contrast-125 grayscale">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX21eq6mxAqC6FkgzmDcEMEeVkNEuNLeDy6-dWvBnkA9g_HbPxYSEkQXM9zanFws7ib2Y0plf1iohJKlFp_lD1buvtjlXzHSR1HSMo4j4ECiFsgYXWoX6mvAGz9ck71AOBBX0xUb-MM4Ck61qg0AuPrTEHREIP194AZaBHE8qujsLKLDAOZCYNcU8_hfpA8d9H-TeOoM_zgdRx3TlAmAeast5ut15T8PkC_u81Kci6ApsUQ0cQBPW71gW-f9IDPzLW_HopADUpOeM"
              alt="Abstract map grid"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

