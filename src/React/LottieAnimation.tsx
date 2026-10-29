import React, { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  path?: string; // Optional: allow custom path, default to /transformer.json
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  path = "/ASTRO-Portfolio/transformer.json",
  width = 290,
  height = 290,
  loop = true,
  autoplay = true,
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animation: AnimationItem | undefined;
    let cancelled = false;

    // Load the SVG-only player and the animation data in parallel
    Promise.all([
      import("lottie-web/build/player/lottie_light"),
      fetch(path).then((res) => res.json()),
    ]).then(([{ default: lottie }, animationData]) => {
      if (cancelled || !containerRef.current) return;
      animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });
    });

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, [path, loop, autoplay]);

  return <div ref={containerRef} style={{ width, height, ...style }} />;
};

export default LottieAnimation;
