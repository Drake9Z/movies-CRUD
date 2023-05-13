import React from "react";

const MovieList = ({ initialMovies }) => {
  console.log(initialMovies);
  return (
    <div className="container-list">
      <ul>
        {initialMovies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <div className="container-content">
            <h2>{movie.name}</h2>
            <p>Genero: {movie.genre}</p>
            <p>Duración: {movie.duration}</p>
            <p>Estreno: {movie.release_date}</p>
            </div>
            <div className="container-btn">
            <button
              className="button-delete"
              onClick={() => deleteMovie(movie.id)}
            >
              <i className="bx bx-x-circle"></i>
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
