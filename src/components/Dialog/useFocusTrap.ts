import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled]):not([aria-disabled='true'])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

/**
 * Traps keyboard focus within a container element while `isActive` is true.
 *
 * - Saves the element that had focus before activation and restores it on deactivation.
 * - Focuses the first focusable element inside the container on activation.
 * - Intercepts Tab / Shift+Tab to cycle within the container.
 */
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    // Save current focus so we can restore it later
    previouslyFocusedRef.current = document.activeElement;

    const container = containerRef.current;

    function getFocusableElements(): HTMLElement[] {
      return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter(
        (el) => !el.closest("[aria-hidden='true']"),
      );
    }

    // Focus the first focusable element
    const focusableEls = getFocusableElements();
    focusableEls[0]?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) {
        e.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
      // Restore focus to the element that was focused before the trap activated
      if (
        previouslyFocusedRef.current instanceof HTMLElement &&
        document.contains(previouslyFocusedRef.current)
      ) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
}
