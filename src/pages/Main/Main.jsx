import { Column } from "../../components/Column/Column";
const cards = [
 {
    cardId: 1,
    cardTitle: "Название задачи",
    cardTheme: "Web Design",
    cardDate: "30.10.23",
    column: "Без названия"
  },
  {
    cardId: 2,
    cardTitle: "Название задачи",
    cardTheme: "Research",
    cardDate: "30.10.23",
    column: "Без названия"
  },
  {
    cardId: 3,
    cardTitle: "Название задачи",
    cardTheme: "Web Design",
    cardDate: "30.10.23",
    column: "Без названия"
  },
  {
    cardId: 4,
    cardTitle: "Название задачи",
    cardTheme: "Copywriting",
    cardDate: "30.10.23",
    column: "Без названия"
  },
  
  {
    cardId: 5,
    cardTitle: "Название задачи",
    cardTheme: "Research",
    cardDate: "30.10.23",
    column: "Нужно сделать"
  },
  {
    cardId: 6,
    cardTitle: "Название задачи",
    cardTheme: "Research",
    cardDate: "30.10.23",
    column: 'В работе'

  },
  {
    cardId: 7,
    cardTitle: "Название задачи",
    cardTheme: "Copywriting",
    cardDate: "30.10.23",
    column: 'В работе'

  },
  {
    cardId: 8,
    cardTitle: "Название задачи",
    cardTheme: "Web Design",
    cardDate: "30.10.23",
    column: 'В работе'
  },
  {
    cardId: 9,
    cardTitle: "Название задачи",
    cardTheme: "Research",
    cardDate: "30.10.23",
    column: 'Тестирование'
  },
  {
    cardId: 10,
    cardTitle: "Название задачи",
    cardTheme: "Research",
    cardDate: "30.10.23",
    column: "Готово"
  }
];
export function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
           <Column cards={cards.filter((card)=> card.column === "Без названия")} columnTitle={"Без названия"} />
           <Column cards={cards.filter((card)=> card.column === "Нужно сделать")} columnTitle={"Нужно сделать"} />
           <Column cards={cards.filter((card)=> card.column === "В работе")} columnTitle={"В работе"} />
           <Column cards={cards.filter((card)=> card.column === "Тестирование")} columnTitle={"Тестирование"} />
           <Column cards={cards.filter((card)=> card.column === "Готово")} columnTitle={"Готово"}/>
          </div>
        </div>
      </div>
    </main>
  );
}
