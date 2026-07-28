import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { renderOgImage } from "@/lib/og-image";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(renderOgImage(), { ...size });
}
