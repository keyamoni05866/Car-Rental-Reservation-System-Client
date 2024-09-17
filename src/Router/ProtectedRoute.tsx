import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { currentToken } from "../Redux/features/auth/authSlice";
import { useAppSelector } from "../Redux/hook";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(currentToken);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
