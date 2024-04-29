import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { constRoutes } from "../../paths";
import { useLogin } from "../hooks";
import { loginUser } from "../../api";
import * as S from "./LoginPage.styled";
import { useUserContext } from "../../contexts/hooks/useUsers";


export const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const {userLogin} = useUserContext()
  const { handleLogin, error } = useLogin(loginUser, userLogin);
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
              autoComplete="on"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
              />
              {error && <S.LoginError>{error} </S.LoginError>}
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

