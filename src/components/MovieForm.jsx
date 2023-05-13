import React, {useState} from "react";

const MovieForm = () => {

const [name, setName] = useState("")    
const [genre, setGenre] = useState("")
const [duration, setDution] = useState("")
const [release_date, setRelease_date] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        const newMovie = {
            name,
            genre,
            duration,
            release_date
        }
    }

  return (
    <div className="movieForm">
      <h2>Form</h2>
      <form onSubmit={e => hadleSubmit(e)}>
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
        />
        <label htmlFor="duration">Duración</label>
        <input 
        id="duration"
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <label htmlFor="release_date">Estreno</label>
        <input 
        id="release_date"
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
        />
      </form>

      <button type='submit'>Crear película</button>
    </div>
  );
};

export default MovieForm;
