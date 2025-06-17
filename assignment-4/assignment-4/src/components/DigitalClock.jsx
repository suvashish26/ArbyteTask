import React, { useState } from "react";
import useInterval from "./useInterval";

function Clock() {
  const [time, setTime] = useState(new Date());

  useInterval(() => {
    setTime(new Date());
  }, 1000); // Updates every second

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-80 h-48 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-gray-700 mb-2">
          Current Time
        </h1>
        <div className="text-4xl font-mono text-blue-600">{formattedTime}</div>
      </div>
    </div>
  );
}

export default Clock;
