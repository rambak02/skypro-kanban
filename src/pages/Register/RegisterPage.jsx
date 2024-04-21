import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authUser } from "../../api";
export const RegisterPage = ({ userLogin }) => {
  const navigate = useNavigate()
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const [name, setName] = useState("")
  
  const handleRegister = async (e) => {
    e.preventDefault();
    if (login === '' && password === '' && name === "") {
      setError('Укажите имя, логин и пароль')
    } else if (login === '') {
      setError('Укажите login')
    } else if (password === '') {
      setError('Укажите пароль')
    } else if (name === "") {
      setError('Укажите имя')
    } else {
      try {
        const response = await authUser(name, login, password)
        console.log(response.user)
        userLogin(response.user)
        navigate('/login', { replace: true })
      } catch (error) {
        setError(error.message)
      }
    }
  }

  return (
  <div className="wrapper">
    <div className="container-signup">
      <div className="modal">
        <div className="modal__block">
          <div className="modal__ttl">
            <h2>Регистрация</h2>
          </div>
          <form className="modal__form-login" id="formLogUp" action="#">
            <input
              className="modal__input first-name"
              type="text"
              value ={name}
              name="first-name"
              id="first-name"
              onChange={(e)=> setName(e.target.value)}
              placeholder="Имя"
            />
            <input
              className="modal__input login"
              type="text"
              name="login"
              value={login}
              id="loginReg"
              onChange={(e)=> setLogin(e.target.value)}
              placeholder="Логин"
            />
            <input
              className="modal__input password-first"
              type="password"
              name="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              id="passwordFirst"
              placeholder="Пароль"
            />
           { error && <div>{error} </div> }
            <button  onClick = {handleRegister} className="modal__btn-signup-ent _hover01" id="SignUpEnter" >
              Зарегистрироваться
            </button>
            <div className="modal__form-group">
              <p>
                Уже есть аккаунт? <Link to = "/login">Войдите здесь</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)
}