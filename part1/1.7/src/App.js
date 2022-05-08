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
  
  const [stats, setStats] = useState({
    total: 0,
  });

  const increaseGoodFeedback = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1,
    })
    setStats({total: stats.total + 1})
  }
  
  const increaseNeutralFeedback = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1,
    })
    setStats({total: stats.total + 1})
  }

  const increaseBadFeedback = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1,
    })
    setStats({total: stats.total + 1})
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
      <Statistic title={'all'} num={stats.total} />
      <Statistic title={'avarage'} num={Math.abs((feedback.good - feedback.bad)/stats.total)} />
      <Statistic title={'positive'} num={(feedback.good/stats.total)*100 + " %"} />
    </>
  );
}

export default App;
