import React, { useState, useRef } from "react";

import TabNavItem from "../Components/TabNavItem/TabNavItem";
import TabContent from "../Components/TabContent/TabContent";

const API = () => {
	document.title = "PurityAI | API";

	const [clipWidth, setClipWidth] = useState([100, 100, 100, 100, 100, 100]);

	const clipWidth1 = (e) => {
		setClipWidth([e.target.value, clipWidth[1], clipWidth[2], clipWidth[3], clipWidth[4], clipWidth[5]]);
	};
	const clipWidth2 = (e) => {
		setClipWidth([clipWidth[0], e.target.value, clipWidth[2], clipWidth[3], clipWidth[4], clipWidth[5]]);
	};
	const clipWidth3 = (e) => {
		setClipWidth([clipWidth[0], clipWidth[1], e.target.value, clipWidth[3], clipWidth[4], clipWidth[5]]);
	};
	const clipWidth4 = (e) => {
		setClipWidth([clipWidth[0], clipWidth[1], clipWidth[2], e.target.value, clipWidth[4], clipWidth[5]]);
	};
	const clipWidth5 = (e) => {
		setClipWidth([e.target.value, clipWidth[1], clipWidth[2], clipWidth[3], e.target.value, clipWidth[5]]);
	};
	const clipWidth6 = (e) => {
		setClipWidth([clipWidth[0], e.target.value, clipWidth[2], clipWidth[3], clipWidth[4], e.target.value]);
	};

	const APIdiv = document.getElementById("API-div");

	const [activeTab, setActiveTab] = useState("tab1");

	const [APItitle, setAPItitle] = useState(""),
		[height1, setHeight1] = useState(0),
		[height2, setHeight2] = useState(0),
		[height3, setHeight3] = useState(0),
		[height4, setHeight4] = useState(0),
		[height5, setHeight5] = useState(0),
		[iframeID1, setiframeID1] = useState(0),
		[iframeID2, setiframeID2] = useState(0),
		[iframeID3, setiframeID3] = useState(0),
		[iframeID4, setiframeID4] = useState(0),
		[iframeID5, setiframeID5] = useState(0);

	return (
		<>
			<section className="w-full min-h-screen scroll-smooth">
				<div className="sm:my-10 my-6 sm:px-12 px-8 flex flex-col items-center justify-center">
					<h1 className="xl:text-[70px] sm:text-[40px] text-3xl w-full sm:pb-3 pb-1 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent sm:leading-[2.5rem] md:leading-[3rem] xl:leading-[4.5rem] font-extrabold text-center">PurityAI APIs</h1>
					<p className="md:text-2xl text-xl text-gray-300 my-5 mb-7 font-semibold max-w-[800px] w-full text-center">Integrate state of the art image processing AI directly in your products. Request a free API key to get started.</p>
					{/* <button className="px-8 py-3.5 bg-secondary rounded-xl text-white">Get an API Key</button> */}
				</div>
				<div className="md:px-24 my-12">
					{/* <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10"> */}
					<div className="flex flex-col items-center justify-center md:gap-5">
						<div className="flex items-center justify-center md:gap-10 gap-5">
							<div className="flex flex-1 flex-col items-center justify-start bg-dark-primary rounded-lg">
								<div className="checker w-full h-[280px] relative flex justify-center items-center rounded-t-xl overflow-hidden">
									<img src="/static/images/RB4.jpg" className="w-full h-full object-cover object-center" alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth[0] + `% 0px, ` + clipWidth[0] + `% 100%, 0px 100%)` }} />
									<img src="/static/images/RB4Trans.png" className="absolute w-full h-full object-cover object-center" alt="" />
									<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
										<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: clipWidth[0] + "%" }}></div>
									</div>
									<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={clipWidth1} value={clipWidth[0]} min={0} max={100} step={0.001} />
								</div>
								<div className="px-5 pb-6 py-4 text-white">
									<h3 className="text-xl font-bold text-secondary mt-2 mb-4">Image Cleaner</h3>
									<p className="w-full h-[160px] font-light mb-2 description-truncate-5">Too many photos contain unwanted objects, text, or persons. Now, you can simply remove all these flaws with Cleanup API. Based on artificial intelligence, this API enables you to do inpainting and remove flaws from photographs, such as strangers in the background or blemishes on portraits.</p>
									<button
										onClick={() => {
											setAPItitle("Image Cleaner");
											setHeight1("150px");
											setHeight2("425px");
											setHeight3("370px");
											setHeight4("480px");
											setHeight5("280px");
											setiframeID1("nR1crEmuvTjK1P6MTaW3");
											setiframeID2("yyJUTyvkDaEdnCbVQfcQ");
											setiframeID3("0Oj4jEiamdFENCNeDK7s");
											setiframeID4("GYPmgjOhmBOqHcMWcalR");
											setiframeID5("07HXiez8ITQa6qZ4jWa8");
											APIdiv.classList.add("h-max", "my-5");
											APIdiv.classList.remove("h-0", "my-0", "overflow-hidden");
											APIdiv.scrollIntoView({ behavior: "smooth", block: "center" });
										}}
										className="w-full border border-secondary rounded-lg bg-transparent text-secondary p-2.5 text-center transition-all duration-300 hover:bg-primary"
									>
										Get API
									</button>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-center justify-start bg-dark-primary rounded-lg">
								<div className="checker w-full h-[280px] relative flex justify-center items-center rounded-t-xl overflow-hidden">
									<img src="/static/images/RB4.jpg" className="w-full h-full object-cover object-center" alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth[1] + `% 0px, ` + clipWidth[1] + `% 100%, 0px 100%)` }} />
									<img src="/static/images/RB4Trans.png" className="absolute w-full h-full object-cover object-center" alt="" />
									<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
										<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: clipWidth[1] + "%" }}></div>
									</div>
									<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={clipWidth2} value={clipWidth[1]} min={0} max={100} step={0.001} />
								</div>
								<div className="px-5 pb-6 py-4 text-white">
									<h3 className="text-xl font-bold text-secondary mt-2 mb-4">Remove Background</h3>
									<p className="w-full h-[160px] font-light mb-2">With the ClipDrop background removal API, you can quickly remove the background of any image with incredible accuracy without having to do a bunch of extra work! It's the most accurate background removal solution available on the market.</p>
									<button
										onClick={() => {
											setAPItitle("Remove Background");
											setHeight1("150px");
											setHeight2("425px");
											setHeight3("370px");
											setHeight4("480px");
											setHeight5("280px");
											setiframeID1("nR1crEmuvTjK1P6MTaW3");
											setiframeID2("yyJUTyvkDaEdnCbVQfcQ");
											setiframeID3("0Oj4jEiamdFENCNeDK7s");
											setiframeID4("GYPmgjOhmBOqHcMWcalR");
											setiframeID5("07HXiez8ITQa6qZ4jWa8");
											APIdiv.classList.add("h-max", "my-5");
											APIdiv.classList.remove("h-0", "my-0", "overflow-hidden");
											APIdiv.scrollIntoView({ behavior: "smooth", block: "center" });
										}}
										className="w-full border border-secondary rounded-lg bg-transparent text-secondary p-2.5 text-center transition-all duration-300 hover:bg-primary"
									>
										Get API
									</button>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-center justify-start bg-dark-primary rounded-lg">
								<div className="checker w-full h-[280px] relative flex justify-center items-center rounded-t-xl overflow-hidden">
									<img src="/static/images/UI3Trans.png" className="absolute w-full h-full object-cover object-center" alt="" />
									<img src="/static/images/UI3.jpg" className="w-full h-full object-cover object-center " alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth[2] + `% 0px, ` + clipWidth[2] + `% 100%, 0px 100%)` }} />
									<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
										<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: clipWidth[2] + "%" }}></div>
									</div>
									<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer z-10" onChangeCapture={clipWidth3} value={clipWidth[2]} min={0} max={100} step={0.001} />
								</div>
								<div className="px-5 pb-6 py-4 text-white">
									<h3 className="text-xl font-bold text-secondary mt-2 mb-4">Upscale Image</h3>
									<p className="w-full h-[160px] font-light mb-2">Sometimes the only thing preventing you from displaying a memorable picture is its low resolution. With the super resolution API, transform your low resolution image into an ultra sharp high resolution image. Leaning on advanced computer vision algorithms you can upscale your image x2 or x4.</p>
									<button
										onClick={() => {
											setAPItitle("Upscale Image");
											setHeight1("150px");
											setHeight2("380px");
											setHeight3("430px");
											setHeight4("430px");
											setHeight5("300px");
											setiframeID1("obxQCypIHColgrJ1j6XZ");
											setiframeID2("XEXqMX8LbTsTLOiP2X8L");
											setiframeID3("KbCfzCw1EdUr011H2GuQ");
											setiframeID4("fu2RWxUdDFeOw3JT9wBZ");
											setiframeID5("CRsIBdiFTzphip33Xvxw");
											APIdiv.classList.add("h-max", "my-5");
											APIdiv.classList.remove("h-0", "my-0", "overflow-hidden");
											APIdiv.scrollIntoView({ behavior: "smooth", block: "center" });
										}}
										className="w-full border border-secondary rounded-lg bg-transparent text-secondary p-2.5 text-center transition-all duration-300 hover:bg-primary"
									>
										Get API
									</button>
								</div>
							</div>
						</div>

						{/* API section */}
						<div id="API-div" className="w-full h-0 overflow-hidden my-0 relative transition-all duration-300">
							<div
								className="absolute top-3 right-3 text-white bg-black z-10 bg-opacity-80 rounded-full p-1 cursor-pointer hover:opacity-70"
								onClick={() => {
									const rmvAPIDiv = document.getElementById("API-div");
									rmvAPIDiv.classList.remove("h-max", "my-5");
									rmvAPIDiv.classList.add("h-0", "my-0", "overflow-hidden");
								}}
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" aria-hidden="true" width="28" height="28">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
								</svg>
							</div>
							<section id="api-section" className="w-full py-6 bg-dark-primary px-12 rounded-xl">
								<div className="max-w-5xl px-2 w-full mx-auto">
									<div className="w-full">
										<h2 className="text-3xl md:text-3xl md:leading-[3.5rem] xl:text-[50px] font-extrabold text-white mt-10 mb-10 text-center">Integrate it anywhere with PurityAI {APItitle} API</h2>
										<div className="w-full flex items-center justify-center gap-10">
											<div className="flex flex-col justify-center items-center">
												<div className="">
													<ul className="flex items-center justify-center mb-4">
														<TabNavItem isAPI={true} title={"CURL"} id={"tab1"} svg="https://static.clipdrop.co/web/apis/programming-languages/terminal.svg" activeTab={activeTab} setActiveTab={setActiveTab} />
														<TabNavItem isAPI={true} title={"Python"} id={"tab2"} svg={"https://www.vectorlogo.zone/logos/python/python-icon.svg"} activeTab={activeTab} setActiveTab={setActiveTab} />
														<TabNavItem isAPI={true} title={"Javascript"} id={"tab3"} svg="https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg" activeTab={activeTab} setActiveTab={setActiveTab} />
														<TabNavItem isAPI={true} title={"Java"} id={"tab4"} svg="https://www.vectorlogo.zone/logos/java/java-icon.svg" activeTab={activeTab} setActiveTab={setActiveTab} />
														<TabNavItem isAPI={true} title={"R"} id={"tab5"} svg="https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg" activeTab={activeTab} setActiveTab={setActiveTab} />
													</ul>
													<div className="w-full h-fit">
														<TabContent id={"tab1"} activeTab={activeTab} className="rounded-xl overflow-hidden w-full h-full">
															<iframe src={"https://carbon.now.sh/embed/" + iframeID1} style={{ width: "100%", height: height1, border: 0, transform: "scale(1)", overflow: "hidden" }}></iframe>
														</TabContent>
														<TabContent id={"tab2"} activeTab={activeTab} className="rounded-xl overflow-hidden w-full h-full">
															<iframe src={"https://carbon.now.sh/embed/" + iframeID2} style={{ width: "100%", height: height2, border: 0, transform: "scale(1)", overflow: "hidden" }}></iframe>
														</TabContent>
														<TabContent id={"tab3"} activeTab={activeTab} className="rounded-xl overflow-hidden w-full h-full">
															<iframe src={"https://carbon.now.sh/embed/" + iframeID3} style={{ width: "100%", height: height3, border: 0, transform: "scale(1)", overflow: "hidden" }}></iframe>
														</TabContent>
														<TabContent id={"tab4"} activeTab={activeTab} className="rounded-xl overflow-hidden w-full h-full">
															<iframe src={"https://carbon.now.sh/embed/" + iframeID4} style={{ width: "100%", height: height4, border: 0, transform: "scale(1)", overflow: "hidden" }}></iframe>
														</TabContent>
														<TabContent id={"tab5"} activeTab={activeTab} className="rounded-xl overflow-hidden w-full h-full">
															<iframe src={"https://carbon.now.sh/embed/" + iframeID5} style={{ width: "100%", height: height5, border: 0, transform: "scale(1)", overflow: "hidden" }}></iframe>
														</TabContent>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>

						<div className="flex items-center justify-center md:gap-10 gap-5">
							<div className="flex flex-1 flex-col items-center justify-start bg-dark-primary rounded-lg">
								<div className="checker w-full h-[280px] relative flex justify-center items-center rounded-t-xl overflow-hidden">
									<img src="/static/images/TR2Trans.png" className="absolute w-full h-full object-cover object-center" alt="" />
									<img src="/static/images/TR2.jpg" className="w-full h-full object-cover object-center" alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth[3] + `% 0px, ` + clipWidth[3] + `% 100%, 0px 100%)` }} />
									<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
										<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: clipWidth[3] + "%" }}></div>
									</div>
									<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={clipWidth4} value={clipWidth[3]} min={0} max={100} step={0.001} />
								</div>
								<div className="px-5 pb-6 py-4 text-white">
									<h3 className="text-xl font-bold text-secondary mt-2 mb-4">Remove Text</h3>
									<p className="w-full h-[160px] font-light mb-2">Our cutting-edge Text Removal API lets you effortlessly remove text from images! Say goodbye to the tedious task of manually editing images, and enjoy the ease of seamless and accurate text removal with just a few clicks.</p>
									<button
										onClick={() => {
											setAPItitle("Remove Text");
											setHeight1("130px");
											setHeight2("310px");
											setHeight3("350px");
											setHeight4("420px");
											setHeight5("260px");
											setiframeID1("EZb7cIJ44I6Er8koVocV");
											setiframeID2("dSvOqgRDuIRqqCgeykSY");
											setiframeID3("7OQE9FTX0qjhOb7WpUS7");
											setiframeID4("dGXyL6eDvGrCQvstaHOY");
											setiframeID5("OKbLva2Gq4gRP4FXgz1X");
											APIdiv.classList.add("h-max", "my-5");
											APIdiv.classList.remove("h-0", "my-0", "overflow-hidden");
											APIdiv.scrollIntoView({ behavior: "smooth", block: "center" });
										}}
										className="w-full border border-secondary rounded-lg bg-transparent text-secondary p-2.5 text-center transition-all duration-300 hover:bg-primary"
									>
										Get API
									</button>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-center justify-start bg-dark-primary rounded-lg">
								<div className="checker w-full h-[280px] relative flex justify-center items-center rounded-t-xl overflow-hidden">
									<img src="/static/images/RB4.jpg" className="w-full h-full object-cover object-center" alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth[4] + `% 0px, ` + clipWidth[4] + `% 100%, 0px 100%)` }} />
									<img src="/static/images/RB4Trans.png" className="absolute w-full h-full object-cover object-center" alt="" />
									<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
										<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: clipWidth[4] + "%" }}></div>
									</div>
									<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={clipWidth5} value={clipWidth[4]} min={0} max={100} step={0.001} />
								</div>
								<div className="px-5 pb-6 py-4 text-white">
									<h3 className="text-xl font-bold text-secondary mt-2 mb-4">Reimagine</h3>
									<p className="w-full h-[160px] font-light mb-2">With the ClipDrop background removal API, you can quickly remove the background of any image with incredible accuracy without having to do a bunch of extra work! It's the most accurate background removal solution available on the market.</p>
									<button
										onClick={() => {
											setAPItitle("Reimagine");
											setHeight1("130px");
											setHeight2("310px");
											setHeight3("350px");
											setHeight4("420px");
											setHeight5("260px");
											setiframeID1("EZb7cIJ44I6Er8koVocV");
											setiframeID2("dSvOqgRDuIRqqCgeykSY");
											setiframeID3("7OQE9FTX0qjhOb7WpUS7");
											setiframeID4("dGXyL6eDvGrCQvstaHOY");
											setiframeID5("OKbLva2Gq4gRP4FXgz1X");
											APIdiv.classList.add("h-max", "my-5");
											APIdiv.classList.remove("h-0", "my-0", "overflow-hidden");
											APIdiv.scrollIntoView({ behavior: "smooth", block: "center" });
										}}
										className="w-full border border-secondary rounded-lg bg-transparent text-secondary p-2.5 text-center transition-all duration-300 hover:bg-primary"
									>
										Get API
									</button>
								</div>
							</div>
							<div className="flex flex-1 flex-col items-center justify-start bg-dark-primary rounded-lg">
								<div className="checker w-full h-[280px] relative flex justify-center items-center rounded-t-xl overflow-hidden">
									<img src="/static/images/UI3.jpg" className="w-full h-full object-cover object-center " alt="" style={{ clipPath: `polygon(0px 0px, ` + clipWidth[5] + `% 0px, ` + clipWidth[5] + `% 100%, 0px 100%)` }} />
									<img src="/static/images/UI3Trans.png" className="absolute w-full h-full object-cover object-center" alt="" />
									<div className={"w-[calc(100%-1.5rem)] mx-auto h-full absolute"}>
										<div className={"absolute bg-white w-0.5 -translate-x-[0.075rem] h-full"} style={{ left: clipWidth[5] + "%" }}></div>
									</div>
									<input type="range" className="RBSpliter absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer" onChangeCapture={clipWidth6} value={clipWidth[5]} min={0} max={100} step={0.001} />
								</div>
								<div className="px-5 pb-6 py-4 text-white">
									<h3 className="text-xl font-bold text-secondary mt-2 mb-4">Text to Image</h3>
									<p className="w-full h-[160px] font-light mb-2">Thanks to tools like DALL-E and Midjourney, text-to-image models have found their ways into many mainstream usecases. Our implementation (built on top of Stable Diffusion) has been heavily optimized for extreme speed and provides the fastest API for generating high-quality images from text.</p>
									<button
										onClick={() => {
											setAPItitle("Text to Image");
											setHeight1("130px");
											setHeight2("310px");
											setHeight3("350px");
											setHeight4("420px");
											setHeight5("260px");
											setiframeID1("EZb7cIJ44I6Er8koVocV");
											setiframeID2("dSvOqgRDuIRqqCgeykSY");
											setiframeID3("7OQE9FTX0qjhOb7WpUS7");
											setiframeID4("dGXyL6eDvGrCQvstaHOY");
											setiframeID5("OKbLva2Gq4gRP4FXgz1X");
											APIdiv.classList.add("h-max", "my-5");
											APIdiv.classList.remove("h-0", "my-0", "overflow-hidden");
											APIdiv.scrollIntoView({ behavior: "smooth", block: "center" });
										}}
										className="w-full border border-secondary rounded-lg bg-transparent text-secondary p-2.5 text-center transition-all duration-300 hover:bg-primary"
									>
										Get API
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default API;
