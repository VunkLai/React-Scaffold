import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layouts } from "./layouts";
import { Auth } from "./pages/auth";

const routes = [
  {
    path: "/",
    element: <Layouts.LandingPage />,
    children: [
      { index: true, element: <Auth.Login /> },
      { path: "log_in", element: <Auth.Login /> },
      { path: "sign_up", element: <Auth.SignUp /> },
    ],
    errorElement: <Navigate to="/" replace={true} />,
  },
];

export const router = createBrowserRouter(routes);
