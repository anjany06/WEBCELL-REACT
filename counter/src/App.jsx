import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <button onClick={() => setCount(count + 1)}>INCREMENT</button>
        <button onClick={() => setCount(count - 1)}>DECREMENT</button>
        <button onClick={() => setCount(0)}>RESET</button>
        <p>count is {count}</p>
      </div>
    </>
  );
}

export default App;
