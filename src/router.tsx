import { createBrowserRouter } from "react-router-dom";
import Default from "./layouts/Default";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        index: true,
        element: <h1>Hello World</h1>,
      },
      {
        path: "home",
        element: <Home />,
      },
      { path: "blog", element: <Blog /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
