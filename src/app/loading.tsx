export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-32">
      <span className="relative flex size-3">
        <span className="absolute size-full animate-ping rounded-full bg-foreground/40" />
        <span className="relative inline-flex size-3 rounded-full bg-foreground/70" />
      </span>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
