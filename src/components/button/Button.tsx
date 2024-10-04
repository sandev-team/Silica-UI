import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  icon?: string;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: ${(props) => (props.primary ? "0" : "1px")};
  border-color: ${(props) => (props.primary ? null : "#E6E6E6")};
  border-style: solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  line-height: 1;
  font-size: 16;
  cursor: pointer;
  font-weight: 500;
  font-weight: medium;
  border-radius: 8px;
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  background-color: ${(props) => (props.primary ? "#ED8822" : "#FFFFFF")};
  padding: ${(props) =>
    props.size === "small"
      ? "6px 12px"
      : props.size === "medium"
        ? "8px 24px"
        : "16px 48px"};
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  icon,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      size={size}
      {...props}
    >
      {icon == null || icon == undefined ? null : (
        <FeatherIcon icon={icon} size={16} />
      )}
      {text}
    </StyledButton>
  );
};

export default Button;
