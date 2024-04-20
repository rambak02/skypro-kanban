import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({user}) {

  return user ? <Outlet /> : <Navigate to="/login"  replace/>;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    user: PropTypes.object.isRequired
  };