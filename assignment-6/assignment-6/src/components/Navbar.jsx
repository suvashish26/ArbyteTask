import { Link } from "react-router-dom";

export default function Navbar({ role }) {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow flex justify-between items-center">
      <div className="text-xl font-semibold">
        <Link
          to="/"
          className="hover:text-blue-300 transition-colors duration-200"
        >
          Home
        </Link>
      </div>
      <div className="space-x-4">
        {role === "admin" && (
          <Link
            to="/admin"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Admin Dashboard
          </Link>
        )}
        {role === "user" && (
          <Link
            to="/user"
            className="hover:text-blue-300 transition-colors duration-200"
          >
            User Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
}
