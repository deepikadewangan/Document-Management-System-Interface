import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart, Menu, X, User, Moon, LogOut, BarChart2, FileText, Home } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/tests', label: 'Self-Assessments', icon: <BarChart2 size={18} /> },
    { path: '/articles', label: 'Articles', icon: <FileText size={18} /> },
    { path: '/saved', label: 'Saved', icon: <Heart size={18} /> }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm py-3 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-indigo-600">
          <Moon className="h-6 w-6" />
          <span className="text-xl font-semibold">Aura</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {isAuthenticated ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-gray-700">
                <User size={18} />
                <span className="text-sm font-medium">{user?.name}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="flex items-center space-x-1"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => navigate('/register')}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-gray-600"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
          <div className="flex flex-col space-y-2 px-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.path)
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-700">
                  <User size={18} />
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 mt-2 px-2">
                <Button 
                  variant="outline" 
                  fullWidth 
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button 
                  variant="primary" 
                  fullWidth 
                  onClick={() => {
                    navigate('/register');
                    setIsMenuOpen(false);
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;