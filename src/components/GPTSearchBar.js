
import { useRef } from 'react';
import LanguageConstant from '../utils/LanguageConstant'
import { useDispatch, useSelector } from 'react-redux';
// import GPT_OpenAI from 'openai';
import GPT_OpenAI from '../utils/OpenAIConfig';
import { API_options } from '../utils/constants';
import { GPTMovieResultList } from '../utils/GPTToggleSearchSlice';

const GPTSearchBar = () => {

    const LanguageSelect = useSelector((store) => store.language?.currentLanguage);
    const SearchText = useRef(null);
    const dispatch = useDispatch();
    // console.log(LanguageSelect);
    const MovieSearchList = async(movie)=>{
        const MovieSearchAPI =await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_options);
        const data = await  MovieSearchAPI.json();
        return data.results;
    }




const GPT_Query = `List exactly 5 movies that are only dependent related to the topic "${SearchText.current?.value}". Only return the movie titles, comma-separated, without any additional text or formatting.`;
const handleGPTSearch = async () => {
    try {
    const GPTSearchResults = await GPT_OpenAI.chat.completions.create({
        model: 'gryphe/mythomax-l2-13b' ,  //model: -->as faster 'mistralai/mistral-7b-instruct'
        messages: [{ role: 'user', content: GPT_Query }],
    });

    //  Extract the actual response text
    const movieSuggestions = GPTSearchResults.choices[0]?.message?.content?.split(","); // Split-->[split the array of element depends on the function inside character] by commas to get individual movie suggestions

    //Log input and output
    console.log(SearchText.current?.value);
    console.log(movieSuggestions);
    // for each movie i will search in TMDB API
    const movieResults = movieSuggestions.map((movie) => MovieSearchList(movie)); // Map through each suggested movie and call MovieSearchList to get search results from TMDB API
    // the map is immedaitely returning an array of promises so the execution will not wait for each movie search to complete before moving on to the next one.
    //  To handle this, we use Promise.all to wait for all the promises to resolve.

    const MoviesSuggestionResult = await Promise.all(movieResults); // Wait for all movie searches to complete then it executes
    console.log(MoviesSuggestionResult);
    dispatch(GPTMovieResultList({ moviesName: movieSuggestions, MovieListResults: MoviesSuggestionResult })); // Dispatch the combined results to the Redux store // Store both movie names and their corresponding search results
    }
    catch (err) {
    console.error("Error during GPT search:", err);
    }
// Call MovieSearchList with the first suggested movie

};

return (

    <div className='pt-[30%]  sm:pt-[4%] flex justify-center  '>
    <form className='pt-[7%]   relative flex w-3/4 sm:w-1/2 ' onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder={LanguageConstant[LanguageSelect]?.SearchBarPlaceHolder} className=" w-full sm:w-full  p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" ref={SearchText}/>
        <button   onClick={handleGPTSearch} className=" bg-red-600 text-white p-4 rounded-md hover:bg-red-700 ">{LanguageConstant[LanguageSelect]?.Search}</button>
    </form>
    </div>
)
}

export default GPTSearchBar
