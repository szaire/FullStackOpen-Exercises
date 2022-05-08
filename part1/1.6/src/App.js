import { useState } from "react";

const History = ({ title, amount }) => {
  if (amount === 0) {
    return (
      <p>{title}: feedback indisponível </p> 
    )
  }
  return (
    <p>{title}: {amount}</p>
  )
}

const Title = ({ title }) => <h3>{title}</h3>;

const Button = ({ eventHandler, title }) => (
  <button onClick={eventHandler}>
    {title}
  </button>
);

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increaseGoodFeedback = () => setFeedback({...feedback, good: feedback.good + 1});
  const increaseNeutralFeedback = () => setFeedback({...feedback, neutral: feedback.neutral + 1});
  const increaseBadFeedback = () => setFeedback({...feedback, bad: feedback.bad + 1});

  return (
    <>
      <Title title={'give feedback'} />
      <Button eventHandler={increaseGoodFeedback} title={'good'} /> 
      <Button eventHandler={increaseNeutralFeedback} title={'neutral'} /> 
      <Button eventHandler={increaseBadFeedback} title={'bad'} /> 
      <Title title={'statistics'} />
      <History title={'good'} amount={feedback.good} />
      <History title={'neutral'} amount={feedback.neutral} />
      <History title={'bad'} amount={feedback.bad} />
    </>
  );
}

export default App;
