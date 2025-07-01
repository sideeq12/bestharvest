import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Sprout className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">GreenHarvest Farm</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#crops" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Our Crops
            </a>
            <a href="#dashboard" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Dashboard
            </a>
            <a href="#products" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Products
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2">
                Home
              </a>
              <a href="#crops" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2">
                Our Crops
              </a>
              <a href="#dashboard" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2">
                Dashboard
              </a>
              <a href="#products" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2">
                Products
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;