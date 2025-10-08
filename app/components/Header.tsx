'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-sm'
          : 'bg-gradient-to-r from-emerald-900 to-emerald-800'
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="bg-emerald-700 text-white py-2 px-4 text-center text-xs sm:text-sm tracking-wide overflow-hidden whitespace-nowrap overflow-ellipsis">
        🏏 FREE SHIPPING ON ORDERS ABOVE ₹2000 • USE CODE: MOS20
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Header */}
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">M</span>
            </div>
            <span
              className={`text-lg sm:text-xl md:text-2xl font-extrabold truncate ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Mos Sports
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-all duration-200 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-all duration-200 ${
                    isScrolled
                      ? 'text-gray-800 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
