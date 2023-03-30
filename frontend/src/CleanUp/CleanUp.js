import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Components
import FunctionalityHeading from "../Components/FunctionalityHeading/FunctionalityHeading";
import Details from "../Components/Details/Details";
import Tools from "../Components/Tools/Tools";

const CleanUp = () => {
	const [clipWidth, setClipWidth] = useState(100);
	const [useCaseInputValue, setUseCaseInputValue] = useState([50, 50, 50, 50]);
	const [useCaseHilight, setUseCaseHighlight] = useState(0);
	const [removedBGData, setRemovedBGData] = useState([]);
	const canvasRef = useRef();
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

		var requestOptions = {
			method: "POST",
			body: formdata,
			redirect: "follow",
		};
		document.getElementById("mainImageContainer").classList.remove("checker");
		document.getElementById("inputImage").classList.add("animate-pulse");
		document.getElementById("outputImage").classList.add("hidden");
		setClipWidth(100);
		fetch(process.env.REACT_APP_SERVER + "/api/backgroundRemover/", requestOptions)
			.then((response) => response.blob())
			.then((result) => {
				document.getElementById("mainImageContainer").classList.add("checker");
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
			const rmvBgDiv = document.getElementById("removedBackgroundImage");
			const file = document.getElementById("imageInput").files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				let image = document.getElementById("inputImage");
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
		<>
			<section className="w-full min-h-screen scroll-smooth">
				<FunctionalityHeading
					svg={
						<svg width="1.875rem" height="1.875rem" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M29.1665 39.5833H43.7499V43.75H24.9999L16.6707 43.7541L3.15611 30.2395C2.76555 29.8489 2.54614 29.319 2.54614 28.7666C2.54614 28.2142 2.76555 27.6844 3.15611 27.2937L25.2499 5.19579C25.4433 5.00209 25.6731 4.84843 25.926 4.74358C26.1789 4.63874 26.45 4.58478 26.7238 4.58478C26.9976 4.58478 27.2687 4.63874 27.5216 4.74358C27.7745 4.84843 28.0043 5.00209 28.1978 5.19579L44.4019 21.4C44.7925 21.7906 45.0119 22.3204 45.0119 22.8729C45.0119 23.4253 44.7925 23.9551 44.4019 24.3458L29.1665 39.5833ZM29.929 33.05L39.9832 22.8729L26.7249 9.61454L16.6707 19.7917L29.929 33.05Z" fill="currentcolor"></path>
						</svg>
					}
					func="Cleanup"
					funcDesc="Remove object, defect, people, or text from your pictures in seconds"
					funcIMG="/static/images/remove-bg.jpg"
				/>

				{/* Input Section */}
				<section className="flex flex-1 flex-col sm:flex-row w-full gap-10 justify-center items-center sm:items-start sm:my-12 my-8 sm:px-12 px-8 overflow-hidden">
					<div className="max-w-[850px] w-full flex-1 flex flex-col gap-5 items-center">
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
									document.getElementById("mainImageContainer").classList.add("checker");
									// document.getElementById("inputImage").src = "/static/images/RB1.jpg";
									// document.getElementById("outputImage").src = "/static/images/RB1Trans.png";
									document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
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
									document.getElementById("mainImageContainer").classList.add("checker");
									document.getElementById("inputImage").src = "/static/images/RB2.jpg";
									document.getElementById("outputImage").src = "/static/images/RB2Trans.png";
									document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
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
									document.getElementById("mainImageContainer").classList.add("checker");
									document.getElementById("inputImage").src = "/static/images/RB3.jpg";
									document.getElementById("outputImage").src = "/static/images/RB3Trans.png";
									document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
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
									document.getElementById("mainImageContainer").classList.add("checker");
									document.getElementById("inputImage").src = "/static/images/RB4.jpg";
									document.getElementById("outputImage").src = "/static/images/RB4Trans.png";
									document.getElementById("removedBackgroundImage").scrollIntoView({ behavior: "smooth", block: "center" });
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
				<section className="relative flex flex-col max-w-[1200px] lg:w-full sm:w-[calc(100%-6rem)] w-[calc(100%-4rem)] h-0 p-0 overflow-hidden lg:mx-auto sm:mx-12 mx-8 md:gap-10 gap-5 justify-center items-start my-0 bg-dark-primary rounded-3xl transition-all duration-500" id="removedBackgroundImage">
					<div className="flex w-full h-full">
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
						<div className="w-max relative">
							<CanvasDraw ref={canvasRef} className="rounded-xl" id="canvasDraw" canvasWidth={900} hideGrid={true} brushColor={"#fa833e99"} catenaryColor={"#fa833e"} brushRadius={10} />
							<div
								className="w-12 h-12 bg-primary rounded-full flex items-center justify-center cursor-pointer scale-100 active:scale-125 transition-all duration-300 absolute top-3 right-4"
								onClick={() => {
									canvasRef.current.undo();
								}}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
									<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
								</svg>
							</div>
						</div>
						<div className="w-full h-full p-5 pt-10">
							<div className="flex flex-row justify-center gap-5"></div>
						</div>
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
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 0 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Product photography
									</button>
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(1);
											setUseCaseHighlight(1);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 1 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Portraits
									</button>
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(2);
											setUseCaseHighlight(2);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 2 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Cars
									</button>
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(3);
											setUseCaseHighlight(3);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 3 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Clothes
									</button>
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(4);
											setUseCaseHighlight(4);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 4 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Furniture
									</button>
								</div>
							</div>
							<Swiper ref={swiperRef} spaceBetween={50} slidesPerView={1} className="flex-1 w-full overflow-hidden flex flex-col flex-wrap">
								<SwiperSlide>
									<div className="w-full h-full transition-transform duration-700" style={{ transform: `translateX(0)` }}>
										<div className="md:min-w-[350px] flex flex-col justify-center">
											<p className="text-[13px] font-semibold text-white text-center my-8 hidden sm:block">PurityAI design tools remove unwanted background for product photography. With customized background, you can take your product photos to the next level.</p>
											<div className="flex gap-4 justify-around">
												<div className="checker max-w-[400px] w-full h-[450px] relative flex justify-center items-center rounded-xl overflow-hidden">
													<img src="/static/images/RBUC1.jpg" className="max-w-[400px] w-full h-auto" alt="" style={{ clipPath: `polygon(0px 0px, ` + useCaseInputValue[0] + `% 0px, ` + useCaseInputValue[0] + `% 100%, 0px 100%)` }} />
													<img src="/static/images/RBUC1Trans.png" className="absolute max-w-[400px] w-full h-auto " alt="" />
													<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeUseCase1} value={useCaseInputValue[0]} min={0} max={100} step={0.001} />
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="w-full h-full transition-transform duration-700" style={{ transform: `translateX(0)` }}>
										<div className="md:min-w-[350px] flex flex-col justify-center">
											<p className="text-[13px] font-semibold text-white text-center my-8">PurityAI background removal is the best algorithm to clean portraits pictures</p>
											<div className="flex gap-4 justify-around">
												<div className="checkerboard rounded-xl overflow-hidden">
													<div className="relative h-full rounded-xl overflow-hidden">
														<div className="checker max-w-[400px] w-full h-full relative flex justify-center items-center rounded-xl overflow-hidden">
															<img src="/static/images/RBUC2.jpg" className="max-w-[400px] w-full h-auto" alt="" style={{ clipPath: `polygon(0px 0px, ` + useCaseInputValue[1] + `% 0px, ` + useCaseInputValue[1] + `% 100%, 0px 100%)` }} />
															<img src="/static/images/RBUC2Trans.png" className="absolute max-w-[400px] w-full h-auto " alt="" />
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
											<p className="text-[13px] font-semibold text-white text-center my-8">PurityAI online background remover performs extremely well on cars</p>
											<div className="flex gap-4 justify-around">
												<div className="checkerboard rounded-xl overflow-hidden">
													<div className="relative h-full rounded-xl overflow-hidden">
														<div className="checker max-w-[400px] w-full h-[450px] relative flex justify-center items-center rounded-xl overflow-hidden">
															<img src="/static/images/RBUC3.jpg" className="max-w-[400px] w-full h-auto" alt="" style={{ clipPath: `polygon(0px 0px, ` + useCaseInputValue[2] + `% 0px, ` + useCaseInputValue[2] + `% 100%, 0px 100%)` }} />
															<img src="/static/images/RBUC3Trans.png" className="absolute max-w-[400px] w-full h-auto " alt="" />
															<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeUseCase3} value={useCaseInputValue[2]} min={0} max={100} step={0.001} />
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
											<p className="text-[13px] font-semibold text-white text-center my-8">The new PurityAI picture background remover tool is more powerful, accurate, and easier to use. The improved algorithm can help you remove background fast, and it's optimized for clothing.</p>
											<div className="flex gap-4 justify-around">
												<div className="checkerboard rounded-xl overflow-hidden">
													<div className="relative h-full rounded-xl overflow-hidden">
														<div className="checker max-w-[400px] w-full h-[450px] relative flex justify-center items-center rounded-xl overflow-hidden">
															<img src="/static/images/RBUC4.jpg" className="max-w-[400px] w-full h-auto object-cover object-center" alt="" style={{ clipPath: `polygon(0px 0px, ` + useCaseInputValue[3] + `% 0px, ` + useCaseInputValue[3] + `% 100%, 0px 100%)` }} />
															<img src="/static/images/RBUC4Trans.png" className="absolute max-w-[400px] w-full h-auto object-cover object-center" alt="" />
															<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeUseCase4} value={useCaseInputValue[3]} min={0} max={100} step={0.001} />
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
											<p className="text-[13px] font-semibold text-white text-center my-8">With PurityAI advanced computer vision algorithms, removing backgrounds of the most complex chair, bench, or any other furniture became easy!</p>
											<div className="flex gap-4 justify-around">
												<div className="checkerboard rounded-xl overflow-hidden">
													<div className="relative h-full rounded-xl overflow-hidden">
														<div className="checker max-w-[400px] w-full max-h-[475px] h-full relative flex justify-center items-center rounded-xl overflow-hidden">
															<img src="/static/images/RBUC5.jpg" className="max-w-[400px] w-full h-auto" alt="" style={{ clipPath: `polygon(0px 0px, ` + useCaseInputValue[3] + `% 0px, ` + useCaseInputValue[3] + `% 100%, 0px 100%)` }} />
															<img src="/static/images/RBUC5Trans.png" className="absolute max-w-[400px] w-full h-auto " alt="" />
															<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeUseCase4} value={useCaseInputValue[3]} min={0} max={100} step={0.001} />
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

				<Tools />
			</section>
		</>
	);
};

export default CleanUp;
