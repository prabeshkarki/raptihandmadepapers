
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-semibold text-gray-800">RAPTIHANDMADE</Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-700">
              Home
            </Link>
            <Link to="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-700">
              About
            </Link>
            <Link to="/products" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-700">
              Products
            </Link>
            <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-green-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
