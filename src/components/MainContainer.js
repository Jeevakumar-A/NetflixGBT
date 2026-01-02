import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {


    const movies =useSelector((state)=>state.movies?.nowPlayingMovies); // "Access"  nowPlayingMovies from the Redux store using useSelector hook
    if(!movies) return; // If movies are not yet loaded, return nothing ----(is knowns as conditional rendering/Early return pattern)
    const Mainmovies=movies[0]; // Get the first movie from the results array
    console.log(Mainmovies); // Log the movies to the console for debugging purposes

    const {original_title,overview,id}=Mainmovies; // Destructure original_title and overview from the Mainmovies object


return (
    <div className='pt-[10%] bg-black sm:pt-0'>
    
    <VideoTitle title ={original_title} overview={overview}/>
    <VideoBackground MovieID ={id}/>
    </div>
)
}

export default MainContainer
