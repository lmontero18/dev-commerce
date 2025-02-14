import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "@/context/AuthContext";

const ProtectedRoutes: React.FC = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Navigate to="/" />;
  }

  const { isAuthenticated } = authContext;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
