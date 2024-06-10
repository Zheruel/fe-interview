import { axiosInstance } from "./config.ts";

import { SearchUsersResponse } from "../types/User.ts";

export const getUsers = async (): Promise<SearchUsersResponse> => {
  const response =
    await axiosInstance.get<SearchUsersResponse>("/users/search");

  return response.data;
};
