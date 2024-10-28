import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Input",
  component: Example,
  tags: ["autodoc"],
  parameters: {
    doc: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    size: "medium",
    onChange: (e) => console.log("Input changed:", e.target.value),
  },
};

export const Small: Story = {
  args: {
    placeholder: "Small input",
    size: "small",
    onChange: (e) => console.log("Input changed:", e.target.value),
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large input",
    size: "large",
    onChange: (e) => console.log("Input changed:", e.target.value),
  },
};

export const WithValue: Story = {
  args: {
    value: "Pre-filled value",
    size: "medium",
    onChange: (e) => console.log("Input changed:", e.target.value),
  },
};

export const CustomStyle: Story = {
  args: {
    placeholder: "Custom styled input",
    className: "custom-input-class",
    onChange: (e) => console.log("Input changed:", e.target.value),
  },
};
