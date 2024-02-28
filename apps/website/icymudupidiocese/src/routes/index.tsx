import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";
import Profile from "../views/profile/profile";
import AboutUs from "../views/about/about_us";
import News from "../views/news/news";
import ParishListing from "../views/parish_listing/parish_listing";

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
    path: "/about",
    element: <AboutUs />,
    title: "About",
  },
  {
    path: "/news",
    element: <News />,
    title: "News",
  },
  {
    path: "/parishes",
    element: <ParishListing />,
    title: "Parish",
  },
];

export default createBrowserRouter(routes);
