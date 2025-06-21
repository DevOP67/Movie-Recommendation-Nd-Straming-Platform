import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, Plus, Heart, Star, Calendar, Clock, User } from 'lucide-react';
import { movies } from '../data/movies';
import { useAuth } from '../context/AuthContext';
import MovieRow from '../components/MovieRow';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, addToWatchlist, removeFromWatchlist, addToHistory } = useAuth();
  
  const movie = movies.find(m => m.id === id);
  const isInWatchlist = user?.watchlist.includes(id || '') || false;
  const relatedMovies = movies.filter(m => 
    m.id !== id && m.genre.some(g => movie?.genre.includes(g))
  ).slice(0, 6);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Movie not found</h1>
          <Link to="/" className="text-red-500 hover:text-red-400">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleWatchlistToggle = () => {
    if (!user) return;
    
    if (isInWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie.id);
    }
  };

  const handlePlayClick = () => {
    if (user) {
      addToHistory(movie.id);
    }
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${movie.backdrop})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
            <div className="flex flex-col lg:flex-row items-end space-y-8 lg:space-y-0 lg:space-x-8">
              {/* Movie Poster */}
              <div className="flex-shrink-0">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-64 h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>

              {/* Movie Info */}
              <div className="flex-1 max-w-2xl">
                <h1 className="text-5xl font-bold text-white mb-4">{movie.title}</h1>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{movie.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-white">{movie.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-white">{movie.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genre.map((g) => (
                    <span key={g} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                      {g}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {movie.description}
                </p>

                <div className="flex items-center space-x-4">
                  <Link
                    to={`/watch/${movie.id}`}
                    onClick={handlePlayClick}
                    className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors"
                  >
                    <Play className="h-6 w-6 fill-current" />
                    <span>Play Now</span>
                  </Link>
                  
                  {user && (
                    <button
                      onClick={handleWatchlistToggle}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                        isInWatchlist 
                          ? 'bg-red-600 text-white' 
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {isInWatchlist ? (
                        <>
                          <Heart className="h-5 w-5 fill-current" />
                          <span>In Watchlist</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-5 w-5" />
                          <span>Add to Watchlist</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">About This Movie</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {movie.description}
              </p>
            </div>

            {/* Cast */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Cast</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {movie.cast.map((actor) => (
                  <div key={actor.id} className="text-center">
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                    />
                    <h3 className="text-white font-medium">{actor.name}</h3>
                    <p className="text-gray-400 text-sm">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-6">Movie Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Director</p>
                    <p className="text-white">{movie.director}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm mb-1">Genres</p>
                  <div className="flex flex-wrap gap-1">
                    {movie.genre.map((g) => (
                      <span key={g} className="text-white text-sm">{g}</span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm">Release Year</p>
                  <p className="text-white">{movie.year}</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-white">{movie.duration}</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm">Rating</p>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{movie.rating}/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Movies */}
        {relatedMovies.length > 0 && (
          <div className="mt-16">
            <MovieRow title="More Like This" movies={relatedMovies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;