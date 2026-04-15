import React, { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolioContent";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type TerminalDrawerProps = {
  open: boolean;
  onClose: () => void;
};

const PROMPT = "ain.e@portfolio:~$";

const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ open, onClose }) => {
  const reduced = usePrefersReducedMotion();
  const [lines, setLines] = useState<string[]>([
    "AIN.E_OS shell — type `help` for commands.",
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  }, [lines, open, reduced]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const push = useCallback((s: string) => {
    setLines((prev) => [...prev, s]);
  }, []);

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;
      push(`${PROMPT} ${raw}`);
      switch (cmd) {
        case "help":
          push(
            "commands: help · clear · story · projects · mastery · connect · github · linkedin · email · resume · exit"
          );
          break;
        case "clear":
          setLines([]);
          break;
        case "story":
          document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
          push("// scrolled to #story");
          break;
        case "projects":
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          push("// scrolled to #projects");
          break;
        case "mastery":
          document.getElementById("mastery")?.scrollIntoView({ behavior: "smooth" });
          push("// scrolled to #mastery");
          break;
        case "connect":
          document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
          push("// scrolled to #connect");
          break;
        case "github":
          window.open(profile.github, "_blank", "noopener,noreferrer");
          push("// opened github");
          break;
        case "linkedin":
          window.open(profile.linkedin, "_blank", "noopener,noreferrer");
          push("// opened linkedin");
          break;
        case "email":
          window.location.href = `mailto:${profile.email}`;
          push("// mail client opened");
          break;
        case "resume":
          {
            const a = document.createElement("a");
            a.href = "/Portfolio/Resume.pdf";
            a.download = "";
            a.click();
          }
          push("// resume download triggered");
          break;
        case "exit":
        case "close":
          onClose();
          break;
        default:
          push(`command not found: ${cmd.split(/\s+/)[0]} — try help`);
      }
    },
    [onClose, push]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run(input);
    setInput("");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex flex-col justify-end bg-black/50 backdrop-blur-[2px]"
      role="dialog"
      aria-label="Terminal"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={cn(
          "mx-auto mb-0 w-full max-w-3xl overflow-hidden rounded-t-xl border border-outline-variant/30 bg-[#0a0a0a] shadow-2xl",
          !reduced && "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out"
        )}
      >
        <div className="flex items-center justify-between border-b border-outline-variant/25 bg-surface-container-low px-4 py-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            terminal // ain.e_os
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-on-surface-variant hover:text-primary"
          >
            esc
          </button>
        </div>
        <div className="max-h-[45vh] overflow-y-auto p-4 font-mono text-xs leading-relaxed text-primary/90">
          {lines.map((line, i) => (
            <div key={`${i}-${line.slice(0, 12)}`} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <form onSubmit={onSubmit} className="border-t border-outline-variant/25 p-3">
          <div className="flex items-center gap-2">
            <span className="shrink-0 text-primary/80">{PROMPT}</span>
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-w-0 flex-1 bg-transparent font-mono text-sm text-on-surface outline-none"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TerminalDrawer;
