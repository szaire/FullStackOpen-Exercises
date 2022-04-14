function App() {
  const course = "Half stack application development"
  const part1 = "Fundamentals of React"
  const exrecises1 = 10
  const part2 = "Using props to pass data"
  const exrecises2 = 7
  const part3 = "State of a component"
  const exrecises3 = 14

  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1}: {exrecises1}
      </p>
      <p>
        {part2}: {exrecises2}
      </p>
      <p>
        {part3}: {exrecises3}
      </p>
      <p>Number of exercises: {exrecises1 + exrecises2 + exrecises3}</p>
    </>
  )
}

export default App;