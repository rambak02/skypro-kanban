import { useState } from "react";
import { Column } from "../../components/Column/Column";
import { columnList } from "../../data";
import { PopUser } from "../../components/popups/PopUser/PopUser";
import * as S from "./Main.styled";
import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useCardContext } from "../../contexts/hooks/useCards";

export const Main = () => {
  const show = true;
  const [isOpen, setIsOpen] = useState(false);
  const { cards, isLoading, getCardsError} = useCardContext()
  // Закрытие и открытие popUser
  const togglePopUser = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
     <Header togglePopUser={togglePopUser} show={show} />
    {isLoading ?   <div>Данные загружаются...</div> : getCardsError ? (
    <div>{getCardsError}</div>
    ) : (
      <>
     
      <PopUser isOpen={isOpen}  />
      <S.Main>
        <S.Container>
          <S.MainBlock>
            <S.MainContent>
              {columnList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cards={cards.filter((card) => card.status === status)}
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
