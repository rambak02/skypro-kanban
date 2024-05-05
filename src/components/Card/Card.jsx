import PropTypes from "prop-types";
import * as S from "./Card.styled";
import { Link } from "react-router-dom";
export const Card = ({ topic, title, date, _id }) => {
  //изменение формата дат
  const originalDate = new Date(date)
  const formattedDate = originalDate.toLocaleDateString("ru-RU", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
    });
    

  const cardLink = "/card/" + _id
  return (
  
 <S.CardItem>
  <S.CardsCard>
    <S.CardGroup>
      <S.CardTheme $topic = {topic}>
        <S.TopicText>
            {topic}         
          </S.TopicText>
        </S.CardTheme>
        <Link to = {cardLink}>
          <S.CardBtn>
          <S.CardBtnDetail> </S.CardBtnDetail>
          <S.CardBtnDetail> </S.CardBtnDetail>
          <S.CardBtnDetail> </S.CardBtnDetail>
          </S.CardBtn>
        </Link>
      </S.CardGroup>
      <S.CardContent>
      <Link to={cardLink}>
          <S.CardTitle>{title}</S.CardTitle>
          </Link>
        <S.CardDate>
          <S.CardDateImg src="/public/card_date.svg"  /> 
          <S.CardDateText>{formattedDate}</S.CardDateText>
        </S.CardDate>
      </S.CardContent>
    </S.CardsCard>
</S.CardItem> 

);
}
Card.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};
