import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../contexts/hooks/useUsers";
import { constRoutes } from "../../../paths";
import * as S from "./PopUser.styled"

export const PopUser = ({ isOpen }) => {
  const onSubmitPopUser = (e) => {
    e.preventDefault()
  }
  const {user } = useUserContext();

  return (
    isOpen && (
      <S.PopUserSet >
        <S.UserName>{user.name}</S.UserName>
        <S.UserMail>{user.login}</S.UserMail>
        <Link to={constRoutes.EXIT}>
        <S.LogoutButton onSubmit={onSubmitPopUser}  type="button" >
          Выйти
        </S.LogoutButton>
        </Link>
      </S.PopUserSet>
    )
  )}
PopUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
