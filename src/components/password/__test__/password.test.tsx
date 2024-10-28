import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PasswordInput from "../password";

describe("PasswordInput component", () => {
  it("PasswordInput should render correctly", () => {
    render(<PasswordInput />);
    const PasswordInputElement = screen.getByRole("input");
    expect(PasswordInputElement).toBeInTheDocument();
  });
});
