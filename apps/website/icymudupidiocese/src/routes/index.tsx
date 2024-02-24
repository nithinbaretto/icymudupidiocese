import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";
import Profile from "../views/profile/profile";
import AboutUs from "../views/about/about_us";
import News from "../views/news/news";

export const routes = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/profile",
    element: <Profile />,
    title: "Profile",
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
    title: "About us",
  },
  {
    path: "/news",
    element: <News />,
    title: "News",
  },
];

export default createBrowserRouter(routes);
