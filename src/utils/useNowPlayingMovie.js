import { useDispatch, useSelector } from "react-redux";
import { options } from "./Constant";
import { addNowPlayingMovie } from "./movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=1`,
      options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };
  useEffect(() => {
    !nowPlayingMovies&&getMovies();
  }, []);
};
export default useNowPlayingMovie;
