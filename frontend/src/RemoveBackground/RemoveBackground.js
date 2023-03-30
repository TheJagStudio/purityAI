import React, { useState, useRef } from "react";

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
import { RBSD1, RBSD2, RBSD3, RBSD4 } from "../Variables/Variables";

const RemoveBackground = () => {
	const [clipWidth, setClipWidth] = useState(100);
	const [useCaseInputValue, setUseCaseInputValue] = useState([50, 50, 50, 50]);
	const [useCaseHilight, setUseCaseHighlight] = useState(0);
	const [removedBGData, setRemovedBGData] = useState([]);
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
			setRemovedBGData([]);
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
							<path
								d="M24.9854 30.0146L21.7521 33.2479C22.7872 34.9922 23.1506 37.0541 22.7743 39.0472C22.3979 41.0403 21.3075 42.8277 19.7075 44.0743C18.1075 45.3209 16.1078 45.9413 14.0832 45.819C12.0586 45.6967 10.1481 44.8402 8.7098 43.41C7.27152 41.9798 6.40422 40.0742 6.27047 38.0503C6.13672 36.0264 6.7457 34.0232 7.98327 32.4162C9.22084 30.8092 11.002 29.7087 12.9929 29.3211C14.9838 28.9334 17.0478 29.2852 18.7979 30.3104L22.0375 27.0688L15.5292 20.5583C14.9433 19.9723 14.6142 19.1776 14.6142 18.349C14.6142 17.5203 14.9433 16.7256 15.5292 16.1396L16.2667 15.4021L24.9854 24.1208L33.7125 15.3938L34.4479 16.1313C35.0331 16.7172 35.3618 17.5115 35.3618 18.3396C35.3618 19.1677 35.0331 19.962 34.4479 20.5479L27.9312 27.0688L31.1833 30.3188C32.9305 29.2886 34.9935 28.931 36.9855 29.313C38.9775 29.695 40.7618 30.7904 42.0039 32.3939C43.246 33.9974 43.8607 35.9989 43.7326 38.0232C43.6046 40.0474 42.7427 41.9555 41.3085 43.3897C39.8742 44.824 37.9662 45.6859 35.9419 45.8139C33.9176 45.9419 31.9162 45.3273 30.3127 44.0851C28.7092 42.843 27.6138 41.0588 27.2317 39.0667C26.8497 37.0747 27.2073 35.0118 28.2375 33.2646L24.9854 30.0146V30.0146ZM39.5833 27.0833V10.4167H10.4167V27.0833H6.25V8.33333C6.25 7.7808 6.46949 7.25089 6.86019 6.86019C7.25089 6.46949 7.7808 6.25 8.33333 6.25H41.6667C42.2192 6.25 42.7491 6.46949 43.1398 6.86019C43.5305 7.25089 43.75 7.7808 43.75 8.33333V27.0833H39.5833ZM14.5833 41.6667C15.6884 41.6667 16.7482 41.2277 17.5296 40.4463C18.311 39.6649 18.75 38.6051 18.75 37.5C18.75 36.3949 18.311 35.3351 17.5296 34.5537C16.7482 33.7723 15.6884 33.3333 14.5833 33.3333C13.4783 33.3333 12.4185 33.7723 11.6371 34.5537C10.8557 35.3351 10.4167 36.3949 10.4167 37.5C10.4167 38.6051 10.8557 39.6649 11.6371 40.4463C12.4185 41.2277 13.4783 41.6667 14.5833 41.6667V41.6667ZM35.4167 41.6667C36.5217 41.6667 37.5815 41.2277 38.3629 40.4463C39.1443 39.6649 39.5833 38.6051 39.5833 37.5C39.5833 36.3949 39.1443 35.3351 38.3629 34.5537C37.5815 33.7723 36.5217 33.3333 35.4167 33.3333C34.3116 33.3333 33.2518 33.7723 32.4704 34.5537C31.689 35.3351 31.25 36.3949 31.25 37.5C31.25 38.6051 31.689 39.6649 32.4704 40.4463C33.2518 41.2277 34.3116 41.6667 35.4167 41.6667V41.6667Z"
								fill="currentcolor"
							></path>
						</svg>
					}
					func="Remove background"
					funcDesc="Remove background online on your fingertips at a click"
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
									document.getElementById("inputImage").src = "/static/images/RB1.jpg";
									document.getElementById("outputImage").src = "/static/images/RB1Trans.png";
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
									document.getElementById("mainImageContainer").classList.add("checker");
									document.getElementById("inputImage").src = "/static/images/RB2.jpg";
									document.getElementById("outputImage").src = "/static/images/RB2Trans.png";
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
									document.getElementById("mainImageContainer").classList.add("checker");
									document.getElementById("inputImage").src = "/static/images/RB3.jpg";
									document.getElementById("outputImage").src = "/static/images/RB3Trans.png";
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
									document.getElementById("mainImageContainer").classList.add("checker");
									document.getElementById("inputImage").src = "/static/images/RB4.jpg";
									document.getElementById("outputImage").src = "/static/images/RB4Trans.png";
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
						<img id="inputImage" src="" className="max-w-[400px] w-full h-auto" alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth + `% 0px, ` + clipWidth + `% 100%, 0px 100%)` }} />
						<img id="outputImage" src="" className="absolute max-w-[400px] w-full h-auto " alt="" />
						<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={changeWidth} value={clipWidth} min={0} max={100} step={0.001} />
						<button
							className="px-4 cursor-pointer py-2 bg-secondary text-white rounded-lg flex items-center justify-center gap-2 font-semibold absolute bottom-2 right-2"
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

				<Integration APItitle="Background Remove" iframeID1="nR1crEmuvTjK1P6MTaW3" iframeID2="yyJUTyvkDaEdnCbVQfcQ" iframeID3="0Oj4jEiamdFENCNeDK7s" iframeID4="GYPmgjOhmBOqHcMWcalR" iframeID5="07HXiez8ITQa6qZ4jWa8" height1="150px" height2="425px" height3="370px" height4="480px" height5="280px" />
				<Tools />
			</section>
		</>
	);
};

export default RemoveBackground;
