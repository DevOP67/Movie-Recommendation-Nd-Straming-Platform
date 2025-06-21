export interface Movie {
  id: string;
  title: string;
  description: string;
  year: number;
  genre: string[];
  rating: number;
  duration: string;
  poster: string;
  backdrop: string;
  trailer: string;
  cast: Cast[];
  director: string;
  isNewRelease?: boolean;
  isTrending?: boolean;
  isRecommended?: boolean;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  watchlist: string[];
  watchHistory: string[];
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  addToWatchlist: (movieId: string) => void;
  removeFromWatchlist: (movieId: string) => void;
  addToHistory: (movieId: string) => void;
}
