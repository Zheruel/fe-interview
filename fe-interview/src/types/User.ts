export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  image: string;
}

export interface SearchUsersResponse {
  limit: number;
  skip: number;
  total: number;
  users: User[];
}
