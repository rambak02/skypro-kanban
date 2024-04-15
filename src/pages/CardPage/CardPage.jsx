import { useParams } from 'react-router-dom';

export const CardPage = () => {
  let { cardId } = useParams();

  return <div>Страница карты с ID: {cardId}</div>;
}

