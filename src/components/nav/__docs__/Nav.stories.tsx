import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Nav, { NavLogo, NavActions, NavLinks } from "../Nav";
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
    children: (
      <>
        <NavLogo>Logo</NavLogo>

        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </>
    ),
  },
};

export const WithLogoAndActions: Story = {
  args: {
    children: (
      <>
        <NavLogo>Logo</NavLogo>

        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </NavLinks>

        <NavActions>
          <Button size="small" primary>
            Dashboard
          </Button>
        </NavActions>
      </>
    ),
  },
};
