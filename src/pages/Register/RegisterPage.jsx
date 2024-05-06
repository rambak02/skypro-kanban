import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegistration } from "../hooks";
import * as S from "./RegisterPage.styled";
import { authUser } from "../../api";
import { useUserContext } from "../../contexts/hooks/useUsers";


export const RegisterPage = () => {
 const {userLogin} = useUserContext();
  const { handleRegister, error } = useRegistration(
    authUser,
    userLogin,
  );
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    handleRegister(name, login, password);
  };

  return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalBlockTtl>
              <S.ModalBlockTtlH2>Регистрация</S.ModalBlockTtlH2>
            </S.ModalBlockTtl>
            <S.FormLogin id="formLogUp" action="#">
              <S.Input
                type="text"
                value={name}
                name="first-name"
                id="first-name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
              <S.Input
                type="text"
                name="login"
                value={login}
                id="loginReg"
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Логин"
              />
              <S.Input
              autoComplete="on"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="passwordFirst"
                placeholder="Пароль"
              />
              { error && <S.RegisterError>{error} </S.RegisterError>}
              <S.ButtonSignupEnt onClick={onSubmitForm} id="SignUpEnter">
                Зарегистрироваться
              </S.ButtonSignupEnt>
              <S.FormGroup>
                <S.FormGroupText>
                  Уже есть аккаунт?{" "}
                  <Link to="/login">
                    {" "}
                    <S.FormGroupLink>Войдите здесь </S.FormGroupLink>
                  </Link>
                </S.FormGroupText>
              </S.FormGroup>
            </S.FormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignUp>
    </S.Wrapper>
  );
};

