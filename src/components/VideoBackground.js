import { useSelector } from "react-redux"
import {useTrailerVideo} from "../Hooks/useTrailerVideo"


const VideoBackground = ({MovieID}) => {
const TrailerVideo =useSelector((store=>store.movies?.trailerVideo)) // Get the trailer video from the Redux store

  useTrailerVideo({MovieID})
  return (
    <div>
      {/*any video on css---->use iframe //////w-screen-->full with of the screen size// the aspect-ratio utility is used to control the width-to-height ratio of an element */}
      <iframe
      className="w-screen aspect-video "
      src={`https://www.youtube.com/embed/${TrailerVideo?.key}?autoplay=1&mute=1`}// {must one }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
      >
        
      </iframe>

    </div>
  )
}

export default VideoBackground
