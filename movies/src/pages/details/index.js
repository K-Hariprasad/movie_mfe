import React from "react";
import { useParams } from "react-router-dom";
import { movieData } from "../../data";
import "./styles.css";

const imageBasePath = "https://image.tmdb.org/t/p/w500/";

function Details() {
  const { id } = useParams();
  const movie = movieData.results.find((i) => i.id === parseInt(id));

  return (
    <div className="movie-details-wrapper">
      <img
        src={`${imageBasePath}/${movie.poster_path}`}
        alt={`${movie?.title} poster`}
        className="poster"
      />
      <h1 className="movieDetails-title">{movie?.title}</h1>
      <p className="overview">{movie?.overview}</p>
    </div>
  );
}

export default Details;
