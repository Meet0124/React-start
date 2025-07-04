import { useState } from "react";
import "./App.css";

function App() {
  const [counter,setCounter]= useState(1)
  //let counter = 15;
  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);

    //setCounter(counter+1)

    // if i want to add 4 to it iteratively we callback
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    // these cannot be batch becausre they are dependent on prev value they have to extract
  };
  const removeValue=()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1> Reactcourse with Meet {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick ={addValue}>Add Value</button>{" "}
      <button
      onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
