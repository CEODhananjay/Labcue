import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import login from "../pages/auth/login";
import Signup from "../pages/auth/Signup";
import forgotpassword from "../pages/auth/forgotpassword";
import resetpassword from "../pages/auth/resetpassword";
import otp from "../pages/auth/otp";
import cart from "../pages/auth/cart";
import Product from "../pages/Product";
import Collection from "../pages/Collection";
import SidebarCollection from "../layout/SidebarCollection";


export default function Router() {
  const routes = [
    {
      name: "Home",
      path: "/",
      Component: Home,
    },
    {
      name: "Contact",
      path: "/contact",
      Component: Contact,
    },
    {
      name: "About",
      path: "/about",
      Component: About,
    },
    {
      name: "login",
      path: "/login",
      Component: login,
    },
    {
      name: "Signup",
      path: "/signup",
      Component: Signup,
    },
    {
      name: "forgotpassword",
      path: "/forgotpassword",
      Component: forgotpassword,resetpassword
    },
    {
      name: "resetpassword",
      path: "/resetpassword",
      Component: resetpassword,
    },
    {
      name: "otp",
      path: "/otp",
      Component: otp,
    },
    {
      name: "cart",
      path: "/cart",
      Component: cart,
    },
    {
      name: "Product",
      path: "/Product",
      Component: Product,
    },
    {
      name: "Collection",
      path: "/collection",
      Component: Collection,
    },
    {
      name: "SidebarCollection",
      path: "/sidebar",
      Component: SidebarCollection,
    },
  ];
  // ROUTES MAPING
  const Routing = routes.map(({ name, path, Component }, i) => (
    <Route key={i} path={path} element={<Component />} />

)
);
  return (
    <div className="">
        <Routes>{Routing}</Routes>
    </div>
  );
}
