import React from "react";
import Nav, { NavLogo, NavActions, NavLinks } from "../Nav";
import FeatherIcon from "feather-icons-react";

const ExampleNav: React.FC = () => {
  return (
    <Nav>
      <NavLogo>
        <img src="logo.png" alt="Logo" style={{ height: "40px" }} />
      </NavLogo>

      <NavLinks>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </NavLinks>

      <NavActions>
        <button className="dashboard-button">
          <FeatherIcon icon="circle" /> Dashboard
        </button>
        <button className="dashboard-button">Log Out</button>
      </NavActions>
    </Nav>
  );
};

export default ExampleNav;
