import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const PopUser = ({ isOpen }) => (
    isOpen && (
      <div className="header__pop-user-set pop-user-set" id="user-set-target">
        <p className="pop-user-set__name">Ivan Ivanov</p>
        <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
        <div className="pop-user-set__theme">
          <p>Темная тема</p>
          <input type="checkbox" className="checkbox" name="checkbox" />
        </div>
        <Link to='/login'>
        <button type="button" className="_hover03">
          Выйти
        </button>
        </Link>
      </div>
    )
  );
PopUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
