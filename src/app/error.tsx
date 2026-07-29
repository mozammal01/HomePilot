"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-5 px-4 py-32 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertTriangle className="size-6" aria-hidden="true" />
      </span>
      <div>
        <h1 className="font-display text-xl font-semibold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
          An unexpected error occurred while loading this page. You can try
          again, or head back to the homepage.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" className="rounded-full" onClick={reset}>
          Try again
        </Button>
        <Button
          className="rounded-full"
          nativeButton={false}
          render={<Link href="/" />}
        >
          Back to home
        </Button>
      </div>
    </main>
  );
}
