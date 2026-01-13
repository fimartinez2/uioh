"use client";

import * as React from "react";
import { useTheme } from "@theme";

export type CanvasBackgroundProps = {
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function CanvasBackground({
  zIndex = -1,
  className,
  style,
}: CanvasBackgroundProps) {
  const t = useTheme();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = t.color.bg.canvas;
      ctx.fillRect(0, 0, width, height);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [t.color.bg.canvas]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex,
        ...style,
      }}
    />
  );
}
