const Header = (props) => (
  <h1>{props.name}</h1>
)

const Content = (props) => (
  <p>
    {props.part1}: {props.ex1}<br /><br />
    {props.part2}: {props.ex2}<br /><br />
    {props.part3}: {props.ex3}
  </p>
)

const Total = (props) => (
  <p>Number of exercises: {
    props.ex1 +
    props.ex2 +
    props.ex3}
  </p>
)

const App = () => {
  const course = "Half stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <>
      <Header name={course} />
      <Content
        part1={part1} ex1={exercises1}
        part2={part2} ex2={exercises2}
        part3={part3} ex3={exercises3}
      />
      <Total
        ex1={exercises1}
        ex2={exercises2}
        ex3={exercises3}
      />
    </>
  )
}

export default App;