import { useState, useEffect } from "react";
import { MovieList } from "./MovieList";

function getMovieURL(movieName) {
  return movieName === ""
    ? "https://www.swapi.tech/api/films/"
    : `https://www.swapi.tech/api/films/?search=${movieName}`;
}

export const MovieSearch = () => {
  const [movieName, setMovieName] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setMovieName(e.target.value)} />

      <MovieList url={getMovieURL(movieName)} />
    </>
  );
};
