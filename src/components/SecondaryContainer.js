import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryContainer = () => {
  const NowPlayingmovies =useSelector(store=>store.movies?.nowPlayingMovies)
  const popularMovies =useSelector(store=>store.movies?.pupularMovie)
  const topRatedMovie =useSelector(store=>store.movies?.topRatedMovie)
  const upcomingMovie =useSelector(store=>store.movies?.upcomingMovie)
  
  
return (
  <div className='bg-black '>
    <div className='m-0 md:-mt-44 relative'>
 <MovieList title="Popular Movie" movies={popularMovies}/>
 <MovieList title="Now Playing" movies={NowPlayingmovies}/>
 <MovieList title="Top Rated" movies={topRatedMovie}/>
 <MovieList title="Upcoming" movies={upcomingMovie}/>
 </div>
 </div>
  )
}

export default SecondaryContainer
