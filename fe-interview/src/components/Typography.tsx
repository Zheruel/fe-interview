import React from "react";
import styled from "styled-components";

type FontWeights = "bold" | "normal";

interface TypographyContainerProps {
  fontWeight: FontWeights;
}

const TypographyContainer = styled.div<TypographyContainerProps>`
  font-weight: ${(props) => props.fontWeight};
`;

interface TypographyProps {
  text: string;
  fontWeight?: FontWeights;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  text,
  fontWeight = "normal",
  className,
}) => {
  return (
    <TypographyContainer fontWeight={fontWeight} className={className}>
      {text}
    </TypographyContainer>
  );
};
