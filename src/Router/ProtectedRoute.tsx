import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { currentToken, currentUser } from "../Redux/features/auth/authSlice";
import { useAppSelector } from "../Redux/hook";

type Role = "admin" | "user";
const ProtectedRoute = ({
  children,
  requiredRole,
}: {
  children: ReactNode;
  requiredRole: Role[];
}) => {
  const token = useAppSelector(currentToken);
  const user = useAppSelector(currentUser);
  const getRole = user?.role as Role;
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  if (token && requiredRole && (!getRole || !requiredRole.includes(getRole))) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
