import PropTypes from 'prop-types';
export function Header({ onClick, addCard }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
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
          <nav className="header__nav">
            <button onClick = {addCard} className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#">Создать новую задачу</a>
            </button>
            <a onClick = {onClick} href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired
}