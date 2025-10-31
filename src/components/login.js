import  { useRef, useState } from 'react'
import Header from './Header'
import Validation from '../utils/Validation';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/Firebase';
import { signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
const Login = () => {
    const[Signupform,setSignupform]=useState(true);
    const[Error,setError]=useState(null);
    const navigate =useNavigate();
    const dispatch = useDispatch();

    const name =useRef(null);
    const email =useRef(null);
    const password =useRef(null);
const BottonValidation =()=>{
    // console.log(name.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);
    const validator =Validation(name.current?.value,email.current?.value,password.current?.value)
    setError(validator);
    if(validator) return;
if(Signupform){
        //Signup Logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
.then((userCredential) => {
    // Signed up
    const user = userCredential.user;
updateProfile(auth.currentUser, {
    displayName: name.current.value,photoURL:"https://eskipaper.com/images/god-of-war-6.jpg"
}).then(() => {
    const { uid, email ,displayName,photoURL} = auth.currentUser;
    dispatch(
        addUser(
        {
            uid:uid, email:email, displayName:displayName,photoURL:photoURL

        }));

  // Profile updated!
    navigate('/browse');

}).catch((error) => {
  // An error occurred
setError(error.message);
});
    console.log(user);
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + " " + errorMessage);
});

    }else{
        //SignIn Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    navigate('/browse');
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + " " + errorMessage);

});

    }

}

const ButtonSignupform =()=>{
    setSignupform(!Signupform);
}


    return (
    <div>
        <Header/>
        <div className='absolute'>
            <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/186b5d52-052d-4779-b061-5eed089a99a6/web/IN-en-20251020-TRIFECTA-perspective_2972aef3-a02d-4d1c-9098-126151b3c3ee_small.jpg" alt="background" />
            <div className='absolute top-1/4 bottom-1/4 m-auto right-0 left-0 w-1/4'>
            <form  onSubmit={(e)=>{e.preventDefault()}} className='relative flex flex-col gap-5 bg-black/75 p-8 rounded-md md:w-full'>
            <h1 className='text-white text-2xl font-bold  text-center'>{Signupform ? "SignUp":"SignIn"}</h1>
            {Signupform  && <div >
                <input ref={name} className='bg-gray-900/50 text-white p-2 rounded-md w-full' type="text" placeholder='Name ' />
            </div>}
            <div >
                <input ref={email} className='bg-gray-900/50 text-white p-2 rounded-md w-full' type="text" placeholder='Email ' />
            </div>
            {/* <p className='text-red-600 text-bold font-bold font-serif'>{Error}</p> */}

            <div className='mt-4 '>
                <input ref={password} className='bg-gray-900/50 text-white p-2 rounded-md w-full' type="password" placeholder='Password' />
            </div>
            <p className='text-red-600 text-bold font-bold font-serif'>{Error}</p>
            <button onClick={BottonValidation} className='bg-red-600 text-white px-4 py-2 rounded-md mt-4 w-full'>{Signupform ? "SignUp":"SignIn"}</button>
        <a href="/forgetpassword" className='text-white hover:underline text-center'>{!Signupform ?"Forget Password":""}</a>

        <div className='justify-content-center'>
            <p className=' text-gray-400'>{Signupform ? "Already Registered?":"New to Netflix? "} <span> </span><span className='text-white hover:underline cursor-pointer' onClick={ButtonSignupform}>{Signupform ? "SignIn now.":"SignUp now."}</span></p>
        </div>
        </form>
        </div>
        </div>
    </div>
)
}

export default Login
