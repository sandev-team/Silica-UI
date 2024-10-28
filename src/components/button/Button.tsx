import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  icon?: string;
  size?: "small" | "medium" | "large";
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
    gap: 8px;
    line-height: 1;
    font-size: ${
      props.size === "small"
        ? "13.33px"
        : props.size === "medium"
          ? "16px"
          : "19.2px"
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
          : "16px 48px"
    };
  `}
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  icon,
  text,
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
      {icon ? (
        <FeatherIcon
          icon={icon}
          size={size === "small" ? "16px" : size === "medium" ? "20px" : "24px"}
        />
      ) : null}
      {text}
    </StyledButton>
  );
};

export default Button;
