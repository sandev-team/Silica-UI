import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export type ButtonProps = {
  children?: React.ReactNode; // Use children instead of text
  primary?: boolean;
  size?: "small" | "medium" | "large" | "full"; // Added 'full' size option
  justify?: "left" | "center" | "right";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string; // Allow users to pass in their own className
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) =>
    props.className
      ? "" // If a className is provided, skip applying default styles
      : `
    border: ${props.primary ? "0" : "1px solid #E6E6E6"};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props.justify};
    gap: 8px;
    line-height: 1;
    font-size: ${
      props.size === "small"
        ? "13.33px"
        : props.size === "medium"
          ? "16px"
          : props.size === "large"
            ? "19.2px"
            : "16px"
    };
    cursor: pointer;
    font-weight: 500;
    border-radius: 8px;
    color: ${props.primary ? "#fff" : "#000"};
    background-color: ${props.primary ? "#ED8822" : "#FFFFFF"};
    padding: ${
      props.size === "small"
        ? "6px 12px"
        : props.size === "medium"
          ? "8px 24px"
          : props.size === "large"
            ? "16px 48px"
            : "8px 24px"
    };
    width: ${props.size === "full" ? "100%" : "auto"}; // Full width for 'full' size
    height: ${props.size === "full" ? "100%" : "auto"}; // Full height for 'full' size
    transition: background-color 0.2s, transform 0.1s;

    &:hover {
      background-color: ${props.primary ? "#D9731D" : "#F7F7F7"};
    }

    &:active {
      background-color: ${props.primary ? "#C8651A" : "#E6E6E6"};
      transform: scale(0.98); // Slightly scale down to give a "pressed" effect
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  children, // Use children prop
  onClick,
  className,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      size={size}
      className={className} // Pass the className down
      {...props}
    >
      {children} {/* Render children instead of text */}
    </StyledButton>
  );
};

export default Button;
