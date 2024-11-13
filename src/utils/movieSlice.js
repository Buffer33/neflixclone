import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailerVideo: null,
    pupularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
  },
  reducers: {
    addNowPlayingMovie: (sate, action) => {
      sate.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (sate, action) => {
      sate.movieTrailerVideo = action.payload;
    },
    addPopularMovie: (sate, action) => {
      sate.pupularMovie = action.payload;
    },
    addTopRatedMovie: (sate, action) => {
      sate.topRatedMovie = action.payload;
    },
    addUpcomingMovie: (sate, action) => {
      sate.upcomingMovie = action.payload;
    },
  },
});
export const { addNowPlayingMovie, addMovieTrailer, addPopularMovie, addTopRatedMovie, addUpcomingMovie } = movieSlice.actions;
export default movieSlice.reducer;
