import React, { FC, useState } from "react";
import PasswordInput, { PasswordInputProps } from "../password";

const Example: FC<PasswordInputProps> = ({
  placeholder = "Enter password...",
  value = "mySecretKey",
  size = "medium", // Default to medium size
  className = "",
}) => {
  const [password, setPassword] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <PasswordInput
        value={password}
        placeholder={placeholder}
        size={size}
        onChange={handleChange}
        className={className}
      />
    </div>
  );
};

export default Example;
