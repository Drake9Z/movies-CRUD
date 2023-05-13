import React from "react";

const MovieForm = () => {
  return (
    <div className="movieForm">
      <h2>Form</h2>
      <form action="">
        <label htmlFor="name">Nombre: </label>
        <input 
        id="name"
        type="text" />
        <label htmlFor="genre">Género</label>
        <input 
        id="genre"
        type="text" />
        <label htmlFor="duration">Duración</label>
        <input 
        id="duration"
        type="text" />
        <label htmlFor="release_date">Estreno</label>
        <input 
        id="release_date"
        type="text" />
      </form>

      <button type='submit'>Crear película</button>
    </div>
  );
};

export default MovieForm;
