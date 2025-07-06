import React, { useState } from "react";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";
import PostLayout from "./components/PostLayout";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/post" element={<PostLayout />}>
        <Route path=":id" element={<PostDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
