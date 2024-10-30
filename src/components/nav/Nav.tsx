import React from "react";
import styled from "styled-components";

export type NavProps = {
  logo?: React.ReactNode;
  links?: { label: string; href: string }[];
  children?: React.ReactNode;
  className?: string;
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;

  .logo {
    font-size: 1.5em;
    font-weight: bold;
  }

  .links {
    display: flex;
    gap: 32px;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      &:hover {
        color: #ed8822;
      }
    }
  }

  .actions {
    display: flex;
    gap: 8px;
    align-items: center;

    .dashboard-button {
      background-color: #ed8822;
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 16px;
      font-weight: 600;
      font-size: 0.9em;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;

      &:hover {
        background-color: #e06c00;
      }
    }
  }
`;

const Nav: React.FC<NavProps> = ({ logo, links, children, className }) => {
  return (
    <StyledNav className={className}>
      <div className="logo">{logo || "BOGBLOG"}</div>
      <div className="links">
        {links?.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
      {children && <div className="actions">{children}</div>}
    </StyledNav>
  );
};

export default Nav;
