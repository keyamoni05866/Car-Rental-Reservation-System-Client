import BookingManage from "../pages/Dashboard/User/BookingManage/BookingManage";
import UserDashboard from "../pages/Dashboard/User/UserDashboard";

export const userPaths = [
  {
    name: "User Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Booking Management",
    path: "booking-management",
    element: <BookingManage />,
  },
];
