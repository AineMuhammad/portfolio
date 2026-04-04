import React, { useCallback, useEffect, useMemo, useState } from "react";
import { profile } from "../data/portfolioContent";
import { cn } from "../utils/cn";

type Action = {
  id: string;
  label: string;
  hint?: string;
  run: () => void;
};

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

const CommandPalette: React.FC<CommandPaletteProps> = ({ open, onClose }) => {
  const [q, setQ] = useState("");
  const [hi, setHi] = useState(0);

  const actions: Action[] = useMemo(
    () => [
      {
        id: "story",
        label: "Go to Story",
        hint: "#story",
        run: () => {
          document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "projects",
        label: "Go to Projects",
        run: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "mastery",
        label: "Go to Mastery",
        run: () => {
          document.getElementById("mastery")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "connect",
        label: "Go to Connect",
        run: () => {
          document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" });
          onClose();
        },
      },
      {
        id: "email",
        label: "Copy email",
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
          } catch {
            /* ignore */
          }
          onClose();
        },
      },
      {
        id: "resume",
        label: "Open resume (download)",
        run: () => {
          const a = document.createElement("a");
          a.href = "/resume.pdf";
          a.download = "";
          a.click();
          onClose();
        },
      },
      {
        id: "gh",
        label: "Open GitHub",
        run: () => {
          window.open(profile.github, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "in",
        label: "Open LinkedIn",
        run: () => {
          window.open(profile.linkedin, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
    ],
    [onClose]
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(s) ||
        (a.hint && a.hint.toLowerCase().includes(s)) ||
        a.id.includes(s)
    );
  }, [actions, q]);

  useEffect(() => {
    setHi(0);
  }, [q, open]);

  const exec = useCallback(
    (i: number) => {
      const a = filtered[i];
      if (a) a.run();
    },
    [filtered]
  );

  useEffect(() => {
    if (!open) {
      setQ("");
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHi((v) => Math.min(v + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHi((v) => Math.max(v - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        exec(hi);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered.length, hi, exec, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[12vh] backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low shadow-2xl motion-safe:transition-all motion-safe:duration-200">
        <div className="border-b border-outline-variant/20 px-4 py-3">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type a command…"
            className="w-full bg-transparent font-mono text-sm text-on-surface outline-none placeholder:text-on-surface-variant"
          />
          <p className="mt-1 font-mono text-[10px] text-on-surface-variant">
            ↑↓ navigate · enter run · esc close · ctrl+k
          </p>
        </div>
        <ul className="max-h-72 overflow-y-auto py-2">
          {filtered.map((a, i) => (
            <li key={a.id}>
              <button
                type="button"
                onMouseEnter={() => setHi(i)}
                onClick={() => exec(i)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-2.5 text-left font-headline text-sm transition-colors",
                  i === hi
                    ? "bg-primary/15 text-primary"
                    : "text-on-surface hover:bg-surface-container-high"
                )}
              >
                <span>{a.label}</span>
                {a.hint ? (
                  <span className="font-mono text-[10px] text-on-surface-variant">
                    {a.hint}
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
