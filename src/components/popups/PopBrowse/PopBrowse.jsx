import { useCardContext } from "../../../contexts/hooks/useCards";
import { Calendar } from "../../Calendar/Calendar";
import * as S from "./PopBrowse.styled";

export const PopBrowse = ({_id}) => {
  const {cards} = useCardContext();
 const newCards = cards.filter((card) => card._id === _id)
 const [ card ] = newCards;

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
                  <S.StatusThemeText>Нужно сделать</S.StatusThemeText>
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
                <Calendar />
              </S.PopBrowseCalendar>
            </S.PopBrowseWrap>
            {/* <S.CategoriesThemeDown>
            <S.CategoriesText>Категория</S.CategoriesText>
            <div className="categories__theme _orange _active-category">
              <p className="_orange">Web Design</p>
            </div>
          </S.CategoriesThemeDown> */}
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
                <S.BtnBtnBg id="btnDelete">
                  <S.BtnDeleteLink>Удалить задачу</S.BtnDeleteLink>
                </S.BtnBtnBg>
              </S.BtnGroup>
              <S.BtnEditBtnBg>
                <S.BtnEditLink>Закрыть</S.BtnEditLink>
              </S.BtnEditBtnBg>
            </S.PopBrowseBtnEdit>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};
