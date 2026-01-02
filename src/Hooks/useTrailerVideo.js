import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_options } from '../utils/constants';
import { addTrailerVideo } from '../utils/MovieSlice';
// import {MovieID} from "../components/MainContainer"

export const useTrailerVideo = ({MovieID}) => {


const dispatch = useDispatch();
const TrailerVideo = useSelector(store => store.movies?.trailerVideo);

const GetMoviesVideo = async () => {
    // Fetch video data :-
    const data = await fetch(`https://api.themoviedb.org/3/movie/${MovieID}/videos?language=en-US`, API_options) // Use the MovieID prop to fetch videos for the specific movie so the ${MovieID} is template literal
    const videos = await data.json();
    //Filter for multiple videos and get only the trailer type videos

    //filter used for filtering the array based on condition
    const FiltertrailerVideo = videos.results.filter((video) => video.type === "Trailer");
    // const Trailer = FiltertrailerVideo[0]; // Get the first trailer from the filtered results
    const Trailer = FiltertrailerVideo.length ? FiltertrailerVideo[0] :FiltertrailerVideo[1]; // Check if the first trailer exists, otherwise use the second one
    // console.log(Trailer);
    dispatch(addTrailerVideo(Trailer)); // Dispatch the action to add the trailer video to the Redux store

}

useEffect(() => {
    !TrailerVideo && GetMoviesVideo()
}, []);

return (
    <div>
    </div>
)
}

// export default useTrailerVideo
