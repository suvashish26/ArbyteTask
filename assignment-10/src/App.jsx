// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // Set the site title from environment variable
  useEffect(() => {
    document.title = import.meta.env.VITE_SITE_TITLE || "My Portfolio";
  }, []);

  // Optional: Use the base API URL from environment
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log("API Base URL:", apiBaseUrl);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
