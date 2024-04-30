import { useState, useEffect } from "react";

import Description from "./components/Descriptions/Descriptions";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [countFeedback, setCountFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("countFeedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
  });

  const { good, neutral, bad } = countFeedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = (feedbackType, value = null) => {
    setCountFeedback((prevCountFeedback) => {
      if (value === null) {
        return {
          ...prevCountFeedback,
          [feedbackType]: prevCountFeedback[feedbackType] + 1,
        };
      } else {
        return {
          ...prevCountFeedback,
          [feedbackType]: value,
        };
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("countFeedback", JSON.stringify(countFeedback));
  }, [countFeedback]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification totalFeedback={totalFeedback} />
      ) : (
        <Feedback
          countFeedback={countFeedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
