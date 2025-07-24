// src/App.jsx
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

function App() {
  useEffect(() => {
    document.title = import.meta.env.VITE_SITE_TITLE || "My Portfolio";
  }, []);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log("API Base URL:", apiBaseUrl);

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div style={{ padding: "2rem", textAlign: "center" }}>Loading...</div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
