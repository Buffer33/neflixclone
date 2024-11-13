import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const GptMovieSuggestions = () => {
  const searchTitle = useSelector(store=>store.gpt.searchText)
  const searchMovies = useSelector(store=>store.gpt.searchMovies)
  
  return (
   <div className="m-4 p-6 bg-black text-whites bg-opacity-70">
    <MovieList title={searchTitle} movies={searchMovies} />
   </div>
  );
};

export default GptMovieSuggestions;
