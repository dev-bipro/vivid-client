import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome, FiSearch, FiMeh } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Option 1: Minimal Design */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto h-16 w-16 text-gray-400 mb-4">
            <FiMeh className="h-full w-full" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-xl text-gray-600 mb-6">Page not found</p>
          <p className="text-gray-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiHome className="h-4 w-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <FiArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
