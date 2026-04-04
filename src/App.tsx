import React, { useCallback, useEffect, useState } from "react";
import AmbientBackground from "./architect/AmbientBackground";
import Nav from "./architect/Nav";
import Hero from "./architect/Hero";
import CapabilitiesBento from "./architect/CapabilitiesBento";
import StatsStrip from "./architect/StatsStrip";
import ProjectsBento from "./architect/ProjectsBento";
import ExperienceTimeline from "./architect/ExperienceTimeline";
import ContactSection from "./architect/ContactSection";
import Footer from "./architect/Footer";
import Reveal from "./interactive/Reveal";
import SectionRail from "./interactive/SectionRail";
import CommandPalette from "./interactive/CommandPalette";
import TerminalDrawer from "./interactive/TerminalDrawer";
import { useActiveChapter } from "./hooks/useActiveChapter";

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const activeChapter = useActiveChapter();

  const togglePalette = useCallback(() => {
    setPaletteOpen((v) => !v);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePalette();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [togglePalette]);

  return (
    <div className="min-h-screen bg-background font-body text-on-background selection:bg-primary/30 selection:text-on-primary-container">
      <AmbientBackground />
      <Nav onOpenTerminal={() => setTerminalOpen(true)} />
      <SectionRail active={activeChapter} />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />
      <TerminalDrawer
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <main className="relative pt-24">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delayMs={80}>
          <CapabilitiesBento />
        </Reveal>
        <Reveal delayMs={120}>
          <StatsStrip />
        </Reveal>
        <Reveal delayMs={80}>
          <ProjectsBento />
        </Reveal>
        <Reveal delayMs={100}>
          <ExperienceTimeline />
        </Reveal>
        <Reveal delayMs={80}>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
