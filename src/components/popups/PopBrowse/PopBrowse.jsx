import { useNavigate } from "react-router-dom";
import { deleteTodo, editToDo } from "../../../api";
import { useCardContext } from "../../../contexts/hooks/useCards";
import { useUserContext } from "../../../contexts/hooks/useUsers";
import { constRoutes } from "../../../paths";
import { Calendar } from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PopBrowse = ({ _id }) => {
  const { cards, setCards } = useCardContext();
  const newCards = cards.filter((card) => card._id === _id);
  const [card] = newCards;
  const [error, setError] = useState();
  const [selected, setSelected] = useState(new Date(card.date));
  const [edit, setEdit] = useState(false);
  const [editCard, setEditCard] = useState({ 
    title: card.title,
    topic: card.topic,
    status: card.status,
    description: card.description,
    date: new Date(selected),
  })
  useEffect(()=> {
  setEditCard(prevEditCard => ({
    ...prevEditCard,
    date: selected
  }));
  }, [selected])
  const { user } = useUserContext();
  const navigate = useNavigate();
  const handleDeleteCards = async (event) => {
    event.preventDefault();

    deleteTodo({id: _id, token: user?.token }).then(
    (responseData) => {
      setEdit(false);
      setCards(responseData.tasks);
      navigate(constRoutes.HOME);
    }).catch(error => console.log(error.message))
  }
  const handleEditCards = async (event) => {
    event.preventDefault();

    if (!editCard.description.trim()) {
      setError("Введите описание задачи");
      return
    }

    const cardData = {...editCard}
    editToDo({ id: _id, ...cardData, token: user?.token}).then((responseData)=> {
      setCards(responseData.tasks)
      navigate(constRoutes.HOME)
    }).catch(error => console.log(error.message))
  }
  const handleEditCard = () => {
    setEdit(true)
  } 
  const handleCancelEditCard = () => {
    setEdit(false)
  }
  return (
( edit ?
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
            <S.StatusThemeEdit $isSelected={editCard.status === "Без статуса"}>
              <S.StatusThemeText>Без статуса</S.StatusThemeText>
              <S.StatusEditInput onChange={(e)=> setEditCard({...editCard, status:e.target.value})}
              type="radio"
              name="status"
              value="Без статуса"
              />
            </S.StatusThemeEdit >
            <S.StatusThemeEdit $isSelected={editCard.status === "Нужно сделать"}>
              <S.StatusThemeText>Нужно сделать</S.StatusThemeText>
              <S.StatusEditInput onChange={(e)=> setEditCard({...editCard, status:e.target.value})}
              type="radio"
              name="status"
              value="Нужно сделать"
              />
            </S.StatusThemeEdit>
            <S.StatusThemeEdit $isSelected={editCard.status === "В работе"}>
              <S.StatusThemeText>В работе</S.StatusThemeText>
              <S.StatusEditInput onChange={(e)=> setEditCard({...editCard, status:e.target.value})}
              type="radio"
              name="status"
              value="В работе"
              />
            </S.StatusThemeEdit>
            <S.StatusThemeEdit $isSelected={editCard.status === "Тестирование"}>
              <S.StatusThemeText>Тестирование</S.StatusThemeText>
              <S.StatusEditInput onChange={(e)=> setEditCard({...editCard, status:e.target.value})}
              type="radio"
              name="status"
              value="Тестирование"
              />
            </S.StatusThemeEdit>
            <S.StatusThemeEdit $isSelected={editCard.status === "Готово"}>
              <S.StatusThemeText>Готово</S.StatusThemeText>
              <S.StatusEditInput onChange={(e)=> setEditCard({...editCard, status:e.target.value})}
              type="radio"
              name="status"
              value="Готово"
              />
            </S.StatusThemeEdit>
          </S.StatusThemes>
        </S.PopBrowseStatus>
        <S.PopBrowseWrap>
          <S.PopBrowseForm>
            <S.FormBrowseBlock>
              <S.Subttl>Описание задачи</S.Subttl>
              <S.FormBrowseAreaEdit
                name="text"
                id="textArea01"
                value={editCard.description}
                onChange={(e)=> setEditCard({...editCard, description:e.target.value})}
                placeholder="Введите описание задачи..."
              ></S.FormBrowseAreaEdit>
            </S.FormBrowseBlock>
            {error && <S.Error>{error}</S.Error>}
          </S.PopBrowseForm>
          <S.PopBrowseCalendar>
            <Calendar selected={selected} setSelected={setSelected} />
          </S.PopBrowseCalendar>
        </S.PopBrowseWrap>
        <S.PopBrowseBtnEdit>
          <S.BtnGroup>
            <S.BtnEditBtnBg onClick = {handleEditCards}>
              <S.BtnEditLink>Сохранить</S.BtnEditLink>
            </S.BtnEditBtnBg>
            <S.BtnBtnBg onClick = {handleCancelEditCard}>
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

:


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
                <Calendar selected={selected} />
              </S.PopBrowseCalendar>
            </S.PopBrowseWrap>
            <S.PopBrowseBtnBrowse>
            </S.PopBrowseBtnBrowse>
            <S.PopBrowseBtnEdit>
              <S.BtnGroup> 
              <S.BtnBtnBg onClick = {handleEditCard}>
                  <S.BtnBorLink>Редактировать задачу</S.BtnBorLink>
                </S.BtnBtnBg>
                <S.BtnBtnBg onClick={handleDeleteCards}>
                  <S.BtnDeleteLink>Удалить задачу</S.BtnDeleteLink>
                </S.BtnBtnBg>
              </S.BtnGroup>
             <Link to={constRoutes.HOME}> <S.BtnEditBtnBg >
                <S.BtnEditLink>Закрыть</S.BtnEditLink>
              </S.BtnEditBtnBg>
              </Link>
            </S.PopBrowseBtnEdit>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  ));
};
