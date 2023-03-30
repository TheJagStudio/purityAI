import React, { useState } from "react";

// Components
import FunctionalityHeading from "../Components/FunctionalityHeading/FunctionalityHeading";
import Tools from "../Components/Tools/Tools";
import { prompts } from "../Variables/Variables";
import Details from "../Components/Details/Details";
const TextToImage = () => {
	document.title = "PurityAI | Text To Image";

	const [activeStyle, setActiveStyle] = useState(3);
	const [image, setImage] = useState("");
	const [removedBGData, setRemovedBGData] = useState([]);
	const styling = [
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/no-style-1.jpg", "No Style", 3],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/realistic_v2.jpg", "Realistic v2", 78],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/watercolor_v2.jpg", "Watercolor v2", 91],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/vfxv2_thumbnail.jpg", "VFX v2", 79],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/figure.jpeg", "Figure", 76],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/floralv2.jpg", "Flora v2", 81],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/bluesv2.jpg", "Blues v2", 88],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/spectral.jpeg", "Spectral", 63],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/photorealism.jpg", "Unrealistic v2", 89],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/anime.png", "Anime", 46],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/ink.png", "Ink", 38],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/vibrant.jpg", "Vibrant", 6],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/daydream.jpeg", "Daydream", 36],
		["https://d3j730xi5ph1dq.cloudfront.net/dream/style_thumbnail/isometric.jpeg", "Isometric", 55],
	];

	return (
		<section className="w-full min-h-screen scroll-smooth pb-10">
			<FunctionalityHeading
				svg={
					<svg width="1.875rem" height="1.875rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_28_724)">
							<path d="M8.399 3L12.799 14H10.644L9.443 11H5.353L4.154 14H2L6.399 3H8.399ZM7.399 5.885L6.152 9H8.644L7.399 5.885Z" fill="currentcolor"></path>
							<path d="M7.625 12.5V20.3932C7.625 20.6611 7.73835 20.9131 7.93181 21.0951C8.12449 21.2765 8.38154 21.3748 8.6448 21.375H20.3552L20.358 21.375C20.6201 21.373 20.8751 21.2744 21.0669 21.0939C21.2594 20.9127 21.373 20.6625 21.375 20.3959V10.6068C21.375 10.0439 20.8969 9.625 20.3552 9.625H12.6646L13.4535 11.5972H19.325V16.471L16.5157 13.8249C16.322 13.6428 16.0639 13.5442 15.7993 13.5442C15.5348 13.5442 15.2766 13.6428 15.0829 13.8249L9.675 18.9104V15.6245L8.4278 12.5H7.625Z" fill="currentcolor"></path>
							<path d="M17.8284 4.17157C17.0783 3.42143 16.0609 3 15 3H12V5H15C15.5304 5 16.0391 5.21071 16.4142 5.58579C16.7893 5.96086 17 6.46957 17 7V8.5H19V7C19 5.93913 18.5786 4.92172 17.8284 4.17157Z" fill="currentcolor"></path>
						</g>
						<defs>
							<clipPath id="clip0_28_724">
								<rect width="24" height="24" fill="white"></rect>
							</clipPath>
						</defs>
					</svg>
				}
				func="Text To Image"
				funcDesc="Generate images from text"
				funcIMG="/static/images/remove-bg.jpg"
			/>

			<section id="prompt-section" className="flex flex-1 w-full mt-12 px-3 sm:px-12">
				<div className="w-full flex flex-col gap-4 items-center">
					<div className="sticky top-28 z-10 flex flex-row items-center justify-center gap-2 w-full max-w-3xl rounded-xl p-4 focus-within:bg-transparent focus-within:ring-1 focus-within:ring-white transition-all duration-300 bg-dark-primary">
						<input name="input-prompt" id="promptInput" type="text" placeholder="Describe a new scene" className="bg-transparent text-white w-full outline-none font-medium h-6 resize-none h-[24px]" />
					</div>
					<div className="flex gap-4 ">
						<button
							onClick={() => {
								const rmvBgDiv = document.getElementById("removedBackgroundImage");
								rmvBgDiv.classList.add("h-max", "md:p-5", "my-12", "p-3", "py-4");
								rmvBgDiv.classList.remove("h-0", "p-0", "my-0", "overflow-hidden");
								document.getElementById("loader").style.display = "block";
								document.getElementById("mainImageContainer").style.display = "none";
								var formdata = new FormData();
								formdata.append("prompt", document.getElementById("promptInput").value);
								formdata.append("style", activeStyle);

								var requestOptions = {
									method: "POST",
									body: formdata,
									redirect: "follow",
								};

								fetch(process.env.REACT_APP_SERVER + "/api/imageGen/", requestOptions)
									.then((response) => response.json())
									.then((result) => {
										setImage(result["data"]);
										document.getElementById("loader").style.display = "none";
										document.getElementById("mainImageContainer").style.display = "block";
									})
									.catch((error) => console.log("error", error));
							}}
							className="py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-lg bg-white text-black hover:bg-primary-300 active:bg-primary-300 transition-opacity flex items-center gap-4"
							type="submit"
						>
							Generate
						</button>
						<button
							onClick={() => {
								setActiveStyle(styling[Math.floor(Math.random() * styling.length)][2]);
								document.getElementById("promptInput").value = prompts[Math.floor(Math.random() * prompts.length)];
							}}
							className="select-none rounded-lg px-2 h-full border-2 items-center border-white bg-transparent text-white hover:opacity-50 flex gap-1"
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_393_4989)">
									<path d="M9.35293 3L9.98843 4.71742L11.7059 5.35293L9.98843 5.98843L9.35293 7.70585L8.71742 5.98843L7 5.35293L8.71742 4.71742L9.35293 3Z" fill="currentcolor"></path>
									<path d="M9.35293 3L9.98843 4.71742L11.7059 5.35293L9.98843 5.98843L9.35293 7.70585L8.71742 5.98843L7 5.35293L8.71742 4.71742L9.35293 3Z" fill="currentcolor"></path>
									<path d="M9.35293 3L9.98843 4.71742L11.7059 5.35293L9.98843 5.98843L9.35293 7.70585L8.71742 5.98843L7 5.35293L8.71742 4.71742L9.35293 3Z" fill="currentcolor"></path>
									<path d="M6.52939 14L7.48264 16.5761L10.0588 17.5294L7.48264 18.4826L6.52939 21.0588L5.57613 18.4826L3 17.5294L5.57613 16.5761L6.52939 14Z" fill="currentcolor"></path>
									<path d="M6.52939 14L7.48264 16.5761L10.0588 17.5294L7.48264 18.4826L6.52939 21.0588L5.57613 18.4826L3 17.5294L5.57613 16.5761L6.52939 14Z" fill="currentcolor"></path>
									<path d="M6.52939 14L7.48264 16.5761L10.0588 17.5294L7.48264 18.4826L6.52939 21.0588L5.57613 18.4826L3 17.5294L5.57613 16.5761L6.52939 14Z" fill="currentcolor"></path>
									<path d="M13 20V18.2222H15.625V5.77778H13V4H20V5.77778H17.375V18.2222H20V20H13Z" fill="currentcolor"></path>
									<path d="M18.5517 15H21V9H18.5517V10.5H19.5V13.5H18.5517V15Z" fill="currentcolor"></path>
									<path d="M14.4487 10.5V9H3V15H4.90483L5.45988 13.5H4.5V10.5H14.4487Z" fill="currentcolor"></path>
									<path d="M14.4487 13.5V15H8.15373L7.59868 13.5H14.4487Z" fill="currentcolor"></path>
								</g>
								<defs>
									<clipPath id="clip0_393_4989">
										<rect width="24" height="24" fill="white"></rect>
									</clipPath>
								</defs>
							</svg>
							<p className="text-[13px] font-semibold text-white">I'm Feeling Lucky</p>
						</button>
					</div>
					<div className="mt-4 w-screen md:w-auto">
						<div className="max-w-3xl w-full flex overflow-x-scroll md:overflow-auto px-3 md:px-0 pb-4 md:pb-0 md:flex-wrap gap-4 md:justify-center">
							{styling.map((style, index) => (
								<div
									key={index}
									id={style[0]}
									className="w-24 shrink-0 flex flex-col items-center gap-1 cursor-pointer group"
									onClick={() => {
										setActiveStyle(style[2]);
									}}
								>
									<img src={style[0]} className={"h-24 w-24 rounded-3xl transition-all duration-100 group-hover:opacity-90 " + (activeStyle === style[2] ? " border-4 border-secondary " : " border-0 border-transparent ")} alt="example style" />
									<p className="text-white text-center font-medium text-xs">{style[1]}</p>
								</div>
							))}
						</div>
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
					<img id="inputImage" src={image} className="max-w-[400px] w-full h-full" alt="" />
					<button
						className="px-4 cursor-pointer py-2 bg-secondary text-white rounded-lg flex items-center justify-center gap-2 font-semibold absolute bottom-2 right-2"
						onClick={async () => {
							const imgSrc = document.querySelector("#inputImage").src;
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
				<div id="loader">
					<Details removedBGData={removedBGData} />
				</div>
			</section>

			<Tools />
		</section>
	);
};

export default TextToImage;
