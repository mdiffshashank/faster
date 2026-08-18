import { useEffect, useId, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useFocusTrap } from "./useFocusTrap";

export type DialogSize = "sm" | "md" | "lg";

export interface DialogProps {
  /** Controls dialog visibility. */
  open: boolean;
  /** Dialog heading — announced to screen readers via aria-labelledby. */
  title: string;
  /** Dialog body content. */
  children: ReactNode;
  /**
   * Optional footer content (e.g. action buttons).
   * Renders in a bordered footer section below the body.
   */
  footer?: ReactNode;
  /** Size variant of the dialog panel. sm = max-w-sm, md = max-w-md, lg = max-w-lg. */
  size?: DialogSize;
  /**
   * Fired when the dialog should close.
   * Triggers on: ESC key, backdrop click, or close button click.
   */
  onClose: () => void;
}

const dialogSizeClasses: Record<DialogSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

/**
 * Accessible modal dialog for the Faster design system.
 *
 * Implements WCAG 2.1 AA modal pattern:
 * - Supports sm, md, and lg size variants
 * - Focus trap (Tab / Shift+Tab cycle within the dialog)
 * - Returns focus to the trigger element on close
 * - aria-modal, role="dialog", aria-labelledby
 * - ESC key closes
 * - Backdrop click closes
 * - Body scroll locked while open
 */
export function Dialog({ open, title, children, footer, size = "md", onClose }: DialogProps) {
  const dialogId = useId();
  const titleId = `${dialogId}-title`;
  const containerRef = useFocusTrap(open);

  // Lock body scroll while dialog is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on ESC key (attached at document level to catch events outside the dialog)
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
        data-testid="dialog-backdrop"
      />

      {/* Dialog panel */}
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={[
          "relative z-10 flex w-full flex-col rounded-xl bg-surface shadow-elevation-4",
          dialogSizeClasses[size],
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stroke px-6 py-4">
          <h2 id={titleId} className="text-base font-medium text-content">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md p-1 text-content-muted transition-colors duration-150 hover:bg-surface-muted hover:text-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {/* X icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-4 text-sm text-content-muted">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-stroke px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
