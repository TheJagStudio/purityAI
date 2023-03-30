import React, { useState, useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Components
import FunctionalityHeading from "../Components/FunctionalityHeading/FunctionalityHeading";

const Reimagine = () => {
	const funcSVG = (
		<svg width="1.875rem" height="1.875rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M15.195 8.33334L15.5328 9.06703C15.7578 9.55574 16.1089 9.98524 16.555 10.3173C16.8144 10.5104 17.1012 10.6671 17.4063 10.7835V9.53572L22 12.1012L17.4063 14.6667V13.037C16.6083 12.8634 15.8571 12.5334 15.2037 12.0671C14.7103 11.7149 14.2831 11.2924 13.9367 10.8172C13.9367 10.8172 13.5824 10.3173 13.3462 9.83029C13.1099 9.34326 12.6783 8.33334 12.6783 8.33334L12.3405 7.59964C12.0731 7.01866 11.7864 6.66367 11.5 6.38462C11 5.89744 10.5 5.5 9.5 5.5H5V13.3026L9 9.40513L18.899 19.0513H19V15.2851L21 14.1282V20.0256C21 20.5635 20.552 21 20 21H4C3.448 21 3 20.5635 3 20.0256V4.4359C3 3.89805 3.448 3.46154 4 3.46154H9C10.8608 3.46154 11.6094 3.62969 12.7 4.4359C13.3102 4.88695 13.5132 5.26885 13.9365 5.84951C14.2829 5.37411 14.7103 4.95153 15.2038 4.59934C15.8572 4.13312 16.6084 3.80324 17.4063 3.62969V2L22 4.56548L17.4063 7.13095V5.88315C17.1012 5.99953 16.8144 6.15624 16.555 6.34935C16.1089 6.68143 15.7578 7.11088 15.5328 7.59959L15.195 8.33334Z"
				fill="currentcolor"
			></path>
		</svg>
	);
	const [clipWidth, setClipWidth] = useState(100);
	const [useCaseInputValue, setUseCaseInputValue] = useState([50, 50, 50, 50]);
	const [useCaseHilight, setUseCaseHighlight] = useState(0);
	const [activeTab, setActiveTab] = useState("tab1");
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

	function reimage() {
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
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	}

	const handleFileChange = () => {
		try {
			const rmvBgDiv = document.getElementById("reimageImage");
			const file = document.getElementById("imageInput").files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				let image = document.getElementById("inputImage");
				image.src = reader.result;
				rmvBgDiv.scrollIntoView({ behavior: "smooth", block: "center" });
				reimage();
			};
			toggleRmvBgDiv();
		} catch (err) {
			console.log(err);
		}
	};

	const toggleRmvBgDiv = () => {
		const rmvBgDiv = document.getElementById("reimageImage");
		rmvBgDiv.classList.add("h-max", "md:p-5", "my-12", "p-3", "py-4");
		rmvBgDiv.classList.remove("h-0", "p-0", "my-0", "overflow-hidden");
	};
	return (
		<>
			<section className="min-h-screen pb-10">
				<FunctionalityHeading svg={funcSVG} func="Stable diffusion reimagine" funcDesc="Create multiple variations from a single image." funcIMG="/static/images/reimagine.jpg" />
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
									document.getElementById("inputImage").src = "/static/images/RB1.jpg";
									document.getElementById("outputImage").src = "/static/images/RB1Trans.png";
									document.getElementById("reimageImage").scrollIntoView({ behavior: "smooth", block: "center" });
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
									document.getElementById("reimageImage").scrollIntoView({ behavior: "smooth", block: "center" });
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
									document.getElementById("reimageImage").scrollIntoView({ behavior: "smooth", block: "center" });
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
									document.getElementById("reimageImage").scrollIntoView({ behavior: "smooth", block: "center" });
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
				<section className="relative flex flex-col md:flex-row max-w-[1200px] lg:w-full sm:w-[calc(100%-6rem)] w-[calc(100%-4rem)] h-0 p-0 overflow-hidden lg:mx-auto sm:mx-12 mx-8 md:gap-10 gap-5 justify-center items-center my-0 bg-dark-primary rounded-3xl transition-all duration-500" id="reimageImage">
					<div
						className="absolute top-3 right-3 text-white bg-black z-10 bg-opacity-80 rounded-full p-1 cursor-pointer hover:opacity-70"
						onClick={() => {
							const rmvBgDiv = document.getElementById("reimageImage");
							rmvBgDiv.classList.remove("h-max", "md:p-5", "my-12", "p-3", "py-4");
							rmvBgDiv.classList.add("h-0", "p-0", "my-0", "overflow-hidden");
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" aria-hidden="true" width="28" height="28">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
						</svg>
					</div>
					<div id="mainImageContainer" className="max-w-[400px] w-full h-full relative flex justify-center items-center rounded-xl overflow-hidden">
						<img id="inputImage" src="" className="max-w-[400px] w-full h-auto" alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth + `% 0px, ` + clipWidth + `% 100%, 0px 100%)` }} />
						<img id="outputImage" src="" className="absolute max-w-[400px] w-full h-auto " alt="" />
						<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeWidth} value={clipWidth} min={0} max={100} step={0.001} />
						<button
							className="px-4 cursor-pointer py-2 bg-secondary text-primary rounded-lg flex items-center justify-center gap-2 font-semibold absolute bottom-2 right-2"
							onClick={async () => {
								const imgSrc = document.querySelector("#outputImage").src;
								const image = await fetch(imgSrc);

								const imageBlog = await image.blob();
								const imageURL = URL.createObjectURL(imageBlog);
								const link = document.createElement("a");
								link.href = imageURL;
								link.download = "transparent-image";
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

					<div className="w-full h-full md:mb-0 mb-3 flex flex-col md:gap-4 gap-2 text-white justify-center items-center">
						<h1>Hello world</h1>
					</div>
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
			</section>
		</>
	);
};

export default Reimagine;
