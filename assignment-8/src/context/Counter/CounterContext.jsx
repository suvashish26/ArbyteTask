import { createContext, useContext } from "react";
import { useState } from "react";

export const CounterContext = createContext();

export const CounterState = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  ); 
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  return context;
};
