import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { constRoutes } from '../paths';


export const UserContext = createContext(JSON.parse(localStorage.getItem("user")));

export function UserProvider({children}) {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});
   const navigate = useNavigate();

   function userLogin(newUser) {
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      navigate(constRoutes.HOME)
    }
    function userLogout() {
      localStorage.removeItem("user");
      setUser({})
      navigate(constRoutes.LOGIN)
    }
    
    return(
      <UserContext.Provider value = {{user, userLogin, userLogout}}>
       {children}
      </UserContext.Provider>
    )
}

