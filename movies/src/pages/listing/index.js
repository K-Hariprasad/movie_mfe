import React from "react";
import "./styles.css";
import { movieData } from "../../data";
import { useNavigate } from "react-router-dom";

const imageBasePath = "https://image.tmdb.org/t/p/w500/";
const movies = movieData.results;

function Listing() {
  const navigate = useNavigate();
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => navigate(`/movies/${movie.id}`)}
        >
          <img
            src={`${imageBasePath}/${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
          />
          <h3 className="movie-title">{movie.title || movie.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Listing;
