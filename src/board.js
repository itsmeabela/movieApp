import React, { useState } from "react";

export default function Board() {
  const [movieName, setmovieName] = useState("");
  const [allmovies, setallmovies] = useState([]);

  const handleClick = async () => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=daba1c1e24b22e7f00e4dd7a3c9267f7&language=en-US&query=${movieName}&page=1&include_adult=true`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setallmovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div className="shape1"></div>
      <div className="board">
        <h1 className="header-text">Search For Movie</h1>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="i.e Harry potter"
            value={movieName}
            onChange={(e) => {
              setmovieName(e.target.value);
            }}
          />
          <button type="button" className="btn" onClick={handleClick}>
            search
          </button>
        </div>
      </div>

      <div className="result">
        {allmovies.map((page) => (
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${page.poster_path}`}
              className="img"
              alt=""
            />

            <h4>Release date: {page.release_date}</h4>
            <h4>popularity: {page.popularity}</h4>

            <p>
              <span>Over view:</span> {page.overview}
            </p>
          </div>
        ))}
      </div>

      <div className="shape2"></div>
    </main>
  );
}
