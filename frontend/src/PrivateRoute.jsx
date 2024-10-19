import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  return sessionStorage.getItem("user") ? <Outlet /> : <Navigate to="/login" />;
};
