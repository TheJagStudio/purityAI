import React, { useState } from "react";

import TabNavItem from "../TabNavItem/TabNavItem";
import TabContent from "../TabContent/TabContent";

const Integration = ({ APItitle, height1, height2, height3, height4, height5, iframeID1, iframeID2, iframeID3, iframeID4, iframeID5 }) => {
	const [activeTab, setActiveTab] = useState("tab1");

	return (
		<section id="api-section" className="w-full py-12 bg-dark-primary px-12">
			<div className="max-w-5xl px-2 w-full mx-auto">
				<div className="w-full">
					<h2 className="text-3xl md:text-3xl md:leading-[3.5rem] xl:text-[50px] font-extrabold text-white mt-10 mb-10 text-center">Integrate it anywhere with PurityAI {APItitle} API</h2>
					<div className="w-full flex items-center justify-center gap-10">
						<div className="flex flex-col justify-center items-center">
							<div className="">
								<ul className="flex items-center justify-center">
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
							<a href="/api-doc">
								<button className="py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-lg hover:opacity-70 active:opacity-50 transition-opacity bg-secondary text-white">Get an API key</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Integration;
