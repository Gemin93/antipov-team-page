import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/use-auth";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
