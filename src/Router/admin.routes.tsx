import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import UserManagement from "../pages/Dashboard/Admin/UserManagement/Usermanagement";

export const adminPaths = [
  {
    name: "Admin Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    path: "user-management",
    element: <UserManagement />,
  },
];
