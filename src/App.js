import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.png";

import MovieCard from "./MovieCard";
const API_URL = "https://www.omdbapi.com/?apikey=f38de1a7";
const movie1 = {
  Title: "Avengers: Endgame",
  Year: "2019",
  imdbID: "tt4154796",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovie("avengers");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovie(searchTerm);
          }}
        ></img>
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movies[0]} /> */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
