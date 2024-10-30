import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Fieldset from "../Fieldset"; // Ensure the path is correct
import "./CustomFieldset.css"; // Import any custom styles if needed

const meta: Meta<typeof Fieldset> = {
  title: "Fieldset",
  component: Fieldset,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

// Default story demonstrating basic usage
export const Default: Story = {
  args: {
    legend: "Default Fieldset",
    children: (
      <>
        <label>
          <input type="checkbox" /> Option 1
        </label>
        <label>
          <input type="checkbox" /> Option 2
        </label>
      </>
    ),
  },
};

// Disabled state story
export const Disabled: Story = {
  args: {
    legend: "Disabled Fieldset",
    children: (
      <>
        <label>
          <input type="checkbox" disabled /> Option 1
        </label>
        <label>
          <input type="checkbox" disabled /> Option 2
        </label>
      </>
    ),
    className: "disabled-fieldset", // Optional: add a class for styling
  },
};

// Custom styling story
export const WithCustomStyling: Story = {
  args: {
    legend: "Custom Styled Fieldset",
    children: (
      <>
        <label>
          <input type="checkbox" /> Custom Option 1
        </label>
        <label>
          <input type="checkbox" /> Custom Option 2
        </label>
      </>
    ),
    className: "custom-fieldset", // Use custom styling
  },
};

// Fieldset with description
export const FieldsetWithDescription: Story = {
  args: {
    legend: "Fieldset with Description",
    children: (
      <>
        <p>This fieldset contains options related to user preferences.</p>
        <label>
          <input type="checkbox" /> Preference 1
        </label>
        <label>
          <input type="checkbox" /> Preference 2
        </label>
      </>
    ),
  },
};

// Additional stories can be added here as needed
