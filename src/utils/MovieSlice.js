import { createSlice } from "@reduxjs/toolkit";

const MovieStore = createSlice({
    name: "Movies", // Movie Slice--->redux store name
    initialState :{ // Initial State ---->inital state of the store
        nowPlayingMovies :null, // Now Playing Movies is null----> we will fetch and add movies to this state
        trailerVideo :null, // Trailer Video is null----> we will fetch and add movies to this state
        popularMovies :null, // Popular Movies is null----> we will fetch and add movies to this state
        upcommingMovies :null
    },
    reducers :{ // Reducers  to add movies then we will dispatch the action //the reducer is the part that defines how your slice of state should change in response to actions

        addNowPlayingMovies:(state,actions)=>{ //- Takes the current state and an action
            state.nowPlayingMovies=actions.payload; //- Returns a new state based on that action(Update nowPlayingMovies with the payload from the action)
        },
        addTrailerVideo :(state,actions)=>{
            state.trailerVideo=actions.payload;
        },
        addPopularMovies :(state,actions)=>{
            state.popularMovies=actions.payload;
        },
        addUpcommingMovies :(state,actions)=>{
            state.upcommingMovies =actions.payload
        }
    }
})
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies,addUpcommingMovies} = MovieStore.actions; // Export the action creator for adding now playing movies
export default MovieStore.reducer; // Export the reducer to be used in the store configuration