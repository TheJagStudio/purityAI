import React, { useRef, useState, useEffect } from 'react'

const VideoPlayer2 = () => {

  const videoRef = useRef(null)
  const videoRef2 = useRef(null)
  const [playPause, setPlayPause] = useState(true)
  const [volumeValue, setVolume] = useState(100)
  const [currTime, setCurrTime] = useState(0)
  const [currTime2, setCurrTime2] = useState(0)
  const [frameNo, setFrameNo] = useState(1)
  const [prevLeftPos, setPrevLeftPos] = useState(0)

  // Handle slider bar 
  const handleSliderChange = (e) => {
    const newPosition = e.target.value
    setCurrTime(newPosition)
    // setCurrTime2(newPosition)
    videoRef.current.currentTime = newPosition
    // videoRef2.current.currentTime = newPosition

    // Timeline Seekbar
    let vdoTimeLine = document.querySelector('#canvasImgs')
    vdoTimeLine.scrollLeft += ((currTime * 100) / videoRef.current?.duration || 0) + '%'
    console.log(((currTime * 100) / videoRef.current?.duration || 0) + '%')
  }

  // Handle change in video time to update seekBar
  const handleVideoTimeUpdate = () => {
    setCurrTime(videoRef.current.currentTime)
  }

  // Add frames images
  const handleVideoTimeUpdate2 = () => {
    setCurrTime2(videoRef.current.currentTime)
    const canvas = document.createElement('canvas')
    if(frameNo) {
      canvas.classList.add('frame-odd')
      setFrameNo(!frameNo)
    } else {
      canvas.classList.add('frame-even')
      setFrameNo(!frameNo)
    }
    const ctx = canvas.getContext('2d')
    canvas.width = 130
    canvas.height = 100
    ctx.drawImage(videoRef2.current, 0, 0, canvas.width, canvas.height)
    const dataURI = canvas.toDataURL()
    document.querySelector('#canvasImgs').append(canvas)
  }

  // Handle PLay Pause Function
  const handlePlayPause = () => {
    if(playPause) {
      videoRef.current.play()
      setPlayPause(!playPause)
    } else {
      videoRef.current.pause()
      setPlayPause(!playPause)
    }
  }

  // Handle Volume Function
  const handleVolume = () => {
    let volumeRange = document.querySelector('#volume')
    setVolume(volumeRange.value)
    document.querySelector('#videoPlayer').volume = volumeValue / 100
  }

  // Handle Mute Function
  const handleMute = () => {
    if(volumeValue == 0) {
      setVolume(100)
      document.querySelector('#videoPlayer').volume = 1
    } else {
      setVolume(0)
      document.querySelector('#videoPlayer').volume = 0
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


  return (
    <>
      {/* React Player */}
      <div className='relative group flex items-center justify-center flex-col-reverse lg:w-[80%] w-[90%] my-5 mb-8 mx-auto md:rounded-xl rounded-md overflow-hidden'>

        <video ref={videoRef} onTimeUpdate={handleVideoTimeUpdate} id="videoPlayer">
          <source src='/videos/5.mp4' />
        </video>

        {/* Overlay */}
        <div className='w-full h-auto transition-all duration-200 opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 md:pt-2 pb-3 py-2 md:px-4 px-3 md:rounded-b-xl rounded-b-lg z-10 flex items-center flex-col bg-black/80 ' id='overlay-div'>

          {/* SeekBar */}
          <div className='w-full mb-2 relative'>
            <input
              type="range"
              min="0"
              max={videoRef.current?.duration || 0}
              step="0.1"
              value={currTime}
              onChange={handleSliderChange}
              id='seekBar'
              className='transparent h-0.5 w-full peer cursor-grab active:cursor-grabbing active:accent-amber-400 bg-blue-300 appearance-none rounded-lg accent-amber-500'
            />
            <span className={'absolute peer-hover:opacity-100 opacity-0 -top-5 left-[50%] translate-x-[-50%] transition-opacity duration-300 bg-amber-500 rounded-md px-2 py-0.5'}>{toMinAndHrs(Math.floor(currTime))}</span>
          </div>

          {/* Buttons */}
          <div className='flex items-center justify-between w-full gap-3'>

            {/* Play/Pause --- Mute Buttons */}
            <div className='flex items-center gap-3'>
                {/* Pause Play Buttons */}
                <div>
                    {!playPause ? 
                        <div className='group/item relative overflow-hidden hover:overflow-visible'>
                            <p onClick={handlePlayPause} className='cursor-pointer text-white rounded-full outline-none'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg></p>
                            <span className='md:block hidden absolute -top-1 left-7 rounded-md transition-all duration-200 px-3 py-1 bg-amber-500 text-white opacity-0 group-hover/item:opacity-100 z-10'>Pause</span>
                        </div>
                        :
                        <div className='group/item relative overflow-hidden hover:overflow-visible'>
                            <p onClick={handlePlayPause} className='cursor-pointer text-white rounded-full outline-none'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                            </svg></p>
                            <span className='md:block hidden absolute -top-1 left-7 rounded-md transition-all duration-200 px-3 py-1 bg-amber-500 text-white opacity-0 group-hover/item:opacity-100 z-10'>Play</span>
                        </div>
                    }
                </div>
                {/* Mute Button */}
                <div className='flex items-center group/mute justify-center gap-2 overflow-hidden hover:overflow-visible'>
                    {volumeValue >= 70 ?
                        <p onClick={handleMute} className='hover:cursor-pointer pr-1.5 group-hover/mute:pr-0'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
                        </svg></p>
                        :
                        volumeValue >= 35 && volumeValue < 70 ?
                            <p onClick={handleMute} className='hover:cursor-pointer pr-1.5 group-hover/mute:pr-0'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-volume-down-fill" viewBox="0 0 16 16">
                            <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                            </svg></p>
                        :
                        volumeValue > 0 && volumeValue < 35 ?
                            <p onClick={handleMute} className='hover:cursor-pointer pr-1.5 group-hover/mute:pr-0'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-volume-down-fill" viewBox="0 0 16 16">
                            <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                            </svg></p> 
                            :
                            <p onClick={handleMute} className='hover:cursor-pointer pr-1.5 group-hover/mute:pr-0'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-volume-mute-fill" viewBox="0 0 16 16">
                            <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
                            </svg></p>
                    }
                    <input type="range" min="0" max="100" onChange={handleVolume} value={volumeValue} id='volume' className='text-white h-0.5 !w-0 group-hover/mute:!w-full cursor-grab active:cursor-grabbing accent-transparent active:accent-amber-400 bg-blue-300 appearance-none rounded-lg group-hover/mute:accent-amber-500 ' />
                    {/* <RangeInput onChange={setVolume} defaultValue={volumeValue} /> */}
                </div>
            </div>

            {/* Time Duration */}
            <div className='flex items-center justify-center gap-1 text-white'>
              <p>{toMinAndHrs(Math.floor(currTime))} / {toMinAndHrs(Math.floor(videoRef.current?.duration || 0))}</p>
            </div>

          </div>
        </div>

      </div>

      {/* Video Player Timeline */}
      <div className='flex relative customScrollbar items-start justify-start overflow-x-scroll touch-none lg:w-[80%] w-[90%] my-5 mx-auto md:rounded-xl rounded-md h-full'>

        {/* Video Player for timeline Images */}
        <video autoPlay={true} muted={true} controls ref={videoRef2} onTimeUpdate={handleVideoTimeUpdate2} className='w-0 h-0 overflow-hidden' >
          <source src='/videos/5.mp4' />
        </video>

        {/* Slider Input */}
        <div className='w-full h-full mb-2 absolute z-10'>
          <input
            type="range"
            min="0"
            max={videoRef2.current?.duration || 0}
            step="0.1"
            value={currTime}
            onChange={handleSliderChange}
            id='seekBar2'
            className='peer absolute w-full h-full bg-transparent appearance-none cursor-grab active:cursor-grabbing z-30'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-20'></div>
          <span className={'absolute peer-hover:opacity-100 peer-active:opacity-100 opacity-0 top-2 left-[50%] translate-x-[-50%] bg-amber-500 rounded-md px-2 py-0.5 z-30'}>{toMinAndHrs(Math.floor(currTime))}</span>
        </div>

        <div id='canvasImgs' className='flex items-center justify-start w-full h-full md:rounded-xl rounded-md overflow-x-scroll customScrollbar'></div>

      </div>
    </>
  )
}

export default VideoPlayer2