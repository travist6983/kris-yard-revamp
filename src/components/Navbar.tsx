
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="centered-container px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            Kris Lawn Care
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-primary transition-colors duration-200">Services</a>
          <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors duration-200">Gallery</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors duration-200">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors duration-200">Contact</a>
          
          <Button className="bg-primary text-white hover:bg-primary-hover flex items-center gap-2">
            <Phone size={18} />
            <span className="hidden lg:inline">(555) 123-4567</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="centered-container px-4 flex flex-col space-y-3">
            <a href="#services" className="text-gray-700 hover:text-primary py-2 transition-colors duration-200">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-primary py-2 transition-colors duration-200">Gallery</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary py-2 transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary py-2 transition-colors duration-200">Contact</a>
            <Button className="bg-primary text-white hover:bg-primary-hover w-full justify-center flex items-center gap-2 py-3">
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
