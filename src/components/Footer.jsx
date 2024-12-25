import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import Container from './ui/Container';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@gommateshwara.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#travel-guide" className="hover:text-blue-400 transition-colors">Travel Guide</a></li>
              <li><a href="#hotels" className="hover:text-blue-400 transition-colors">Hotels</a></li>
              <li><a href="#transport" className="hover:text-blue-400 transition-colors">Transport</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Gommateshwara Tourism. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;