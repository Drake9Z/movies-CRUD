import React from 'react';

const MovieList = ({initialMovies}) => {

    console.log(initialMovies);
    return (
        <div>
            <ul>
                {initialMovies.map((movie) => (
                    <li key={movie.id}>
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