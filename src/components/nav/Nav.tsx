import React, { Fragment, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

export type NavProps = {
  children?: React.ReactNode;
  className?: string;
};

interface SidebarLinksProps {
  gap?: string;
}

const StyledNav = styled.nav`
  ${(props) =>
    props.className
      ? props.className
      : `
      display: flex;
      overflow: hidden;
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
      }

      @media (max-width: 768px) {
        display: none;
      }
  `}
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
      }

      @media (max-width: 768px) {
        display: none;
      }
  `}
`;

const StyledNavLogoLayout = styled.div`
  ${(props) =>
    props.className
      ? props.className
      : `
      flex: 1;
      display: flex;
      justify-content: space-between;
      font-size: 1.5em;
      font-weight: bold;
      @media only screen and (min-width: 768px) {
        display: none;
      }
      `}
`;

const StyledNavMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledNavBurgur = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const StyledNavSidebar = styled.div`
  height: 100vh;
  width: 200px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  top: 0;
  right: 0;
  padding: 16px; /* Padding will be included in total height */
  border-radius: 8px 0 0 8px;
  border: 1px solid #e6e6e6;
  border-right: none;
  background: white;
  transform: translateX(0);
  opacity: 1;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const StyledSidebarLinks = styled.div<SidebarLinksProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) =>
    props.gap || "24px"}; /* Use the prop value or default to 24px */

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: all 0.1s ease-out;

    &:hover {
      color: #ed8822;
    }
  }
`;

const Nav: React.FC<NavProps> = ({ children, className }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const navLogoChildren: React.ReactNode[] = [];
  const navLinksChildren: React.ReactNode[] = [];
  const navActionsChildren: React.ReactNode[] = [];

  const inspectChild = (child: React.ReactNode) => {
    if (React.isValidElement(child)) {
      const childType = child.type;

      if (typeof childType === "string") {
        console.log("Found HTML element:", childType);
      } else if (childType === Fragment) {
        React.Children.forEach(child.props.children, inspectChild);
      } else if ((childType as React.ComponentType).displayName) {
        const displayName = (childType as React.ComponentType).displayName;

        if (displayName === "NavLogo") {
          navLogoChildren.push(child.props.children);
        } else if (displayName === "NavLinks") {
          navLinksChildren.push(child.props.children);
        } else if (displayName === "NavActions") {
          navActionsChildren.push(child.props.children);
        }
      }
    }
  };

  React.Children.forEach(children, inspectChild);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <StyledNav className={className}>
      <StyledNavLogoLayout>{navLogoChildren}</StyledNavLogoLayout>
      <StyledNavMenu>{children}</StyledNavMenu>
      <NavMenus onClick={() => setSidebarOpen(!isSidebarOpen)}>
        <FeatherIcon icon={"menu"} />
      </NavMenus>
      {isSidebarOpen && (
        <StyledNavSidebar ref={sidebarRef}>
          <StyledSidebarLinks gap="24px">{navLinksChildren}</StyledSidebarLinks>
          <StyledSidebarLinks gap="8px">
            {navActionsChildren}
          </StyledSidebarLinks>
        </StyledNavSidebar>
      )}
    </StyledNav>
  );
};

export const NavLogo: React.FC<NavProps> = ({ children, className }) => (
  <StyledNavLogo className={className}>{children}</StyledNavLogo>
);
NavLogo.displayName = "NavLogo";

export const NavLinks: React.FC<NavProps> = ({ children, className }) => (
  <StyledNavLinks className={className}>{children}</StyledNavLinks>
);
NavLinks.displayName = "NavLinks";

export const NavActions: React.FC<NavProps> = ({ children, className }) => (
  <StyledNavActions className={className}>{children}</StyledNavActions>
);
NavActions.displayName = "NavActions";

export const NavMenus: React.FC<{
  onClick: () => void;
  children?: React.ReactNode;
}> = ({ onClick, children }) => (
  <StyledNavBurgur onClick={onClick}>{children}</StyledNavBurgur>
);

export default Nav;
