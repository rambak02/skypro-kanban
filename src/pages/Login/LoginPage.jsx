import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { constRoutes } from "../../paths";
import { loginUser } from "../../api";
export const LoginPage = ({ userLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate

  const handleUserLogin = async (e) => {
    e.preventDefault();
    if (login === '' && password === '') {
      setError('Укажите email и пароль')
    } else if (login === '') {
      setError('Укажите email')
    } else if (password === '') {
      setError('Укажите пароль')
    } else {
      try {
        const response = await loginUser(login, password)
        console.log( response.user)
        userLogin(response.user)
        navigate('/', { replace: true })
      } catch (error) {
        setError(error.message)
      }
    }
            }
 
  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
                className="modal__input"
                type="text"
                value={login}
                onChange={(e)=> setLogin(e.target.value)}
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input"
                type="password"
                value = {password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Пароль"
              />
              { error && <div>{error} </div> }
              <button
                className="modal__btn-enter _hover01"
                id="btnEnter"
                onClick={handleUserLogin}
              >
               Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={constRoutes.REGISTER}>Регистрируйтесь здесь</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
