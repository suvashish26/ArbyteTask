import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        transition: "all 0.3s ease",
      }}
    >
      <button className="p-2 border rounded" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
