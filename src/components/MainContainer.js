import MovieTitle from './MovieTitle'
import MovieBackground from './MovieBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const data = useSelector((store)=>store.movies.nowPlayingMovies)
    const n = Math.floor(Math.random() * 20)
    if(!data)return;
    const movie =data[n]
    
    const{id,original_title,overview }=movie
  return (
    <div className= 'pt-[36%] bg-black md:p-0'>
      <MovieTitle  title={original_title} overview={overview}/>
      <MovieBackground id={id} />
    </div>
  )
}

export default MainContainer
