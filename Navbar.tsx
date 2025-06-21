import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, LogOut, Heart, History, Play } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Play className="h-8 w-8 text-red-500 group-hover:text-red-400 transition-colors" />
            <span className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
              StreamFlix
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link to="/movies" className="text-white hover:text-red-400 transition-colors">
              Movies
            </Link>
            <Link to="/categories" className="text-white hover:text-red-400 transition-colors">
              Categories
            </Link>
          </div>

          {/* Search and User Menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="w-64 bg-gray-800/50 text-white placeholder-gray-400 px-4 py-2 pl-10 rounded-full border border-gray-700 focus:outline-none focus:border-red-500 focus:bg-gray-800 transition-all"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 hover:bg-gray-800 rounded-full p-2 transition-colors"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-white hidden sm:block">{user.name}</span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-2 z-50">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      to="/watchlist"
                      className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Heart className="h-4 w-4" />
                      <span>Watchlist</span>
                    </Link>
                    <Link
                      to="/history"
                      className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <History className="h-4 w-4" />
                      <span>Watch History</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                      }}
                      className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-gray-800 transition-colors w-full text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors font-medium"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;