import { Card } from "../Card/Card"
import PropTypes from 'prop-types';
export const Column = ({columnTitle, cards }) => (
        <div className="main__column">
        <div className="column__title">
          <p>{columnTitle}</p>
        </div>
        <div className="cards">
            {cards.map((card)=> <Card key={card.cardId} cardDate={card.cardDate} cardTheme={card.cardTheme} cardTitle={card.cardTitle} />)}
        </div>
      </div>
);
Column.propTypes = {
    columnTitle: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  };