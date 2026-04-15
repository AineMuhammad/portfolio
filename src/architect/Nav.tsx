import React, { useState } from "react";
import { profile } from "../data/portfolioContent";
import MagneticButton from "../interactive/MagneticButton";

const nav = [
  { label: "Story", href: "#story" },
  { label: "Projects", href: "#projects" },
  { label: "Mastery", href: "#mastery" },
  { label: "Connect", href: "#connect" },
];

type NavProps = {
  onOpenTerminal: () => void;
};

const Nav: React.FC<NavProps> = ({ onOpenTerminal }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-neutral-950/70 px-4 py-4 shadow-[0_8px_32px_0_rgba(214,116,255,0.08)] backdrop-blur-md sm:px-6">
      <a
        href="#story"
        className="font-headline text-xl font-black uppercase tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] sm:text-2xl"
      >
        {profile.brand}
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-headline text-sm font-bold uppercase tracking-tight text-on-surface-variant transition-colors hover:text-on-surface"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          className="material-symbols-outlined rounded-lg p-2 text-cyan-400 transition-all hover:bg-white/5 hover:backdrop-blur-lg"
          aria-label="Open terminal"
          onClick={onOpenTerminal}
        >
          terminal
        </button>
        <MagneticButton
          href={`${process.env.PUBLIC_URL}${profile.resumeAssetPath}`}
          download
          className="accent-glow inline-flex rounded-none bg-gradient-to-r from-primary to-secondary px-3 py-2 font-headline text-xs font-bold uppercase tracking-widest text-on-primary-container sm:px-5"
        >
          Resume
        </MagneticButton>
        <button
          type="button"
          className="material-symbols-outlined rounded-lg p-2 text-on-surface-variant md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          menu
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-neutral-800 bg-neutral-950/95 px-4 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-headline text-sm font-bold uppercase tracking-tight text-on-surface-variant"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
