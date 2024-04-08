import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired
  };