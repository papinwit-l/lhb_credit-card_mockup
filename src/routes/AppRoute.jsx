import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import CreditCard from "@/pages/CreditCard";
import CreditCardV2 from "@/pages/CreditCardV2";
import Design from "@/pages/Design";
import HomePage from "@/pages/HomePage";
import HomePageV2 from "@/pages/HomePageV2";
import Product from "@/pages/Product";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "credit-cards",
        element: <CreditCard />,
      },
    ],
  },
  {
    path: "/v2",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePageV2 />,
      },
      {
        path: "credit-cards",
        element: <CreditCardV2 />,
      },
    ],
  },
]);

function AppRoute() {
  return <RouterProvider router={router} />;
}

export default AppRoute;
