type IllustrativeDataNoteProps = {
  children: string;
  className?: string;
};

export function IllustrativeDataNote({
  children,
  className = "mt-8",
}: IllustrativeDataNoteProps) {
  return (
    <p className={`text-center text-xs text-muted-foreground/70 ${className}`}>
      {children}
    </p>
  );
}
