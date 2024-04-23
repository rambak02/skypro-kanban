import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { constRoutes } from "../../paths";
import { useLogin } from "../hooks";
import { loginUser } from "../../api";
import * as S from "./LoginPage.styled";
export const LoginPage = ({ userLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate;
  const { handleLogin, error } = useLogin(loginUser, userLogin, navigate);
  const handleUserLogin = async (e) => {
    e.preventDefault();
    handleLogin(login, password);
  };

  return (
    <S.Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <S.ModalTtl>Вход</S.ModalTtl>
            </S.ModalTtl>
            <S.FormLogin id="formLogIn" action="#">
              <S.Input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
              {error && <div>{error} </div>}
              <S.ButtonEnter id="btnEnter" onClick={handleUserLogin}>
                Войти
              </S.ButtonEnter>
              <S.FormGroup>
                <S.FormGroupText>Нужно зарегистрироваться?</S.FormGroupText>

                <Link to={constRoutes.REGISTER}>
                  {" "}
                  <S.FormGroupLink>Регистрируйтесь здесь </S.FormGroupLink>
                </Link>
              </S.FormGroup>
            </S.FormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </S.Wrapper>
  );
};
LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
