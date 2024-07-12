import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // console.log(counter);
  const addValue = () => {
    // console.log("first",Math.random())
    if (counter < 20) {
      counter = counter + 1;
    } else {
      alert("The current value can not exceed more than 20");
    }
    setCounter(counter);
  };
  const decrValue = () => {
    if (counter > 0) {
      counter = counter - 1;
    } else {
      alert("The current value can not exceed less than 0");
    }
    setCounter(counter);
  };
  return (
    <>
      <h1>Hello it's chai here</h1>
      <h1>Counter Value : {counter}</h1>

      <button onClick={addValue}>Increase++</button>
      <br />
      <button onClick={decrValue}>Decrease- -</button>
    </>
  );
}

export default App;
