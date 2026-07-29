import { cloneElement, isValidElement, type ReactElement } from "react";

import { Label } from "@/components/ui/label";

type FormFieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactElement<Record<string, unknown>>;
};

/**
 * Wraps a registered Input/Textarea with its Label and error message,
 * wiring aria-invalid/aria-describedby automatically.
 */
export function FormField({ id, label, optional, error, children }: FormFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>
        {label}
        {optional && (
          <span className="font-normal text-muted-foreground">(optional)</span>
        )}
      </Label>
      {isValidElement(children)
        ? cloneElement(children, {
            id,
            "aria-invalid": !!error,
            "aria-describedby": error ? errorId : undefined,
          })
        : children}
      {error && (
        <p id={errorId} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
