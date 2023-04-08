import React from 'react';
import './App.css';

function TitleHead() {
  return <p>Hello World!</p>;
}

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>
}

function App() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

  const [counter, setcounter] = React.useState(0)

  function handleClick() {
    setcounter(counter + 1)
  }

  return (
    <div>
      <Header title="Learning React!" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({counter})</button>
    </div>
  )
}

export default App;
