"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type CTAButtonsProps = {
  className?: string;
  fullWidth?: boolean;
  onNavigate?: () => void;
};

export function CTAButtons({ className, fullWidth, onNavigate }: CTAButtonsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2",
        fullWidth && "w-full flex-col gap-3",
        className
      )}
    >
      <Button
        variant="ghost"
        size={fullWidth ? "lg" : "default"}
        className={cn(fullWidth && "w-full")}
        nativeButton={false}
        render={<Link href={siteConfig.auth.login} onClick={onNavigate} />}
      >
        Log in
      </Button>

      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(fullWidth && "w-full")}
      >
        <Button
          size={fullWidth ? "lg" : "default"}
          className={cn(
            "rounded-full shadow-sm shadow-black/5",
            fullWidth && "w-full"
          )}
          nativeButton={false}
          render={
            <Link href={siteConfig.auth.getStarted} onClick={onNavigate} />
          }
        >
          Get Started
        </Button>
      </motion.div>
    </div>
  );
}
