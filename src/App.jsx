import "./App.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";

function App() {
  const initialMovies = [
    {
      id: 1,
      name: "Titanic",
      genre: "acción",
      duration: "2 horas",
      release_date: "2006",
    },
    {
      id: 2,
      name: "Titanic",
      genre: "acción",
      duration: "2 horas",
      release_date: "2006",
    },
  ];

  const [moviesList, setMoviesList] = useState(initialMovies);

  const movieAdd = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

 const deleteMovie = (id) => {
  const filterMovies = moviesList.filter(seivom => seivom.id !== id)
  setMoviesList(filterMovies)
 }

  return (
    <div className="App">
      <MovieForm addMovie={movieAdd} />
      <MovieList 
      moviesList={moviesList} 
      deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
