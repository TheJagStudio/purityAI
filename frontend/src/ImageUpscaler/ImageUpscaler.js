import React, { useState, useRef } from "react";
import { ReactHtmlParser } from "html-react-parser";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Components
import FunctionalityHeading from "../Components/FunctionalityHeading/FunctionalityHeading";
import Details from "../Components/Details/Details";
import Tools from "../Components/Tools/Tools";
import Integration from "../Components/Integration/Integration";

// Variables
import { UISD1, UISD2, UISD3, UISD4 } from "../Variables/Variables";

const ImageUpscaler = () => {
	document.title = "PurityAI | Image Upscalar";

	const funcSVG = (
		<svg width="1.875rem" height="1.875rem" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.5001 12.5H37.5001V37.5H12.5001V12.5ZM12.5001 4.16669H16.6667V10.4167H12.5001V4.16669ZM12.5001 39.5834H16.6667V45.8334H12.5001V39.5834ZM4.16675 12.5H10.4167V16.6667H4.16675V12.5ZM4.16675 33.3334H10.4167V37.5H4.16675V33.3334ZM39.5834 12.5H45.8334V16.6667H39.5834V12.5ZM39.5834 33.3334H45.8334V37.5H39.5834V33.3334ZM33.3334 4.16669H37.5001V10.4167H33.3334V4.16669ZM33.3334 39.5834H37.5001V45.8334H33.3334V39.5834Z" fill="currentcolor"></path>
		</svg>
	);

	const [clipWidth, setClipWidth] = useState(100);
	const [useCaseInputValue, setUseCaseInputValue] = useState([50, 50, 50, 50]);
	const [useCaseHilight, setUseCaseHighlight] = useState(0);
	const [removedBGData, setRemovedBGData] = useState([]);
	const [upscaleMultiplier, setUpscaleMultiplier] = useState(2);

	let swiperRef = useRef();

	const changeWidth = (event) => {
		setClipWidth(event.target.value);
	};

	const changeUseCase1 = (e) => {
		setUseCaseInputValue([e.target.value, useCaseInputValue[1], useCaseInputValue[2], useCaseInputValue[3]]);
	};
	const changeUseCase2 = (e) => {
		setUseCaseInputValue([useCaseInputValue[0], e.target.value, useCaseInputValue[2], useCaseInputValue[3]]);
	};
	const changeUseCase3 = (e) => {
		setUseCaseInputValue([useCaseInputValue[0], useCaseInputValue[1], e.target.value, useCaseInputValue[3]]);
	};
	const changeUseCase4 = (e) => {
		setUseCaseInputValue([useCaseInputValue[0], useCaseInputValue[1], useCaseInputValue[2], e.target.value]);
	};

	function removeBackground() {
		var formdata = new FormData();
		formdata.append("image", document.getElementById("imageInput").files[0]);
		formdata.append("upscale", upscaleMultiplier);

		var requestOptions = {
			method: "POST",
			body: formdata,
			redirect: "follow",
		};
		document.getElementById("inputImage").classList.add("animate-pulse");
		document.getElementById("outputImage").classList.add("hidden");
		setClipWidth(100);
		fetch(process.env.REACT_APP_SERVER + "/api/imageUpscaler/", requestOptions)
			.then((response) => response.blob())
			.then((result) => {
				let image = document.getElementById("outputImage");
				image.src = URL.createObjectURL(result);
				document.getElementById("inputImage").classList.remove("animate-pulse");
				document.getElementById("outputImage").classList.remove("hidden");
				setClipWidth(50);
			})
			.catch((error) => console.log("error", error));
		var requestOptions = {
			method: "POST",
			body: formdata,
			redirect: "follow",
		};

		fetch(process.env.REACT_APP_SERVER + "/api/visionAI/", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setRemovedBGData(result["data"]);
				console.log(removedBGData);
			})
			.catch((error) => console.log("error", error));
	}

	const handleFileChange = () => {
		try {
			setRemovedBGData([]);
			const rmvBgDiv = document.getElementById("removedBackgroundImage");
			const file = document.getElementById("imageInput").files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				console.log(reader.result);
				const inputDiv = document.getElementById("input-div");
				if (document.querySelector("#tempImg") != null) {
					document.querySelector("#tempImg").remove();
				}
				// Add Image
				const img = document.createElement("img");
				img.src = reader.result;
				img.alt = "Image";
				img.id = "tempImg";
				img.classList.add("max-w-36", "max-h-36", "rounded-xl", "m-3");
				inputDiv.append(img);
				document.getElementById("inputLabel").classList.add("hidden");
				document.getElementById("upscaleBtn").classList.add("cursor-pointer");
				document.getElementById("upscaleBtn").classList.remove("cursor-not-allowed", "opacity-50", "disabled");
			};
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
		<>
			<section className="min-h-screen pb-10">
				<FunctionalityHeading svg={funcSVG} func="Image upscaler" funcDesc="Upscale, denoise and enhance your images in seconds" funcIMG="/static/images/image-upscaler.jpg" />

				{/* Input Section */}
				<section className="flex flex-1 flex-col sm:flex-row w-full gap-10 justify-center items-center sm:items-start sm:my-12 my-8 sm:px-12 px-8 overflow-hidden">
					<div className="max-w-[850px] w-full flex-1 flex flex-col gap-5 items-center">
						<div className="rounded-t-3xl overflow-hidden border-4 border-white border-dashed w-full">
							<div className="flex flex-col md:flex-row md:gap-0 gap-2 justify-center items-center text-center w-full h-fit overflow-hidden bg-dark-primary hover:bg-transparent transition-colors duration-200 relative" id="input-div">
								<label id="inputLabel" htmlFor="imageInput" className="md:text-lg font-semibold text-white text-center cursor-pointer opacity-100 px-7 py-7 sm:py-14 select-none w-full bg-transparent">
									Click, paste or drop image here to start.
								</label>
								<input onChangeCapture={handleFileChange} type="file" id="imageInput" name="imageInput" className="absolute top-0 bottom-0 left-0 right-0 opacity-0" accept="image/png,image/jpeg,image/jpg" />
							</div>
						</div>
						<div className="flex gap-4 flex-col sm:flex-row w-full rounded-b-3xl bg-dark-primary p-4 px-5 -mt-5">
							<div className="sm:flex-1 flex items-center justify-start">
								<div className="flex bg-primary md:h-9 h-8 w-[100px] rounded-full relative">
									<div className="h-full absolute rounded-full bg-gray-100 drop-shadow-[0_0_4px_rgba(0,0,0,0.10)] transition-all duration-300 w-[50px] translate-x-[-3px] translate-z-0" id="times"></div>
									<button
										onClick={() => {
											document.getElementById("times").style.transform = "translateX(0px)";
											document.getElementById("2X").style.color = "black";
											document.getElementById("4X").style.color = "white";
											setUpscaleMultiplier(2);
										}}
										id="2X"
										className="flex items-center justify-center absolute h-full text-sm font-semibold text-black hover:opacity-100 duration-100 opacity-100 w-[50px] left-0"
									>
										x2
									</button>
									<button
										onClick={() => {
											document.getElementById("times").style.transform = "translateX(50px)";
											document.getElementById("2X").style.color = "white";
											document.getElementById("4X").style.color = "black";
											setUpscaleMultiplier(4);
										}}
										id="4X"
										className="flex items-center justify-center absolute h-full text-sm font-semibold text-white hover:opacity-100 duration-100 opacity-100 w-[50px] left-[50px]"
									>
										x4
									</button>
								</div>
							</div>
							<div className="sm:flex-1 flex items-center justify-center sm:justify-end">
								<button
									onClick={() => {
										let image = document.getElementById("inputImage");
										image.src = document.getElementById("tempImg").src;
										const rmvBgDiv = document.getElementById("removedBackgroundImage");
										rmvBgDiv.scrollIntoView({ behavior: "smooth", block: "center" });
										removeBackground();
										toggleRmvBgDiv();
									}}
									className="py-2.5 px-5 text-sm font-semibold rounded-full bg-secondary disabled text-white cursor-not-allowed opacity-50"
									id="upscaleBtn"
								>
									Upscale
								</button>
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
									document.getElementById("inputImage").src = "/static/images/UI1.jpg";
									document.getElementById("outputImage").src = "/static/images/UI1Trans.png";
									document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
									setRemovedBGData(UISD1);
								}}
								alt="use case 1"
								loading="lazy"
								width="130"
								height="130"
								decoding="async"
								data-nimg="1"
								className="useCase object-cover rounded-md cursor-pointer hover:opacity-50 w-[130px] h-[130px]"
								src="/static/images/UI1.jpg"
							/>
							<img
								onClick={() => {
									toggleRmvBgDiv();
									document.getElementById("inputImage").src = "/static/images/UI2.jpg";
									document.getElementById("outputImage").src = "/static/images/UI2Trans.png";
									document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
									setRemovedBGData(UISD2);
								}}
								alt="use case 2"
								loading="lazy"
								width="130"
								height="130"
								decoding="async"
								data-nimg="1"
								className="useCase object-cover rounded-md cursor-pointer hover:opacity-50 w-[130px] h-[130px]"
								src="/static/images/UI2.jpg"
							/>
							<img
								onClick={() => {
									toggleRmvBgDiv();
									document.getElementById("inputImage").src = "/static/images/UI3.jpg";
									document.getElementById("outputImage").src = "/static/images/UI3Trans.png";
									document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
									setRemovedBGData(UISD3);
								}}
								alt="use case 3"
								loading="lazy"
								width="130"
								height="130"
								decoding="async"
								data-nimg="1"
								className="useCase object-cover rounded-md cursor-pointer hover:opacity-50 w-[130px] h-[130px]"
								src="/static/images/UI3.jpg"
							/>
							<img
								onClick={() => {
									toggleRmvBgDiv();
									document.getElementById("inputImage").src = "/static/images/UI4.jpg";
									document.getElementById("outputImage").src = "/static/images/UI4Trans.png";
									document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
									setRemovedBGData(UISD4);
								}}
								alt="use case 4"
								loading="lazy"
								width="130"
								height="130"
								decoding="async"
								data-nimg="1"
								className="useCase object-cover rounded-md cursor-pointer hover:opacity-50 w-[130px] h-[130px]"
								src="/static/images/UI4.jpg"
							/>
						</div>
					</div>
				</section>

				{/* Output Section */}
				<section className="relative flex flex-col md:flex-row max-w-[1200px] lg:w-full sm:w-[calc(100%-6rem)] w-[calc(100%-4rem)] h-0 p-0 overflow-hidden lg:mx-auto sm:mx-12 mx-8 md:gap-10 gap-5 justify-center my-0 bg-dark-primary rounded-3xl transition-all duration-500" id="removedBackgroundImage">
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
						<img id="outputImage" src="" className="absolute max-w-[400px] w-full h-auto " alt="" />
						<img id="inputImage" src="" className="max-w-[400px] w-full h-auto" alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth + `% 0px, ` + clipWidth + `% 100%, 0px 100%)` }} />
						<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
							<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: clipWidth + "%" }}></div>
						</div>
						<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeWidth} value={clipWidth} min={0} max={100} step={0.001} />
						<button
							className="px-4 cursor-pointer text-white py-2 bg-secondary rounded-lg flex items-center justify-center gap-2 font-semibold absolute bottom-2 right-2"
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

				{/* Use Cases Section */}
				<section id="use-cases-section" className="w-full my-12 flex flex-col items-center justify-center md:px-12 px-6">
					<div className="max-w-5xl px-2 mx-auto w-full">
						<h2 className="text-3xl md:text-3xl md:leading-[3.5rem] xl:text-[50px] font-extrabold text-white text-center mb-12">Use-cases</h2>
						<div className="flex gap-3 flex-col h-[750px] md:h-[630px]">
							<div className="flex flex-col gap-6">
								<div className="flex gap-3 flex-wrap flex-row justify-center">
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(0);
											setUseCaseHighlight(0);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 0 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white"}
									>
										Remove Compression
									</button>
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(1);
											setUseCaseHighlight(1);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 1 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Denoise
									</button>
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(2);
											setUseCaseHighlight(2);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 2 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Sharpen
									</button>
								</div>
							</div>
							<Swiper ref={swiperRef} spaceBetween={50} slidesPerView={1} className="flex-1 w-full overflow-hidden flex flex-col flex-wrap">
								<SwiperSlide>
									<div className="w-full h-full transition-transform duration-700" style={{ transform: `translateX(0)` }}>
										<div className="md:min-w-[350px] flex flex-col justify-center">
											<p className="text-[13px] font-semibold text-white text-center my-8 hidden sm:block">Represented as a small tool, PurityAI Image upscaler can improve image quality from compressed images</p>
											<div className="flex gap-4 justify-around">
												<div className="max-w-[400px] w-full h-[450px] relative flex justify-center items-center rounded-xl overflow-hidden">
													<img src="/static/images/UIUC1Trans.png" className="absolute max-w-[400px] w-full h-full object-cover" alt="" />
													<img src="/static/images/UIUC1.jpg" className="max-w-[400px] w-full h-full object-cover" alt="" style={{ clipPath: `polygon(0px 0px, ` + useCaseInputValue[0] + `% 0px, ` + useCaseInputValue[0] + `% 100%, 0px 100%)` }} />
													<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
														<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: useCaseInputValue[0] + "%" }}></div>
													</div>
													<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeUseCase1} value={useCaseInputValue[0]} min={0} max={100} step={0.001} />
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="w-full h-full transition-transform duration-700" style={{ transform: `translateX(0)` }}>
										<div className="md:min-w-[350px] flex flex-col justify-center">
											<p className="text-[13px] font-semibold text-white text-center my-8">PurityAI denoises images by raising the resolution with minimal loss of sharpness and fidelity.</p>
											<div className="flex gap-4 justify-around">
												<div className="rounded-xl overflow-hidden">
													<div className="relative h-full rounded-xl overflow-hidden">
														<div className="max-w-[400px] w-full h-full relative flex justify-center items-center rounded-xl overflow-hidden">
															<img src="/static/images/UIUC2Trans.png" className="absolute max-w-[400px] w-full h-auto " alt="" />
															<img src="/static/images/UIUC2.jpg" className="max-w-[400px] w-full h-auto" alt="" style={{ clipPath: `polygon(0px 0px, ` + useCaseInputValue[1] + `% 0px, ` + useCaseInputValue[1] + `% 100%, 0px 100%)` }} />
															<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
																<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: useCaseInputValue[1] + "%" }}></div>
															</div>
															<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeUseCase2} value={useCaseInputValue[1]} min={0} max={100} step={0.001} />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="w-full h-full transition-transform duration-700" style={{ transform: `translateX(0)` }}>
										<div className="md:min-w-[350px] flex flex-col justify-center">
											<p className="text-[13px] font-semibold text-white text-center my-8">PurityAI Image upscaler makes images, especially photos and screenshots, sharper and more crisp and less pixelated. And it's super easy to use. Just drop your image and that's it!</p>
											<div className="flex gap-4 justify-around">
												<div className="rounded-xl overflow-hidden">
													<div className="relative h-full rounded-xl overflow-hidden">
														<div className="max-w-[400px] w-full h-[450px] relative flex justify-center items-center rounded-xl overflow-hidden">
															<img src="/static/images/UIUC3Trans.png" className="absolute max-w-[400px] w-full h-full object-cover" alt="" />
															<img src="/static/images/UIUC3.jpg" className="max-w-[400px] w-full h-full object-cover" alt="" style={{ clipPath: `polygon(0px 0px, ` + useCaseInputValue[2] + `% 0px, ` + useCaseInputValue[2] + `% 100%, 0px 100%)` }} />
															<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
																<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: useCaseInputValue[2] + "%" }}></div>
															</div>
															<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeUseCase3} value={useCaseInputValue[2]} min={0} max={100} step={0.001} />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</section>

				{/* API Section */}
				<Integration APItitle="Upscale" iframeID1="obxQCypIHColgrJ1j6XZ" iframeID2="XEXqMX8LbTsTLOiP2X8L" iframeID3="KbCfzCw1EdUr011H2GuQ" iframeID4="fu2RWxUdDFeOw3JT9wBZ" iframeID5="CRsIBdiFTzphip33Xvxw" height1="150px" height2="380px" height3="430px" height4="430px" height5="300px" />
				<Tools />
			</section>
		</>
	);
};

export default ImageUpscaler;
