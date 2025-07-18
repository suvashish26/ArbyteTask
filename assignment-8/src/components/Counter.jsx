import React from "react";
import { useCounterContext } from "../context/Counter/CounterContext";

function Counter() {
  const { count, setCount } = useCounterContext();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">Counter: {count}</h2>
      <div className="space-x-4">
        <button
          onClick={increment}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
