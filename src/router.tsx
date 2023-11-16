import { Outlet, createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <h1>Hello World</h1>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
