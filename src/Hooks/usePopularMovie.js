import  {  useEffect } from 'react'
import { API_options } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux'
import {addPopularMovies } from '../utils/MovieSlice';



export const usePopularMovies = () => {
    // Initialize the dispatch function from Redux
const dispatch = useDispatch();
const PopularPlayingMovies =useSelector(store=>store.movies?.popularMovies)
//Function to fetch popular movies from TMDB API so we use async await
const PopularMovies = async() =>{
    try {
    const data =await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options)
    const json =await data.json();
    // console.log(json.results);
      // Dispatch an action to add the fetched movies to the Redux store
      dispatch(addPopularMovies(json.results)) // Dispatch the action to update the store with popular movies


    }
    catch (error) {
    console.error(error);
    }
}
//useEffect hook to call the function on component mount
//Empty dependency array to ensure it runs only once suppose they are no dependencies then it will run in every re render

useEffect(()=>{
    !PopularPlayingMovies && PopularMovies();
}, []);
}

// export default useNowPlayingMovies;