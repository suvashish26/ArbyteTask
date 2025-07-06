import { Link } from "react-router-dom";

export default function Navbar({ role }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      {role === "admin" && <Link to="/admin">Admin Dashboard</Link>}
      {role === "user" && <Link to="/user">User Dashboard</Link>}
    </nav>
  );
}
