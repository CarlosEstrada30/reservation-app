import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/reservation-app",
  children,
}) => {
    let flag = false;
    console.log("verificando token")
    //check user has JWT token
    localStorage.getItem("reservation_jwt") ? flag=true : flag=false

  if (!flag) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};