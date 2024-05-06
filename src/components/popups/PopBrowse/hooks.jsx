import { useNavigate } from "react-router-dom";
import { constRoutes } from "../../../paths";
import { useState } from "react";
import { deleteTodo } from "../../../api";

export const useDeleteAndEdit = () => {
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();

    const handleEditCard = () => {
        setEdit(true);
      };
      const handleCancelEditCard = () => {
        setEdit(false);
      };
    
    const deleteCards = async ( _id, user,  setCards) => {
    
        deleteTodo({ id: _id, token: user?.token })
          .then((responseData) => {
            setEdit(false);
            setCards(responseData.tasks);
            navigate(constRoutes.HOME);
          })
          .catch((error) => console.log(error.message));
 
      };
      return { edit, deleteCards, handleEditCard, handleCancelEditCard}
}