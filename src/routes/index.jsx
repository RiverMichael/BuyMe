import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/ui/Layout";
import HomePage from "../components/Pages/HomePage";
import ContactPage from "../components/Pages/ContactPage";
import CartPage from "../components/Pages/CartPage";
import CheckoutPage from "../components/Pages/CheckoutPage";
import ProductDetailsPage from "../components/Pages/ProductDetails";
import PageNotFound from "../components/ui/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
