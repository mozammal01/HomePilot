import type { CSSProperties } from "react";

type GridPatternProps = {
  /** Opacity of the grid lines themselves (0-1). */
  lineOpacity?: number;
  /** Size of one grid cell in pixels. */
  cellSize?: number;
  /** CSS radial-gradient() ellipse mask that fades the grid at its edges. */
  mask?: string;
  className?: string;
};

export function GridPattern({
  lineOpacity = 0.06,
  cellSize = 64,
  mask = "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
  className = "absolute inset-0",
}: GridPatternProps) {
  const style: CSSProperties = {
    backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--foreground) ${lineOpacity * 100}%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) ${lineOpacity * 100}%, transparent) 1px, transparent 1px)`,
    backgroundSize: `${cellSize}px ${cellSize}px`,
    maskImage: mask,
    WebkitMaskImage: mask,
  };

  return <div className={className} style={style} />;
}
