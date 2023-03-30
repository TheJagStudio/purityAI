import React from "react";

const ContactUs = () => {
	return (
		<div className="w-[30%] max-w-[300px] bg-white fixed bottom-3 -right-full transition-all duration-300 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-50 overflow-hidden" id="contactUsOverlay">
			<div className="w-full p-4 bg-primary flex items-center justify-between">
				<h1 className="text-white font-bold">Contact Us</h1>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					className="cursor-pointer"
					onClick={() => {
						document.getElementById("contactUsOverlay").classList.add("-right-full");
						document.getElementById("contactUsOverlay").classList.remove("right-3");
					}}
				>
					<path stroke="#ffffff" strokeLinecap="round" strokeWidth="2" d="M3 8h10"></path>
				</svg>
			</div>
			<div className="max-h-[400px] overflow-y-scroll customScrollbar">
				<div className="pt-4 pb-2 px-4">
					<p className="font-bold">Email Address</p>
					<input type="email" placeholder="johndoe@gmail.com" className="w-full border border-gray-300 rounded-lg px-3 py-1 mt-4 focus:ring-1 focus:ring-primary focus:placeholder:text-primary outline-none focus:outline-none transition-all duration-300" />
				</div>
				<div className="pb-4 pt-2 px-4">
					<p className="font-bold">Message</p>
					<textarea placeholder="Write your message" rows={6} className="w-full border border-gray-300 rounded-lg px-3 py-1 mt-4 focus:ring-1 focus:ring-primary focus:placeholder:text-primary outline-none focus:outline-none transition-all duration-300" />
				</div>
			</div>
			<div className="border-t py-2 px-4 flex justify-end transition-all duration-300">
				<button className="bg-primary px-8 py-2 text-white font-bold rounded-lg transition-all duration-300">Send</button>
			</div>
		</div>
	);
};

export default ContactUs;
