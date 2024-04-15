import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main/Main';
import { LoginPage } from './pages/Login/LoginPage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { constRoutes } from './paths';
import { CardPage } from './pages/CardPage/CardPage';
import PrivateRoute from './PrivateRoute';
import { useState } from 'react';

export const AppRoutes = () => {
    const [isAuth, setIsAuth] = useState(false)
    const userExit= () => {
        setIsAuth(false)
      }
    const userLogin = () => {
        setIsAuth(true)
    } 
    return (
        <>
        <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
         <Route path={constRoutes.HOME} element={<Main  setIsAuth={setIsAuth} isAuth={isAuth} userExit={userExit}/>}/>
         <Route path={constRoutes.REGISTER} element={<RegisterPage/>}/>
         <Route path={constRoutes.CARD} element={<CardPage/>}/>
         </Route>
         <Route path={constRoutes.LOGIN} element={<LoginPage userLogin={userLogin}/>}/> 
         <Route path={constRoutes.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
        </>
    );
  }
