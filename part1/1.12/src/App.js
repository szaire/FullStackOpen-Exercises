import { useState } from "react"; 
 
const Button = ({ onClick, text }) => ( 
  <div> 
    <button onClick={onClick}> 
      {text} 
    </button> 
  </div> 
) 
 
const App = () => { 
  // Anecdotes DB 
  const anecdotes = [ 
    'If it hurts, do it more often', 
    'Adding manpower to a late software project makes it later!', 
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 
    'Premature optimization is the root of all evil.', 
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.' 
  ]; 
 
  // Stateful Value 
  const [selected, setSelected] = useState(0); 
 
  // functions 
  const getRandomAnecdoteExc = () => { 
    setSelected(Math.floor(Math.random() * (anecdotes.length - 0))); 
  } 
 
  return ( 
    <> 
      {anecdotes[selected]} 
      <Button onClick={getRandomAnecdoteExc} text={"click me!"} /> 
    </> 
  ) 
} 

export default App