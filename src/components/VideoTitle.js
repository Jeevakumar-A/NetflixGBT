import React from 'react'

const VideoTitle = ({ title, overview }) => { //data received as (props) from MainContainer component
    return (
        <div className='w-screen aspect-video pt-[20%] sm:-mt-[4%] absolute px-4 sm:px-24  text-white bg-gradient-to-r from-black '>
            <h1 className='font-bold mt-1  sm:mt-0 text-xl sm:text-4xl mb-2 sm:mb-5 text-black-600' >{title}</h1>
            <p className='hidden sm:block h-[40%]   sm:w-[30%] text-sm sm:text-sm'>{overview}</p>
            <div className=' flex gap-5 mt-10 sm:-mt-[5%] '>
                {/* In tailwindcss, the width used by*4 and also similar in height  */}
    <button className='flex items-center gap-2 bg-gray-500 font-bold text-white  px-4 py-2 sm:px-10  rounded-2xl hover:bg-gray-700  '>
    <img className='w-5 h-5' src="https://th.bing.com/th/id/R.17dea5ebc20f4fd10389b4f180ae9b3d?rik=Mk27J%2fOwvgH%2fVg&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f8i6%2f5B8%2f8i65B8AXT.png&ehk=IV%2bm3FPSCxnmuBCHcWRDTkqpYt1z1JEjArHoTKHgvdA%3d&risl=&pid=ImgRaw&r=0" alt="play icon" />
    <span>Play</span>
    </button>
        <button className=' bg-gray-500  hidden sm:block font-bold text-white py-2 px-4 sm:px-10 rounded-2xl hover:bg-gray-700 '>More Info</button>
        </div>
        </div>
    )
}

export default VideoTitle
