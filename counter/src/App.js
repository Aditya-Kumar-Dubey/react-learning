import './App.css';
import { useState } from 'react';
 
function App() {

  // let counter = 15;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>React with Aditya {counter}</h1>
      <h2>Counter value:  {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button> {" "}
      <button
      onClick={removeValue}
      >Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;