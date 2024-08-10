import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home/home";
import Profile from "../views/profile/profile";
import AboutUs from "../views/about/about_us";
import News from "../views/news/news";
import ParishListing from "../views/parish_listing/parish_listing";
import CommitteeListing from "../views/committee_listing/committee_listing";
import ContactUs from "../views/contact_us/contact_us";
import Login from "../views/admin_portal/login/login";

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
    title: "Parishes",
  },
  {
    path: "/parishes/parish",
    element: <CommitteeListing />,
    title: "Parish",
  },
  {
    path: "/contactus",
    element: <ContactUs />,
    title: "Contact Us",
  },
  {
    path: "/admin/login",
    element: <Login />,
    title: "Login",
  },
];

export default createBrowserRouter(routes);
