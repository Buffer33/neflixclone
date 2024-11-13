import React from 'react'
import SearchGptBar from './SearchGptBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/Constant'
import { useSelector } from 'react-redux'

const SearchGpt = () => {
  const searchText=useSelector(store=>store.gpt.searchText)
  return (
    <>
    <div className='absolute -z-10'>
        <img className='h-screen object-cover w-screen' src={BG_URL} alt='bgimage'/>
    </div>
    <div className=''>
    <SearchGptBar/>
    {searchText&&<GptMovieSuggestions/>}
    </div>
    </>
  )
}

export default SearchGpt
