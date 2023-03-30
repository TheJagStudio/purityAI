import React from "react";
import Tools from "../Components/Tools/Tools";
const HomePage = () => {
	return (
		<div className="w-[80%] mx-auto">
			<div className="flex justify-center items-center flex-col gap-11 my-20 mt-0">
				<h1 className="xl:text-[70px] sm:text-[40px] text-3xl w-full sm:pb-3 pb-1 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent sm:leading-[2.5rem] md:leading-[3rem] xl:leading-[4.5rem] font-extrabold text-center">
					Protect Your Online Reputation
					<br />
					<span className="">with PurityAI</span>
				</h1>
				<h4 className="text-[18px] font-semibold text-white text-center">
					The Ultimate Obscene Content Blocker Solution
					<br />
					powered by Artificial Intelligence.
				</h4>
				<div className="self-center flex gap-8 items-center">
					<a className="text-secondary text-[13px] font-semibold cursor-pointer">&rarr; Watch a 2min demo</a>
					<button className="py-3 px-5 text-sm leading-4 font-semibold outline-secondary select-none rounded-lg bg-secondary text-white hover:bg-secondary/75 active:bg-secondary/75 transition-opacity">Try for free</button>
				</div>
				<div className="relative group cursor-pointer">
					<video autoPlay={true} className="self-center object-contain aspect-video rounded-2xl" id="hero-video" muted={true} loop={true}>
						<source src="https://static.clipdrop.co/web/homepage/hero-video.mp4#t=0.1" type="video/mp4" />
					</video>
					<div className="absolute top-0 right-0 bottom-0 left-0 bg-[hsla(0,0%,20%,0.35)] flex justify-center items-center rounded-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-white group-hover:scale-125 transition-transform" width="90" height="80">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path>
						</svg>
					</div>
				</div>
			</div>
			<Tools />
		</div>
	);
};

export default HomePage;
