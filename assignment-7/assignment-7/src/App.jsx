// src/App.jsx
import React from "react";
// import { AuthProvider } from "./context/AuthContext";
// import Home from "./pages/Home";
import Home from "./components/Home";
import NoteState from "./context/Notes/NoteState";
import About from "./components/About";
import LoginState from "./context/Login/LoginState";
import Login from "./components/Login";
export default function App() {
  return (
    <>
      <NoteState>
        {/* <AuthProvider>
          <Home />
        </AuthProvider> */}
        <About />
        <Home />
      </NoteState>
      <LoginState>
        <Login />
      </LoginState>
    </>
  );
}
