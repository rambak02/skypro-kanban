import PropTypes from "prop-types";
import * as S from "./Card.styled";
import { Link } from "react-router-dom";
export const Card = ({ topic, title, date, topicColor, id }) => {
  const cardLink = "/card/" + id
  return (
  
 <S.CardItem>
  <S.CardsCard>
    <S.CardGroup>
      <S.CardTheme $topicColor={topicColor}>
        <S.TopicText>
            {topic}         
          </S.TopicText>
        </S.CardTheme>
        <a href="#popBrowse" target="_self">
          <S.CardBtn>
          <S.CardBtnDetail> </S.CardBtnDetail>
          <S.CardBtnDetail> </S.CardBtnDetail>
          <S.CardBtnDetail> </S.CardBtnDetail>
          </S.CardBtn>
        </a>
      </S.CardGroup>
      <S.CardContent>
      <Link to={cardLink}>
          <S.CardTitle>{title}</S.CardTitle>
          </Link>
        <S.CardDate>
          <S.CardDateImg src="/public/card_date.svg"  /> 
          <S.CardDateText>{date}</S.CardDateText>
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
  topicColor: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
