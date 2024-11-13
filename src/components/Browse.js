import { useSelector } from "react-redux";
import useNowPlayingMovie from "../utils/useNowPlayingMovie";
import usePopularMovie from "../utils/usePopularMovie ";
import useTopRatedMovie from "../utils/useTopRatedMovie";
import useUpcomingMovie from "../utils/useUpcomingMovie";
import HeaderLogo from "./HeaderLogo";
import MainContainer from "./MainContainer";
import SearchGpt from "./SearchGpt";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showSearchGpt = useSelector((store) => store.gpt.showSearchgpt);

  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div>
      <HeaderLogo />

      {/*
         Main Container
           -Video Backgroundd
           -Video Title
        Secondery Container
           -Movielist*n
           -Movie card*n
      */}
      {showSearchGpt ? (
        <SearchGpt />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
