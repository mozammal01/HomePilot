/**
 * Shared accent palette, sampled from the Hero headline gradient
 * (violet -> magenta -> cyan) so every section reads as one system.
 */
export const ACCENT_GRADIENTS = [
  "oklch(0.62 0.19 280)",
  "oklch(0.66 0.18 320)",
  "oklch(0.7 0.15 200)",
  "oklch(0.65 0.17 250)",
] as const;

export function getAccentColor(index: number): string {
  return ACCENT_GRADIENTS[index % ACCENT_GRADIENTS.length];
}
