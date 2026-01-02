import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import {NetFlixBackgroundImage} from '../utils/constants';

const GPTSearchPage = () => {
return (
    <>
    <div className='fixed '>
        <img className='h-screen w-screen object-cover' src={NetFlixBackgroundImage} alt="background" />
    </div>
    <div className=' '>
    <GPTSearchBar/>
    <GPTMovieSuggestion/>
    </div>
    
    </>
)
}

export default GPTSearchPage
