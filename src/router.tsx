import { Outlet, createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <p className="text-xl font-bold">hello world</p>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
