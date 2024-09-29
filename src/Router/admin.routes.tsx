import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import CarUpdate from "../pages/Dashboard/Admin/ManageCars/CarUpdate";
import ManageCars from "../pages/Dashboard/Admin/ManageCars/ManageCars";
import ManageUser from "../pages/Dashboard/Admin/UserManagement/ManageUser/ManageUser";
import UpdateUser from "../pages/Dashboard/Admin/UserManagement/ManageUser/UpdateUser";
import RoleManagement from "../pages/Dashboard/Admin/UserManagement/RoleManagement";
import ProtectedRoute from "./ProtectedRoute";

export const adminPaths = [
  {
    name: "Admin Dashboard",
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
