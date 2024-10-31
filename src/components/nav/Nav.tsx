import React from "react";
import styled from "styled-components";

export type NavProps = {
  children?: React.ReactNode;
  className?: string;
};

const StyledNav = styled.nav`
  ${(props) =>
    props.className
      ? props.className
      : `
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 24px;`}
`;

const StyledNavLogo = styled.div`
  ${(props) =>
    props.className
      ? props.className
      : `
      font-size: 1.5em;
      font-weight: bold;`}
`;

const StyledNavLinks = styled.div`
  ${(props) =>
    props.className
      ? props.className
      : `
      display: flex;
      gap: 32px;

      a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: all 0.1s ease-out;

        &:hover {
          color: #ed8822;
        }
      }`}
`;

const StyledNavActions = styled.div`
  ${(props) =>
    props.className
      ? props.className
      : `
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
      }`}
`;

const Nav: React.FC<NavProps> = ({ children, className }) => {
  return <StyledNav className={className}>{children}</StyledNav>;
};

export const NavLogo: React.FC<NavProps> = ({ children, className }) => (
  <StyledNavLogo className={className}>{children}</StyledNavLogo>
);

export const NavLinks: React.FC<NavProps> = ({ children, className }) => (
  <StyledNavLinks className={className}>{children}</StyledNavLinks>
);

export const NavActions: React.FC<NavProps> = ({ children, className }) => (
  <StyledNavActions className={className}>{children}</StyledNavActions>
);

export default Nav;
