import { lazy, Suspense, useEffect, useState } from "react";

const LiquidEther = lazy(() => import("./LiquidEther"));

// The fluid simulation is heavy (three.js + constant GPU work), so phones and
// visitors who prefer reduced motion skip it and never download its code.
const query = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

const LiquidBackground = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const update = () => setEnabled(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <LiquidEther />
    </Suspense>
  );
};

export default LiquidBackground;
