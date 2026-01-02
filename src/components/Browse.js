
// import { use } from 'react';
import{ useNowPlayingMovies }from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../Hooks/usePopularMovie';
import { useUpcommingMovies } from '../Hooks/useUpcommingMoives';
import GPTSearchPage from './GPTSearchPage';
import { useSelector } from 'react-redux';
// import GPTSearchPage from './GPTSearchPage';



const Browse = () => {
// Get the visibility state of the search bar from the Redux store
const ShowSearchBarVisible = useSelector((store) => store.GPTSearch.toggleSearchBar);
// Call the custom hook to fetch and manage now playing movies
useNowPlayingMovies();
usePopularMovies();
useUpcommingMovies(); // Call the custom hook to fetch and manage upcomming movies on the redux store

  return (
    <div>
    <Header/>
    {ShowSearchBarVisible ?<GPTSearchPage/> :
    <> {/** This is the main content area <></> is called as a react fragment used for parent child elements otherwise throws an error of JSX have single parent only*/}
    <MainContainer/>
    <SecondaryContainer/>
    </>}
    </div>
    
  )
}

export default Browse
