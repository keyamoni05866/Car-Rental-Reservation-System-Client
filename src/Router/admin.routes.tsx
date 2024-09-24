import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import CarUpdate from "../pages/Dashboard/Admin/ManageCars/CarUpdate";
import ManageCars from "../pages/Dashboard/Admin/ManageCars/ManageCars";
import ManageUser from "../pages/Dashboard/Admin/UserManagement/ManageUser/ManageUser";
import UpdateUser from "../pages/Dashboard/Admin/UserManagement/ManageUser/UpdateUser";
import RoleManagement from "../pages/Dashboard/Admin/UserManagement/RoleManagement";

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
    name: "",
    path: "update/:id",
    element: <CarUpdate />,
  },

  {
    name: "User Management",
    children: [
      {
        name: "Role Management",
        path: "role-management",
        element: <RoleManagement />,
      },
      {
        name: "Manage User",
        path: "user-management",
        element: <ManageUser />,
      },
      {
        name: "",
        path: "updateUser/:id",
        element: <UpdateUser />,
      },
    ],
  },
];
