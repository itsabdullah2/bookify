import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const Navbar = ({ showAdmin = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-primary shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="text-2xl font-bold text-primary">
          Bookify
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`transition-colors ${
              isActive("/")
                ? "text-primary font-bold"
                : "text-gray-700 hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            to="/catalog"
            className={`transition-colors ${
              isActive("/catalog")
                ? "text-primary font-bold"
                : "text-gray-700 hover:text-primary"
            }`}
          >
            Catalog
          </Link>
          <Link
            to="/basket"
            className={`transition-colors ${
              isActive("/basket")
                ? "text-primary font-bold"
                : "text-gray-700 hover:text-primary"
            }`}
          >
            Basket
          </Link>
          <Link
            to="/login"
            className={`transition-colors ${
              isActive("/login")
                ? "text-primary font-bold"
                : "text-gray-700 hover:text-primary"
            }`}
          >
            Login
          </Link>
          {showAdmin && (
            <Link
              to="/admin"
              className={`transition-colors ${
                isActive("/admin")
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Admin
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        showAdmin={showAdmin}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};

export default Navbar;
