import { useState } from "react";

const Feedback = ({ good, neutral, bad, func1, func2, func3 }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return "No given feedback :c";
  }
  return (
    <div>
      <Statistic title={'good'} stat={good} />
      <Statistic title={'neutral'} stat={neutral} />
      <Statistic title={'bad'} stat={bad} />
      <Statistic title={'all'} stat={func1} />
      <Statistic title={'avarage'} stat={func2} />
      <Statistic title={'positive'} stat={func3} />
    </div>
  )
}

const Statistic = ({ title, stat }) => <p>{title}: {stat}</p>;

const Title = ({ title }) => <h2>{title}</h2>;

const Button = ({ onClick, title }) => (
  <button onClick={onClick}>
    {title}
  </button>
);

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  // Feedback Gross Statistcs
  const increaseGoodFeedback = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    })
  }
  
  const increaseNeutralFeedback = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
    })
  }

  const increaseBadFeedback = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    })
  }

  // Feedback Statistics
  const total = (a, b, c) => a + b + c;
  const avarage = (a, b, c) => {
    if (a === 0) {
      return 0
    }
    return Math.abs((a - c)/total(a, b, c))
  }
  const positive = (a, b, c) => {
    if (a === 0) {
      return 0 + " %"
    }
    return (a/total(a, b, c))*100 + " %"
  }

  return (
    <>
      <Title title={'give feedback'} />
      <Button onClick={increaseGoodFeedback} title={'good'} /> 
      <Button onClick={increaseNeutralFeedback} title={'neutral'} /> 
      <Button onClick={increaseBadFeedback} title={'bad'} /> 
      <Title title={'statistics'} />
      <Feedback 
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        func1={total(feedback.good, feedback.neutral, feedback.bad)}
        func2={avarage(feedback.good, feedback.neutral, feedback.bad)}
        func3={positive(feedback.good, feedback.neutral, feedback.bad)}
      />      
    </>
  );
}

export default App;
