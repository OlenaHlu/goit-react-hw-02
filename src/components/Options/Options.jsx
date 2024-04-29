import PropTypes from "prop-types";

function Options({ updateFeedback, totalFeedback }) {
  const resetFeedback = () => {
    updateFeedback("good", 0);
    updateFeedback("neutral", 0);
    updateFeedback("bad", 0);
  };

  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;
