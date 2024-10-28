import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    icon: "",
    primary: true,
    size: "small",
    justifyContent: "center",
    onClick: () => console.log("Button clicked"),
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    text: "New Draft",
    icon: "plus",
    primary: true,
    size: "small",
    onClick: () => console.log("Button clicked"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    icon: "",
    primary: false,
    size: "small",
    onClick: () => console.log("Button clicked"),
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    text: "Copy",
    icon: "clipboard",
    primary: false,
    size: "small",
    onClick: () => console.log("Button clicked"),
  },
};

export const FullSize: Story = {
  args: {
    text: "Full Width Button",
    primary: true,
    size: "full",
    onClick: () => console.log("Full button clicked"),
  },
};

export const Large: Story = {
  args: {
    text: "Large Button",
    primary: true,
    size: "large",
    onClick: () => console.log("Large button clicked"),
  },
};

export const CustomStyle: Story = {
  args: {
    text: "Styled Button",
    className: "custom-button-class",
    primary: false,
    size: "medium",
    onClick: () => console.log("Styled button clicked"),
  },
};
