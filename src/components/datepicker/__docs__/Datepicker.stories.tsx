import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../DatePicker";
import "./CustomButton.css"; // Import the custom button styles

const meta: Meta<typeof DatePicker> = {
  title: "Datepicker",
  component: DatePicker,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const AllowPastDateForDatepickerInput: Story = {
  name: "Input allow past",
  args: {
    disablePastDates: false,
  },
};

export const DisablePastDateForDatepickerInput: Story = {
  name: "Input disallow past",
  args: {
    disablePastDates: true,
  },
};

export const AllowPastDateForDatepickerButton: Story = {
  name: "Button allow past",
  args: {
    disablePastDates: false,
    isButton: true,
  },
};

export const DisablePastDateForDatepickerButton: Story = {
  name: "Button disallow past",
  args: {
    disablePastDates: true,
    isButton: true,
  },
};

export const CustomButtonContent: Story = {
  name: "Button with custom content",
  args: {
    disablePastDates: false,
    isButton: true,
    children: <span>📅 Pick a Date</span>, // Custom content for button label
  },
};

// Wrap DatePicker in CustomButton for custom styling
export const DatePickerAsButtonWithCustomClass: Story = {
  name: "DatePicker as Button with Custom Class",
  args: {
    isButton: true,
    disablePastDates: true,
    className: "custom-button", // Use the custom button class
  },
};
