
import './App.css'
import React, {useState} from 'react'
import MovieList from "./components/MovieList"
import MovieForm from "./components/MovieForm"

function App() {

  const initialMovies = [
    {
      id: 1,
      name: 'Titanic',
      genre: 'acción',
      duration: '2 horas',
      release_date: '2006'
    },
    {
      id: 2,
      name: 'Titanic',
      genre: 'acción',
      duration: '2 horas',
      release_date: '2006'
    },
  ];

  const [ moviesList, setMoviesList] = useState(initialMovies);

  return (
    <div className='App'>
      <MovieForm
      
      />
      <MovieList
      initialMovies={initialMovies}
      />
    </div>
  )
}

export default App
