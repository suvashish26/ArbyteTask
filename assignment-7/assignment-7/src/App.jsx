import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
