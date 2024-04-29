import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../contexts/hooks/useUsers";

export const PopUser = ({ isOpen }) => {
  const onSubmitPopUser = (e) => {
    e.preventDefault()
  }
  const {user, userLogout} = useUserContext();

  return (
    isOpen && (
      <div className="header__pop-user-set pop-user-set" >
        <p className="pop-user-set__name">{user.name}</p>
        <p className="pop-user-set__mail">{user.login}</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox" />
        </div>
        <Link to='/login'>
        <button onSubmit={onSubmitPopUser} onClick={userLogout}  type="button" className="_hover03">
          Выйти
        </button>
        </Link>
      </div>
    )
  )}
PopUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
