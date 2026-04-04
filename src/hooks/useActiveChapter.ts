import { useEffect, useState } from "react";

const CHAPTERS = ["story", "projects", "mastery", "connect"] as const;
export type ChapterId = (typeof CHAPTERS)[number];

export function useActiveChapter(): ChapterId {
  const [active, setActive] = useState<ChapterId>("story");

  useEffect(() => {
    const pick = () => {
      const probeY = window.innerHeight * 0.28;
      let current: ChapterId = "story";
      for (const id of CHAPTERS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= probeY) current = id;
      }
      setActive(current);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick, { passive: true });
    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, []);

  return active;
}
