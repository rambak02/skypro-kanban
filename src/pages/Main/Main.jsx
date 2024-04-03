import { Column } from "../../components/Column/Column";
import { columnList } from "../../data";
import PropTypes from "prop-types";
import * as S from "./Main.styled";
export const Main = ({ cardList }) => (
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
);
Main.propTypes = {
  cardList: PropTypes.array.isRequired,
};
