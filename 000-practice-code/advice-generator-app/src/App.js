import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  // we do async function to will make the API call
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data);
  }

  // we will useEffect that will call the function getAdvice
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>Advice Generator</h1>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

// we will create a component - they are called props in React
function Message(props){
  return (
    <div>
      <p>
        You have clicked the button <strong>{props.count}</strong> times
      </p>
    </div>
  );
}