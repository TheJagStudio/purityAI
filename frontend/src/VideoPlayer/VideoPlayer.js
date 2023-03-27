import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({  }) => {

  const videoRef = useRef()
  const [playPause, setPlayPause] = useState(false)
  const [volumeValue, setVolume] = useState(100)
  const [currTime, setCurrTime] = useState(0);
  const [maxSeconds, setMaxSeconds] = useState(0);

  const [sliderPosition, setSliderPosition] = useState(0);

  const handleSliderChange2 = (e) => {
    const newPosition = e.target.value;
    setCurrTime(newPosition);
    videoRef.current.currentTime = newPosition;
  };

  const handleVideoTimeUpdate = () => {
    setSliderPosition(videoRef.current.currentTime);
  };

  setTimeout(() => {
    document.querySelector('#videoPlayer video').setAttribute('ref', {videoRef})
  }, 200);
  
  // Handle PLay Pause Function
  const handlePlayPause = () => {
    if(playPause) {
      setPlayPause(!playPause)
    } else {
      setPlayPause(!playPause)
    }
  }

  // Handle Volume Function
  const handleVolume = () => {
    let volumeRange = document.querySelector('#volume')
    setVolume(volumeRange.value)
  }

  // Handle Mute Function
  const handleMute = () => {
    if(volumeValue == 0) {
      setVolume(100)
    } else {
      setVolume(0)
    }
  }

  // Function to convert seconds into Mins & Hours
  const toMinAndHrs = (totalSecs) => {
    let totalMinutes = totalSecs / 60
    let secs = totalSecs % 60
    let mins = Math.floor(totalMinutes % 60)
    let hrs = Math.floor(totalMinutes / 60)

    let totalDuration = hrs + ':' + mins + ':' + secs

    if(secs < 10)
      secs = '0' + secs

    if(hrs > 0) {
      totalDuration = hrs + ':' + mins + ':' + secs
    } else if(hrs == 0 && mins > 0) {
      totalDuration = mins + ':' + secs
    } else if(mins == 0) {
      totalDuration = '0:' + secs
    }

    return totalDuration
  }

  const handleSliderChange = (e) => {
    const newValue = e.target.value
    console.log(newValue)
    setCurrTime(newValue)
    videoRef.current.currentTime = newValue
  }

  return (
    <>
      {/* React Player */}
      <div className='relative group flex items-center justify-center flex-col-reverse lg:w-[80%] w-[90%] my-5 mx-auto md:rounded-xl rounded-md overflow-hidden'>
        <ReactPlayer
          url='/videos/2.mp4'
          playing={playPause}
          volume={volumeValue / 150}
          onProgress={(progress) => {
            setCurrTime(progress.playedSeconds);
          }}
          width="100%"
          height="100%"
          className='md:rounded-xl rounded-md'
          id='videoPlayer'
          
        />

        {/* Overlay */}
        <div className='w-full h-auto transition-all duration-200 opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 md:pt-2 pb-3 py-2 md:px-4 px-3 rounded-b-xl z-10 flec items-center flex-col bg-black/80 '>

          {/* SeekBar */}
          <div className='w-full mb-2'>
            <input
              type="range"
              min="0"
              max="13"
              step="0.1"
              value={currTime}
              onChange={handleSliderChange}
              id='seekBar'
              className='w-full h-0.5 cursor-pointer'
            />
          </div>

          {/* Buttons */}
          <div className='flex items-center gap-3'>
            {/* Pause Play Buttons */}
            <div>
              {!playPause ? 
                <p onClick={handlePlayPause} className='cursor-pointer text-white rounded-full outline-none'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg></p>
                :
                <p onClick={handlePlayPause} className='cursor-pointer text-white rounded-full outline-none'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
              </svg></p>
              }
            </div>

            {/* Mute Button */}
            <div className='flex items-center peer justify-center gap-2'>
              {volumeValue >= 70 ?
                <p onClick={handleMute} className='hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                  <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                </svg></p>
                :
                volumeValue >= 35 && volumeValue < 70 ?
                  <p onClick={handleMute} className='hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
                    <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                  </svg></p>
                  :
                  volumeValue > 0 && volumeValue < 35 ?
                    <p onClick={handleMute} className='hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
                      <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                    </svg></p> 
                    :
                    <p onClick={handleMute} className='hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
                      <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
                    </svg></p>
              }
              <input type="range" min="0" max="100" onChange={handleVolume} value={volumeValue} id='volume' className='transparent h-0.5 w-full cursor-pointer appearance-none rounded-lg bg-amber-200 accent-amber-500' />
            </div>

            {/* Play Time */}
            <div className='flex items-center justify-center gap-1 text-white'>
              <p>{toMinAndHrs(parseInt(currTime))} / {toMinAndHrs(maxSeconds)}</p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default VideoPlayer

{/* Custom Video Player */}
{/* <div className='relative w-[90%] h-auto overflow-hidden group mx-auto'>
  {/* Overlay 
  <div className='w-full h-auto transition-all duration-200 opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 md:py-4 py-2 md:px-4 px-3 rounded-b-xl z-10  bg-black/80'>
    {/* Pause Play Buttons 
    <div className=''>
      {playPause ? 
        <p onClick={handlePlayPause} className='cursor-pointer text-white rounded-full outline-none'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
        </svg></p>
        :
        <p onClick={handlePlayPause} className='cursor-pointer text-white rounded-full outline-none'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
        <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
      </svg></p>
      }
    </div>
  </div>

  {/* Video Src 
  <div className='flex items-center justify-center rounded-xl mx-auto'>
    <video autoPlay ref={videoRef} className='w-full object-cover rounded-xl'>
      <source src='/videos/5.mp4' />
    </video>
  </div>
</div> */}