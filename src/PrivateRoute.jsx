import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "./UserContext";

function PrivateRoute() {

  const user = useUserContext();

  return user ? <Outlet /> : <Navigate to="/login"  replace/>;
}

export default PrivateRoute;
