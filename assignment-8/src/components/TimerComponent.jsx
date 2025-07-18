import React from "react";
import { useTimer } from "../hooks/useTimer"; // adjust the path as needed

export default function TimerComponent() {
  const { time, isRunning, start, pause, reset } = useTimer();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="text-center mt-10 space-y-4">
      <h1 className="text-4xl font-bold">Timer: {formatTime(time)}</h1>

      <div className="space-x-4">
        {!isRunning ? (
          <button
            onClick={start}
            className="bg-green-500 px-4 py-2 text-white rounded"
          >
            Start
          </button>
        ) : (
          <button
            onClick={pause}
            className="bg-yellow-500 px-4 py-2 text-white rounded"
          >
            Pause
          </button>
        )}

        <button
          onClick={reset}
          className="bg-red-500 px-4 py-2 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
