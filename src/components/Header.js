// import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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
  
  return (
    <div className='absolute w-full px-8 py-4 bg-gradient-to-b from-black z-40 flex'> {/*background Gradient to top to bottom with the color of black*/}
    <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
  {user &&
  <div className=' ml-auto '>
      <img className='w-10 h-10 rounded-lg mt-1  cursor-pointer flex-center plr-3 m-4' src={user.photoURL} alt="Icon"></img>
    <button onClick={handleSignOut} className='text-white   w-20 h-7 pr-2    rounded-md  bg-red-700/30 '>SignOut</button>
    </div>}
    </div>
    
  )
}

export default Header
