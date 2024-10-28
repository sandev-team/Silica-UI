import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  onClick = () => {},
  primary = true,
  size = "small",
  icon = "plus",
  text = "Button",
  justifyContent = "center",
  className = "",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button
        size={size}
        text={text}
        icon={icon}
        justifyContent={justifyContent}
        onClick={onClick}
        primary={primary}
        className={className}
      />
    </div>
  );
};

export default Example;
