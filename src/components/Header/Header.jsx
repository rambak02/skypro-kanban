import PropTypes from "prop-types";
import * as S from "./Header.styled";
import { Link } from "react-router-dom";
export const Header = ({ onClick, addCard, show }) => (
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
          <S.HeaderBtnMainNew onClick={addCard} id="btnMainNew">
            <S.HeaderLink href="#">Создать новую задачу</S.HeaderLink>
          </S.HeaderBtnMainNew>
          <S.HeaderUserLink
            onClick={onClick}
            href="#user-set-target"
          >
            Ivan Ivanov
          </S.HeaderUserLink>
        </S.HeaderNav>
      </S.HeaderBlock>
    </S.Container>
  </S.Header>
);
Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
