import React from "react";
import styled from "styled-components";

import { Header } from "./Header.tsx";

const BasePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface BasePageProps {
  children?: React.ReactNode;
}

export const BasePage: React.FC<BasePageProps> = ({ children }) => {
  return (
    <BasePageContainer>
      <Header />
      {children}
    </BasePageContainer>
  );
};
