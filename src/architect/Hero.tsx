import React from "react";
import { heroCopy, profile } from "../data/portfolioContent";
import HeroParticles from "../interactive/HeroParticles";
import MagneticButton from "../interactive/MagneticButton";
import TiltCard from "../interactive/TiltCard";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmT_V3LmUCR6ct2Fv1NtucmNPFqjP-uzHaocLbwbol7_6RhXmhLJgi1m6O-lq39oWhsUVSMPf-11puJ9ZNt2OcTT290sl6H_WUdMs3ClEQqig2P-FaGDlpX7wwKf6jfHFjEUfq27ZMJGLCy9dsNB6NMs5VY-JQfFIOec3-Me5QT7uUSh0gJBcR1dSz2aU2oSsaStaEgc_cZFdc7QXPv_N8_V1G7E3BFltU9AMlW2syOGAl-iu_aJOj5lyuhIGSX5yJ22zBuEgGv5A";

const Hero: React.FC = () => {
  return (
    <section
      id="story"
      className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-24"
    >
      <HeroParticles />

      <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-outline-variant/20 bg-surface-container-low px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary motion-reduce:animate-none" />
            <span className="font-headline text-[10px] uppercase tracking-widest text-primary">
              {heroCopy.status}
            </span>
          </div>

          <h1 className="mb-8 font-headline text-5xl font-black leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            {heroCopy.headlineBefore}{" "}
            <span className="bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
              {heroCopy.headlineGradient}
            </span>{" "}
            {heroCopy.headlineAfter}
          </h1>

          <p className="mb-12 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant sm:text-xl">
            {heroCopy.sub}
          </p>

          <p className="mb-8 font-headline text-sm uppercase tracking-widest text-outline">
            {profile.name}  |  {profile.location}
          </p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton
              href="#connect"
              className="accent-glow group inline-flex items-center gap-4 rounded-none bg-primary px-6 py-4 font-headline text-sm font-bold uppercase tracking-widest text-on-primary-container transition-colors hover:bg-primary-fixed-dim sm:px-8"
            >
              Initiate protocol
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </MagneticButton>
            <a
              href="#mastery"
              className="flex items-center gap-4 border border-outline-variant/30 px-6 py-4 font-headline text-sm font-bold uppercase tracking-widest transition-all hover:border-primary hover:text-primary sm:px-8"
            >
              Core expertise
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-4">
          <TiltCard className="rounded-2xl" maxDeg={5}>
            <div className="glass-panel group relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={HERO_IMG}
                alt="Abstract neural network visualization"
                className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-2 font-headline text-xs font-bold uppercase tracking-tighter text-primary">
                  Active stack
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container-highest">
                  <div className="h-full w-2/3 bg-primary shadow-[0_0_10px_#8ff5ff]" />
                </div>
              </div>
            </div>
          </TiltCard>

          <div className="absolute -right-4 -top-4 z-20 max-w-[200px] sm:right-0">
            <TiltCard className="rounded-xl" maxDeg={7}>
              <div className="glass-panel rounded-xl border border-outline-variant/20 p-6 shadow-2xl">
                <div className="font-headline text-3xl font-black text-secondary">
                  AI+3D
                </div>
                <div className="font-headline text-[10px] uppercase tracking-widest text-on-surface-variant">
                  Production pipelines
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
