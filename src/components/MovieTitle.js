import React from 'react'

const MovieTitle = ({title,overview }) => {
    
  return (
    <div className='w-screen aspect-video  pt-[20%] p-8 md:px-24 absolute text-white bg-gradient-to-r from from-black '>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
      <div className='my-4'>
        <button className='py-1 px-2 md:px-4 bg-slate-500 rounded-lg hover:bg-gray-800'>▶️ Play</button>
        <button className='hidden md:inline-block py-2 px-4 mx-2 bg-slate-300 text-gray-600 rounded-lg  hover:bg-white'>More Info</button>
      </div>
    </div>
  )
}

export default MovieTitle
