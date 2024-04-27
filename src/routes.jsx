import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main/Main';
import { LoginPage } from './pages/Login/LoginPage';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { RegisterPage } from './pages/Register/RegisterPage';
import { constRoutes } from './paths';
import { CardPage } from './pages/CardPage/CardPage';
import PrivateRoute from './PrivateRoute';
import { NewCardPage } from './pages/NewCardPage/NewCardPage';

export const AppRoutes = () => {
    return (
        <>
        <Routes>
        <Route element={<PrivateRoute/>}>
         <Route path={constRoutes.HOME} element={<Main />}>
         <Route path={constRoutes.CARD} element={<CardPage/>}/>
         <Route path={constRoutes.NEWCARD} element ={<NewCardPage/>}/>
         </Route>
         </Route>
         <Route path={constRoutes.REGISTER} element={<RegisterPage />}/>
         <Route path={constRoutes.LOGIN} element={<LoginPage />}/> 
         <Route path={constRoutes.NOT_FOUND} element={<NotFoundPage/>}/>
        </Routes>
        </>
    );
  }
