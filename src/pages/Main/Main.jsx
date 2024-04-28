import { useState } from "react";
import { Column } from "../../components/Column/Column";
import { columnList } from "../../data";
import { PopNewCard } from "../../components/popups/PopNewCard/PopNewCard";
import { PopBrowse } from "../../components/popups/PopBrowse/PopBrowse";
import { PopUser } from "../../components/popups/PopUser/PopUser";
import * as S from "./Main.styled";
import { Header } from "../../components/Header/Header";
import { useFetchCards } from "../hooks";
import { useUserContext } from "../../contexts/hooks/useUsers";
import { Outlet } from "react-router-dom";

export const Main = () => {
  const show = true;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNewCard, setisOpenNewCard] = useState(false)
  const {user} = useUserContext();
  const { cards, isLoading, getCardsError} = useFetchCards(user)

  // Закрытие и открытие popUser
  const togglePopUser = () => {
    setIsOpen((prevState) => !prevState);
  };

  const togglePopNewCard = () => {
    setisOpenNewCard((prevState) => !prevState);
  };

  const closePopNewCard = () => {
    setisOpenNewCard(false);
  }
  // Добавление новой задачи
 
 
 
  return (
    <>
     <Header togglePopUser={togglePopUser} togglePopNewCard={togglePopNewCard} show={show} />
    {isLoading ?   <div>Данные загружаются...</div> : getCardsError ? (
    <div>{getCardsError}</div>
    ) : (
      <>
     
      <PopBrowse />
      <PopUser isOpen={isOpen}  />
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
      <Outlet />
    </>
    )}
    </>
  );
};
