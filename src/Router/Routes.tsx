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

const router = createBrowserRouter([
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
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(userPaths),
  },
]);

export default router;
