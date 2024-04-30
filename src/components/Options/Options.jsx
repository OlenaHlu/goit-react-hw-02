import PropTypes from "prop-types";
import css from "./Options.module.css";

function Options({ updateFeedback, totalFeedback }) {
  const resetFeedback = () => {
    updateFeedback("good", 0);
    updateFeedback("neutral", 0);
    updateFeedback("bad", 0);
  };

  return (
    <div className={css.optionsContainer}>
      <button
        className={css.optionsButtons}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.optionsButtons}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.optionsButtons}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.optionsButtons} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
