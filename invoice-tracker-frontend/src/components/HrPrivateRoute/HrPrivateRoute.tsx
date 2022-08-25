import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/toolkit-types";

const PrivateRoute = () => {
  const { isAuthenticated, userRole } = useAppSelector(
    (state) => state.AuthenticationSlice
  );
  const isHr = userRole?.includes("ROLE_HR");

  return isHr && isAuthenticated ? <Outlet /> : <Navigate to="/employee" />;
};

export default PrivateRoute;
