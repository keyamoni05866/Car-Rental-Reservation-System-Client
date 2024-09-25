import BookingManage from "../pages/Dashboard/User/BookingManage/BookingManage";
import UserProfile from "../pages/Dashboard/User/DashboardOverview/UserProfile/UserProfile";

export const userPaths = [
  {
    name: "Dashboard Overview",
    children: [
      {
        name: "Profile",
        path: "profile-management",
        element: <UserProfile />,
      },
      {
        name: "Booking History",
        path: "booking-history",
        // element: <ManageUser />,
      },
    ],
  },
  {
    name: "Booking Management",
    path: "booking-management",
    element: <BookingManage />,
  },
];
