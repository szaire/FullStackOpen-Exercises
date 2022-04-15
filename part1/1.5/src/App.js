const Header = (props) => {
  console.log(props);
  return <h1>{props.name}</h1>
}

const Content = (props) => (
  <>
    <ObjectParts part={props.part[0]} />
    <ObjectParts part={props.part[1]} />
    <ObjectParts part={props.part[2]} />
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
  const course = {
    name: "Half stack application development",
    parts: [
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
  }

  return (
    <>
      <Header name={course.name} />
      <Content part={course.parts} />
      <Total part={course.parts} />
    </>
  )
}

export default App;