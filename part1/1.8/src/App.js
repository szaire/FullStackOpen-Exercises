import { useState } from "react";

const Feedback = ({ good, neutral, bad, func1, func2, func3 }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return "No feedback given :(";
  }
  return (
    <div>

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

  const total = (a, b, c) =>  a + b + c;

  const avarage = (a, b, c) => {
    if (a === 0 || b === 0) {
      return 0
    }
    return Math.abs(a - b)/total(a, b, c)
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
      <Statistic title={'good'} stat={feedback.good} />
      <Statistic title={'neutral'} stat={feedback.neutral} />
      <Statistic title={'bad'} stat={feedback.bad} />
      <Statistic title={'all'} stat={total(feedback.good, feedback.neutral, feedback.bad)} />
      <Statistic title={'avarage'} stat={avarage(feedback.good, feedback.neutral, feedback.bad)} />
      <Statistic title={'positive'} stat={positive(feedback.good, feedback.neutral, feedback.bad)} />    
    </>
  );
}

export default App;
