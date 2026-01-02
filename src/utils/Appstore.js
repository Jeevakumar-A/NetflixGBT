import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import MovieStore from './MovieSlice';
import GPTToggleSearch from './GPTToggleSearchSlice';
import Languages from './LanguageSlice';
// Configure the Redux store with user and movie reducers
export const Appstore = configureStore({
    reducer: {
        user: userReducer, // User reducer to manage user-related state
        movies: MovieStore, // Movie reducer to manage movie-related state
        GPTSearch : GPTToggleSearch, // GPT Search reducer to manage GPT search bar state
        language: Languages // Language reducer to manage language-related state
    }
});