import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { movies } from '../data/movies';
import { useAuth } from '../context/AuthContext';
import VideoPlayer from '../components/VideoPlayer';

const Watch: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, addToHistory } = useAuth();
  
  const movie = movies.find(m => m.id === id);

  useEffect(() => {
    if (movie && user) {
      addToHistory(movie.id);
    }
  }, [movie, user, addToHistory]);

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Video not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-red-500 hover:text-red-400"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div>
              <h1 className="text-white text-xl font-bold">{movie.title}</h1>
              <p className="text-gray-300 text-sm">{movie.year} • {movie.duration}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Download className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <div className="w-full h-screen">
        <VideoPlayer
          src={movie.trailer}
          poster={movie.backdrop}
          title={movie.title}
        />
      </div>
    </div>
  );
};

export default Watch;