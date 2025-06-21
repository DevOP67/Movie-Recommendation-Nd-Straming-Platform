import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Filter } from 'lucide-react';
import { searchMovies } from '../data/movies';
import { Movie } from '../types';
import MovieCard from '../components/MovieCard';

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const genres = ['all', 'Action', 'Sci-Fi', 'Thriller', 'Adventure', 'Drama', 'Crime'];
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'rating', label: 'Rating' },
    { value: 'year', label: 'Year' },
    { value: 'title', label: 'Title' }
  ];

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setQuery(q);
      performSearch(q);
    }
  }, [searchParams]);

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      let searchResults = searchMovies(searchQuery);
      
      // Apply genre filter
      if (selectedGenre !== 'all') {
        searchResults = searchResults.filter(movie => 
          movie.genre.includes(selectedGenre)
        );
      }

      // Apply sorting
      searchResults = sortResults(searchResults, sortBy);
      
      setResults(searchResults);
      setIsLoading(false);
    }, 500);
  };

  const sortResults = (movies: Movie[], sortOption: string): Movie[] => {
    switch (sortOption) {
      case 'rating':
        return [...movies].sort((a, b) => b.rating - a.rating);
      case 'year':
        return [...movies].sort((a, b) => b.year - a.year);
      case 'title':
        return [...movies].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return movies;
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
      performSearch(query);
    }
  };

  const handleFilterChange = () => {
    if (query.trim()) {
      performSearch(query);
    }
  };

  useEffect(() => {
    handleFilterChange();
  }, [selectedGenre, sortBy]);

  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative max-w-2xl">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies, actors, directors..."
                className="w-full bg-gray-800 text-white placeholder-gray-400 px-6 py-4 pl-12 rounded-full border border-gray-700 focus:outline-none focus:border-red-500 text-lg"
              />
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-gray-400">Filters:</span>
            </div>
            
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
            >
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Sort by {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Results */}
        <div>
          {query && (
            <h1 className="text-2xl font-bold text-white mb-6">
              {isLoading ? 'Searching...' : `Search results for "${query}"`}
              {!isLoading && results.length > 0 && (
                <span className="text-gray-400 font-normal ml-2">
                  ({results.length} result{results.length !== 1 ? 's' : ''})
                </span>
              )}
            </h1>
          )}

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-800 w-64 h-96 rounded-lg"></div>
                </div>
              ))}
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-16">
              <div className="mb-4">
                <SearchIcon className="h-16 w-16 text-gray-600 mx-auto" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">No results found</h2>
              <p className="text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4">
                <SearchIcon className="h-16 w-16 text-gray-600 mx-auto" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Start your search</h2>
              <p className="text-gray-400">
                Find your favorite movies, actors, and directors
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;