import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100',
  watchlist: [],
  watchHistory: []
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser(mockUser);
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({ ...mockUser, name, email });
  };

  const logout = () => {
    setUser(null);
  };

  const addToWatchlist = (movieId: string) => {
    if (user && !user.watchlist.includes(movieId)) {
      setUser({ ...user, watchlist: [...user.watchlist, movieId] });
    }
  };

  const removeFromWatchlist = (movieId: string) => {
    if (user) {
      setUser({ ...user, watchlist: user.watchlist.filter(id => id !== movieId) });
    }
  };

  const addToHistory = (movieId: string) => {
    if (user && !user.watchHistory.includes(movieId)) {
      setUser({ ...user, watchHistory: [movieId, ...user.watchHistory] });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      addToWatchlist,
      removeFromWatchlist,
      addToHistory
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};