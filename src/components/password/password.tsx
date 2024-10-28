import React, { useState } from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

export type PasswordInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: "small" | "medium" | "large" | "fill"; // New size prop
};

const Wrapper = styled.div<PasswordInputProps>`
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 6px 12px;
  background: #fff;
  width: ${(props) =>
    props.size === "fill"
      ? "100%"
      : "fit-content"}; // Adjust width based on size
`;

const Input = styled.input<PasswordInputProps>`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 4px 8px;
  flex: 1; // Ensures it fills the available space in the wrapper
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "medium"
        ? "200px"
        : props.size === "large"
          ? "300px"
          : "100%"}; // Adjust width based on size, but stretch to full width if "fill"
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
`;

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder = "Enter password...",
  value,
  onChange,
  className,
  size = "medium", // Default to medium size
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <Wrapper className={className} size={size}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
      />
      <ToggleButton onClick={handleToggle}>
        <FeatherIcon icon={showPassword ? "eye-off" : "eye"} size={20} />
      </ToggleButton>
    </Wrapper>
  );
};

export default PasswordInput;
