import React from "react";
import { CounterState } from "./context/Counter/CounterContext";
import Counter from "./components/Counter";
import { ModalState } from "./context/Modals/ModalContext";
import Modals from "./components/Modals";
import MultiStepForm from "./hooks/MultiStepForm";
import TimerComponent from "./components/TimerComponent";
function App() {
  return (
    <div>
      <CounterState>
        <ModalState>
          <Counter />
          <Modals />
          <MultiStepForm />
          <TimerComponent/>
        </ModalState>
      </CounterState>
    </div>
  );
}

export default App;
