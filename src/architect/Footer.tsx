import React from "react";
import { profile } from "../data/portfolioContent";

const Footer: React.FC = () => (
  <footer className="mt-auto w-full border-t border-neutral-800/50 bg-neutral-950 px-8 py-12">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex flex-col items-center gap-2 md:items-start">
        <div className="font-headline text-sm font-bold uppercase tracking-tighter text-on-surface">
          {`${profile.brand} // v2.0`}
        </div>
        <div className="font-headline text-[10px] font-medium uppercase tracking-[0.2em] text-on-surface-variant">
          {`© ${new Date().getFullYear()} ${profile.name} // all rights reserved`}
        </div>
      </div>
      <div className="flex gap-8 sm:gap-12">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-[10px] font-medium uppercase tracking-[0.2em] text-on-surface-variant transition-colors duration-300 hover:text-secondary"
        >
          Github
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-[10px] font-medium uppercase tracking-[0.2em] text-on-surface-variant transition-colors duration-300 hover:text-secondary"
        >
          Linkedin
        </a>
        <a
          href={profile.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline text-[10px] font-medium uppercase tracking-[0.2em] text-on-surface-variant transition-colors duration-300 hover:text-secondary"
        >
          Portfolio
        </a>
      </div>
      <div className="flex items-center gap-2 text-primary">
        <span className="material-symbols-outlined text-sm">security</span>
        <span className="font-headline text-[10px] tracking-widest text-on-surface-variant">
          Encrypted_connection
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
