import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "PasswordInput",
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

export const Small: Story = {
  args: {
    placeholder: "Small input",
    size: "small",
    value: "mySecretKey",
  },
};

export const Medium: Story = {
  args: {
    placeholder: "Medium input",
    size: "medium",
    value: "mySecretKey",
  },
};

export const Large: Story = {
  args: {
    placeholder: "Large input",
    size: "large",
    value: "mySecretKey",
  },
};

export const Fill: Story = {
  args: {
    placeholder: "Fill input",
    size: "fill",
    value: "mySecretKey",
  },
};
