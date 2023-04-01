import React, { useState } from "react";

// Components
import Tools from "../Components/Tools/Tools";
import Details from "../Components/Details/Details";

// Variables
import { RBSD1, RBSD2, RBSD3, RBSD4 } from "../Variables/Variables";
const HomePage = () => {
	document.title = "PurityAI";

	const [removedBGData, setRemovedBGData] = useState([]);

	function removeBackground() {
		var formdata = new FormData();
		formdata.append("image", document.getElementById("imageInput").files[0]);
		var requestOptions = {
			method: "POST",
			body: formdata,
			redirect: "follow",
		};
		let boundingBoxs = document.getElementsByClassName("boundingBox");
		for (let index = 0; index < boundingBoxs.length; index++) {
			const element = boundingBoxs[index];
			element.style.display = "hidden";
			element.remove();
		}
		boundingBoxs = document.getElementsByClassName("boundingBox");
		for (let index = 0; index < boundingBoxs.length; index++) {
			const element = boundingBoxs[index];
			element.classList.add("hidden");
			element.remove();
		}
		fetch(process.env.REACT_APP_SERVER + "/api/visionAI/", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setRemovedBGData(result["data"]);
				if (result["data"]["Safe Search"]["adult"] === "POSSIBLE" || result["data"]["Safe Search"]["adult"] === "VERY_LIKELY" || result["data"]["Safe Search"]["adult"] === "LIKELY") {
					// document.getElementById("outputImage").classList.add("blur-[50px]");
				} else {
					document.getElementById("outputImage").classList.remove("blur-[50px]");
					if (result["data"].hasOwnProperty("Object")) {
						for (let index = 0; index < result["data"]["Object"].length; index++) {
							const element = result["data"]["Object"][index];
							let normalizedVertices = element["boundingPoly"]["normalizedVertices"];
							const box = normalizedVertices;
							let parent = document.getElementById("mainImageContainer");
							let newDiv = document.createElement("div");
							newDiv.style.left = box[0]["x"] * 100 + "%";
							newDiv.style.top = box[0]["y"] * 100 + "%";
							newDiv.style.width = (box[1]["x"] - box[0]["x"]) * 100 + "%";
							newDiv.style.height = (box[2]["y"] - box[1]["y"]) * 100 + "%";
							newDiv.style.border = "2px solid #fa833e";
							newDiv.style.position = "absolute";
							newDiv.classList.add("boundingBox");
							parent.appendChild(newDiv);
						}
					}
				}
			})
			.catch((error) => console.log("error", error));
	}

	const handleFileChange = () => {
		try {
			setRemovedBGData([]);
			document.getElementById("outputImage").classList.add("blur-[50px]");
			const rmvBgDiv = document.getElementById("removedBackgroundImage");
			const file = document.getElementById("imageInput").files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				let image = document.getElementById("outputImage");
				image.src = reader.result;
				rmvBgDiv.scrollIntoView({ behavior: "smooth", block: "center" });
				removeBackground();
			};
			toggleRmvBgDiv();
		} catch (err) {
			console.log(err);
		}
	};

	const toggleRmvBgDiv = () => {
		const rmvBgDiv = document.getElementById("removedBackgroundImage");
		rmvBgDiv.classList.add("h-max", "md:p-5", "my-12", "p-3", "py-4");
		rmvBgDiv.classList.remove("h-0", "p-0", "my-0", "overflow-hidden");
	};

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

			<section className="w-full min-h-screen">
				<h1 className="xl:text-[70px] sm:text-[40px] text-[36px] w-full bg-gradient-to-r pb-5 from-white to-secondary bg-clip-text text-transparent sm:leading-[2.5rem] md:leading-[3rem] xl:leading-[4.5rem] font-extrabold text-center">Automated image moderation made easy</h1>
				<p className="text-lg text-gray-300 w-full text-center max-w-[600px] mx-auto">Our advanced technology can detect the below categories. We are always rolling out additional threat categories for image moderation.</p>

				<div className="flex flex-col  items-center justify-center gap-10 mt-14">
					<div className="w-full flex-wrap flex items-center justify-start gap-10 pl-7">
						<div className="relative group overflow-hidden rounded-xl">
							<img src="/static/images/cat1.jpg" alt="Image" className="h-[200px] w-[200px] object-cover object-top rounded-xl" />
							<div className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 top-0 left-0">
								<span className="text-xl font-semibold text-secondary w-full absolute gap-1 bottom-5 text-center">Nudity</span>
							</div>
						</div>
						<div className="relative group overflow-hidden rounded-xl">
							<img src="/static/images/cat4.jpg" alt="Image" className="h-[200px] w-[200px] object-cover object-top rounded-xl" />
							<div className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 top-0 left-0">
								<span className="text-xl font-semibold text-secondary w-full absolute gap-1 bottom-5 text-center">Minors</span>
							</div>
						</div>
						<div className="relative group overflow-hidden rounded-xl">
							<img src="/static/images/cat5.jpg" alt="Image" className="h-[200px] w-[200px] object-cover object-top rounded-xl" />
							<div className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 top-0 left-0">
								<span className="text-xl font-semibold text-secondary w-full absolute gap-1 bottom-5 text-center">Drugs</span>
							</div>
						</div>
						<div className="relative group overflow-hidden rounded-xl">
							<img src="/static/images/cat8.jpg" alt="Image" className="h-[200px] w-[200px] object-cover object-top rounded-xl" />
							<div className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 top-0 left-0">
								<span className="text-xl font-semibold text-secondary w-full absolute gap-1 bottom-5 text-center">Celebrity</span>
							</div>
						</div>
						<div className="relative group overflow-hidden rounded-xl">
							<img src="/static/images/cat6.jpg" alt="Image" className="h-[200px] w-[200px] object-cover object-top rounded-xl" />
							<div className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 top-0 left-0">
								<span className="text-xl font-semibold text-secondary w-full absolute gap-1 bottom-5 text-center">Weopons</span>
							</div>
						</div>
						<div className="relative group overflow-hidden rounded-xl">
							<img src="/static/images/cat2.jpg" alt="Image" className="h-[200px] w-[200px] object-cover object-top rounded-xl" />
							<div className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 top-0 left-0">
								<span className="text-xl font-semibold text-secondary w-full absolute gap-1 bottom-5 text-center">Alcohol</span>
							</div>
						</div>
						<div className="relative group overflow-hidden rounded-xl">
							<img src="/static/images/cat3.jpg" alt="Image" className="h-[200px] w-[200px] object-cover object-top rounded-xl" />
							<div className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 top-0 left-0">
								<span className="text-xl font-semibold text-secondary w-full absolute gap-1 bottom-5 text-center">Blurriness</span>
							</div>
						</div>
						<div className="relative group overflow-hidden rounded-xl">
							<img src="/static/images/cat7.jpg" alt="Image" className="h-[200px] w-[200px] object-cover object-top rounded-xl" />
							<div className="group-hover:opacity-100 opacity-0 transition-all duration-300 w-full h-full text-2xl absolute text-secondary font-serif font-bold bg-gradient-to-t from-primary rounded-lg to-transparent z-10 top-0 left-0">
								<span className="text-xl font-semibold text-secondary w-full absolute gap-1 bottom-5 text-center">Gender</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Input Section */}
			<section className="flex flex-1 flex-col sm:flex-row w-full gap-10 justify-center items-center sm:items-start sm:my-12 my-8 sm:px-12 px-8 overflow-hidden">
				<div className="max-w-[850px] w-full flex-1 flex flex-col gap-5 items-center">
					<h2 className="text-3xl md:text-3xl md:leading-[3.5rem] xl:text-[50px] font-extrabold text-white mt-10 mb-10 text-center">Try the PurityAI Image Analyzer</h2>
					<div className="rounded-3xl overflow-hidden border-4 border-white border-dashed w-full">
						<div className="flex flex-col justify-center items-center text-center cursor-pointer w-full h-fitoverflow-hidden">
							<label htmlFor="imageInput" className="md:text-lg font-semibold text-white text-center opacity-100 px-7 py-7 sm:py-14 select-none w-full cursor-pointer bg-dark-primary hover:bg-transparent transition-colors duration-200">
								Click, paste or drop image here to start.
							</label>
							<input onChangeCapture={handleFileChange} type="file" id="imageInput" name="imageInput" className="absolute top-0 bottom-0 left-0 right-0 hidden" accept="image/png,image/jpeg" />
						</div>
					</div>
					<div className="flex mt-3 mb-3 gap-1 items-center justify-center text-white ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" width="32" height="32">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6"></path>
						</svg>
						<p className="text-[13px] font-semibold text-white"> Or try any example below</p>
					</div>
					<div className="flex gap-4 items-center justify-center h-[130px]">
						<img
							onClick={() => {
								toggleRmvBgDiv();
								document.getElementById("outputImage").src = "/static/images/RB1.jpg";
								document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
								setRemovedBGData(RBSD1);
							}}
							alt="use case 1"
							loading="lazy"
							width="130"
							height="130"
							decoding="async"
							data-nimg="1"
							className="useCase object-cover rounded-md cursor-pointer hover:opacity-50 w-[130px] h-[130px]"
							src="/static/images/RB1.jpg"
						/>
						<img
							onClick={() => {
								toggleRmvBgDiv();
								document.getElementById("outputImage").src = "/static/images/RB2.jpg";
								document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
								setRemovedBGData(RBSD2);
							}}
							alt="use case 2"
							loading="lazy"
							width="130"
							height="130"
							decoding="async"
							data-nimg="1"
							className="useCase object-cover rounded-md cursor-pointer hover:opacity-50 w-[130px] h-[130px]"
							src="/static/images/RB2.jpg"
						/>
						<img
							onClick={() => {
								toggleRmvBgDiv();
								document.getElementById("outputImage").src = "/static/images/RB3.jpg";
								document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
								setRemovedBGData(RBSD3);
							}}
							alt="use case 3"
							loading="lazy"
							width="130"
							height="130"
							decoding="async"
							data-nimg="1"
							className="useCase object-cover rounded-md cursor-pointer hover:opacity-50 w-[130px] h-[130px]"
							src="/static/images/RB3.jpg"
						/>
						<img
							onClick={() => {
								toggleRmvBgDiv();
								document.getElementById("outputImage").src = "/static/images/RB4.jpg";
								document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
								setRemovedBGData(RBSD4);
							}}
							alt="use case 4"
							loading="lazy"
							width="130"
							height="130"
							decoding="async"
							data-nimg="1"
							className="useCase object-cover rounded-md cursor-pointer hover:opacity-50 w-[130px] h-[130px]"
							src="/static/images/RB4.jpg"
						/>
					</div>
				</div>
			</section>

			{/* Output Section */}
			<section className="relative flex flex-col md:flex-row max-w-[1200px] lg:w-full sm:w-[calc(100%-6rem)] w-[calc(100%-4rem)] h-0 p-0 overflow-hidden lg:mx-auto sm:mx-12 mx-8 md:gap-10 gap-5 justify-center items-start my-0 bg-dark-primary rounded-3xl transition-all duration-500" id="removedBackgroundImage">
				<div
					className="absolute top-3 right-3 text-white bg-black z-10 bg-opacity-80 rounded-full p-1 cursor-pointer hover:opacity-70"
					onClick={() => {
						const rmvBgDiv = document.getElementById("removedBackgroundImage");
						rmvBgDiv.classList.remove("h-max", "md:p-5", "my-12", "p-3", "py-4");
						rmvBgDiv.classList.add("h-0", "p-0", "my-0", "overflow-hidden");
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" aria-hidden="true" width="28" height="28">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</div>
				<div id="mainImageContainer" className="max-w-[400px] w-full h-full relative flex justify-center items-center rounded-xl overflow-hidden">
					<img id="outputImage" src="" className="max-w-[400px] w-full h-full " alt="" />
					<button
						className="px-4 cursor-pointer py-2 bg-secondary text-white rounded-lg flex items-center justify-center gap-2 font-semibold absolute bottom-2 right-2"
						onClick={async () => {
							const imgSrc = document.querySelector("#outputImage").src;
							const image = await fetch(imgSrc);

							const imageBlog = await image.blob();
							const imageURL = URL.createObjectURL(imageBlog);
							const link = document.createElement("a");
							link.href = imageURL;
							link.download = "image";
							document.body.appendChild(link);
							link.click();
							document.body.removeChild(link);
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
							<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
							<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
						</svg>
						Download
					</button>
				</div>

				<Details removedBGData={removedBGData} />
			</section>

			<Tools />
		</div>
	);
};

export default HomePage;
