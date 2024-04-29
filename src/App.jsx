import { useState, useEffect } from "react";
import Description from "./components/Descriptions/Descriptions";
import Feedback from "./components/Feedback/Feedback";

function App() {
  //створюємо стан для зберігання типів відгуків
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Feedback />
      <Options />
    </div>
  );
}

export default App;
