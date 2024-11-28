import BookingManage from "../pages/Dashboard/User/BookingManage/BookingManage";
import BookingHistory from "../pages/Dashboard/User/DashboardOverview/BookingHistory/BookingHistory";
import UserProfile from "../pages/Dashboard/User/DashboardOverview/UserProfile/UserProfile";
import PaymentConfirmation from "../pages/Dashboard/User/PaymentManagement/PaymentConfirmation";
import PaymentMange from "../pages/Dashboard/User/PaymentManagement/PaymentMange";
import ProtectedRoute from "./ProtectedRoute";

export const userPaths = [
  // {
  //   name: "Dashboard Overview",
  //   children: [
  //     {
  //       name: "Profile",
  //       path: "profile-management",
  //       element: (
  //         <ProtectedRoute requiredRole={["user"]}>
  //           <UserProfile />
  //         </ProtectedRoute>
  //       ),
  //     },
  //     {
  //       name: "Booking History",
  //       path: "booking-history",
  //       element: (
  //         <ProtectedRoute requiredRole={["user"]}>
  //           <BookingHistory />
  //         </ProtectedRoute>
  //       ),
  //     },
  //   ],
  // },
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
    element: (
      <ProtectedRoute requiredRole={["user"]}>
        <BookingHistory />
      </ProtectedRoute>
    ),
  },
  {
    name: "Booking Management",
    path: "booking-management",
    element: (
      <ProtectedRoute requiredRole={["user"]}>
        <BookingManage />
      </ProtectedRoute>
    ),
  },
  {
    name: "Payment Management",
    path: "payment-management",
    element: (
      <ProtectedRoute requiredRole={["user"]}>
        <PaymentMange />
      </ProtectedRoute>
    ),
  },
  {
    name: "",
    path: "payment-confirmation",
    element: (
      <ProtectedRoute requiredRole={["user"]}>
        <PaymentConfirmation />
      </ProtectedRoute>
    ),
  },
];
