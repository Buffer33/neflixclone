import { useDispatch, useSelector } from "react-redux";
import { options } from "./Constant";
import {  addUpcomingMovie } from "./movieSlice";
import { useEffect } from "react";

const useUpcomingMovie = () => {
  const upcomingMovie =useSelector(store=>store.movies.upcomingMovie)
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming`,
      options
    );
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };
  useEffect(() => {
    !upcomingMovie&&getMovies();
  }, []);
};
export default useUpcomingMovie;
