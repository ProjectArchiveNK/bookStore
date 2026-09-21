import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Catalog from "../pages/Catalog/Catalog";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "cart", element: <Cart /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default router;
