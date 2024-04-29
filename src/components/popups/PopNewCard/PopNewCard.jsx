import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "../../Calendar/Calendar";
import { constRoutes } from "../../../paths";
import { postToDo } from "../../../api";
import { useUserContext } from "../../../contexts/hooks/useUsers";
import { useCardContext } from "../../../contexts/hooks/useCards";
import { useState } from "react";
import { useFetchCards } from "../../../pages/hooks";
export const PopNewCard = ({isOpenNewCard, closePopNewCard}) => {
  const [newCard, setNewCards] = useState({
    title:'',
    description:'',
    topic: ''
  })
  const [selected, setSelected] = useState();
  const { user } = useUserContext()
  const { setCards} = useFetchCards()
  const navigate = useNavigate()
 const handleSubmit = async (event) => {
  event.preventDefault();
  const cardData = {... newCard, date: selected} 
  postToDo({...cardData, token: user?.token }).then((responseData)=> {
    console.log(responseData)
    navigate(-1)
    setCards(responseData)
  }).catch(error => console.log(error.message))
 }
  return (
  <div className="pop-new-card" id="popNewCard">
    <div className="pop-new-card__container">
      <div className="pop-new-card__block">
        <div className="pop-new-card__content">
          <h3 className="pop-new-card__ttl">Создание задачи</h3>
         <Link to={constRoutes.HOME}><span onClick={closePopNewCard} className="pop-new-card__close">
            &#10006;
          </span> </Link>
          <div className="pop-new-card__wrap">
            <form
              className="pop-new-card__form form-new"
              id="formNewCard"
              action="#"
            >
              <div className="form-new__block">
                <label htmlFor="formTitle" className="subttl">
                  Название задачи
                </label>
                <input
                onChange={(e)=> setNewCards({...newCard, title:e.target.value})}
                  className="form-new__input"
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </div>
              <div className="form-new__block">
                <label htmlFor="textArea" className="subttl">
                  Описание задачи
                </label>
                <textarea
                onChange={(e)=> setNewCards({...newCard, description:e.target.value})}
                  className="form-new__area"
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                ></textarea>
              </div>
            </form>
            <Calendar selected={selected} setSelected={setSelected}/>
          </div>
          <div className="pop-new-card__categories categories">
            <p className="categories__p subttl">Категория</p>
            <div className="categories__themes">
              <label> Web Design
              <input
              onChange={(e)=> setNewCards({...newCard, topic:e.target.value})}
             type= "radio" 
             value="Web Design"
              /></label> 
                <label>Research Re<input
                onChange={(e)=> setNewCards({...newCard, topic:e.target.value})}
             type= "radio" 
             value="Research"
             checked
              /></label>
              <label>Copywriting<input
             onChange={(e)=> setNewCards({...newCard, topic:e.target.value})}
             type= "radio" 
             value="Copywriting"
              /></label>
              {/* <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
              <div className="categories__theme _green">
                <p className="_green">Research</p>
              </div>
              <div className="categories__theme _purple">
                <p className="_purple">Copywriting</p>
              </div> */}
            </div>
          </div>
          <button onClick={handleSubmit} className="form-new__create _hover01" id="btnCreate">
            Создать задачу
          </button>
        </div>
      </div>
    </div>
  </div>)
};
