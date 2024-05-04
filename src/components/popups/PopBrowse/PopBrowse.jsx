import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../../../api";
import { useCardContext } from "../../../contexts/hooks/useCards";
import { useUserContext } from "../../../contexts/hooks/useUsers";
import { constRoutes } from "../../../paths";
import { Calendar } from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PopBrowse = ({ _id }) => {
  const { cards, setCards } = useCardContext();
  const newCards = cards.filter((card) => card._id === _id);
  const [card] = newCards;
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(card.date);
  const date = new Date(selected);
  const handleDeleteCards = async (event) => {
    event.preventDefault();
    deleteTodo({id: _id, token: user?.token }).then(
    (responseData) => {
      setCards(responseData.tasks);
      navigate(constRoutes.HOME);
    }).catch(error => console.log(error.message))
  }
  return (
    <S.PopBrowse>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>{card.title}</S.PopBrowseTtl>
              <S.CategoriesThemeTopOrange>
                <S.TopicTheme $topic={card.topic}>{card.topic}</S.TopicTheme>
              </S.CategoriesThemeTopOrange>
            </S.PopBrowseTopBlock>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusText>Статус</S.PopBrowseStatusText>
              <S.StatusThemes>
                <S.StatusTheme>
                  <S.StatusThemeText>{card.status}</S.StatusThemeText>
                </S.StatusTheme>
              </S.StatusThemes>
            </S.PopBrowseStatus>
            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormBrowseBlock>
                  <S.Subttl>Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    value={card.description}
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseArea>
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <S.PopBrowseCalendar>
                <Calendar selected={date} />
              </S.PopBrowseCalendar>
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                <S.BtnBtnBg>
                  <S.BtnBorLink>Редактировать задачу</S.BtnBorLink>
                </S.BtnBtnBg>
              </S.BtnGroup>
            </S.PopBrowseBtnBrowse>
            <S.PopBrowseBtnEdit>
              <S.BtnGroup>
                <S.BtnEditBtnBg>
                  <S.BtnEditLink>Сохранить</S.BtnEditLink>
                </S.BtnEditBtnBg>
                <S.BtnBtnBg>
                  <S.BtnDeleteLink>Отменить</S.BtnDeleteLink>
                </S.BtnBtnBg>
                <S.BtnBtnBg onClick={handleDeleteCards}>
                  <S.BtnDeleteLink>Удалить задачу</S.BtnDeleteLink>
                </S.BtnBtnBg>
              </S.BtnGroup>
             <Link to={constRoutes.HOME}> <S.BtnEditBtnBg>
                <S.BtnEditLink>Закрыть</S.BtnEditLink>
              </S.BtnEditBtnBg>
              </Link>
            </S.PopBrowseBtnEdit>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};
