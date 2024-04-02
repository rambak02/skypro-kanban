import PropTypes from "prop-types";
import * as S from "./Card.styled";
export const Card = ({ topic, title, date, topicColor }) => (
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
        <a href="" target="_blank">
          <S.CardTitle>{title}</S.CardTitle>
        </a>
        <S.CardDate>
          <S.CardDateImg src="/public/card_date.svg"  /> 
          <S.CardDateText>{date}</S.CardDateText>
        </S.CardDate>
      </S.CardContent>
    </S.CardsCard>
</S.CardItem> 

);
Card.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  topicColor: PropTypes.string.isRequired
};
