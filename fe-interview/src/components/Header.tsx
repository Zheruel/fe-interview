import React from "react";
import styled from "styled-components";
import { Typography } from "./Typography.tsx";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  gap: 30px;
  height: 150px;
`;

const Item1 = styled(Typography)`
  color: cyan;
`;

const IS_HIDE_WIP_ENABLED = import.meta.env.VITE_REACT_APP_HIDE_WIP;

export const Header: React.FC = () => {
  console.log(IS_HIDE_WIP_ENABLED);

  return (
    <HeaderContainer>
      <Item1 text="Header item 1" fontWeight="bold" />
      <Typography text="Header item 2" fontWeight="bold" />
      <Typography text="Header item 2" fontWeight="bold" />
    </HeaderContainer>
  );
};
