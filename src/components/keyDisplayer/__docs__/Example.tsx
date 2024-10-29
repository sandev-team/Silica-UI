import React, { FC } from "react";
import KeyDisplayer, { KeyDisplayerProps } from "../keyDisplayer";

const Example: FC<KeyDisplayerProps> = ({
  size = "medium",
  value = "mySecretKey",
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
      <KeyDisplayer value={value} size={size} />
    </div>
  );
};

export default Example;
