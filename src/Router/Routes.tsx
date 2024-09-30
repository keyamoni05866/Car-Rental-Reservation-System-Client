import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Frontend/Home/Home";
import Main from "../Layout/Main";
import Register from "../pages/Frontend/Register/Register";
import Login from "../pages/Frontend/Login/Login";

import { routeGenerator } from "../pages/Dashboard/utils/routesGenerator";
import DashboardLayout from "../Layout/DashboardLayout";
import { adminPaths } from "./admin.routes";
import ProtectedRoute from "./ProtectedRoute";
import { userPaths } from "./user.route";
import Cars from "../pages/Frontend/Cars/Cars";
import CarDetails from "../pages/Frontend/CarDetails/CarDetails";
import AboutUs from "../pages/Frontend/AboutUs/AboutUs";
import Contact from "../pages/Frontend/Contact/Contact";
import Error from "../pages/Error/Error";
import Booking from "../pages/Frontend/Booking/Booking";
import ReviewBooking from "../pages/Frontend/Booking/ReviewBooking";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "cars/:id",
        element: <CarDetails />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/booking",
        element: (
          <ProtectedRoute requiredRole={["admin", "user"]}>
            <Booking />
          </ProtectedRoute>
        ),
      },
      {
        path: "/booking-confirmation",
        element: (
          <ProtectedRoute requiredRole={["user"]}>
            <ReviewBooking />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRole={["admin"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute requiredRole={["user"]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(userPaths),
  },
]);

export default router;
