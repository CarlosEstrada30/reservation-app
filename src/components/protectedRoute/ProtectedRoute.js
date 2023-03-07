import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}) => {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("reservation_jwt") ? flag=true : flag=false

  if (!flag) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};