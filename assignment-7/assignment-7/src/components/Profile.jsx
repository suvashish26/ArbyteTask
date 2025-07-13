import React from "react";
import { useAuth } from "../context/Login/LoginState";

function Profile() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthUser({ Name: "Guest" });
  };

  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md text-center w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">
          {isLoggedIn ? "Welcome Back!" : "Please Log In"}
        </h2>
        <p className="mb-2 text-gray-700">
          User Status:{" "}
          <span
            className={`font-medium ${
              isLoggedIn ? "text-green-600" : "text-red-500"
            }`}
          >
            {isLoggedIn ? "Logged In" : "Logged Out"}
          </span>
        </p>

        {isLoggedIn && (
          <p className="mb-4 text-gray-600">User name: {authUser.Name}</p>
        )}

        {isLoggedIn ? (
          <button
            onClick={logOut}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={logIn}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
