import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SimpleFetch() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get('https://swapi.dev/api/films/');
      setMovies(data.results.map(m => { return { title: m.title, director: m.director } }));
    }
    getMovies();
  }, []);

  return (
    <div>
      {movies.map((m, i) => <p key={i}>Movie Title:{m.title}, Director: {m.director}</p>)}
    </div>
  )
}

export default SimpleFetch
