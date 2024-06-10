import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../api/users.ts";

export const useGetUsers = () => {
  return useQuery({ queryKey: ["todos"], queryFn: getUsers });
};
