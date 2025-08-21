import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

const App = () => {

  return (
    <>
      <Description />
      <Options 
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      { totalFeedback > 0 ? <Feedback 
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positiveFeedback}
      /> : <Notification />}
    </>
  );
};

export default App;
