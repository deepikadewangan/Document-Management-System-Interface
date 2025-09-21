import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-indigo-600">
              <Moon className="h-6 w-6" />
              <span className="text-xl font-semibold">Aura</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Your companion for mental wellness and self-discovery.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/tests" className="text-base text-gray-600 hover:text-indigo-600">
                  Assessments
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-base text-gray-600 hover:text-indigo-600">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/saved" className="text-base text-gray-600 hover:text-indigo-600">
                  Saved Items
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-600 hover:text-indigo-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-600 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-base text-gray-600 hover:text-indigo-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-600">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} Aura. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <Heart className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-gray-600">Made with love for better mental health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;