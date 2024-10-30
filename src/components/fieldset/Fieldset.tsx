import React from "react";
import "./CustomFieldset.css"; // Import the CSS file

interface FieldsetProps {
  legend?: string;
  children: React.ReactNode;
  className?: string;
  disable?: boolean;
}

const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  children,
  className,
  disable = false,
}) => {
  return (
    <fieldset className={`${className} ${disable ? "disabled-fieldset" : ""}`}>
      {legend && <legend>{legend}</legend>}
      <div
        style={{
          opacity: disable ? 0.5 : 1,
          pointerEvents: disable ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </fieldset>
  );
};

export default Fieldset;
