import { RefObject, useEffect, useState } from "react";

export function useInViewOnce(
  ref: RefObject<Element | null>,
  options?: { rootMargin?: string; threshold?: number; disabled?: boolean }
): boolean {
  const disabled = options?.disabled ?? false;
  const [visible, setVisible] = useState(disabled);

  useEffect(() => {
    if (disabled || visible) return;
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? "0px 0px -8% 0px",
      }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, disabled, visible, options?.rootMargin, options?.threshold]);

  return disabled ? true : visible;
}
