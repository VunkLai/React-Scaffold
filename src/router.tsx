import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import { store } from "./app/store";
import { Layouts } from "./layouts";
import { Auth } from "./pages/auth";
import { User } from "./pages/user";

const requireAuth = () => {
  const { app } = store.getState();
  if (app.isAuthenticated) return true;
  throw redirect("/auth/login");
};

const routes = [
  {
    path: "/",
    element: <Layouts.Default />,
    children: [{ index: true, element: <h1>Welcome</h1> }],
  },
  {
    path: "/user",
    element: <Layouts.User />,
    children: [
      { index: true, element: <Navigate to="/user/profile" replace={true} /> },
      { path: "profile", element: <User.Profile /> },
    ],
  },
  {
    path: "/:lang",
    loader: requireAuth,
    element: <Layouts.Default />,
    children: [
      { index: true, element: <h1>Dashboard</h1> },
      { path: "profile", element: <h1>Profile</h1> },
    ],
    errorElement: <Navigate to="/" replace={true} />,
  },
  {
    path: "/auth",
    element: <Layouts.LandingPage />,
    children: [
      { index: true, element: <Auth.Login /> },
      { path: "login", element: <Auth.Login /> },
      { path: "signup", element: <Auth.SignUp /> },
    ],
    errorElement: <Navigate to="/auth" replace={true} />,
  },
];

export const router = createBrowserRouter(routes);
