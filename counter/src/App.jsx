import { useState } from 'react'
import './App.css';

function App() {


  let [counter, setCOUNTER] = useState(0)
  

  function addValue() {
    counter = counter + 1
    if(counter>20){
      counter = 20
    }

    setCOUNTER(counter)
  }
  const subValue = () =>
  {
    counter = counter - 1
    if(counter<0){
      counter = 0;
    }
    setCOUNTER(counter)
  }

  return (
    <>
      <h1>skyden</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>value add {counter}</button>
      <br />
      <button onClick={subValue}>value sub {counter} </button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
