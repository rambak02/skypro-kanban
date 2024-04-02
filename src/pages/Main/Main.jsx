import { Column } from "../../components/Column/Column";
import { columnList } from "../../data";
import PropTypes from "prop-types";
import * as S from "./Main.styled";
export const Main = ({ cardList }) => (
  <main className="main">
    <S.Container>
      <div className="main__block">
        <div className="main__content">
          {columnList.map((status) => (
            <Column
              key={status}
              title={status}
              cards={cardList.filter((card) => card.status === status)}
            />
          ))}
        </div>
      </div>
    </S.Container>
  </main>
);
Main.propTypes = {
  cardList: PropTypes.array.isRequired,
};
