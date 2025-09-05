import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Globe, Users, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-2 rounded-lg ml-3">
              <Search className="h-6 w-6" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mr-3">EranFixer</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">קידום אתרים</Link>
            <Link to="/web-design-jerusalem" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">בניית אתרים</Link>
            <a href="https://jerusalem.eranfixer.co.il" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">שיווק דיגיטלי</a>
            <Link to="/jerusalem-orm" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">ניהול מוניטין</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-700 hover:text-blue-800 font-medium py-2">קידום אתרים</Link>
              <Link to="/web-design-jerusalem" className="block text-gray-700 hover:text-blue-800 font-medium py-2">בניית אתרים</Link>
              <a href="https://jerusalem.eranfixer.co.il" className="block text-gray-700 hover:text-blue-800 font-medium py-2">שיווק דיגיטלי</a>
              <Link to="/jerusalem-orm" className="block text-gray-700 hover:text-blue-800 font-medium py-2">ניהול מוניטין</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;