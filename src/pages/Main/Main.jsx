import { useState, useEffect } from "react";
import { Column } from "../../components/Column/Column";
import { cardList, columnList } from "../../data";
import { PopNewCard } from "../../components/popups/PopNewCard/PopNewCard";
import { PopBrowse } from "../../components/popups/PopBrowse/PopBrowse";
import { PopUser } from "../../components/popups/PopUser/PopUser";
import * as S from "./Main.styled";
import { Header } from "../../components/Header/Header";
import PropTypes from "prop-types";
import { getCards } from "../../api";

export const Main = ({userExit}) => {
  const show = true;
  const [isLoading, setIsLoading] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState("");

  //получение задач из api
  useEffect(() => {
    async function fetchCards() {
      try {
        const cards = await getCards()
        setCards(cards)
        setIsLoading(false);
      } catch (error) {
       setGetCardsError("Не удалось загрузить данные, попробуйте позже...")
        
      } finally {
        setIsLoading(false);
      }
    }

    fetchCards()
  }, [])
  // Закрытие и открытие popUser
  const togglePopUser = () => {
    setIsOpen((prevState) => !prevState);
  };
  // Добавление новой задачи
  function addCard() {
    const newCard = {
      _id: cardList.length + 1,
      title: "Название задачи",
      topic: "Web Design",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
 
  return (
    <>
    {isLoading ?   <div>Данные загружаются...</div> : getCardsError ? (
    <div>{getCardsError}</div>
    ) : (
      <>
      <Header onClick={togglePopUser} addCard={addCard} show={show} />
      <PopNewCard />
      <PopBrowse />
      <PopUser isOpen={isOpen} userExit={userExit}/>
      <S.Main>
        <S.Container>
          <S.MainBlock>
            <S.MainContent>
              {columnList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cards={cards.tasks.filter((card) => card.status === status)}
                />
              ))}
            </S.MainContent>
          </S.MainBlock>
        </S.Container>
      </S.Main>
    </>
    )}
    </>
  );
};
Main.propTypes = {
  userExit: PropTypes.func.isRequired,
};