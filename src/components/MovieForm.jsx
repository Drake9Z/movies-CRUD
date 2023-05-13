import React, {useState} from "react";

const MovieForm = ({addMovie}) => {

const [name, setName] = useState("")    
const [genre, setGenre] = useState("")
const [duration, setDuration] = useState("")
const [release_date, setRelease_date] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        const newMovie = {
            id: Date.now(),
            name,
            genre,
            duration,
            release_date
        }

        addMovie(newMovie)
    }

  return (
    <div className="movieForm">
      <h2>Form</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="name">Nombre: </label>
        <input 
        id="name"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <label htmlFor="genre">Género</label>
        <input 
        id="genre"
        type="text"
        value={genre}
        onChange={e => setGenre(e.target.value)} 
        />
        <label htmlFor="duration">Duración</label>
        <input 
        id="duration"
        type="text" 
        value={duration}
        onChange={e => setDuration(e.target.value)}
        />
        <label htmlFor="release_date">Estreno</label>
        <input 
        id="release_date"
        type="text" 
        value={release_date}
        onChange={e => setRelease_date(e.target.value)}
        />
      <button type='submit'>Crear película</button>
      </form>

    </div>
  );
};

export default MovieForm;
