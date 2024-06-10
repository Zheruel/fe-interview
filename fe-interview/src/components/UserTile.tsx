import React from "react";
import styled from "styled-components";

import { User } from "../types/User.ts";

const UserTileContainer = styled.div`
  text-align: center;
  padding: 10px;
  background-color: gray;
  border-radius: 5px;
`;

interface UserTileProps {
  user: User;
}

export const UserTile: React.FC<UserTileProps> = ({ user }) => {
  return (
    <UserTileContainer>
      <img src={user.image} alt="user" />
      <div>
        {user.firstName} {user.lastName}
      </div>
      <div>{user.age}</div>
    </UserTileContainer>
  );
};
