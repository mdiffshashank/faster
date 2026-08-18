import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Dialog } from "./components/Dialog";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  function handleEmailBlur() {
    setEmailError(email.length > 0 && !email.includes("@"));
  }

  return (
    <div className="min-h-screen bg-surface text-content transition-colors duration-200">
      <main className="mx-auto max-w-3xl p-8 space-y-12">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium text-content">Faster UI</h1>
            <p className="mt-1 text-sm text-content-muted">Design System Component Library</p>
          </div>
          <Button
            variant="secondary"
            size="md"
            onClick={toggleTheme}
            leftIcon={
              <span aria-hidden="true" className="text-base">
                {theme === "dark" ? "☀️" : "🌙"}
              </span>
            }
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </Button>
        </header>

        {/* Button section */}
        <section aria-labelledby="button-heading" className="space-y-4">
          <h2 id="button-heading" className="text-lg font-medium text-content border-b border-stroke pb-2">
            Button
          </h2>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wider text-content-muted">Variants</p>
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wider text-content-muted">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wider text-content-muted">Disabled</p>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Primary</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="ghost" disabled>Ghost</Button>
            </div>
          </div>
        </section>

        {/* Input section */}
        <section aria-labelledby="input-heading" className="space-y-4">
          <h2 id="input-heading" className="text-lg font-medium text-content border-b border-stroke pb-2">
            Input
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              label="Email address"
              id="demo-email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              error={emailError}
              helperText={emailError ? "Please enter a valid email address." : "We'll never share your email."}
            />
            <Input
              label="Username"
              id="demo-username"
              placeholder="Enter username"
              required
            />
            <Input
              label="Disabled field"
              id="demo-disabled"
              value="Cannot edit this"
              disabled
            />
            <Input
              label="Error state"
              id="demo-error"
              value="invalid-value"
              error
              helperText="This field has an error."
            />
          </div>
        </section>

        {/* Dialog section */}
        <section aria-labelledby="dialog-heading" className="space-y-4">
          <h2 id="dialog-heading" className="text-lg font-medium text-content border-b border-stroke pb-2">
            Dialog
          </h2>

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
            <Button variant="secondary" onClick={() => setConfirmDialogOpen(true)}>
              Confirm action
            </Button>
          </div>
        </section>
      </main>

      {/* Simple dialog */}
      <Dialog
        open={dialogOpen}
        title="Welcome to Faster UI"
        onClose={() => setDialogOpen(false)}
      >
        <p>
          This dialog is fully accessible — it traps focus, locks body scroll, closes on ESC or
          backdrop click, and returns focus to the trigger button when closed.
        </p>
      </Dialog>

      {/* Confirm dialog */}
      <Dialog
        open={confirmDialogOpen}
        title="Confirm action"
        onClose={() => setConfirmDialogOpen(false)}
        footer={
          <>
            <Button variant="ghost" onClick={() => setConfirmDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setConfirmDialogOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p>Are you sure you want to proceed? This action cannot be undone.</p>
      </Dialog>
    </div>
  );
}

export default App;
