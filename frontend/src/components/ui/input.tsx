import * as React from "react";
import { randomUUID } from "crypto";

import { cn } from "@/lib/utils";

export type BaseInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends BaseInputProps {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, label, error, id, ...props }, ref) => {
  const inputId = id || randomUUID();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black/90 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          error && "focus-visible:ring-red-600",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
