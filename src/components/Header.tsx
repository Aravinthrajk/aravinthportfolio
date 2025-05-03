import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  const navItems = [
    { key: 'home', link: '/' },
    { key: 'destinations', link: '/destinations' },
    { key: 'packages', link: '/packages' },
    { key: 'about', link: '/about' },
    { key: 'contact', link: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || location.pathname !== '/'
          ? 'bg-white/80 backdrop-blur-lg text-gray-800 shadow-lg' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl md:text-3xl font-bold flex items-center group">
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">Sri</span>
            <span className="bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent mx-1 group-hover:scale-105 transition-transform">Agni</span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">Amman</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.link}
                className={`relative font-medium group ${
                  scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
                } ${isActive(item.link) ? 'text-orange-500' : ''}`}
              >
                {t(item.key)}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-300 ${
                  isActive(item.link) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className={`flex items-center text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                scrolled || location.pathname !== '/'
                  ? 'border-gray-300 hover:bg-gray-100'
                  : 'border-white/30 hover:bg-white/10'
              }`}
            >
              <Globe size={18} className="mr-2" />
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>

            <a
              href="tel:+919876543210"
              className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              Call Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-colors ${
                scrolled || location.pathname !== '/'
                  ? 'hover:bg-gray-100'
                  : 'hover:bg-white/10'
              }`}
            >
              <Globe size={20} />
            </button>
            
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-full transition-colors ${
                scrolled || location.pathname !== '/'
                  ? 'hover:bg-gray-100'
                  : 'hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-800 font-medium py-2 transition-colors ${
                    isActive(item.link) ? 'text-orange-500' : 'hover:text-orange-500'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                Call Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;