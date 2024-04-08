import { useState, useEffect } from "react";
import { Column } from "../../components/Column/Column";
import { cardList, columnList } from "../../data";
import { PopNewCard } from "../../components/popups/PopNewCard/PopNewCard";
import { PopBrowse } from "../../components/popups/PopBrowse/PopBrowse";
import { PopUser } from "../../components/popups/PopUser/PopUser";
import * as S from "./Main.styled";
import { Header } from "../../components/Header/Header";

export const Main = () => {
  const show = true;
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState(cardList);
  const togglePopUser = () => {
    setIsOpen((prevState) => !prevState);
  };
  function addCard() {
    const newCard = {
      id: cardList.length + 1,
      title: "Название задачи",
      topic: "Web Design",
      date: "30.10.23",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
    {isLoading ? (
      <div>Данные загружаются...</div>
    ) : (
      <>
      <Header onClick={togglePopUser} addCard={addCard} show={show} />
      <PopNewCard />
      <PopBrowse />
      <PopUser isOpen={isOpen} />
      <S.Main>
        <S.Container>
          <S.MainBlock>
            <S.MainContent>
              {columnList.map((status) => (
                <Column
                  key={status}
                  title={status}
                  cards={cardList.filter((card) => card.status === status)}
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
