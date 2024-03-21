import { Card } from "../Card/Card"
import PropTypes from 'prop-types';
export const Column = ({title, cards }) => (
        <div className="main__column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        <div className="cards">
            {cards.map((card)=> <Card key={card.id} date={card.date} topic={card.topic} title={card.title} />)}
        </div>
      </div>
);
Column.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  };