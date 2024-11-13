import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/Constant";
import { addSearchMovies } from "../utils/gptSlice";

const SearchGptBar = () => {
  const dispatch = useDispatch()

  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef()
  const handleGptSearch=async()=>{
  const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+searchText.current.value+'&include_adult=false&language=en-US&page=1', options)
  const json = await data.json();
  console.log(json.results)
  dispatch(addSearchMovies({searchMovies :json.results, searchText:searchText.current.value}))
  }
  return (
    <div onSubmit={(e)=>e.preventDefault()} className="pt-[45%] md:pt-[20%] flex justify-center">
      <form className="w-full m-1 md:w-1/2 bg-black grid grid-cols-12 bg-opacity-80">
        <input
        ref={searchText}
          className=" p-4 my-4 mx-2 md:m-4 col-span-9 outline-none"
          type="search"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button onClick={handleGptSearch} className="col-span-3 my-4 mx-2 md:m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[langkey].search} 
        </button>
      </form>
    </div>
  );
};

export default SearchGptBar;
