import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    setIsAuthenticated(true);
    navigate("/admin");
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <label htmlFor="Email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email.."
        />
        <label htmlFor="Password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password.."
        />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
