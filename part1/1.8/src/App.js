import { useState } from "react";

const History = ({ title, amount }) => <p>{title}: {amount}</p>;

const Statistic = ({ title, num }) => <p>{title}: {num}</p>;

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
  
  const [total, setTotal] = useState(0);

  const increaseGoodFeedback = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    })
    setTotal(total + 1)
  }
  
  const increaseNeutralFeedback = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
    })
    setTotal(total + 1)
  }

  const increaseBadFeedback = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    })
    setTotal(total + 1)
  }

  const avarage = (a, b) => {
    if (a === 0) {
      return 0
    }
    return Math.abs((a - b)/total)
  }

  const positive = (x) => {
    if (x === 0) {
      return 0 + " %"
    }
    return (x/total)*100 + " %"
  }

  return (
    <>
      <Title title={'give feedback'} />
      <Button onClick={increaseGoodFeedback} title={'good'} /> 
      <Button onClick={increaseNeutralFeedback} title={'neutral'} /> 
      <Button onClick={increaseBadFeedback} title={'bad'} /> 
      <Title title={'statistics'} />
      <History title={'good'} amount={feedback.good} />
      <History title={'neutral'} amount={feedback.neutral} />
      <History title={'bad'} amount={feedback.bad} />
      <Statistic title={'all'} num={total} />
      <Statistic title={'avarage'} num={avarage(feedback.good, feedback.bad)} />
      <Statistic title={'positive'} num={positive(feedback.good)} />
    </>
  );
}

export default App;
