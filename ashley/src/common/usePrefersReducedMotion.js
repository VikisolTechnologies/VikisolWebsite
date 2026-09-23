import { useEffect, useState } from "react";

// Same reduced-motion check already used by InteractiveProjectCard/InteractiveMediaFrame, lifted
// into a shared hook. Starts false (matching the server-rendered/pre-hydration DOM) and updates
// after mount, so it never causes a hydration mismatch.
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
}
