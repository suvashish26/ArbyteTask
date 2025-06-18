import { useState } from "react";

const Login = () => {
  const [isEmail, setEmail] = useState("");
  const [isPassword, setPassword] = useState("");
  const [isError, setError] = useState("");

  function setEmailValue(e) {
    setEmail(e.target.value);
  }
  function setPasswordValue(e) {
    setPassword(e.target.value);
  }
  function addValidation(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isEmail || !isPassword) {
      setError("Please fill in all fields");
    } else if (!emailRegex.test(isEmail)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
    if (isEmail && isPassword) {
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        {isError && (
          <p className="error text-red-500 mb-4 text-center">{isError}</p>
        )}
        <form>
          <label className="block mb-2 text-gray-700 font-medium">Email</label>
          <input
            className="rounded border border-gray-300 w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            value={isEmail}
            onChange={setEmailValue}
            placeholder="Enter your email"
          />
          <p className="text-xs text-gray-500 mb-4">The email is {isEmail}</p>

          <label className="block mb-2 text-gray-700 font-medium">
            Password
          </label>
          <input
            className="border rounded border-gray-300 w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            value={isPassword}
            onChange={setPasswordValue}
            placeholder="Enter your password"
          />
          <p className="text-xs text-gray-500 mb-4">
            The password is {isPassword}
          </p>
          <button
            type="submit"
            onClick={addValidation}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
