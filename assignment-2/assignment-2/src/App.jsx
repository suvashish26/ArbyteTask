import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  function handleToggleText() {
    setIsOn(!isOn);
  }

  return (
    <div className="p-6 text-center">
      <button
        onClick={handleToggleText}
        className=" border rounded-xl px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Turn it {isOn ? "OFF" : "ON"}
      </button>
    </div>
  );
}

export default App;
