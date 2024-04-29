import { Navigate, Outlet } from "react-router-dom";
import { constRoutes } from "./paths";
import { useUserContext } from "./contexts/hooks/useUsers";

function PrivateRoute() {

  const {user} = useUserContext();

  return user ? <Outlet /> : <Navigate to={constRoutes.LOGIN}  replace/>;
}

export default PrivateRoute;
