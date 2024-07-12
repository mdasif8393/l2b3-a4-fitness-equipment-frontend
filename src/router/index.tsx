import AboutUs from "@/components/AboutUs/AboutUs";
import Cart from "@/components/Cart/Cart";
import Checkout from "@/components/Checkout/Checkout";
import CategoryProducts from "@/components/Home/CategoryProducts";
import MainLayout from "@/components/Layouts/MainLayout";
import NotFound from "@/components/NotFound/NotFound";
import ProductManagement from "@/components/ProductManagement/ProductManagement";
import Products from "@/components/Products/Products";
import SingleProduct from "@/components/SingleProduct/SingleProduct";
import Success from "@/components/Success/Success";
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
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "product/:productId",
        element: <SingleProduct />,
      },
      {
        path: "product-management",
        element: <ProductManagement />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "category-products/:category",
        element: <CategoryProducts />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
