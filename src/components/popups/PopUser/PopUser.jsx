import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../contexts/hooks/useUsers";
import { constRoutes } from "../../../paths";

export const PopUser = ({ isOpen }) => {
  const onSubmitPopUser = (e) => {
    e.preventDefault()
  }
  const {user } = useUserContext();

  return (
    isOpen && (
      <div className="header__pop-user-set pop-user-set" >
        <p className="pop-user-set__name">{user.name}</p>
        <p className="pop-user-set__mail">{user.login}</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox" />
        </div>
        <Link to={constRoutes.EXIT}>
        <button onSubmit={onSubmitPopUser}  type="button" className="_hover03">
          Выйти
        </button>
        </Link>
      </div>
    )
  )}
PopUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
