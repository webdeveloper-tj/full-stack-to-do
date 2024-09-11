import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center m-36 sm:mb-48">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-white">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-red-300 text-white py-2 px-4 rounded hover:bg-red-400 transition duration-200"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
