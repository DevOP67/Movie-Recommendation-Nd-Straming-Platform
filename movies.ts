import { Movie } from "../types";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Quantum Horizon",
    description:
      "A thrilling sci-fi adventure that takes you through parallel dimensions where reality bends and time becomes fluid. Follow Dr. Sarah Chen as she discovers a way to manipulate quantum fields, only to realize that some doors should never be opened.",
    year: 2024,
    genre: ["Sci-Fi", "Thriller", "Adventure"],
    rating: 8.9,
    duration: "2h 18m",
    poster:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=500",
    backdrop:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    director: "Christopher Chen",
    isNewRelease: true,
    isTrending: true,
    cast: [
      {
        id: 1,
        name: "Emma Stone",
        character: "Dr. Sarah Chen",
        image:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: 2,
        name: "Oscar Isaac",
        character: "Dr. Marcus Webb",
        image:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ],
  },
  {
    id: "2",
    title: "The Last Guardian",
    description:
      "In a post-apocalyptic world where nature has reclaimed civilization, a young warrior must protect the last remaining city from ancient creatures that have awakened from their slumber.",
    year: 2024,
    genre: ["Action", "Fantasy", "Adventure"],
    rating: 8.7,
    duration: "2h 32m",
    poster:
      "https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=500",
    backdrop:
      "https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    director: "Zack Snyder",
    isNewRelease: true,
    cast: [
      {
        id: 3,
        name: "Zendaya",
        character: "Aria Blackwood",
        image:
          "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: 4,
        name: "Michael B. Jordan",
        character: "Captain Rex",
        image:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ],
  },
  {
    id: "3",
    title: "Digital Dreams",
    description:
      "A cyberpunk thriller set in 2087 where memories can be digitized and traded. When a memory thief discovers a conspiracy that could reshape humanity, they must choose between profit and truth.",
    year: 2023,
    genre: ["Cyberpunk", "Thriller", "Mystery"],
    rating: 8.4,
    duration: "2h 7m",
    poster:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500",
    backdrop:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    director: "Denis Villeneuve",
    isTrending: true,
    cast: [
      {
        id: 5,
        name: "Ryan Gosling",
        character: "Neo Matrix",
        image:
          "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: 6,
        name: "Scarlett Johansson",
        character: "Echo",
        image:
          "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ],
  },
  {
    id: "4",
    title: "Ocean's Revenge",
    description:
      "When climate change reaches a tipping point, the ocean itself becomes humanity's greatest enemy. A marine biologist and her team race against time to find a solution before coastal cities disappear forever.",
    year: 2023,
    genre: ["Action", "Drama", "Climate Fiction"],
    rating: 8.1,
    duration: "2h 14m",
    poster:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=500",
    backdrop:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    director: "James Cameron",
    isRecommended: true,
    cast: [
      {
        id: 7,
        name: "Charlize Theron",
        character: "Dr. Maya Ocean",
        image:
          "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: 8,
        name: "Idris Elba",
        character: "Commander Steel",
        image:
          "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ],
  },
  {
    id: "5",
    title: "Midnight Heist",
    description:
      "A stylish crime thriller about a team of elite thieves who plan the perfect heist on New Year's Eve, only to discover their target holds secrets that could change the world.",
    year: 2023,
    genre: ["Crime", "Thriller", "Heist"],
    rating: 8.6,
    duration: "2h 1m",
    poster:
      "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=500",
    backdrop:
      "https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    director: "Christopher Nolan",
    isTrending: true,
    cast: [
      {
        id: 9,
        name: "Tom Hardy",
        character: "Vincent Kane",
        image:
          "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: 10,
        name: "Margot Robbie",
        character: "Sophie Cross",
        image:
          "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ],
  },
  {
    id: "6",
    title: "Stellar Conquest",
    description:
      "An epic space opera spanning multiple galaxies as humanity faces its greatest challenge yet - a mysterious alien force that consumes entire star systems.",
    year: 2022,
    genre: ["Space Opera", "Sci-Fi", "Epic"],
    rating: 8.8,
    duration: "2h 45m",
    poster:
      "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=500",
    backdrop:
      "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1200",
    trailer:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    director: "Rian Johnson",
    isRecommended: true,
    cast: [
      {
        id: 11,
        name: "Chris Evans",
        character: "Admiral Brooks",
        image:
          "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
      {
        id: 12,
        name: "Lupita Nyong'o",
        character: "Commander Zara",
        image:
          "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300",
      },
    ],
  },
  {
    id: "101",
    title: "3 Idiots",
    description:
      "Three engineering students challenge the traditional education system.",
    year: 2009,
    genre: ["Comedy", "Drama"],
    rating: 8.4,
    duration: "2h 51m",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    backdrop:
      "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=xvszmNXdM4w",
    director: "Rajkumar Hirani",
    isRecommended: true,
    cast: [
      {
        id: 201,
        name: "Aamir Khan",
        character: "Rancho",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      },
      {
        id: 202,
        name: "R. Madhavan",
        character: "Farhan",
        image:
          "	https://images.pexels.com/photos/1704489/pexels-photo-1704489.jpeg",
      },
    ],
  },
  {
    id: "102",
    title: "Zindagi Na Milegi Dobara",
    description:
      "Three friends go on a road trip across Spain, rediscovering life.",
    year: 2011,
    genre: ["Drama", "Adventure"],
    rating: 8.2,
    duration: "2h 35m",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/Zindagi_na_milegi_dobara.jpg",
    backdrop:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/Zindagi_na_milegi_dobara.jpg",
    trailer: "https://www.youtube.com/watch?v=FJrpcDgC3zU",
    director: "Zoya Akhtar",
    isRecommended: true,
    cast: [
      {
        id: 203,
        name: "Hrithik Roshan",
        character: "Arjun",
        image:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      },
      {
        id: 204,
        name: "Farhan Akhtar",
        character: "Imran",
        image:
          "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
      },
    ],
  },
  {
    id: "103",
    title: "Gully Boy",
    description: "A street rapper from Mumbai fights for his dream.",
    year: 2019,
    genre: ["Drama", "Musical"],
    rating: 8.0,
    duration: "2h 36m",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/9/94/Gully_Boy_poster.jpg",
    backdrop:
      "https://upload.wikimedia.org/wikipedia/en/9/94/Gully_Boy_poster.jpg",
    trailer: "https://www.youtube.com/watch?v=JfbxcD6biOk",
    director: "Zoya Akhtar",
    isRecommended: false,
    cast: [
      {
        id: 205,
        name: "Ranveer Singh",
        character: "Murad",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      },
      {
        id: 206,
        name: "Alia Bhatt",
        character: "Safeena",
        image:
          "https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg",
      },
    ],
  },
];

export const getMoviesByCategory = (category: string): Movie[] => {
  switch (category) {
    case "trending":
      return movies.filter((movie) => movie.isTrending);
    case "new-releases":
      return movies.filter((movie) => movie.isNewRelease);
    case "recommended":
      return movies.filter((movie) => movie.isRecommended);
    case "action":
      return movies.filter((movie) => movie.genre.includes("Action"));
    case "sci-fi":
      return movies.filter((movie) => movie.genre.includes("Sci-Fi"));
    case "thriller":
      return movies.filter((movie) => movie.genre.includes("Thriller"));
    default:
      return movies;
  }
};

export const searchMovies = (query: string): Movie[] => {
  const lowercaseQuery = query.toLowerCase();
  return movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(lowercaseQuery) ||
      movie.description.toLowerCase().includes(lowercaseQuery) ||
      movie.genre.some((g) => g.toLowerCase().includes(lowercaseQuery)) ||
      movie.director.toLowerCase().includes(lowercaseQuery)
  );
};
