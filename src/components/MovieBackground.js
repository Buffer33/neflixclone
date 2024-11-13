import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";

const MovieBackground = ({ id }) => {
  useMovieTrailer(id);
  const data = useSelector((store) => store.movies?.movieTrailerVideo);

  return (
    <div className="w-screen">
    <iframe
      src={"https://www.youtube.com/embed/" + data?.key + "?&autoplay=1&mute=1"}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-screen aspect-video"
    ></iframe>
  </div>
  
  );
};

export default MovieBackground;
