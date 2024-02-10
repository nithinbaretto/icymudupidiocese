import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";
import Profile from "../views/profile/profile";

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Auth",
  },
  {
    path: "/profile",
    element: <Profile />,
    title: "Auth",
  },
];

export default createBrowserRouter(routes);
