import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the main Faster UI heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /faster ui/i })).toBeInTheDocument();
  });
});
