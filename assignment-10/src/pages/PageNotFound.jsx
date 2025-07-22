import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page not found</p>

      <Link to="/" className="text-blue-500 underline">
        Go to Home
      </Link>
    </div>
  );
};
export default PageNotFound;
