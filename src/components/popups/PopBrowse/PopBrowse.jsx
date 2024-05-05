import { useNavigate } from "react-router-dom";
import { deleteTodo, editToDo } from "../../../api";
import { useCardContext } from "../../../contexts/hooks/useCards";
import { useUserContext } from "../../../contexts/hooks/useUsers";
import { constRoutes } from "../../../paths";
import { Calendar } from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const PopBrowse = ({ _id }) => {
  const { cards, setCards } = useCardContext();
  const newCards = cards.filter((card) => card._id === _id);
  const [card] = newCards;
  const [error, setError] = useState();
  const [selected, setSelected] = useState(new Date(card.date));
  const [edit, setEdit] = useState(false);
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [editCard, setEditCard] = useState({
    title: card.title,
    topic: card.topic,
    status: card.status,
    description: card.description,
    date: new Date(selected),
  });
  const statusOptions = [
    { value: "Без статуса", label: "Без статуса" },
    { value: "Нужно сделать", label: "Нужно сделать" },
    { value: "В работе", label: "В работе" },
    { value: "Тестирование", label: "Тестирование" },
    { value: "Готово", label: "Готово" },
  ];
  useEffect(() => {
    setEditCard((prevEditCard) => ({
      ...prevEditCard,
      date: selected,
    }));
  }, [selected]);

  const handleDeleteCards = async (event) => {
    event.preventDefault();

    deleteTodo({ id: _id, token: user?.token })
      .then((responseData) => {
        setEdit(false);
        setCards(responseData.tasks);
        navigate(constRoutes.HOME);
      })
      .catch((error) => console.log(error.message));
  };

  const handleEditCards = async (event) => {
    event.preventDefault();

    if (!editCard.description.trim()) {
      setError("Введите описание задачи");
      return;
    }

    const cardData = { ...editCard };
    editToDo({ id: _id, ...cardData, token: user?.token })
      .then((responseData) => {
        setCards(responseData.tasks);
        navigate(constRoutes.HOME);
      })
      .catch((error) => console.log(error.message));
  };
  const handleEditCard = () => {
    setEdit(true);
  };
  const handleCancelEditCard = () => {
    setEdit(false);
  };
  return <S.PopBrowse>
  <S.PopBrowseContainer>
    <S.PopBrowseBlock>
      <S.PopBrowseContent>
        <S.PopBrowseTopBlock>
          <S.PopBrowseTtl>{card.title}</S.PopBrowseTtl>
          <S.CategoriesThemeTopOrange>
            <S.TopicTheme $topic={card.topic}>{card.topic}</S.TopicTheme>
          </S.CategoriesThemeTopOrange>
        </S.PopBrowseTopBlock>
        {edit ? (
          <>
            <S.PopBrowseStatus>
              <S.PopBrowseStatusText>Статус</S.PopBrowseStatusText>
              <S.StatusThemes>
                {statusOptions.map(option => (
                  <S.StatusThemeEdit
                    key={option.value}
                    $isSelected={editCard.status === option.value}
                  >
                    <S.StatusThemeText>{option.label}</S.StatusThemeText>
                    <S.StatusEditInput
                      onChange={(e) => setEditCard({ ...editCard, status: e.target.value })}
                      type="radio"
                      name="status"
                      value={option.value}
                    />
                  </S.StatusThemeEdit>
                ))}
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
                    onChange={(e) => setEditCard({ ...editCard, description: e.target.value })}
                    placeholder="Введите описание задачи..."
                  ></S.FormBrowseAreaEdit>
                </S.FormBrowseBlock>
                {error && <S.Error>{error}</S.Error>}
              </S.PopBrowseForm>
              <S.PopBrowseCalendar>
                <Calendar selected={selected} setSelected={setSelected} />
              </S.PopBrowseCalendar>
            </S.PopBrowseWrap>
          </>
        ) : (
          <>
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
          </>
        )}
        <S.PopBrowseBtnEdit>
          <S.BtnGroup>
            {edit ? (
              <>
                <S.BtnEditBtnBg onClick={handleEditCards}>
                  <S.BtnEditLink>Сохранить</S.BtnEditLink>
                </S.BtnEditBtnBg>
                <S.BtnBtnBg onClick={handleCancelEditCard}>
                  <S.BtnDeleteLink>Отменить</S.BtnDeleteLink>
                </S.BtnBtnBg>
              </>
            ) : (
              <>
                <S.BtnBtnBg onClick={handleEditCard}>
                  <S.BtnBorLink>Редактировать задачу</S.BtnBorLink>
                </S.BtnBtnBg>
                <S.BtnBtnBg onClick={handleDeleteCards}>
                  <S.BtnDeleteLink>Удалить задачу</S.BtnDeleteLink>
                </S.BtnBtnBg>
              </>
            )}
            <Link to={constRoutes.HOME}>
              <S.BtnEditBtnBg>
                <S.BtnEditLink>Закрыть</S.BtnEditLink>
              </S.BtnEditBtnBg>
            </Link>
          </S.BtnGroup>
        </S.PopBrowseBtnEdit>
      </S.PopBrowseContent>
    </S.PopBrowseBlock>
  </S.PopBrowseContainer>
</S.PopBrowse>
};
PopBrowse.propTypes = {
  _id: PropTypes.string.isRequired
}