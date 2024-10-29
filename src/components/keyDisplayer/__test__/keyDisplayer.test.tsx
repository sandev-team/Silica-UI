import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import KeyDisplayer from "../keyDisplayer";

describe("KeyDisplayer component", () => {
  it("KeyDisplayer should render correctly", () => {
    render(<KeyDisplayer />);
    const KeyDisplayerElement = screen.getByRole("input");
    expect(KeyDisplayerElement).toBeInTheDocument();
  });
});
