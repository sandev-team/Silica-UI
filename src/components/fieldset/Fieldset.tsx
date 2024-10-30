import React from "react";

interface FieldsetProps {
  legend?: string;
  children: React.ReactNode;
  className?: string;
}

const Fieldset: React.FC<FieldsetProps> = ({ legend, children, className }) => {
  return (
    <fieldset className={className}>
      {legend && <legend>{legend}</legend>}
      {children}
    </fieldset>
  );
};

export default Fieldset;
