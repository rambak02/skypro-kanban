import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "../../Calendar/Calendar";
import { constRoutes } from "../../../paths";
import { postToDo } from "../../../api";
import { useUserContext } from "../../../contexts/hooks/useUsers";
import { useCardContext } from "../../../contexts/hooks/useCards";
import * as S from "./PopNewCard.styled";
import { useState } from "react";
export const PopNewCard = () => {
  const [newCard, setNewCards] = useState({
    title:'',
    description:'',
    topic: "Web Design"
  })
  const [selected, setSelected] = useState();
  const { user } = useUserContext()
  const { setCards} = useCardContext()
  const navigate = useNavigate()
 const handleSubmit = async (event) => {
  event.preventDefault();
  const cardData = {... newCard, date: selected} 
  postToDo({...cardData, token: user?.token }).then((responseData)=> {
    setCards(responseData.tasks)
    navigate(constRoutes.HOME)
  }).catch(error => console.log(error.message))
 }
  return (
  <S.PopNewCard>
    <S.PopNewCardContainer>
      <S.PopNewCardBlock>
        <S.PopNewCardContent>
          <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
         <Link to={constRoutes.HOME}><S.PopNewCardClose>
            &#10006;
          </S.PopNewCardClose> </Link>
          <S.PopNewCardWrap>
            <S.PopNewCardForm
              id="formNewCard"
              action="#"
            >
              <S.FormNewBlock>
                <S.Subttl>
                  Название задачи
                </S.Subttl>
                <S.FormNewInput
                onChange={(e)=> setNewCards({...newCard, title:e.target.value})}
                  type="text"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </S.FormNewBlock>
              <S.FormNewBlock>
                <S.Subttl>
                  Описание задачи
                </S.Subttl>
                <S.FormNewArea
                onChange={(e)=> setNewCards({...newCard, description:e.target.value})}
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                ></S.FormNewArea>
              </S.FormNewBlock>
            </S.PopNewCardForm>
            <Calendar selected={selected} setSelected={setSelected}/>
          </S.PopNewCardWrap>
          <S.PopNewCardCategories>
            <S.CategoriesP>Категория</S.CategoriesP>
            <S.CategoriesThemes>
              <S.Orange $isSelected={newCard.topic === "Web Design"}> <S.CategoriesThemeText>
                Web Design</S.CategoriesThemeText>
              <S.CategoriesTheme
              onChange={(e)=> setNewCards({...newCard, topic:e.target.value})}
             type= "radio"
             name="topic" 
             value="Web Design"
              /></S.Orange> 
                <S.Green $isSelected={newCard.topic === "Research"}> <S.CategoriesThemeText>Research</S.CategoriesThemeText><S.CategoriesTheme
                onChange={(e)=> setNewCards({...newCard, topic:e.target.value})}
             type= "radio" 
             name="topic"
             value="Research"
              /></S.Green>
              <S.Purple $isSelected={newCard.topic === "Copywriting"}>Copywriting<S.CategoriesTheme
             onChange={(e)=> setNewCards({...newCard, topic:e.target.value})}
             name="topic"
             type= "radio" 
             value="Copywriting"
              /></S.Purple>
            </S.CategoriesThemes>
          </S.PopNewCardCategories>
          <S.FormNewCreate onClick={handleSubmit}id="btnCreate">
            Создать задачу
          </S.FormNewCreate>
        </S.PopNewCardContent>
      </S.PopNewCardBlock>
    </S.PopNewCardContainer>
  </S.PopNewCard>)
};
