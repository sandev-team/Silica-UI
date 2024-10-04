import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  onClick = () => {},
  primary = true,
  size = "small",
  icon = "plus",
  text = "Button",
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
        onClick={onClick}
        primary={primary}
      />
    </div>
  );
};

export default Example;
