import { Routes, Route, useNavigate } from 'react-router-dom'
import { Main } from './pages/Main/Main';
import { LoginPage } from './pages/Login/LoginPage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { constRoutes } from './paths';
import { CardPage } from './pages/CardPage/CardPage';
import PrivateRoute from './PrivateRoute';
import { useState } from 'react';

export const AppRoutes = () => {
    // const [isAuth, setIsAuth] = useState(true)
    const [user, setUser] = useState({});
const navigate = useNavigate();
function userLogin(newUser) {
  setUser(newUser)
  navigate(constRoutes.HOME)
}
function userLogout() {
  setUser({})
  navigate(constRoutes.LOGIN)
}
  
    return (
        <>
        <Routes>
        <Route element={<PrivateRoute user={user} />}>
         <Route path={constRoutes.HOME} element={<Main userLogout={userLogout} user={user}/>}/>
         <Route path={constRoutes.CARD} element={<CardPage/>}/>
         </Route>
         <Route path={constRoutes.REGISTER} element={<RegisterPage userLogin={userLogin}/>}/>
         <Route path={constRoutes.LOGIN} element={<LoginPage userLogin={userLogin}/>}/> 
         <Route path={constRoutes.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
        </>
    );
  }
