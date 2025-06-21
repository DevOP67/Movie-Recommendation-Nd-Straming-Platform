import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { movies } from '../data/movies';
import { useAuth } from '../context/AuthContext';

const HeroSection: React.FC = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const { user, addToHistory } = useAuth();
  
  const featuredMovies = movies.filter(movie => movie.isTrending || movie.isNewRelease).slice(0, 3);
  const currentMovie = featuredMovies[currentMovieIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const handlePlayClick = () => {
    if (user && currentMovie) {
      addToHistory(currentMovie.id);
    }
  };

  if (!currentMovie) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${currentMovie.backdrop})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Movie Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              {currentMovie.title}
            </h1>

            {/* Movie Info */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                {currentMovie.rating} ★
              </span>
              <span className="text-white font-medium">{currentMovie.year}</span>
              <span className="text-white">{currentMovie.duration}</span>
              <div className="flex space-x-2">
                {currentMovie.genre.slice(0, 2).map((genre) => (
                  <span key={genre} className="text-gray-300 text-sm">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {currentMovie.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to={`/watch/${currentMovie.id}`}
                onClick={handlePlayClick}
                className="flex items-center space-x-2 bg-white text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors transform hover:scale-105"
              >
                <Play className="h-6 w-6 fill-current" />
                <span>Play Now</span>
              </Link>
              
              <Link
                to={`/movie/${currentMovie.id}`}
                className="flex items-center space-x-2 bg-gray-600/70 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
              >
                <Info className="h-5 w-5" />
                <span>More Info</span>
              </Link>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMovieIndex(index)}
            className={`w-12 h-1 rounded-full transition-all ${
              index === currentMovieIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;