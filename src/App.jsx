import "./App.css";
import { useState, useEffect } from "react";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import { PopNewCard } from "./components/popups/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/popups/PopBrowse/PopBrowse";
import { PopUser } from "./components/popups/PopUser/PopUser";
import { cardList } from "./data";
import { GlobalStyle } from "./Global.styled";

function App() {
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
    <GlobalStyle/>
      <div className="wrapper">
        <Header onClick={togglePopUser} addCard={addCard} show={show} />
        {isLoading ? (
          <div>Данные загружаются...</div>
        ) : (
          <>
            <PopUser isOpen={isOpen} />
            <PopNewCard />
            <PopBrowse />
            <Main cardList={cards} />
          </>
        )}
      </div>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
