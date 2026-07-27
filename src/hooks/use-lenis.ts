"use client";

import { useContext } from "react";

import { LenisContext } from "@/components/providers/smooth-scroll-provider";

export function useLenis() {
  return useContext(LenisContext);
}
