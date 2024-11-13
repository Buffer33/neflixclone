import { useDispatch, useSelector } from "react-redux";
import { options } from "./Constant";
import {  addTopRatedMovie } from "./movieSlice";
import { useEffect } from "react";

const useTopRatedMovie = () => {
  const topRatedMovie= useSelector(store=>store.movies.topRatedMovie)
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated`,
      options
    );
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };
  useEffect(() => {
    !topRatedMovie&&getMovies();
  }, []);
};
export default useTopRatedMovie;
