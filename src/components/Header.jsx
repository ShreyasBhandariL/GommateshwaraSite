import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Container from './ui/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['About', 'Travel Guide', 'Hotels', 'Transport'];

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <Container>
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Gommateshwara</h1>
            
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-4">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;