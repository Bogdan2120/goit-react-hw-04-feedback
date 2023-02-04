import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const GOOD = 'good';
const NEUTRAL = 'neutral';
const BAD = 'bad';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return Number(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = Math.round(Number((good / total) * 100));
    return result;
  };

  const leaveFeadback = feedback => {
    switch (feedback) {
      case GOOD:
        return setGood(prevGood => prevGood + 1);
      case NEUTRAL:
        return setNeutral(prevNeutral => prevNeutral + 1);
      case BAD:
        return setBad(prevBad => prevBad + 1);
      default:
        return;
    }
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeadback={leaveFeadback}
          options={[GOOD, NEUTRAL, BAD]}
        />

        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
