import "./App.css";
import { useState, useEffect } from "react";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import { PopNewCard } from "./components/popups/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/popups/PopBrowse/PopBrowse";
import { PopUser } from "./components/popups/PopUser/PopUser";
import { cardList } from "./data";

function App() {
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
    <div>
      <div className="wrapper">
        <Header onClick={togglePopUser} addCard={addCard} />
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
    </div>
  );
}

export default App;
