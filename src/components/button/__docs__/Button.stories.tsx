import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
  tags: ["autodoc"],
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    icon: "",
    primary: true,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Primary_Icon: Story = {
  args: {
    text: "New Draft",
    icon: "plus",
    primary: true,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    icon: "",
    primary: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Secondary_Icon: Story = {
  args: {
    text: "Copy",
    icon: "clipboard",
    primary: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
