import { useState, useEffect} from 'react';
import { getCards } from '../api';

//Хук для получения задач из API
export function useFetchCards(user) {
 const [cards, setCards] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [getCardsError, setGetCardsError] = useState(null);

 useEffect(()=> {
    if(!user) return;

    const fetchCards = async () => {
        try {
            const cards = await getCards({token: user.token});
            setCards(cards);
        } catch (error) {
            setGetCardsError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    fetchCards();

 }, [user]);

 return {cards, isLoading, getCardsError};
}
