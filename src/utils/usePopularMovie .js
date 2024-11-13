import { useDispatch, useSelector } from "react-redux";
import { options } from "./Constant";
import { addPopularMovie } from "./movieSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const pupularMovie =useSelector(store=>store.movies.pupularMovie)
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular
`,
      options
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };
  useEffect(() => {
    !pupularMovie&&getMovies();
  }, []);
};
export default usePopularMovie;
