import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../Input";

describe("Input component", () => {
  it("Input should render correctly", () => {
    render(<Input />);
    const Input = screen.getByRole("input");
    expect(Input).toBeInTheDocument();
  });
});
