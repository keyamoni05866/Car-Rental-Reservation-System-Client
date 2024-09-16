import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Frontend/Home/Home";
import Main from "../Layout/Main";
import Register from "../pages/Frontend/Register/Register";
import Login from "../pages/Frontend/Login/Login";

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
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
