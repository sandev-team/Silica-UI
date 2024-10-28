import React, { useState } from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

export type PasswordInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  size?: "small" | "medium" | "large" | "fill";
};

const Wrapper = styled.div<PasswordInputProps & { isFocused: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.isFocused ? "#ED8822" : "#e6e6e6")};
  border-radius: 8px;
  padding: 6px 12px;
  background: #fff;
  width: ${(props) => (props.size === "fill" ? "100%" : "fit-content")};
  box-shadow: ${(props) =>
    props.isFocused ? "0 0 0 2px rgba(237, 136, 34, 0.2)" : "none"};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
`;

const Input = styled.input<PasswordInputProps>`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 4px 8px;
  flex: 1;
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "medium"
        ? "200px"
        : props.size === "large"
          ? "300px"
          : "100%"};
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
  size = "medium",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleToggle = () => setShowPassword((prev) => !prev);

  return (
    <Wrapper className={className} size={size} isFocused={isFocused}>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <ToggleButton onClick={handleToggle}>
        <FeatherIcon icon={showPassword ? "eye-off" : "eye"} size={20} />
      </ToggleButton>
    </Wrapper>
  );
};

export default PasswordInput;
