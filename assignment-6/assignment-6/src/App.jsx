import React, { useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Register = React.lazy(() => import("./components/Register"));
const Login = React.lazy(() => import("./components/Login"));
const Home = React.lazy(() => import("./components/Home"));
const PostDetails = React.lazy(() => import("./components/PostDetails"));
const PostLayout = React.lazy(() => import("./components/PostLayout"));
const AdminDashboard = React.lazy(() => import("./components/AdminDashboard"));
const UserDashboard = React.lazy(() => import("./components/UserDashboard"));
const ProtectedRoute = React.lazy(() => import("./components/ProtectedRoute"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("");
  return (
    <>
      <Navbar role={role} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setRole={setRole}
              />
            }
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
          <Route
            path="/user"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                role={role}
                allowedRole="user"
              >
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/post" element={<PostLayout />}>
            <Route path=":id" element={<PostDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
