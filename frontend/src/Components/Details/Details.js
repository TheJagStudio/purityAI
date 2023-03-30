import React, { useState } from "react";
import parse from "html-react-parser";
import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";
const Details = ({ removedBGData }) => {
	const [activeTab, setActiveTab] = useState("tab1");
	return (
		<div className="w-full h-full md:mb-0 mb-3 my-8 md:gap-4 gap-2 text-white">
			<ul className="flex items-center">
				{Object.keys(removedBGData).map((item, index) => (
					<TabNavItem isAPI={false} title={item.charAt(0).toUpperCase() + item.slice(1)} id={"tab" + (index + 1)} activeTab={activeTab} setActiveTab={setActiveTab} />
				))}
			</ul>
			<div>
				{Object.keys(removedBGData).map((item, index) => {
					if (item === "Label") {
						return (
							<TabContent id={"tab" + (index + 1)} activeTab={activeTab} key={index}>
								<div className="w-full text-secondary max-h-[400px] overflow-y-scroll">
									{/* <h1 className="font-semibold">Face 1 :</h1> */}
									{removedBGData[item].map((label, index2) => (
										<div key={index2} className="w-[70%] my-2">
											<a href={"https://www.google.com/search?q=" + label.description.replace(/ /g, "%20")} target="_blank" className="flex justify-between">
												<p className="text-sm text-white font-semibold">{label.description}</p>
												<p className="text-sm text-white font-semibold">{parseInt(label.score * 100)}%</p>
											</a>
											<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
												<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: parseInt(label.score * 100) + "%" }}></div>
											</div>
										</div>
									))}
								</div>
							</TabContent>
						);
					} else if (item === "Safe Search") {
						let dataList = ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"];
						return (
							<TabContent id={"tab" + (index + 1)} activeTab={activeTab} key={index}>
								<div className="w-full text-secondary">
									{/* <h1 className="font-semibold">Face 1 :</h1> */}
									{Object.keys(removedBGData[item]).map((label, index2) => (
										<div key={index2} className="w-[70%] my-2">
											<div className="flex justify-between">
												<p className="text-sm text-white font-semibold capitalize">{label}</p>
												<p className="text-sm text-white font-semibold lowercase">{removedBGData[item][label].replace(/_/g, " ")}</p>
											</div>
											<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
												<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: (dataList.indexOf(removedBGData[item][label]) + 1) * 20 + "%" }}></div>
											</div>
										</div>
									))}
								</div>
							</TabContent>
						);
					} else if (item === "Face") {
						let dataList = ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"];
						return (
							<TabContent id={"tab" + (index + 1)} activeTab={activeTab} key={index}>
								<div className="w-full text-secondary max-h-[400px] overflow-y-scroll">
									{removedBGData[item].map((face, index2) => (
										<div key={index2}>
											<h1 className="font-semibold text-xl">Face {index2 + 1} :</h1>
											<div className="w-[70%]  my-1">
												<div className="flex justify-between">
													<p className="text-sm text-white font-semibold">Joy</p>
													<p className="text-sm text-white font-semibold lowercase">{face["joyLikelihood"].replace(/_/g, " ")}</p>
												</div>
												<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
													<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: (dataList.indexOf(face["joyLikelihood"]) + 1) * 20 + "%" }}></div>
												</div>
											</div>
											<div className="w-[70%]  my-1">
												<div className="flex justify-between">
													<p className="text-sm text-white font-semibold">Sorrow</p>
													<p className="text-sm text-white font-semibold lowercase">{face["sorrowLikelihood"].replace(/_/g, " ")}</p>
												</div>
												<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
													<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: (dataList.indexOf(face["sorrowLikelihood"]) + 1) * 20 + "%" }}></div>
												</div>
											</div>
											<div className="w-[70%]  my-1">
												<div className="flex justify-between">
													<p className="text-sm text-white font-semibold">Anger</p>
													<p className="text-sm text-white font-semibold lowercase">{face["angerLikelihood"].replace(/_/g, " ")}</p>
												</div>
												<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
													<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: (dataList.indexOf(face["angerLikelihood"]) + 1) * 20 + "%" }}></div>
												</div>
											</div>
											<div className="w-[70%]  my-1">
												<div className="flex justify-between">
													<p className="text-sm text-white font-semibold">Surprise</p>
													<p className="text-sm text-white font-semibold lowercase">{face["surpriseLikelihood"].replace(/_/g, " ")}</p>
												</div>
												<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
													<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: (dataList.indexOf(face["surpriseLikelihood"]) + 1) * 20 + "%" }}></div>
												</div>
											</div>
											<div className="w-[70%]  my-1">
												<div className="flex justify-between">
													<p className="text-sm text-white font-semibold">Under Exposed</p>
													<p className="text-sm text-white font-semibold lowercase">{face["underExposedLikelihood"].replace(/_/g, " ")}</p>
												</div>
												<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
													<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: (dataList.indexOf(face["underExposedLikelihood"]) + 1) * 20 + "%" }}></div>
												</div>
											</div>
											<div className="w-[70%]  my-1">
												<div className="flex justify-between">
													<p className="text-sm text-white font-semibold">Blurred</p>
													<p className="text-sm text-white font-semibold lowercase">{face["blurredLikelihood"].replace(/_/g, " ")}</p>
												</div>
												<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
													<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: (dataList.indexOf(face["blurredLikelihood"]) + 1) * 20 + "%" }}></div>
												</div>
											</div>
											<div className="w-[70%]  my-2">
												<div className="flex justify-between">
													<p className="text-sm text-white font-semibold">Headwear</p>
													<p className="text-sm text-white font-semibold lowercase">{face["headwearLikelihood"].replace(/_/g, " ")}</p>
												</div>
												<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
													<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: (dataList.indexOf(face["headwearLikelihood"]) + 1) * 20 + "%" }}></div>
												</div>
											</div>
											<div className="w-[70%]  my-4">
												<div className="flex justify-between">
													<p className="text-white font-semibold">
														Roll : <span className="opacity-50 font-normal">{parseFloat(face["rollAngle"]).toFixed(2)}°</span>
													</p>
													<p className="text-white font-semibold">
														Tilt : <span className="opacity-50 font-normal">{parseFloat(face["tiltAngle"]).toFixed(2)}°</span>
													</p>
													<p className="text-white font-semibold">
														Pan : <span className="opacity-50 font-normal">{parseFloat(face["panAngle"]).toFixed(2)}°</span>
													</p>
												</div>
											</div>
											<div className="w-[70%]  my-2">
												<div className="flex justify-between">
													<p className="text-sm text-white font-semibold">Detection Confidence</p>
													<p className="text-sm text-white font-semibold lowercase">{parseInt(face["detectionConfidence"] * 100)}%</p>
												</div>
												<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
													<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: parseInt(face["detectionConfidence"] * 100) + "%" }}></div>
												</div>
											</div>
										</div>
									))}
								</div>
							</TabContent>
						);
					} else if (item === "Object") {
						return (
							<TabContent id={"tab" + (index + 1)} activeTab={activeTab} key={index}>
								<div className="w-full text-secondary max-h-[400px] overflow-y-scroll">
									{/* <h1 className="font-semibold">Face 1 :</h1> */}
									{removedBGData[item].map((label, index2) => (
										<div key={index2} className="w-[70%] my-2">
											<div className="flex justify-between">
												<p className="text-sm text-white font-semibold">{label.name}</p>
												<p className="text-sm text-white font-semibold">{parseInt(label.score * 100)}%</p>
											</div>
											<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
												<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: parseInt(label.score * 100) + "%" }}></div>
											</div>
										</div>
									))}
								</div>
							</TabContent>
						);
					} else if (item === "Logo") {
						return (
							<TabContent id={"tab" + (index + 1)} activeTab={activeTab} key={index}>
								<div className="w-full text-secondary max-h-[400px] overflow-y-scroll">
									{/* <h1 className="font-semibold">Face 1 :</h1> */}
									{removedBGData[item].map((label, index2) => (
										<div key={index2} className="w-[70%] my-2">
											<div className="flex justify-between">
												<p className="text-sm text-white font-semibold">{label.description}</p>
												<p className="text-sm text-white font-semibold">{parseInt(label.score * 100)}%</p>
											</div>
											<div class="h-2 w-full bg-primary rounded-full relative overflow-hidden my-2">
												<div class={"absolute left-0 h-full bg-secondary rounded-full"} style={{ width: parseInt(label.score * 100) + "%" }}></div>
											</div>
										</div>
									))}
								</div>
							</TabContent>
						);
					} else if (item === "Text") {
						return (
							<TabContent id={"tab" + (index + 1)} activeTab={activeTab} key={index}>
								<div className="w-full text-white leading-4 max-h-[400px] overflow-y-scroll relative">
									<p id="textToBeCopied">{parse(removedBGData[item].replace(/\n/g, "<br></br>"))}</p>
									<div className="sticky w-full h-max bottom-6 right-14 bg-red-300">
										<div
											onClick={() => {
												navigator.clipboard.writeText(document.getElementById("textToBeCopied").innerText);
												document.getElementById("copyText").innerText = "Copied";
												setTimeout(() => {
													document.getElementById("copyText").innerText = "Copy";
												}, 1000);
											}}
											className="absolute w-max right-3 bottom-0 bg-primary p-3 rounded-full group cursor-pointer"
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
												<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
												<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
											</svg>
											<p id="copyText" className="bg-primary p-2 rounded-lg group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-[100%] absolute bottom-14 right-0 transition-all duration-300">
												Copy
											</p>
										</div>
									</div>
								</div>
							</TabContent>
						);
					} else {
						return (
							<TabContent id={"tab" + (index + 1)} activeTab={activeTab} key={index}>
								<h1 key={index}>{item}</h1>
							</TabContent>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Details;
