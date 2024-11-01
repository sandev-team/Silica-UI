import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Nav, { NavLogo, NavLinks, NavActions } from "../Nav";

describe("Nav component", () => {
  it("should render correctly", () => {
    render(
      <Nav>
        <NavLogo>My Logo</NavLogo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </NavLinks>
        <NavActions>
          <button className="dashboard-button">Dashboard</button>
        </NavActions>
      </Nav>,
    );

    const logo = screen.getByText(/my logo/i);
    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const dashboardButton = screen.getByRole("button", { name: /dashboard/i });

    expect(logo).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(dashboardButton).toBeInTheDocument();
  });

  it("should toggle the sidebar when the menu button is clicked", () => {
    render(
      <Nav>
        <NavLogo>My Logo</NavLogo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </NavLinks>
        <NavActions>
          <button className="dashboard-button">Dashboard</button>
        </NavActions>
      </Nav>,
    );

    const menuButton = screen.getByRole("button", { name: /menu/i });

    // Sidebar should not be in the document initially
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();

    // Click the menu button to open the sidebar
    fireEvent.click(menuButton);
    expect(screen.getByRole("complementary")).toBeInTheDocument();

    // Click the menu button to close the sidebar
    fireEvent.click(menuButton);
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
  });

  it("should close the sidebar when clicking outside of it", () => {
    render(
      <Nav>
        <NavLogo>My Logo</NavLogo>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </NavLinks>
        <NavActions>
          <button className="dashboard-button">Dashboard</button>
        </NavActions>
      </Nav>,
    );

    const menuButton = screen.getByRole("button", { name: /menu/i });

    // Open the sidebar
    fireEvent.click(menuButton);
    expect(screen.getByRole("complementary")).toBeInTheDocument();

    // Click outside to close the sidebar
    fireEvent.mouseDown(document.body);
    expect(screen.queryByRole("complementary")).not.toBeInTheDocument();
  });
});
