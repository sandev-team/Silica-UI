import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
import FeatherIcon from "feather-icons-react";
import "./Button.css";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button", // Updated to use children instead of text
    primary: true,
    size: "small",
    justify: "center",
    onClick: () => console.log("Button clicked"),
  },
};

export const PrimaryWithChildren: Story = {
  args: {
    children: (
      <>
        <FeatherIcon icon={"plus"} size={16} />
        <span>New Draft</span>
      </>
    ), // You can use any JSX as children
    primary: true,
    size: "small",
    onClick: () => console.log("Button clicked"),
  },
};

export const Secondary: Story = {
  args: {
    children: "Button", // Updated to use children instead of text
    primary: false,
    size: "small",
    onClick: () => console.log("Button clicked"),
  },
};

export const SecondaryWithChildren: Story = {
  args: {
    children: (
      <>
        <FeatherIcon icon={"clipboard"} size={16} />
        <span>Copy</span>
      </>
    ), // You can use any JSX as children
    primary: false,
    size: "small",
    onClick: () => console.log("Button clicked"),
  },
};

export const FullSize: Story = {
  args: {
    children: "Full Width Button", // Updated to use children instead of text
    primary: true,
    size: "full",
    justify: "center",
    onClick: () => console.log("Full button clicked"),
  },
};

export const Large: Story = {
  args: {
    children: "Large Button", // Updated to use children instead of text
    primary: true,
    size: "large",
    onClick: () => console.log("Large button clicked"),
  },
};

export const CustomStyle: Story = {
  args: {
    children: "Styled Button", // Updated to use children instead of text
    className: "custom-button-class",
    primary: false,
    size: "medium",
    onClick: () => console.log("Styled button clicked"),
  },
};
