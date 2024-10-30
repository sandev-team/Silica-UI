import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Nav from "../Nav";
import FeatherIcon from "feather-icons-react";
import { Button } from "../../button";

const meta: Meta<typeof Nav> = {
  title: "Components/Nav",
  component: Nav,
  tags: ["autodoc"],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Basic: Story = {
  args: {
    logo: <span>MyApp</span>,
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export const WithIconsAndActions: Story = {
  args: {
    logo: <span>MyApp</span>,
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    children: (
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <FeatherIcon icon={"moon"} size={16} />
        <Button primary={true}>Sign in</Button>
      </div>
    ),
  },
};

export const CustomStyles: Story = {
  name: "Custom Styles and Elements",
  args: {
    logo: <span style={{ color: "#ED8822" }}>StyledApp</span>,
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
    children: (
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#555",
          color: "#fff",
          borderRadius: "4px",
        }}
      >
        Get Started
      </button>
    ),
    className: "custom-nav",
  },
};
