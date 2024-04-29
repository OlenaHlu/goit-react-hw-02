import PropTypes from "prop-types";

function Options({ updateFeedback, totalFeedback }) {
  return (
    <div>
      <button onClick={() => updateFeedback("Good")}>Good</button>
      <button onClick={() => updateFeedback("Neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("Bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => localStorage.removeItem("Feedback")}>
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
