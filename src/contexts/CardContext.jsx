import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { constRoutes } from '../paths';
import { useFetchCards } from '../pages/hooks';
import { useUserContext } from './hooks/useUsers';


export const CardContext = createContext(null);

export function CardProvider({children}) {
   const [cards, setCards] = useState([]);
    
  function createNewCard(newCard) {
    setCards(newCard)
  }
    return(
      <CardContext.Provider value = {{cards, createNewCard}}>
       {children}
      </CardContext.Provider>
    )
}