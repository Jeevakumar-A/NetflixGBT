import { createSlice } from '@reduxjs/toolkit';
const GPTToggleSearch = createSlice({
    name: 'GPTSearch',
    initialState:{
        toggleSearchBar:false,
        moviesName:null,
        MovieListResults:null,
    },
    reducers:{
        ToggleSearchBar:(state)=>{
            state.toggleSearchBar=!state.toggleSearchBar; // Toggle the boolean value of toggleSearchBar - state.toggleSearchBar = !state.toggleSearchBar;: This line toggles the value of toggleSearchBar between true and false.
        },
        GPTMovieResultList :(state, action)=>{
            const {moviesName, MovieListResults} = action.payload; //
            state.moviesName=moviesName; // Update the moviesName in the state with the value from the action payload
            state.MovieListResults=MovieListResults;
        }
    }
});
export const {ToggleSearchBar, GPTMovieResultList} = GPTToggleSearch.actions; // Export the action creator for toggling the search bar
export default GPTToggleSearch.reducer;