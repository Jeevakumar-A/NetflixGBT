import React from 'react'
import MovieList from './MovieList'
// import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector((store) => store?.movies)
  return (
    <div className="bg-black ">
      {/* z-index it works only in positions here the z-index is high then it move the element on a top similar to position relative also it low it move the element on a bottom
      "relative" Moves relative to its normal position
      "absolute" Moves relative to its nearest positioned ancestor (instead of positioned relative to the viewport, like fixed)
      "fixed" Moves relative to the viewport, which means it always stays in the same place even if the page is scrolled
      "sticky" Toggles between relative and fixed, depending on the scroll position
      */}
      <div className=" mt-0 sm:-mt-[20%] relative z-10 ">
      <MovieList title ={"Now Playing Movies"}  Movies ={movie?.nowPlayingMovies}  />
      <MovieList title ={"Popular Movies"}  Movies ={movie?.popularMovies}  />
      <MovieList title ={"UpComming Movies"}  Movies ={movie?.upcommingMovies}  />
      <MovieList title ={"Action Movies"}  Movies ={movie?.nowPlayingMovies}  />
      <MovieList title ={"Comedy Movies"}  Movies ={movie?.nowPlayingMovies}  />




    </div>
  
    </div>
  )
}

export default SecondaryContainer
