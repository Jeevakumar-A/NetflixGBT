import  {  useEffect } from 'react'
import { API_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/MovieSlice';



export const useNowPlayingMovies = () => {
    // Initialize the dispatch function from Redux
const dispatch = useDispatch();
const NowPlayingMovies =useSelector(store=>store.movies?.nowPlayingMovies) // Access the now playing movies from the Redux store

//Function to fetch currently playing movies from TMDB API so we use async await
const CurrentlyPlayingMovies = async() =>{
    try {
    const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
    const json =await data.json();
    // console.log(json.results);
      // Dispatch an action to add the fetched movies to the Redux store
      dispatch(addNowPlayingMovies(json.results)) // Dispatch the action to update the store with now playing movies


    }
    catch (error) {
    console.error(error);
    }
}
//useEffect hook to call the function on component mount
//Empty dependency array to ensure it runs only once suppose they are no dependencies then it will run in every re render

useEffect(()=>{
    !NowPlayingMovies && CurrentlyPlayingMovies();
}, []);
}

// export default useNowPlayingMovies;