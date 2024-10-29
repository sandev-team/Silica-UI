import React, { useState } from "react";
import styled from "styled-components";
import FeatherIcon from "feather-icons-react";

export type KeyDisplayerProps = {
  value?: string;
  className?: string;
  size?: "small" | "medium" | "large" | "fill";
};

const Wrapper = styled.div<KeyDisplayerProps>`
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding: 6px 12px;
  background: #fff;
  width: ${(props) => (props.size === "fill" ? "" : "fit-content")};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
`;

const KeyDisplay = styled.span<KeyDisplayerProps & { copied: boolean }>`
  font-size: 16px;
  padding: 4px 8px;
  color: ${(props) => (props.copied ? "#ED8822" : "#333")};
  cursor: pointer;
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "medium"
        ? "200px"
        : props.size === "large"
          ? "300px"
          : "100%"};
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  transition: color 0.1s ease; // Smooth color transition
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
`;

const KeyDisplayer: React.FC<KeyDisplayerProps> = ({
  value,
  className,
  size = "medium",
}) => {
  const [showKey, setShowKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleToggle = () => setShowKey((prev) => !prev);

  const handleCopy = () => {
    if (value) {
      navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => setCopied(false), 1000);
    }
  };

  return (
    <Wrapper className={className} size={size}>
      <KeyDisplay size={size} copied={copied} onClick={handleCopy}>
        {copied ? "Key Copied" : showKey ? value : "•".repeat(12)}
      </KeyDisplay>
      <ToggleButton onClick={handleToggle}>
        <FeatherIcon icon={showKey ? "eye-off" : "eye"} size={20} />
      </ToggleButton>
    </Wrapper>
  );
};

export default KeyDisplayer;
