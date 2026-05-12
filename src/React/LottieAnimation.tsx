import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  path?: string; // Optional: allow custom path, default to /transformer.json
  width?: number | string;
  height?: number | string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  path = "/transformer.json",
  width = 290,
  height = 290,
  loop = true,
  autoplay = true,
  style = {},
}) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, [path]);

  return (
    <div style={{ width, height, ...style }}>
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
};

export default LottieAnimation;
