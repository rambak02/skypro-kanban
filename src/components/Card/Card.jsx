import PropTypes from "prop-types";
export const Card = ({ topic, title, date }) => (
  <div className="cards__item">
    <div className="cards__card card">
      <div className="card__group">
        <div
          className={
            topic == "Research"
              ? "card__theme _green"
              : topic == "Copywriting"
              ? " card__theme _purple"
              : "card__theme _orange"
          }
        >
          <p
            className={
              topic == "Research"
                ? "_green"
                : topic == "Copywriting"
                ? "purple"
                : "_orange"
            }
          >
            {topic}
          </p>
        </div>
        <a href="#popBrowse" target="_self">
          <div className="card__btn">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </a>
      </div>
      <div className="card__content">
        <a href="" target="_blank">
          <h3 className="card__title">{title}</h3>
        </a>
        <div className="card__date">
          <img src="/public/card_date.svg"  />
          <p> {date}</p>
        </div>
      </div>
    </div>
  </div>
);
Card.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
