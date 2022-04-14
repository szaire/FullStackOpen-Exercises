const App = () => {
  console.log('Hello World! from component')
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>
        Hello world! It is {now.toString()}
      </p>
      <p>
        {a} + {b} = {a + b}
      </p>
    </div>
  )
}

export default App