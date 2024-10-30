import React from "react";
import Nav from "../Nav";
import FeatherIcon from "feather-icons-react";

const ExampleNav: React.FC = () => {
  return (
    <Nav
      logo={<span>MyApp</span>}
      links={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ]}
    >
      <FeatherIcon icon={"bell"} size={16} />
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#ED8822",
          color: "#fff",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
      <FeatherIcon icon={"user"} size={16} />
    </Nav>
  );
};

export default ExampleNav;
