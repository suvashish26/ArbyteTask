import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  const [count, setCount] = useState(0);

  function changeCount() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <button onClick={changeCount}>Click Me</button>
        <p>Increase my {count}</p>
      </div>
    </>
  );
}

export default App;
