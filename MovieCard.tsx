import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus, Heart, Star } from 'lucide-react';
import { Movie } from '../types';
import { useAuth } from '../context/AuthContext';

interface MovieCardProps {
  movie: Movie;
  size?: 'small' | 'medium' | 'large';
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, size = 'medium' }) => {
  const { user, addToWatchlist, removeFromWatchlist } = useAuth();
  const isInWatchlist = user?.watchlist.includes(movie.id) || false;

  const handleWatchlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) return;
    
    if (isInWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie.id);
    }
  };

  const sizeClasses = {
    small: 'w-48 h-72',
    medium: 'w-64 h-96',
    large: 'w-80 h-[480px]'
  };

  return (
    <Link to={`/movie/${movie.id}`} className="group block">
      <div className={`${sizeClasses[size]} relative rounded-lg overflow-hidden bg-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">{movie.title}</h3>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm font-medium">{movie.rating}</span>
              </div>
              <span className="text-gray-300 text-sm">{movie.year}</span>
            </div>
            <p className="text-gray-300 text-sm line-clamp-3 mb-3">{movie.description}</p>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-colors">
                <Play className="h-3 w-3" />
                <span>Play</span>
              </button>
              {user && (
                <button
                  onClick={handleWatchlistToggle}
                  className={`p-2 rounded-full transition-colors ${
                    isInWatchlist 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-800/50 text-white hover:bg-gray-700'
                  }`}
                >
                  {isInWatchlist ? <Heart className="h-4 w-4 fill-current" /> : <Plus className="h-4 w-4" />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {movie.isNewRelease && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
          )}
          {movie.isTrending && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">TRENDING</span>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span>{movie.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;