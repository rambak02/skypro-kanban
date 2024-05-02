import { useState } from "react";
import { useNavigate } from "react-router-dom";

//хук для регистрации
export const useRegistration = (authUser, userLogin) => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = async (name, login, password) => {
    try {
    if (login === '' && password === '' && name === '') {
    setError('Укажите имя, логин и пароль');
    } if (login === '') {
    setError('Укажите login');
    } else if (password === '') {
    setError('Укажите пароль');
    } else if (name === '') {
    setError('Укажите имя');
    } else {
    const response = await authUser(name, login, password);
    console.log(response.user);
    userLogin(response.user);
    navigate('/login', { replace: true });
    }
    } catch (error) {
    setError(error.message);
    console.log(error.message)
    }
    };
    
    return { handleRegister, error };
    };

    export const useLogin = (loginUser, userLogin, navigate) => {
        const [error, setError] = useState('');
        
        const handleLogin = async (login, password) => {
        try {
        if (login === '' && password === '') {
        setError('Укажите логин и пароль');
        } else if (login === '') {
        setError('Укажите login');
        } else if (password === '') {
        setError('Укажите пароль');
        } else {
        const response = await loginUser(login, password);
        console.log(response.user);
        userLogin(response.user);
        navigate('/', { replace: true });
        }
        } catch (error) {
        setError(error.message);
        }
        };
        
        return { handleLogin, error };
        };



