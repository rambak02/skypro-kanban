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

export const Main = ({userLogout, user}) => {
  const show = true;
  const [isLoading, setIsLoading] = useState(true);
  const [getCardsError, setGetCardsError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState("");

  //получение задач из api
  useEffect(() => {
  getCards({token: user.token}).then((cards)=> {
    setCards(cards)
    setIsLoading(false)
  }).catch((error)=>{setGetCardsError(error.message)}).finally(()=> {
    setIsLoading(false)
  })
  }, [user])

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
     <Header onClick={togglePopUser} addCard={addCard} show={show} />
    {isLoading ?   <div>Данные загружаются...</div> : getCardsError ? (
    <div>{getCardsError}</div>
    ) : (
      <>
     
      <PopNewCard />
      <PopBrowse />
      <PopUser isOpen={isOpen} userLogout={userLogout}/>
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
  userLogout: PropTypes.func.isRequired,
};