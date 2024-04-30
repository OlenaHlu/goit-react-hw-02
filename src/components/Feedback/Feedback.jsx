import PropTypes from "prop-types";
import css from "./Feedback.module.css";

function Feedback({
  countFeedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={css.feedbackContainer}>
      <p className={css.feedbackData}>Good: {good}</p>
      <p className={css.feedbackData}>Neutral: {neutral}</p>
      <p className={css.feedbackData}>Bad: {bad}</p>
      <p className={css.feedbackData}>Total: {totalFeedback}</p>
      <p className={css.feedbackResult}>Positive: {positiveFeedback}%</p>
    </div>
  );
}

Feedback.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,

  countFeedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Feedback;
