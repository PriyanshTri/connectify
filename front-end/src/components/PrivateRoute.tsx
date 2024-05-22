import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  path: string; // Include path prop for clarity
  isAuthenticated: boolean;
  redirectTo?: string; // Optional redirect path for flexibility
  [x: string]: any;
}

const PrivateRoute = ({
  component,
  isAuthenticated,
  path,
  redirectTo = "/login",
  ...rest
}: PrivateRouteProps) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login or custom path, preserving intended URL
    return (
      <Navigate
        to={redirectTo || "/login"}
        replace
        state={{ from: location }}
      />
    );
  }

  // Render the protected component when authenticated
  return React.createElement(component, { ...rest }); // Pass additional props using spread syntax
};

export default PrivateRoute;
