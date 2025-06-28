import React from "react";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Message from "./components/Message";
import PostDetails from "./components/PostDetails";
import PostLayout from "./components/PostLayout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/message" element={<Message />}></Route>
      <Route path="/post" element={<PostLayout />} />
      <Route path=":id" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
