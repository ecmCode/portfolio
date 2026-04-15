import Home from "@/pages";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Home", () => {
  beforeEach(() => render(<Home />));
  afterEach(() => cleanup());
  it("should render the component", () => {
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
  it("should render the heading", () => {
    const heading = screen.getByRole("heading", {
      name: "Portfolio",
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});
