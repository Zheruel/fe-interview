import axios from "axios";

import { QueryClient } from "@tanstack/react-query";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const queryClient = new QueryClient();
