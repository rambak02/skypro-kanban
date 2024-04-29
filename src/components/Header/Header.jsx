import PropTypes from "prop-types";
import * as S from "./Header.styled";
import { Link } from "react-router-dom";
import { constRoutes } from "../../paths";
import { useUserContext } from "../../contexts/hooks/useUsers";
export const Header = ({ togglePopUser, togglePopNewCard, show, }) => {
  const {user} = useUserContext()
  return(
  <S.Header>
    <S.Container>
      <S.HeaderBlock>
        <S.HeaderLogo $show={show}>
          <Link to='/' target="_self">
            <S.HeaderLogoImg src="/public/logo.png" alt="logo" />
          </Link>
        </S.HeaderLogo>
        <S.HeaderLogo>
          <Link to="/" target="_self">
            <S.HeaderLogoImg src="/public/logo_dark.png" alt="logo" />
          </Link>
        </S.HeaderLogo>
        <S.HeaderNav>
          <S.HeaderBtnMainNew onClick={togglePopNewCard} id="btnMainNew">
          <Link to={constRoutes.NEWCARD} target="_self"> <S.HeaderLink>Создать новую задачу</S.HeaderLink>   </Link> 
          </S.HeaderBtnMainNew>
          <S.HeaderUserLink
            onClick={togglePopUser}
          >
            {user.name}
          </S.HeaderUserLink>
        </S.HeaderNav>
      </S.HeaderBlock>
    </S.Container>
  </S.Header>
  )
};
Header.propTypes = {
  togglePopUser: PropTypes.func.isRequired,
  togglePopNewCard: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
