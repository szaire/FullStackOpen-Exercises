const Footer = () => {
  return (
    <>
      <h1>This react page was made by <a href="https://github.com/szaire">samuel zaire</a></h1>
    </>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}! You are {props.age} years old and you're {props.beauty}. </p>
    </div>
  )
}

const App = () => {
  const name = "Samuel"
  const age = "19"

  return (
    <>
      <p>Greetings,<br /> New User!</p>
      <Hello name={name} age={age} beauty="ugly" />
      <Hello name="Fonseca" age="20" beauty="handsome" />
      <Footer />
    </>
  )
}

export default App