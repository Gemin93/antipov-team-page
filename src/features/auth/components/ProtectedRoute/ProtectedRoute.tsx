import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/use-auth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
