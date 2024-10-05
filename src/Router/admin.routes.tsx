import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import ManageBooking from "../pages/Dashboard/Admin/ManageBooking/ManageBooking";
import CarUpdate from "../pages/Dashboard/Admin/ManageCars/CarUpdate";
import ManageCars from "../pages/Dashboard/Admin/ManageCars/ManageCars";
import ManageReturnCar from "../pages/Dashboard/Admin/ManageReturnCars/ManageReturnCar";
import ManageUser from "../pages/Dashboard/Admin/UserManagement/ManageUser/ManageUser";
import UpdateUser from "../pages/Dashboard/Admin/UserManagement/ManageUser/UpdateUser";
import RoleManagement from "../pages/Dashboard/Admin/UserManagement/RoleManagement";
import ProtectedRoute from "./ProtectedRoute";

export const adminPaths = [
  {
    name: "Dashboard Overview",
    path: "dashboard",
    element: (
      <ProtectedRoute requiredRole={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    name: "Car Management",
    path: "car-management",
    element: (
      <ProtectedRoute requiredRole={["admin"]}>
        <ManageCars />
      </ProtectedRoute>
    ),
  },
  {
    name: "",
    path: "update/:id",
    element: (
      <ProtectedRoute requiredRole={["admin"]}>
        <CarUpdate />
      </ProtectedRoute>
    ),
  },

  // Booking management

  {
    name: "Manage Bookings",
    path: "manage-bookings",
    element: (
      <ProtectedRoute requiredRole={["admin"]}>
        <ManageBooking />
      </ProtectedRoute>
    ),
  },
  // manage return car
  {
    name: "Manage Return Cars",
    path: "manage-return-cars",
    element: (
      <ProtectedRoute requiredRole={["admin"]}>
        <ManageReturnCar />
      </ProtectedRoute>
    ),
  },

  {
    name: "User Management",
    children: [
      {
        name: "Role Management",
        path: "role-management",
        element: (
          <ProtectedRoute requiredRole={["admin"]}>
            <RoleManagement />
          </ProtectedRoute>
        ),
      },
      {
        name: "Manage User",
        path: "user-management",
        element: (
          <ProtectedRoute requiredRole={["admin"]}>
            <ManageUser />
          </ProtectedRoute>
        ),
      },
      {
        name: "",
        path: "updateUser/:id",
        element: (
          <ProtectedRoute requiredRole={["admin"]}>
            <UpdateUser />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
