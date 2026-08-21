import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "link" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
  /** Visual style of the button. Maps to Figma Fill / Outline / Ghost/ Link themes. */
  variant?: ButtonVariant;
  /** Size of the button. sm = Small, md = Medium body, lg = Large subtitle. */
  size?: ButtonSize;
  /** Disables interaction. Uses aria-disabled (stays focusable) instead of native disabled. */
  disabled?: boolean;
  /** Applies danger color accents. */
  danger?: boolean;
  /** Optional icon placed before the label. */
  leftIcon?: ReactNode;
  /** Optional icon placed after the label. */
  rightIcon?: ReactNode;
  /** Button label text. Optional for icon-only buttons. */
  children?: ReactNode;
}

const baseClasses =
  "inline-flex items-center justify-center font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 select-none";

const sizeClasses = (isIconOnly: boolean, isLink: boolean) => {
  if (isLink) {
    return {
      sm: "text-xs gap-1",
      md: "text-sm gap-1.5",
      lg: "text-base gap-2"
    };
  }
  return {
    sm: isIconOnly ? "w-8 h-8 p-0" : "px-3 py-1.5 text-xs leading-none rounded gap-1",
    md: isIconOnly ? "w-10 h-10 p-0" : "px-4 py-2 text-sm leading-snug rounded-md gap-1.5",
    lg: isIconOnly ? "w-12 h-12 p-0" : "px-6 py-3 text-base leading-normal rounded-sm gap-2"
  };
};

const getVariantClasses = (variant: ButtonVariant, danger: boolean) => {
  const styles: Record<ButtonVariant, { enabled: string; disabled: string }> = {
    primary: {
      enabled: danger
        ? "bg-danger text-content-inverse hover:bg-danger/90 active:bg-danger/80"
        : "bg-brand text-content-inverse hover:bg-brand-hover active:bg-brand-pressed",
      disabled: "bg-disabled-bg text-disabled-text cursor-not-allowed pointer-events-none"
    },
    secondary: {
      enabled: danger
        ? "bg-danger/10 text-danger hover:bg-danger/20 active:bg-danger/30"
        : "bg-surface-muted text-content hover:bg-stroke-strong/20 active:bg-stroke-strong/30",
      disabled: danger
        ? "bg-danger/5 text-disabled-text cursor-not-allowed pointer-events-none"
        : "bg-surface-muted text-disabled-text cursor-not-allowed pointer-events-none"
    },
    outline: {
      enabled: danger
        ? "border border-danger bg-transparent text-danger hover:bg-danger/10 active:bg-danger/20"
        : "border border-stroke-strong bg-transparent text-content hover:bg-surface-muted hover:border-brand hover:text-brand active:bg-surface-muted",
      disabled:
        "border border-disabled-border bg-transparent text-disabled-text cursor-not-allowed pointer-events-none"
    },
    ghost: {
      enabled: danger
        ? "bg-transparent text-danger hover:bg-danger/10 active:bg-danger/20"
        : "bg-transparent text-content hover:bg-surface-muted active:bg-stroke-strong/10",
      disabled: "bg-transparent text-disabled-text cursor-not-allowed pointer-events-none"
    },
    link: {
      enabled: danger
        ? "bg-transparent text-danger hover:underline active:text-danger/80"
        : "bg-transparent text-brand hover:underline active:text-brand/80",
      disabled: "bg-transparent text-disabled-text cursor-not-allowed pointer-events-none"
    }
  };
  return styles[variant];
};

/**
 * Primary interactive control for the Faster design system.
 *
 * Supports five visual variants (primary, secondary, outline, ghost, link), three sizes (sm, md, lg),
 * optional icons, danger variant modifier, and a disabled state that keeps the button keyboard-focusable
 * (aria-disabled) while blocking all interactions.
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  danger = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  onKeyDown,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (disabled && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      return;
    }
    onKeyDown?.(e);
  }

  const isIconOnly = !children && (!!leftIcon || !!rightIcon);
  const sizeCls = sizeClasses(isIconOnly, variant === "link")[size];
  const { enabled, disabled: disabledCls } = getVariantClasses(variant, danger);

  return (
    <button
      type={type}
      aria-disabled={disabled || undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={[baseClasses, sizeCls, disabled ? disabledCls : enabled, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {leftIcon && (
        <span className="shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span className="shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
