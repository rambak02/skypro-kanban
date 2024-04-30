import { createContext, useEffect, useState } from 'react';
import { getCards } from '../api';
import { useUserContext } from './hooks/useUsers';



export const CardContext = createContext(null);

export function CardProvider({children}) {
   const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  const { user } = useUserContext()


  useEffect(() => {
    if (!user) return;

    const fetchCards = async () => {
      try {
        const cards = await getCards({ token: user.token });
        setCards(cards.tasks);
      } catch (error) {
        setGetCardsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, [user]);
    return(
      <CardContext.Provider value = {{cards, setCards, isLoading, getCardsError}}>
       {children}
      </CardContext.Provider>
    )
}