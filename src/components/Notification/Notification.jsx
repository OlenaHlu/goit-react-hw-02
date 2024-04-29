// function Notification() {
//   return (
//     <div>
//       <p>No feedback given yet</p>
//     </div>
//   );
// }

// export default Notification;

import css from "./Notification.module.css";

export function Notification() {
  return (
    <div>
      <p className={css.noFeedback}>No feedback given</p>
    </div>
  );
}
export default Notification;
