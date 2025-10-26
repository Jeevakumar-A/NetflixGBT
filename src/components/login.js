import  { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[Signupform,setSignupform]=useState(true);

const ButtonSignupform =()=>{
    setSignupform(!Signupform);
}

    return (
    <div>
        <Header/>
        <div className='absolute'>
            <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/186b5d52-052d-4779-b061-5eed089a99a6/web/IN-en-20251020-TRIFECTA-perspective_2972aef3-a02d-4d1c-9098-126151b3c3ee_small.jpg" alt="background" />
            <div className='absolute top-1/4 bottom-1/4 m-auto right-0 left-0 w-1/4'>
            <form className='relative flex flex-col gap-5 bg-black/75 p-8 rounded-md md:w-full'>
            <h1 className='text-white text-2xl font-bold  text-center'>{Signupform ? "SignUp":"SignIn"}</h1>
            {Signupform  && <div >
                <input className='bg-gray-900/50 text-white p-2 rounded-md w-full' type="text" placeholder='Name ' />
            </div>}
            <div >
                <input className='bg-gray-900/50 text-white p-2 rounded-md w-full' type="text" placeholder='Email ' />
            </div>

            <div className='mt-4 '>
                <input className='bg-gray-900/50 text-white p-2 rounded-md w-full' type="password" placeholder='Password' />
            </div>
            <button className='bg-red-600 text-white px-4 py-2 rounded-md mt-4 w-full'>{Signupform ? "SignUp":"SignIn"}</button>
        <a href="/forgetpassword" className='text-white hover:underline text-center'>Forget Password</a>

        <div className='justify-content-center'>
            <p className=' text-gray-400'>{Signupform ? "New to Netflix? ":"Already Registered?"} <span> </span><span className='text-white hover:underline cursor-pointer' onClick={ButtonSignupform}>{Signupform ? "SignUp now.":"SignIn now."}</span></p>
        </div>
        </form>
        </div>
        </div>
    </div>
)
}

export default Login
