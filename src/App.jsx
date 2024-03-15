import "./App.css";
import { Main } from "./pages/Main/Main";
import { Header } from "./components/Header/Header";
import { PopNewCard } from "./components/popups/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/popups/PopBrowse/PopBrowse";
import { PopUser } from "./components/popups/PopUser/PopUser";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
