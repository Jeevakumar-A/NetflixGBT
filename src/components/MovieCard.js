import React from 'react'
import { Movie_Image } from '../utils/constants'

const MovieCard = ({poster}) => {
    if(!poster) return null;

    return (
        <div className='w-36 rounded-lg  hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>
    <img src={Movie_Image + poster} alt="Movie Poster"></img>
    </div>
)
}

export default MovieCard
