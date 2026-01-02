
import { useSelector } from 'react-redux';
import  MovieList from './MovieList';

const GPTMovieSuggestion = () => {
  const {moviesName, MovieListResults }= useSelector((store) => store?.GPTSearch); // Access the GPT search state from the Redux store
  if(!moviesName) return null; // If there are no movie results, do not render anything
  return (
      <div className='bg-black/60 mt-[10%] p-4 rounded-md absolute z-10 no-scrollbar overflow-auto  w-full'>
          {/*GPT Movie Suggestions will be displayed here.*/}
          <div>
          <MovieList Movies={MovieListResults[0]} title={moviesName[0]} />
          <MovieList Movies={MovieListResults[1]} title={moviesName[1]} />
          <MovieList Movies={MovieListResults[2]} title={moviesName[2]} />
          <MovieList Movies={MovieListResults[3]} title={moviesName[3]} />
          <MovieList Movies={MovieListResults[4]} title={moviesName[4]} />
          </div>
          
      
    </div>
  )
}

export default GPTMovieSuggestion
