import React from 'react'
import { TMDB_CDN } from '../utils/Constant'

const MovieCard = ({poster}) => {
  if(!poster) return null;
  return (
    <div className='w-24 md:w-36 pr-4'>
      <img src={TMDB_CDN+poster} alt='movieposter'/>
    </div>
  )
}

export default MovieCard
