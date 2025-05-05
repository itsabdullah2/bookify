import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ setIsMenuOpen, isMenuOpen, showAdmin }) => {
  return (
    <div
      className={`md:hidden absolute w-full bg-white border-b shadow-sm transition-all duration-300 ease-in-out 
          ${isMenuOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden"}`}
    >
      <nav className="flex flex-col space-y-4 px-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/catalog"
          className="text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Catalog
        </Link>
        <Link
          to="/basket"
          className="text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Basket
        </Link>
        <Link
          to="/login"
          className="text-gray-700 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
        {showAdmin && (
          <Link
            to="/admin"
            className="text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Admin
          </Link>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
