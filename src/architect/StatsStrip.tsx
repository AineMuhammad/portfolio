import React from "react";
import { stats } from "../data/portfolioContent";

const StatsStrip: React.FC = () => (
  <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8">
    <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4 md:gap-12">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="text-glow mb-2 font-headline text-4xl font-black sm:text-5xl">
            {s.value}
          </div>
          <div className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsStrip;
