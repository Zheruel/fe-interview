import React from "react";
import styled from "styled-components";
import { useGetUsers } from "../hooks";

import { BasePage, UserTile } from "../components";

const UsersContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 50px;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 10px;
  margin-top: 20px;
  align-self: center;
`;

export const Users: React.FC = () => {
  const { data, isLoading } = useGetUsers();

  if (isLoading || !data) return null;

  return (
    <BasePage>
      <StyledInput type="text" placeholder="Search users" />
      <UsersContainer>
        {data.users.map((user) => (
          <UserTile key={user.id} user={user} />
        ))}
      </UsersContainer>
    </BasePage>
  );
};
