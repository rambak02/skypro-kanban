import { Card } from "../Card/Card";
import PropTypes from "prop-types";
import * as S from "./Column.styled";

export const Column = ({ title, cards }) => (
  <S.MainColumn>
    <S.ColumnTitle>
      <S.ColumnTitleText>{title}</S.ColumnTitleText>
    </S.ColumnTitle>
    <S.Cards>
      {cards.map((card) => (
        <Card
          key={card.id}
          date={card.date}
          topic={card.topic}
          title={card.title}
          topicColor={card.topicColor}
        />
      ))}
    </S.Cards>
  </S.MainColumn>
);
Column.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
};
