import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/ui/Layout";
import HomePage from "../components/Pages/HomePage";
import ContactPage from "../components/Pages/ContactPage";
import CheckoutPage from "../components/Pages/CheckoutPage";
import CheckoutSuccessPage from "../components/Pages/CheckoutSuccessPage";
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
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "checkoutsuccess",
        element: <CheckoutSuccessPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
