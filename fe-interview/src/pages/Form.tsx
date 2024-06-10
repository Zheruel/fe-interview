import React from "react";
import styled from "styled-components";
import { Typography } from "../components/Typography.tsx";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 500px;
  height: 200px;
  border-radius: 5px;
  background-color: lightgray;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  align-self: flex-end;
`;

export const Form: React.FC = () => {
  return (
    <FormContainer>
      <FormDiv>
        <Typography text="Email" />
        <input type="email" placeholder="Email" />
        <Typography text="Password" />
        <input type="password" placeholder="Password" />
        <StyledButton>Login</StyledButton>
      </FormDiv>
    </FormContainer>
  );
};
