import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

export type InputProps = {
  value?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string; // Allow users to pass in their own className
};

const StyledInput = styled.input<InputProps>`
  ${(props) =>
    props.className
      ? "" // If a className is provided, skip applying default styles
      : `
    border: 1px solid #E6E6E6;
    border-radius: 4px;
    padding: ${
      props.size === "small"
        ? "6px 8px"
        : props.size === "medium"
          ? "8px 12px"
          : "10px 16px"
    };
    font-size: ${
      props.size === "small"
        ? "13.33px"
        : props.size === "medium"
          ? "16px"
          : "19.2px"
    };
    width: 100%;
    box-sizing: border-box;
    outline: none; // Remove the default outline
    &:focus {
      border-color: #ED8822; // Change this to your desired color
      box-shadow: 0 0 0 2px rgba(237, 136, 34, 0.2); // Optional: Add a subtle focus shadow
    }
  `}
`;

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  size,
  onChange,
  className,
  ...props
}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      placeholder={placeholder}
      size={size}
      onChange={onChange}
      className={className} // Pass the className down
      {...props}
    />
  );
};

export default Input;
