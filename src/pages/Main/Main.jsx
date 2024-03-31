import { Column } from "../../components/Column/Column";
import { columnList } from "../../data";
import PropTypes from "prop-types";
export const Main= ({ cardList }) => (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnList.map((status) => (
              <Column
                key={status}
                title={status}
                cards={cardList.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
Main.propTypes = {
  cardList: PropTypes.array.isRequired,
};
