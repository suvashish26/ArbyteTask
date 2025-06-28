import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <ul>
        <li>
          <Link to="/post/1">Go to Post 1</Link>
        </li>
        <li>
          <Link to="/post/2">Go to Post 2</Link>
        </li>
      </ul>
    </div>
  );
}
