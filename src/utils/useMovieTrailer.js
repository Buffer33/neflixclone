import { useEffect } from "react";
import { addMovieTrailer } from "./movieSlice";
import { options } from "./Constant";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer=(id)=>{
  const movieTrailerVideo =useSelector(store=>store.movies.movieTrailerVideo)
    const dispatch=useDispatch()
    const getTrailer = async () => {
     
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
        options
      );
      const json = await data.json();
      const filterTrailer = json.results.filter(
        (item) => item.type === "Trailer"
      );
      const trailer = !filterTrailer.length ? filterTrailer[1] : json.results[0];
      dispatch(addMovieTrailer(trailer))
    };
    useEffect(() => {
      !movieTrailerVideo&&getTrailer();
    }, []);
}

export default useMovieTrailer