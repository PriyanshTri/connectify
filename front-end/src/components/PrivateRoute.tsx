import { Route, Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: any;
  isAuthenticated: boolean;
  [key: string]: any;
}
const PrivateRoute = ({ children, isAuthenticated, ...rest }:PrivateRouteProps) => {

  return (
    isAuthenticated ? (
      <Route {...rest}>{children}</Route>
    ) : (
      null
      // <Navigate to="/login" replace={true} /> // Redirect to login if not authenticated
    )
  );
};

export default PrivateRoute;
