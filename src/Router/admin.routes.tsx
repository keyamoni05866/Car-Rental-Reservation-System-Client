import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import CarUpdate from "../pages/Dashboard/Admin/ManageCars/CarUpdate";
import ManageCars from "../pages/Dashboard/Admin/ManageCars/ManageCars";
import UserManagement from "../pages/Dashboard/Admin/UserManagement/UserManagement";
export const adminPaths = [
  {
    name: "Admin Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Car Management",
    path: "car-management",
    element: <ManageCars />,
  },
  {
    path: "update/:id",
    element: <CarUpdate />,
  },

  {
    name: "User Management",
    path: "user-management",
    element: <UserManagement />,
  },
];
