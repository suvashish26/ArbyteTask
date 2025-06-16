import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import DigitalClock from "./components/Clock";
function App() {
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count changes");
    if (count === 10) setChangeStyle(true);
  }, [count]);

  const changeCount = () => setCount(count + 1);

  return (
    <div>
      <Loading />
      <DigitalClock />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
        <button
          onClick={changeCount}
          className={`px-6 py-3 rounded-lg text-sm font-semibold transition duration-300 ${
            changeStyle
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-red-500 text-black hover:bg-red-600"
          }`}
        >
          Click Me
        </button>
        <p className="text-lg font-medium">Increase my {count}</p>
      </div>
    </div>
  );
}

export default App;
