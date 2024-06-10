import { createBrowserRouter } from "react-router-dom";

import { Form, HideMe, Users } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/hide",
    element: <HideMe />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);
