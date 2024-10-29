import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DatePicker from "../DatePicker";

describe("DatePicker component", () => {
  it("should render an input with a placeholder", () => {
    render(<DatePicker placeholder="Select a date" onDateChange={() => {}} />);
    const input = screen.getByPlaceholderText("Select a date");
    expect(input).toBeInTheDocument();
  });

  it("should open calendar on input click", () => {
    render(<DatePicker onDateChange={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.click(input);

    // Expect the calendar to open (look for the calendar container)
    const calendar = screen.getByRole("grid"); // assuming grid role for calendar container
    expect(calendar).toBeInTheDocument();
  });

  it("should display the selected date in the input", () => {
    const selectedDate = new Date(2024, 9, 28); // October 28, 2024
    render(<DatePicker selectedDate={selectedDate} onDateChange={() => {}} />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("10/28/2024"); // format based on `toLocaleDateString()`
  });
});
