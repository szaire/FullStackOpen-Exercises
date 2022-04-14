const Hello = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <p>Greetings,<br/> New User!</p>
      <Hello/>
    </div>
  )
}

export default App