import React from "react";

const MovieList = ({ initialMovies }) => {
  console.log(initialMovies);
  return (
    <div className="container-list">
      <ul>
        {initialMovies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <button
              className="button-delete"
              onClick={() => deleteMovie(movie.id)}
            >
              <i className="bx bx-x-circle"></i>
            </button>
            <h2>{movie.name}</h2>
            <p>Genero: {movie.genre}</p>
            <p>Duración: {movie.duration}</p>
            <p>Estreno: {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
