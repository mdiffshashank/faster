import { forwardRef, useId, type InputHTMLAttributes } from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "disabled" | "size"
> {
  /** Visible label text — linked to the input via htmlFor/id for a11y. */
  label?: string;
  /** Additional descriptive text shown below the field. Turns red when error=true. */
  helperText?: string;
  /** Activates error styling, aria-invalid, and colors helperText red. */
  error?: boolean;
  /** Disables editing and applies muted styling. */
  disabled?: boolean;
  /** Marks the field as required — adds a * indicator to the label. */
  required?: boolean;
  /** Size variant of the input. sm = Small, md = Medium, lg = Large. */
  size?: InputSize;
  /**
   * Explicit id for the input element.
   * If omitted, a unique id is auto-generated.
   * Always provide one when using uncontrolled pattern so labels associate correctly.
   */
  id?: string;
}

const inputSizeClasses: Record<InputSize, string> = {
  sm: "px-2.5 py-1 text-xs rounded",
  md: "px-3 py-2 text-sm rounded-md",
  lg: "px-4 py-3 text-base rounded-lg"
};

const labelSizeClasses: Record<InputSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
};

const helperSizeClasses: Record<InputSize, string> = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-sm"
};

/**
 * Text input with label, helper text, error and disabled states.
 *
 * Supports sm, md, and lg sizes, and both controlled (value + onChange) and uncontrolled usage.
 * Full a11y: label association via htmlFor/id, aria-invalid, aria-describedby.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helperText,
    error = false,
    disabled = false,
    required = false,
    size = "md",
    id: providedId,
    className = "",
    ...rest
  },
  ref
) {
  const autoId = useId();
  const inputId = providedId ?? autoId;
  const helperId = `${inputId}-helper`;

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className={["font-medium text-content", labelSizeClasses[size]].join(" ")}
        >
          {label}
          {required && (
            <span aria-hidden="true" className="ml-0.5 text-danger">
              *
            </span>
          )}
          {required && <span className="sr-only">(required)</span>}
        </label>
      )}

      <input
        ref={ref}
        id={inputId}
        disabled={disabled}
        required={required}
        aria-invalid={error || undefined}
        aria-describedby={helperText ? helperId : undefined}
        className={[
          "w-full border transition-colors duration-150",
          inputSizeClasses[size],
          "bg-surface text-content placeholder:text-content-muted",
          "focus:outline-none focus:ring-2 focus:ring-offset-0",
          // State-specific styles
          disabled
            ? "cursor-not-allowed border-disabled-border bg-disabled-bg text-disabled-text"
            : error
              ? "border-danger focus:border-danger focus:ring-danger"
              : "border-stroke hover:border-stroke-strong focus:border-brand focus:ring-brand",
          className
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      />

      {helperText && (
        <p
          id={helperId}
          role={error ? "alert" : undefined}
          className={[error ? "text-danger" : "text-content-muted", helperSizeClasses[size]].join(
            " "
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
});
