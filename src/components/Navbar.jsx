import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Vertexa
        </Link>

        
        <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-white transition">
            About
          </Link>

          <Link to="/solutions" className="hover:text-white transition">
            Solutions
          </Link>

          <Link to="/pricing" className="hover:text-white transition">
            Pricing
          </Link>

          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

      
        <Link
          to="/pricing"
          className="hidden md:inline-block px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Get Started
        </Link>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center py-6 gap-6 text-gray-300 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
