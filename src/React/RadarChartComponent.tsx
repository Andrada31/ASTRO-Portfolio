import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Frontend",
    AI: 0,
    Web: 95,
    UIUX: 92,
    fullMark: 100,
  },
  {
    subject: "Backend",
    AI: 75,
    Web: 75,
    UIUX: 0,
    fullMark: 100,
  },
  {
    subject: "Data Mining",
    AI: 90,
    Web: 90,
    UIUX: 0,
    fullMark: 100,
  },
  {
    subject: "Model Training",
    AI: 85,
    Web: 0,
    UIUX: 0,
    fullMark: 100,
  },
  {
    subject: "AI Integration",
    AI: 90,
    Web: 0,
    UIUX: 0,
    fullMark: 100,
  },
  {
    subject: "UI/UX",
    AI: 0,
    Web: 0,
    UIUX: 92,
    fullMark: 100,
  },
];

import React, { useState, useEffect } from "react";

const RadarChartComponent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={isMobile ? 250 : 400}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={isMobile ? "60%" : "90%"}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fontSize: 12, fill: "#bfc7d5" }}
        />
        <PolarRadiusAxis
          domain={[0, 100]}
          tick={{ fontSize: 12, fill: "#bfc7d5" }}
        />

        <Radar
          name="AI"
          dataKey="AI"
          stroke="#394ed4ff"
          fill="#394ed4ff"
          fillOpacity={0.6}
        />

        <Radar
          name="Web"
          dataKey="Web"
          stroke="#7287d4"
          fill="#7287d4"
          fillOpacity={0.6}
        />

        <Radar
          name="UI/UX"
          dataKey="UIUX"
          stroke="#faffffff"
          fill="#faffffff"
          fillOpacity={0.6}
        />

        <Legend
          layout={isMobile ? "horizontal" : "vertical"}
          align={isMobile ? "center" : "right"}
          verticalAlign={isMobile ? "bottom" : "middle"}
          wrapperStyle={
            isMobile ? { paddingTop: 20 } : { fontSize: 12, paddingLeft: 22 }
          }
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
