const Header = (props) => {
  console.log(props);
  return <h1>{props.name}</h1>
}

const Content = (props) => (
  <>
    <ObjectParts part={props.part[0]}/>
    <ObjectParts part={props.part[1]}/>
    <ObjectParts part={props.part[2]}/>
  </>
)

const ObjectParts = (props) => (
  <p>
    {props.part.name}: {props.part.exercises}
  </p>
)

const Total = (props) => (
  <p>
    Number of exercises: {
    props.part[0].exercises +
    props.part[1].exercises +
    props.part[2].exercises}
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
      <Content part={part} />
      <Total part={part} />
    </>
  )
}

export default App;