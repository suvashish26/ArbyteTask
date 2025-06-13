import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  useEffect(() => {
    console.log("Component mounted");
  }, []); // this will run once

  useEffect(() => {
    console.log("Count changes");
    if (count === 10) setChangeStyle(true);
  }, [count]); // maintaining side effect on the count

  console.log(changeStyle);
  function changeCount() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <button
          style={{
            backgroundColor: changeStyle ? "black" : "red",
            color: changeStyle ? "#fff" : "#000",
          }}
          onClick={changeCount}
        >
          Click Me
        </button>
        <p>Increase my {count}</p>
      </div>
    </>
  );
}

export default App;
