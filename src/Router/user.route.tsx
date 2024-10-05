import BookingManage from "../pages/Dashboard/User/BookingManage/BookingManage";
import UserProfile from "../pages/Dashboard/User/DashboardOverview/UserProfile/UserProfile";
import PaymentConfirmation from "../pages/Dashboard/User/PaymentManagement/PaymentConfirmation";
import PaymentMange from "../pages/Dashboard/User/PaymentManagement/PaymentMange";
import ProtectedRoute from "./ProtectedRoute";

export const userPaths = [
  {
    name: "Dashboard Overview",
    children: [
      {
        name: "Profile",
        path: "profile-management",
        element: (
          <ProtectedRoute requiredRole={["user"]}>
            <UserProfile />
          </ProtectedRoute>
        ),
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
  {
    name: "Payment Management",
    path: "payment-management",
    element: <PaymentMange />,
  },
  {
    name: "",
    path: "payment-confirmation",
    element: <PaymentConfirmation />,
  },
];
