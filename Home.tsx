import React from 'react';
import HeroSection from '../components/HeroSection';
import MovieRow from '../components/MovieRow';
import { getMoviesByCategory } from '../data/movies';

const Home: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      
      <div className="relative z-10 -mt-32 pb-20">
        <MovieRow 
          title="Trending Now" 
          movies={getMoviesByCategory('trending')} 
          size="large"
        />
        <MovieRow 
          title="New Releases" 
          movies={getMoviesByCategory('new-releases')} 
        />
        <MovieRow 
          title="Recommended for You" 
          movies={getMoviesByCategory('recommended')} 
        />
        <MovieRow 
          title="Action Movies" 
          movies={getMoviesByCategory('action')} 
        />
        <MovieRow 
          title="Sci-Fi Collection" 
          movies={getMoviesByCategory('sci-fi')} 
        />
        <MovieRow 
          title="Thriller & Mystery" 
          movies={getMoviesByCategory('thriller')} 
        />
      </div>
    </div>
  );
};

export default Home;