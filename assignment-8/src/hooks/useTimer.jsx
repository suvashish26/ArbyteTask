import { useEffect, useReducer, useRef } from "react";

// Initial timer state
const initialState = {
  time: 0, // in seconds
  isRunning: false,
};

// Reducer to handle actions
function reducer(state, action) {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "PAUSE":
      return { ...state, isRunning: false };
    case "RESET":
      return { time: 0, isRunning: false };
    case "TICK":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
}

// Custom hook
export function useTimer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(useReducer(reducer, initialState));
  const intervalRef = useRef(null);

  // Side effect to start/stop the timer
  useEffect(() => {
    if (state.isRunning) {
      intervalRef.current = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    } else if (!state.isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, [state.isRunning]);

  const start = () => dispatch({ type: "START" });
  const pause = () => dispatch({ type: "PAUSE" });
  const reset = () => dispatch({ type: "RESET" });

  return {
    time: state.time,
    isRunning: state.isRunning,
    start,
    pause,
    reset,
  };
}
