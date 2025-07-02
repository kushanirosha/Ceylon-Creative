'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Ceylon <span className="text-yellow-500">Creative</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-900 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="/services" className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="/about" className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="/portfolio" className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
                Portfolio
              </a>
              <a href="/" className="text-gray-700 hover:text-yellow-500 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="text-gray-900 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
              About
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-500 block px-3 py-2 text-base font-medium">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}