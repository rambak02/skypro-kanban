import PropTypes from "prop-types";
import * as S from "./Header.styled";
export const Header = ({ onClick, addCard }) => (
  <S.Header>
    <S.Container>
      <S.HeaderBlock>
        <div className="header__logo _show _light">
          <a href="" target="_self">
            <img src="/public/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header__logo _dark">
          <a href="" target="_self">
            <img src="/public/logo_dark.png" alt="logo" />
          </a>
        </div>
        <S.HeaderNav>
          <button
            onClick={addCard}
            className="header__btn-main-new _hover01"
            id="btnMainNew"
          >
            <a href="#">Создать новую задачу</a>
          </button>
          <a
            onClick={onClick}
            href="#user-set-target"
            className="header__user _hover02"
          >
            Ivan Ivanov
          </a>
        </S.HeaderNav>
        </S.HeaderBlock>
    </S.Container>
  </S.Header>
);
Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
};
