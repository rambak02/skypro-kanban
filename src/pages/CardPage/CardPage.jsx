import { useParams } from "react-router-dom";
import { PopBrowse } from "../../components/popups/PopBrowse/PopBrowse";

export const CardPage = () => {
  let { cardId } = useParams();

  return <PopBrowse _id={cardId}/>;
};
