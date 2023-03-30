import React, { useRef, useState } from "react";

const VideoPlayer2 = () => {
	document.title = "PurityAI | Video";

	const videoRef = useRef(null);
	const videoRef2 = useRef(null);
	const [playPause, setPlayPause] = useState(true);
	const [volumeValue, setVolume] = useState(100);
	const [currTime, setCurrTime] = useState(0);
	const [currTimeLog, setCurrTimeLog] = useState(0);
	const [source, setSource] = useState("/static/videos/3.mp4");
	const [rotateSrc, setRotateSrc] = useState(0);
	// const [prevTimePos, setPrevTimePos] = useState(0)

	// Handle slider bar
	const handleSliderChange = (e) => {
		const newPosition = e.target.value;
		setCurrTime(newPosition);
		setCurrTimeLog(newPosition);
		videoRef.current.currentTime = newPosition;

		// Timeline Seekbar
		let vdoTimeLine = document.querySelector("#canvasImgs");
		let start = 0;
		let end = videoRef.current?.duration || 0;
		vdoTimeLine.scrollTo({
			left: ((currTimeLog * 100) / (end - start)) * vdoTimeLine.scrollWidth,
		});
	};

	// Handle change in video time to update seekBar
	const handleVideoTimeUpdate = (e) => {
		setCurrTime(videoRef.current.currentTime);
		setCurrTimeLog(videoRef.current.currentTime);
		// Timeline Seekbar
		let vdoTimeLine = document.querySelector("#canvasImgs");
		let end = videoRef.current?.duration || 0;
		vdoTimeLine.scrollTo({
			left: ((currTimeLog * 100) / end) * vdoTimeLine.scrollWidth,
		});
	};

	// Add frames images
	const handleVideoTimeUpdate2 = () => {
		setCurrTimeLog(videoRef.current.currentTime);
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		// get videoRef dimensions
		let videoHeight = videoRef.current.videoHeight;
		let videoWidth = videoRef.current.videoWidth;
		canvas.width = (100 * videoWidth) / videoHeight;
		canvas.height = 100;
		ctx.drawImage(videoRef2.current, 0, 0, canvas.width, canvas.height);
		document.querySelector("#canvasImgs").append(canvas);
	};

	// Handle PLay Pause Function
	const handlePlayPause = () => {
		if (playPause) {
			videoRef.current?.play();
			setPlayPause(!playPause);
		} else {
			videoRef.current?.pause();
			setPlayPause(!playPause);
		}
	};

	// Handle Volume Function
	const handleVolume = () => {
		let volumeRange = document.querySelector("#volume");
		setVolume(volumeRange.value);
		document.querySelector("#videoPlayer").volume = volumeValue / 100;
	};

	// Handle Mute Function
	const handleMute = () => {
		if (volumeValue === 0) {
			setVolume(100);
			document.querySelector("#videoPlayer").volume = 1;
		} else {
			setVolume(0);
			document.querySelector("#videoPlayer").volume = 0;
		}
	};

	// Function to convert seconds into Mins & Hours
	const toMinAndHrs = (totalSecs) => {
		let totalMinutes = totalSecs / 60;
		let secs = totalSecs % 60;
		let mins = Math.floor(totalMinutes % 60);
		let hrs = Math.floor(totalMinutes / 60);

		let totalDuration = hrs + ":" + mins + ":" + secs;

		if (secs < 10) secs = "0" + secs;

		if (hrs > 0) {
			totalDuration = hrs + ":" + mins + ":" + secs;
		} else if (hrs === 0 && mins > 0) {
			totalDuration = mins + ":" + secs;
		} else if (mins === 0) {
			totalDuration = "0:" + secs;
		}

		return totalDuration;
	};
	window.addEventListener("keydown", function (e) {
		if (e.key === " " || e.code === "Space") {
			if (playPause) {
				videoRef.current?.play();
				setPlayPause(!playPause);
			} else {
				videoRef.current?.pause();
				setPlayPause(!playPause);
			}
			e.preventDefault();
		}
	});

	return (
		<>
			{/* React Player */}
			<div id="playerCus" className="relative group flex items-center justify-center flex-col-reverse lg:w-[80%] w-[80%] mx-auto md:rounded-xl rounded-md overflow-hidden bg-black ">
				<video ref={videoRef} loop={true} onTimeUpdate={handleVideoTimeUpdate} id="videoPlayer" className="max-h-[500px] min-w-[100%] transition-all duration-300">
					<source src={source} />
				</video>

				<div
					className="absolute top-5 group/repeat right-5 bg-black/80 p-2 rounded-full cursor-pointer z-10 opacity-0 group-hover:opacity-100"
					onClick={() => {
						setRotateSrc(rotateSrc - 90);
						document.querySelector("#videoPlayer").style.transform = "rotate(" + rotateSrc + "deg)";
						let videoHeight = videoRef.current.videoHeight;
						let videoWidth = videoRef.current.videoWidth;
						if (videoWidth > videoHeight && (rotateSrc % 360 === -90 || rotateSrc % 360 === -270)) {
							console.log(videoHeight / videoWidth, rotateSrc % 360);
							document.querySelector("#videoPlayer").style.scale = videoHeight / videoWidth;
						} else if (videoWidth < videoHeight && (rotateSrc % 360 === -90 || rotateSrc % 360 === -270)) {
							console.log(videoWidth / videoHeight, rotateSrc % 360);
							document.querySelector("#videoPlayer").style.scale = videoHeight / videoWidth;
						} else {
							document.querySelector("#videoPlayer").style.scale = 1;
						}
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
						<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
					</svg>
					<span className="absolute text-sm -bottom-5 -left-1 opacity-0 group-hover/repeat:opacity-100 text-white">Rotate</span>
				</div>

				<div
					onDoubleClick={() => {
						if (currTime > 5) {
							setCurrTime(currTime - 5);
							setCurrTimeLog(currTime - 5);
							videoRef.current.currentTime = currTime - 5;
							// Timeline Seekbar
							let vdoTimeLine = document.querySelector("#canvasImgs");
							let end = videoRef.current?.duration || 0;
							vdoTimeLine.scrollTo({
								left: ((currTimeLog * 100) / end) * vdoTimeLine.scrollWidth,
							});
						} else {
							setCurrTime(0);
							setCurrTimeLog(0);
							videoRef.current.currentTime = 0;
							// Timeline Seekbar
							let vdoTimeLine = document.querySelector("#canvasImgs");
							let end = videoRef.current?.duration || 0;
							vdoTimeLine.scrollTo({
								left: ((currTimeLog * 100) / end) * vdoTimeLine.scrollWidth,
							});
						}
					}}
					onClick={() => {
						if (playPause) {
							videoRef.current?.play();
							setPlayPause(!playPause);
						} else {
							videoRef.current?.pause();
							setPlayPause(!playPause);
						}
					}}
					className="absolute top-0 left-0 w-1/2 h-full"
				></div>
				<div
					onDoubleClick={() => {
						if (currTime < videoRef.current?.duration - 5) {
							setCurrTime(currTime + 5);
							setCurrTimeLog(currTime + 5);
							videoRef.current.currentTime = currTime + 5;
							// Timeline Seekbar
							let vdoTimeLine = document.querySelector("#canvasImgs");
							let end = videoRef.current?.duration || 0;
							vdoTimeLine.scrollTo({
								left: ((currTimeLog * 100) / end) * vdoTimeLine.scrollWidth,
							});
						} else {
							setCurrTime(videoRef.current?.duration);
							setCurrTimeLog(videoRef.current?.duration);
							videoRef.current.currentTime = videoRef.current?.duration;
							// Timeline Seekbar
							let vdoTimeLine = document.querySelector("#canvasImgs");
							let end = videoRef.current?.duration || 0;
							vdoTimeLine.scrollTo({
								left: ((currTimeLog * 100) / end) * vdoTimeLine.scrollWidth,
							});
						}
					}}
					onClick={() => {
						if (playPause) {
							videoRef.current?.play();
							setPlayPause(!playPause);
						} else {
							videoRef.current?.pause();
							setPlayPause(!playPause);
						}
					}}
					className="absolute top-0 right-0 w-1/2 h-full"
				></div>

				{/* Overlay */}
				<div className="w-full h-auto transition-all duration-200 opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 md:pt-2 pb-3 py-2 md:px-4 px-3 md:rounded-b-xl rounded-b-lg z-10 flex items-center flex-col bg-black/80 " id="overlay-div">
					{/* SeekBar */}
					<div className="w-full mb-2 relative">
						<input
							onMouseMove={(event) => {
								let playerOffest = document.getElementById("playerCus").offsetLeft;
								document.getElementById("playerTimer").style.left = event.clientX - playerOffest + "px";
								const newPosition = ((event.clientX - playerOffest) * (videoRef.current?.duration || 0)) / document.getElementById("playerCus").offsetWidth;
								setCurrTimeLog(newPosition);
								document.getElementById("miniPlayerVideo").currentTime = newPosition;
								// Timeline Seekbar
								let vdoTimeLine = document.querySelector("#canvasImgs");
								let end = videoRef.current?.duration || 0;
								vdoTimeLine.scrollTo({
									left: (newPosition / end) * vdoTimeLine.scrollWidth - document.getElementById("seekBar2").offsetWidth / 2,
								});
							}}
							type="range"
							min="0"
							max={videoRef.current?.duration || 0}
							step="0.01"
							value={currTime}
							onChange={handleSliderChange}
							id="seekBar"
							className="transparent h-0.5 w-full peer cursor-pointer active:cursor-grabbing active:accent-amber-400 bg-blue-300 appearance-none rounded-lg accent-amber-500"
						/>
						<div id="playerTimer" className={"absolute peer-hover:opacity-100 opacity-0 bottom-7 left-[50%] translate-x-[-75%] transition-opacity duration-300"}>
							<video id="miniPlayerVideo" className="w-32 max-h-32 h-auto rounded-t-md object-cover">
								<source src={source} />
							</video>
							<h1 className="bg-amber-500 rounded-b-md text-white font-semibold px-2 py-0.5 text-center">{toMinAndHrs(Math.floor(currTimeLog))}</h1>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex items-center justify-between w-full gap-3">
						{/* Play/Pause --- Mute Buttons */}
						<div className="flex items-center gap-3">
							{/* Pause Play Buttons */}
							<div>
								{!playPause ? (
									<div className="group/item relative overflow-hidden hover:overflow-visible">
										<p onClick={handlePlayPause} className="cursor-pointer text-white rounded-full outline-none">
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pause-fill" viewBox="0 0 16 16">
												<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
											</svg>
										</p>
										<span className="md:block hidden absolute bottom-14 left-0 rounded-md transition-all duration-200 px-3 py-1 bg-amber-500 text-white opacity-0 group-hover/item:opacity-100 z-10">Play</span>
									</div>
								) : (
									<div className="group/item relative overflow-hidden hover:overflow-visible">
										<p onClick={handlePlayPause} className="cursor-pointer text-white rounded-full outline-none">
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
												<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
											</svg>
										</p>
										<span className="md:block hidden absolute bottom-14 left-0 rounded-md transition-all duration-200 px-3 py-1 bg-amber-500 text-white opacity-0 group-hover/item:opacity-100 z-10">Pause</span>
									</div>
								)}
							</div>
							{/* Mute Button */}
							<div className="flex items-center group/mute justify-center gap-2 overflow-hidden hover:overflow-visible">
								{volumeValue >= 70 ? (
									<p onClick={handleMute} className="hover:cursor-pointer pr-1.5 group-hover/mute:pr-0">
										<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-volume-up-fill" viewBox="0 0 16 16">
											<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
											<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
											<path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
										</svg>
									</p>
								) : volumeValue >= 35 && volumeValue < 70 ? (
									<p onClick={handleMute} className="hover:cursor-pointer pr-1.5 group-hover/mute:pr-0">
										<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-volume-down-fill" viewBox="0 0 16 16">
											<path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z" />
											<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
											<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
										</svg>
									</p>
								) : volumeValue > 0 && volumeValue < 35 ? (
									<p onClick={handleMute} className="hover:cursor-pointer pr-1.5 group-hover/mute:pr-0">
										<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-volume-down-fill" viewBox="0 0 16 16">
											<path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z" />
										</svg>
									</p>
								) : (
									<p onClick={handleMute} className="hover:cursor-pointer pr-1.5 group-hover/mute:pr-0">
										<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" className="bi bi-volume-mute-fill" viewBox="0 0 16 16">
											<path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
										</svg>
									</p>
								)}
								<input type="range" min="0" max="100" onChange={handleVolume} value={volumeValue} id="volume" className="text-white h-0.5 !w-0 group-hover/mute:!w-full cursor-grab active:cursor-grabbing accent-transparent active:accent-amber-400 bg-blue-300 appearance-none rounded-lg group-hover/mute:accent-amber-500 " />
								{/* <RangeInput onChange={setVolume} defaultValue={volumeValue} /> */}
							</div>
						</div>

						{/* Time Duration */}
						<div className="flex items-center justify-center gap-1 text-white">
							<p>
								{toMinAndHrs(Math.floor(currTime))} / {toMinAndHrs(Math.floor(videoRef.current?.duration || 0))}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Video Player Timeline */}
			<div className="flex relative customScrollbar items-start justify-start overflow-x-scroll touch-none w-[80%] my-5 mx-auto md:rounded-xl rounded-md h-full">
				{/* Video Player for timeline Images */}
				<video autoPlay={true} muted={true} controls ref={videoRef2} onTimeUpdate={handleVideoTimeUpdate2} className="w-0 h-0 overflow-hidden">
					<source src={source} />
				</video>

				{/* Slider Input */}
				<div className="w-full h-full  absolute z-10">
					<input type="range" min="0" max={videoRef2.current?.duration || 0} step="0.1" value={currTime} onChange={handleSliderChange} id="seekBar2" className="peer absolute w-full h-full bg-transparent appearance-none cursor-grab active:cursor-grabbing z-30" />
					<div className="absolute top-0 left-0 w-full h-full bg-black/60 z-20"></div>
					<span className={"absolute peer-hover:opacity-100 peer-active:opacity-100 opacity-0 top-2 left-[50%] translate-x-[-50%] bg-amber-500 rounded-md px-2 py-0.5 z-30"}>{toMinAndHrs(Math.floor(currTime))}</span>
				</div>

				<div id="canvasImgs" className="flex items-center justify-start w-full h-full md:rounded-xl rounded-md touch-none overflow-x-scroll customScrollbar"></div>
			</div>
		</>
	);
};

export default VideoPlayer2;
