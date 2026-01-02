// import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NetflixLogo } from '../utils/constants';
import { ToggleSearchBar } from '../utils/GPTToggleSearchSlice';
import { addLanguage } from "../utils/LanguageSlice";
// import LanguageConstant from "../utils/LanguageConstant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const GPTSearchStore = useSelector((store) => store.GPTSearch.toggleSearchBar);


const HandleLanguageIcon =(e)=>{
  // Handle language selection logic here
  dispatch(addLanguage(e.target.value)) // dispatch the selected language
  // console.log("Selected Language:", e.target.value);
};

  const HandleSearchBar =()=>{
    //toggle the GPTsearch bar // dispatch an action to toggle the GPT searchbar is clicked or not
    dispatch(ToggleSearchBar());
  }

  const handleSignOut = () => {
    // Sign out logic here
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/');
}).catch((error) => {
  // An error happened
  navigate('/error')
});
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {  //The onAuthStateChanged API sets up a listener that triggers whenever the user's authentication state changes—such as signing in, signing out, or refreshing a session.

if (user) {
    const { uid, email ,displayName,photoURL} = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
    navigate('/browse');
} else {
    // User is signed out
    dispatch(removeUser());
    navigate('/');
}
return () => {
  // Cleanup function ---> the listener on unmount(remove the listener to prevent memory leaks)
  unsubscribe();
}});
}, []);

  
  return (
  <div className='w-screen px-4 sm:px-8 py-4 bg-gradient-to-b from-black z-40 fixed flex flex-col sm:flex-row sm:justify-between items-center'>
    {/* Logo */}
    <img className="w-32 sm:w-44 mb-2 sm:mb-0" src={NetflixLogo} alt="logo" />

    {user && (
      <div className='flex  sm:flex-row sm:items-center justify-between sm:space-x-4 w-full sm:w-auto'>
        
        {/* Language Selector */}
        {GPTSearchStore && (
          <div className="mb-2 sm:mb-0">
            <select
              onChange={HandleLanguageIcon}
              className="text-white rounded-md p-2 bg-gray-900/70 font-extralight cursor-pointer w-full sm:w-auto"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        )}

        {/* Search Button */}
        <div className="mb-2 sm:mb-0">
          <button
            className="text-white rounded-md p-2 bg-slate-300 bg-opacity-20 flex items-center justify-center w-full sm:w-auto"
            onClick={HandleSearchBar}
          >
            {GPTSearchStore ? (
              "HomePage"
            ) : (
              <>
                <img
                  alt="searchbar"
                  className="w-4 h-4 mr-1"
                  src="https://www.freeiconspng.com/uploads/search-icon-png-0.png"
                />
                GPTSearch
              </>
            )}
          </button>
        </div>

        {/* User Icon and Sign Out */}
        <div className="flex items-center space-x-2">
          <img
            className='w-10 h-10 rounded-lg cursor-pointer'
            src={user.photoURL}
            alt="Icon"
          />
          <button
            onClick={handleSignOut}
            className='text-white w-20 h-8 rounded-md bg-red-700/30'
          >
            SignOut
          </button>
        </div>
      </div>
    )}
  </div>
);
}

export default Header
