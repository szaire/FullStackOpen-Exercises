const Header = (props) => {
  console.log("Stop!");
  return <h1>{props.name}</h1>
}

const Content = (props) => (
  <>
    <Part part={props[0].name} ex={props.ex1} />
    <Part part={props.part2} ex={props.ex2} />
    <Part part={props.part3} ex={props.ex3} />
  </>
)

const Part = (props) => (
  <p>
    {props.part}: {props.ex}
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

  const part = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]

  return (
    <>
      <Header name={course} />
      <Content parts={part} />
      <Total
        ex1={part[0].exercises}
        ex2={part[1].exercises}
        ex3={part[2].exercises}
      />
    </>
  )
}

export default App;