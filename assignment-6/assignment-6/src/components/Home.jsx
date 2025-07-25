import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Blog</h1>

      <Link
        to="/login"
        className="text-blue-600 underline mb-4 hover:text-blue-800"
      >
        Login
      </Link>

      <ul className="space-y-2">
        <li>
          <Link to="/post/1" className="text-lg text-gray-700 hover:text-black">
            Go to Post 1
          </Link>
        </li>
        <li>
          <Link to="/post/2" className="text-lg text-gray-700 hover:text-black">
            Go to Post 2
          </Link>
        </li>
      </ul>
    </div>
  );
}
