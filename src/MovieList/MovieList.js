import { useState, useEffect } from "react";
import { MovieItem } from "./MovieItem";

export const MovieList = ({ url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);

      const { result } = await resp.json();
      setMovies(result);
      // .then((resp) => {
      //   debugger;
      //   console.log(resp.json());
      //   //resp.json();
      // })
      // .then((resp) => setMovies(resp.results))
      // .catch((err) => console.log(err));
    })();
  }, [url]);

  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.uid} movie={movie} />
      ))}
    </ul>
  );
};
