import AboutUs from "@/components/AboutUs/AboutUs";
import Cart from "@/components/Cart/Cart";
import Checkout from "@/components/Checkout/Checkout";
import MainLayout from "@/components/Layouts/MainLayout";
import NotFound from "@/components/NotFound/NotFound";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductManagement from "@/components/ProductManagement/ProductManagement";
import Products from "@/components/Products/Products";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/product-management",
        element: <ProductManagement />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
