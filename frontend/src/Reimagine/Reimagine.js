import React, { useState, useRef } from "react";
import JSZip from "jszip";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Components
import FunctionalityHeading from "../Components/FunctionalityHeading/FunctionalityHeading";
import Details from "../Components/Details/Details";
import Integration from "../Components/Integration/Integration";
import Tools from "../Components/Tools/Tools";

const Reimagine = () => {
	document.title = "PurityAI | Reimagine";

	const funcSVG = (
		<svg width="1.875rem" height="1.875rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				d="M15.195 8.33334L15.5328 9.06703C15.7578 9.55574 16.1089 9.98524 16.555 10.3173C16.8144 10.5104 17.1012 10.6671 17.4063 10.7835V9.53572L22 12.1012L17.4063 14.6667V13.037C16.6083 12.8634 15.8571 12.5334 15.2037 12.0671C14.7103 11.7149 14.2831 11.2924 13.9367 10.8172C13.9367 10.8172 13.5824 10.3173 13.3462 9.83029C13.1099 9.34326 12.6783 8.33334 12.6783 8.33334L12.3405 7.59964C12.0731 7.01866 11.7864 6.66367 11.5 6.38462C11 5.89744 10.5 5.5 9.5 5.5H5V13.3026L9 9.40513L18.899 19.0513H19V15.2851L21 14.1282V20.0256C21 20.5635 20.552 21 20 21H4C3.448 21 3 20.5635 3 20.0256V4.4359C3 3.89805 3.448 3.46154 4 3.46154H9C10.8608 3.46154 11.6094 3.62969 12.7 4.4359C13.3102 4.88695 13.5132 5.26885 13.9365 5.84951C14.2829 5.37411 14.7103 4.95153 15.2038 4.59934C15.8572 4.13312 16.6084 3.80324 17.4063 3.62969V2L22 4.56548L17.4063 7.13095V5.88315C17.1012 5.99953 16.8144 6.15624 16.555 6.34935C16.1089 6.68143 15.7578 7.11088 15.5328 7.59959L15.195 8.33334Z"
				fill="currentcolor"
			></path>
		</svg>
	);

	const [activeImage, setActiveImage] = useState("/static/images/RB1.jpg");
	const [clipWidth, setClipWidth] = useState(100);
	const [useCaseInputValue, setUseCaseInputValue] = useState([50, 50, 50, 50]);
	const [useCaseHilight, setUseCaseHighlight] = useState(0);
	const [images, setImages] = useState([]);
	const [removedBGData, setRemovedBGData] = useState([]);
	const [useCase1, setUseCase1] = useState("https://static.clipdrop.co/web/image-variants/use-cases/1.jpg");
	const [useCase2, setUseCase2] = useState("https://static.clipdrop.co/web/image-variants/use-cases/2.jpg");
	const [useCase3, setUseCase3] = useState("https://static.clipdrop.co/web/image-variants/use-cases/3.jpg");
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
		setClipWidth(100);
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

		fetch(process.env.REACT_APP_SERVER + "/api/reimagine/", requestOptions)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.blob();
			})
			.then((blob) => {
				const fileReader = new FileReader();
				return new Promise((resolve, reject) => {
					fileReader.onload = () => resolve(fileReader.result);
					fileReader.onerror = () => reject(fileReader.error);
					fileReader.readAsArrayBuffer(blob);
				});
			})
			.then((arrayBuffer) => {
				const zip = new JSZip();
				return zip.loadAsync(arrayBuffer);
			})
			.then((zip) => {
				const imageNames = Object.keys(zip.files).filter((name) => name.match(/\.(jpg|jpeg|png)$/i));
				const promises = imageNames.map((name) => {
					return zip.files[name].async("blob").then((src) => ({ name, src }));
				});
				return Promise.all(promises);
			})
			.then((extractedImages) => {
				document.getElementById("inputImage").classList.remove("animate-pulse");
				setImages(extractedImages);
			})
			.catch((error) => {
				console.error(error);
			});

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
				<FunctionalityHeading svg={funcSVG} func="Reimagine" funcDesc="Create multiple variations from a single image." funcIMG="/static/images/reimagine.jpg" />

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
				<section className="relative flex flex-col md:flex-row max-w-[1200px] lg:w-full sm:w-[calc(100%-6rem)] w-[calc(100%-4rem)] h-0 p-0 overflow-hidden lg:mx-auto sm:mx-12 mx-8 md:gap-10 gap-5 justify-center my-0 bg-dark-primary rounded-3xl transition-all duration-500" id="reimageImage">
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
						<div className="max-w-[500px] w-full h-full relative flex justify-center items-center gap-3 rounded-xl overflow-hidden">
							<div className="relative max-w-[400px]">
								<img id="inputImage" src="" className="max-w-[400px] w-full h-full rounded-lg" alt="" />
								<svg
									onClick={async () => {
										const imgSrc = document.querySelector("#inputImage").src;
										const image = await fetch(imgSrc);

										const imageBlog = await image.blob();
										//set the image to inputImage file
										let newFile = new File([imageBlog], "image.jpg", { type: "image/jpeg" });
										let newFileList = new DataTransfer();
										newFileList.items.add(newFile);
										document.getElementById("imageInput").files = newFileList.files;
										reimage();
									}}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="#ffffff"
									aria-hidden="true"
									className="absolute top-1 right-1 bg-primary cursor-pointer p-[3px] rounded-full overflow-hidden active:-rotate-180 transition-all duration-300"
									width="32"
									height="32"
								>
									<path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
								</svg>
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
							<div className="flex flex-col items-center gap-y-3">
								{images.map((image, index) => (
									<div className="relative" key={index}>
										<img
											src={URL.createObjectURL(image.src)}
											className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (activeImage === image.src ? " border-secondary " : " border-dark-primary ")}
											alt=""
											onClick={() => {
												setActiveImage(image.src);
												document.getElementById("inputImage").src = URL.createObjectURL(image.src);
											}}
										/>
									</div>
								))}
							</div>
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
										Creative Agencies
									</button>
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(1);
											setUseCaseHighlight(1);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 1 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Website Illustration
									</button>
									<button
										onClick={() => {
											swiperRef.current.swiper.slideTo(2);
											setUseCaseHighlight(2);
										}}
										className={"py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full  border-2 transition-colors " + (useCaseHilight === 2 ? "bg-white text-black" : "bg-transparent text-white") + "  text-left border-opacity-100 border-white hover:bg-white hover:text-black"}
									>
										Concept Art
									</button>
								</div>
							</div>
							<Swiper ref={swiperRef} spaceBetween={50} slidesPerView={1} className="flex-1 w-full overflow-hidden flex flex-col flex-wrap">
								<SwiperSlide>
									<div className="w-full h-full transition-transform duration-700" style={{ transform: `translateX(0)` }}>
										<div className="md:min-w-[350px] flex flex-col justify-center">
											<p className="text-[13px] font-semibold text-white text-center my-8 hidden sm:block">Create a large number of variation for your customers.</p>
											<div className="flex gap-4 items-center justify-center">
												<div className="max-w-[400px] w-full h-[450px] relative flex justify-center items-center rounded-xl overflow-hidden">
													<img src={useCase1} alt="" />
												</div>
												<div className="flex flex-col items-center gap-y-4">
													<img
														src="https://static.clipdrop.co/web/image-variants/use-cases/1.jpg"
														alt=""
														onClick={() => {
															setUseCase1("https://static.clipdrop.co/web/image-variants/use-cases/1.jpg");
														}}
														className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase1 === "https://static.clipdrop.co/web/image-variants/use-cases/1.jpg" ? " border-secondary " : " border-primary ")}
													/>
													<img
														src="https://static.clipdrop.co/web/image-variants/use-cases/1-1.jpg"
														alt=""
														onClick={() => {
															setUseCase1("https://static.clipdrop.co/web/image-variants/use-cases/1-1.jpg");
														}}
														className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase1 === "https://static.clipdrop.co/web/image-variants/use-cases/1-1.jpg" ? " border-secondary " : " border-primary ")}
													/>
													<img
														src="https://static.clipdrop.co/web/image-variants/use-cases/1-3.jpg"
														alt=""
														onClick={() => {
															setUseCase1("https://static.clipdrop.co/web/image-variants/use-cases/1-3.jpg");
														}}
														className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase1 === "https://static.clipdrop.co/web/image-variants/use-cases/1-3.jpg" ? " border-secondary " : " border-primary ")}
													/>
													<img
														src="https://static.clipdrop.co/web/image-variants/use-cases/1-2.jpg"
														alt=""
														onClick={() => {
															setUseCase1("https://static.clipdrop.co/web/image-variants/use-cases/1-2.jpg");
														}}
														className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase1 === "https://static.clipdrop.co/web/image-variants/use-cases/1-2.jpg" ? " border-secondary " : " border-primary ")}
													/>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="w-full h-full transition-transform duration-700" style={{ transform: `translateX(0)` }}>
										<div className="md:min-w-[350px] flex flex-col justify-center">
											<p className="text-[13px] font-semibold text-white text-center my-8">Choose the perfect image to match your website layout.</p>
											<div className="flex gap-4 justify-around">
												<div className="checkerboard rounded-xl overflow-hidden">
													<div className="relative h-full rounded-xl overflow-hidden">
														<div className="checker max-w-[550px] w-full relative flex justify-center items-center rounded-xl overflow-hidden">
															<img src={useCase2} alt="" />
														</div>
														<div className="mt-4 flex items-center justify-between">
															<img
																src="https://static.clipdrop.co/web/image-variants/use-cases/2.jpg"
																alt=""
																onClick={() => {
																	setUseCase2("https://static.clipdrop.co/web/image-variants/use-cases/2.jpg");
																}}
																className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase2 === "https://static.clipdrop.co/web/image-variants/use-cases/2.jpg" ? " border-secondary " : " border-primary ")}
															/>
															<img
																src="https://static.clipdrop.co/web/image-variants/use-cases/2-1.jpg"
																alt=""
																onClick={() => {
																	setUseCase2("https://static.clipdrop.co/web/image-variants/use-cases/2-1.jpg");
																}}
																className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase2 === "https://static.clipdrop.co/web/image-variants/use-cases/2-1.jpg" ? " border-secondary " : " border-primary ")}
															/>
															<img
																src="https://static.clipdrop.co/web/image-variants/use-cases/2-2.jpg"
																alt=""
																onClick={() => {
																	setUseCase2("https://static.clipdrop.co/web/image-variants/use-cases/2-2.jpg");
																}}
																className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase2 === "https://static.clipdrop.co/web/image-variants/use-cases/2-2.jpg" ? " border-secondary " : " border-primary ")}
															/>
															<img
																src="https://static.clipdrop.co/web/image-variants/use-cases/2-3.jpg"
																alt=""
																onClick={() => {
																	setUseCase2("https://static.clipdrop.co/web/image-variants/use-cases/2-3.jpg");
																}}
																className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase2 === "https://static.clipdrop.co/web/image-variants/use-cases/2-3.jpg" ? " border-secondary " : " border-primary ")}
															/>
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
											<p className="text-[13px] font-semibold text-white text-center my-8">Make Amazing concept alternative in one click.</p>
											<div className="flex gap-4 justify-around">
												<div className="checkerboard rounded-xl overflow-hidden">
													<div className="relative h-full rounded-xl overflow-hidden">
														<div className="checker max-w-[550px] w-full relative flex justify-center items-center rounded-xl overflow-hidden">
															<img src={useCase3} alt="" />
														</div>
														<div className="mt-4 flex items-center justify-between">
															<img
																src="https://static.clipdrop.co/web/image-variants/use-cases/3.jpg"
																alt=""
																onClick={() => {
																	setUseCase3("https://static.clipdrop.co/web/image-variants/use-cases/3.jpg");
																}}
																className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase3 === "https://static.clipdrop.co/web/image-variants/use-cases/3.jpg" ? " border-secondary " : " border-primary ")}
															/>
															<img
																src="https://static.clipdrop.co/web/image-variants/use-cases/3-1.jpg"
																alt=""
																onClick={() => {
																	setUseCase3("https://static.clipdrop.co/web/image-variants/use-cases/3-1.jpg");
																}}
																className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase3 === "https://static.clipdrop.co/web/image-variants/use-cases/3-1.jpg" ? " border-secondary " : " border-primary ")}
															/>
															<img
																src="https://static.clipdrop.co/web/image-variants/use-cases/3-2.jpg"
																alt=""
																onClick={() => {
																	setUseCase3("https://static.clipdrop.co/web/image-variants/use-cases/3-2.jpg");
																}}
																className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase3 === "https://static.clipdrop.co/web/image-variants/use-cases/3-2.jpg" ? " border-secondary " : " border-primary ")}
															/>
															<img
																src="https://static.clipdrop.co/web/image-variants/use-cases/3-3.jpg"
																alt=""
																onClick={() => {
																	setUseCase3("https://static.clipdrop.co/web/image-variants/use-cases/3-3.jpg");
																}}
																className={"max-w-[100px] max-h-[100px] min-w-[100px] min-h-[100px] overflow-hidden rounded-lg object-cover w-full h-full border-2 cursor-pointer hover:opacity-80 " + (useCase3 === "https://static.clipdrop.co/web/image-variants/use-cases/3-3.jpg" ? " border-secondary " : " border-primary ")}
															/>
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

				<Integration APItitle="Reimagine" iframeID1="" iframeID2="" iframeID3="" iframeID4="" iframeID5="" height1="" height2="" height3="" height4="" height5="" />

				<Tools />
			</section>
		</>
	);
};

export default Reimagine;
