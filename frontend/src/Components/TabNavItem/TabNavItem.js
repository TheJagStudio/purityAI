import React from "react";

const TabNavItem = ({ id, title, activeTab, setActiveTab, svg, isAPI }) => {
	const handleClick = () => {
		setActiveTab(id);
	};

	return (
		<li onClick={handleClick} className={"py-2 md:px-5 px-2 first-of-type:ml-0 md:mx-3 mx-2 text-sm font-medium text-center cursor-pointer z-10 border-2 border-transparent hover:border-white " + (activeTab === id ? " bg-white text-black " : "text-white rounded-full") + (svg ? " flex items-center gap-3 " : "") + (isAPI ? " rounded-lg" : " rounded-full")}>
			{svg ? <img src={svg} alt="" className="w-8 h-8 object-contain" /> : null}
			{title}
		</li>
	);
};

export default TabNavItem;
