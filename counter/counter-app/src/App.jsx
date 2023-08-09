import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const value = localStorage.getItem("value");
    console.log(value);
    if (value) {
      setCount(JSON.parse(value));
    }
  }, []);

  function incrementCounter() {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("value", JSON.stringify(newCount));
  }

  function decrementCounter() {
    const newCount = Math.max(count - 1, 0);
    setCount(newCount);
    localStorage.setItem("value", JSON.stringify(newCount));
  }

  function resetCounter() {
    const newCount = 0;
    setCount(newCount);
    localStorage.setItem("value", JSON.stringify(newCount));
  }

  return (
    <div className="wrapper">
      <main>
        <h1>
          counter is: <span>{count}</span>
        </h1>

        <div className="btn-wrapper">
          <button onClick={incrementCounter}>+</button>
          <button onClick={decrementCounter}>-</button>
          <button onClick={resetCounter}>Reset Counter</button>
        </div>
      </main>
    </div>
  );
}

export default App;
