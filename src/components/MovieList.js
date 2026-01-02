import React from 'react'
import MovieCard from './MovieCard';
// import { useSelector } from 'react-redux'

const MovieList = ({Movies,title}) => {


    return (
    <div className='' >
        <div>
        <h2 className='font-bold text-2xl p-2 text-white'>{title}</h2>
        </div>
        <div className='flex overflow-x-scroll  no-scrollbar snap-x snap-mandatory'>
            <div className="flex  gap-4 p-2">
            {/*using map() must need key and optional chaining*/}
        {Movies?.map((Movie)=><MovieCard key={Movie.id} poster ={Movie.poster_path}/>)}
        </div>

        </div>


    </div>
)
}

export default MovieList
