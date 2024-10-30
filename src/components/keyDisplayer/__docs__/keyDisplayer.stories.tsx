import type { Meta, StoryObj } from "@storybook/react";
import KeyDisplayer from "../keyDisplayer";

const meta: Meta<typeof KeyDisplayer> = {
  title: "Key Displayer",
  component: KeyDisplayer,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeyDisplayer>;

export const Default: Story = {
  args: {
    size: "medium",
    value: "mySecretKey",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    value: "mySecretKey",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    value: "mySecretKey",
  },
};

export const FillWidth: Story = {
  args: {
    size: "fill",
    value: "mySecretKey",
  },
};
