import React, { useState } from "react";

const Navbar = () => {
	const [activeMenuLink, setActiveMenuLink] = useState("abc");

	const navLinks = [
		["API", "/api"],
		["FAQ", "/faq"],
		["About Us", "/about-us"],
	];

	if (activeMenuLink === "abc") {
		if (window.location.pathname === "/api") {
			setActiveMenuLink("/api");
		} else if (window.location.pathname === "/faq") {
			setActiveMenuLink("/faq");
		} else if (window.location.pathname === "/about-us") {
			setActiveMenuLink("/about-us");
		} else if (window.location.pathname === "/contact-us") {
			setActiveMenuLink("/contact-us");
		}
	}

	return (
		<div id="initml-layout_header" className="fixed h-20 top-0 right-0 left-0 w-full z-30">
			<header className="flex items-center justify-between gap-8 bg-dark-primary md:px-10 px-6 py-6 h-full text-white transition-shadow sm:py-2">
				<a href="/" className="flex md:gap-4 gap-3 scale-100 group">
					<img src="/static/images/logo.png" alt="PurityAI" className="h-8 rotate-0 group-hover:rotate-180 transition-all duration-300" />
					<h1 className="text-2xl font-bold items-center -translate-y-0.5">PurityAI</h1>
				</a>
				<div className="flex items-center justify-between gap-8">
					<div className="flex flex-1 items-center gap-2 lg:justify-between">
						<div className="z-10 hidden flex-row items-center justify-end gap-1 overflow-y-visible lg:flex">
							<div className="relative">
								<div className="text-white font-bold text-lg pt-1 hidden lg:block cursor-pointer opacity-100">
									<button
										onClick={() => {
											document.getElementById("dropdownApps").classList.toggle("opacity-0");
											document.getElementById("dropdownApps").classList.toggle("scale-y-0");
											document.getElementById("dropdownApps").classList.toggle("opacity-100");
											document.getElementById("dropdownApps").classList.toggle("scale-100");
										}}
										className="py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full bg-transparent active:text-white border-2 border-black border-opacity-0 hover:border-opacity-100 text-white hover:border-white active:bg-white flex items-center gap-2"
									>
										Apps
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" width="18" height="18">
											<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
										</svg>
									</button>
								</div>
								<div id="dropdownApps" className="flex flex-col whitespace-nowrap opacity-0 scale-y-0 origin-top absolute top-14 right-0 py-5 rounded-lg max-h-[calc(100vh-75px)] overflow-hidden shadow-lg bg-dark-primary transition-all duration-300">
									<p className="text-[13px] font-semibold text-white py-2 px-7 cursor-pointer scale-100 hover:scale-110 transition-all duration-300 origin-left w-max">
										<a className="flex flex-row gap-3 items-center hover:text-white hover:no-underline" href="/cleanup">
											<svg width="18" height="18" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M29.1665 39.5833H43.7499V43.75H24.9999L16.6707 43.7541L3.15611 30.2395C2.76555 29.8489 2.54614 29.319 2.54614 28.7666C2.54614 28.2142 2.76555 27.6844 3.15611 27.2937L25.2499 5.19579C25.4433 5.00209 25.6731 4.84843 25.926 4.74358C26.1789 4.63874 26.45 4.58478 26.7238 4.58478C26.9976 4.58478 27.2687 4.63874 27.5216 4.74358C27.7745 4.84843 28.0043 5.00209 28.1978 5.19579L44.4019 21.4C44.7925 21.7906 45.0119 22.3204 45.0119 22.8729C45.0119 23.4253 44.7925 23.9551 44.4019 24.3458L29.1665 39.5833ZM29.929 33.05L39.9832 22.8729L26.7249 9.61454L16.6707 19.7917L29.929 33.05Z" fill="currentcolor"></path>
											</svg>
											Cleanup
										</a>
									</p>
									<p className="text-[13px] font-semibold text-white py-2 px-7 cursor-pointer scale-100 hover:scale-110 transition-all duration-300 origin-left w-max">
										<a className="flex flex-row gap-3 items-center hover:text-white hover:no-underline" href="/image-upscaler">
											<svg width="18" height="18" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12.5001 12.5H37.5001V37.5H12.5001V12.5ZM12.5001 4.16669H16.6667V10.4167H12.5001V4.16669ZM12.5001 39.5834H16.6667V45.8334H12.5001V39.5834ZM4.16675 12.5H10.4167V16.6667H4.16675V12.5ZM4.16675 33.3334H10.4167V37.5H4.16675V33.3334ZM39.5834 12.5H45.8334V16.6667H39.5834V12.5ZM39.5834 33.3334H45.8334V37.5H39.5834V33.3334ZM33.3334 4.16669H37.5001V10.4167H33.3334V4.16669ZM33.3334 39.5834H37.5001V45.8334H33.3334V39.5834Z" fill="currentcolor"></path>
											</svg>
											Image upscaler
										</a>
									</p>
									<p className="text-[13px] font-semibold text-white py-2 px-7 cursor-pointer scale-100 hover:scale-110 transition-all duration-300 origin-left w-max">
										<a className="flex flex-row gap-3 items-center hover:no-underline" href="/reimagine">
											<svg width="19" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path
													d="M15.195 8.33334L15.5328 9.06703C15.7578 9.55574 16.1089 9.98524 16.555 10.3173C16.8144 10.5104 17.1012 10.6671 17.4063 10.7835V9.53572L22 12.1012L17.4063 14.6667V13.037C16.6083 12.8634 15.8571 12.5334 15.2037 12.0671C14.7103 11.7149 14.2831 11.2924 13.9367 10.8172C13.9367 10.8172 13.5824 10.3173 13.3462 9.83029C13.1099 9.34326 12.6783 8.33334 12.6783 8.33334L12.3405 7.59964C12.0731 7.01866 11.7864 6.66367 11.5 6.38462C11 5.89744 10.5 5.5 9.5 5.5H5V13.3026L9 9.40513L18.899 19.0513H19V15.2851L21 14.1282V20.0256C21 20.5635 20.552 21 20 21H4C3.448 21 3 20.5635 3 20.0256V4.4359C3 3.89805 3.448 3.46154 4 3.46154H9C10.8608 3.46154 11.6094 3.62969 12.7 4.4359C13.3102 4.88695 13.5132 5.26885 13.9365 5.84951C14.2829 5.37411 14.7103 4.95153 15.2038 4.59934C15.8572 4.13312 16.6084 3.80324 17.4063 3.62969V2L22 4.56548L17.4063 7.13095V5.88315C17.1012 5.99953 16.8144 6.15624 16.555 6.34935C16.1089 6.68143 15.7578 7.11088 15.5328 7.59959L15.195 8.33334Z"
													fill="currentcolor"
												></path>
											</svg>
											Reimagine
										</a>
									</p>
									<p className="text-[13px] font-semibold text-white py-2 px-7 cursor-pointer scale-100 hover:scale-110 transition-all duration-300 origin-left w-max">
										<a className="flex flex-row gap-3 items-center hover:text-white hover:no-underline" href="/remove-background">
											<svg width="18" height="18" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M24.9854 30.0146L21.7521 33.2479C22.7872 34.9922 23.1506 37.0541 22.7743 39.0472C22.3979 41.0403 21.3075 42.8277 19.7075 44.0743C18.1075 45.3209 16.1078 45.9413 14.0832 45.819C12.0586 45.6967 10.1481 44.8402 8.7098 43.41C7.27152 41.9798 6.40422 40.0742 6.27047 38.0503C6.13672 36.0264 6.7457 34.0232 7.98327 32.4162C9.22084 30.8092 11.002 29.7087 12.9929 29.3211C14.9838 28.9334 17.0478 29.2852 18.7979 30.3104L22.0375 27.0688L15.5292 20.5583C14.9433 19.9723 14.6142 19.1776 14.6142 18.349C14.6142 17.5203 14.9433 16.7256 15.5292 16.1396L16.2667 15.4021L24.9854 24.1208L33.7125 15.3938L34.4479 16.1313C35.0331 16.7172 35.3618 17.5115 35.3618 18.3396C35.3618 19.1677 35.0331 19.962 34.4479 20.5479L27.9312 27.0688L31.1833 30.3188C32.9305 29.2886 34.9935 28.931 36.9855 29.313C38.9775 29.695 40.7618 30.7904 42.0039 32.3939C43.246 33.9974 43.8607 35.9989 43.7326 38.0232C43.6046 40.0474 42.7427 41.9555 41.3085 43.3897C39.8742 44.824 37.9662 45.6859 35.9419 45.8139C33.9176 45.9419 31.9162 45.3273 30.3127 44.0851C28.7092 42.843 27.6138 41.0588 27.2317 39.0667C26.8497 37.0747 27.2073 35.0118 28.2375 33.2646L24.9854 30.0146V30.0146ZM39.5833 27.0833V10.4167H10.4167V27.0833H6.25V8.33333C6.25 7.7808 6.46949 7.25089 6.86019 6.86019C7.25089 6.46949 7.7808 6.25 8.33333 6.25H41.6667C42.2192 6.25 42.7491 6.46949 43.1398 6.86019C43.5305 7.25089 43.75 7.7808 43.75 8.33333V27.0833H39.5833ZM14.5833 41.6667C15.6884 41.6667 16.7482 41.2277 17.5296 40.4463C18.311 39.6649 18.75 38.6051 18.75 37.5C18.75 36.3949 18.311 35.3351 17.5296 34.5537C16.7482 33.7723 15.6884 33.3333 14.5833 33.3333C13.4783 33.3333 12.4185 33.7723 11.6371 34.5537C10.8557 35.3351 10.4167 36.3949 10.4167 37.5C10.4167 38.6051 10.8557 39.6649 11.6371 40.4463C12.4185 41.2277 13.4783 41.6667 14.5833 41.6667V41.6667ZM35.4167 41.6667C36.5217 41.6667 37.5815 41.2277 38.3629 40.4463C39.1443 39.6649 39.5833 38.6051 39.5833 37.5C39.5833 36.3949 39.1443 35.3351 38.3629 34.5537C37.5815 33.7723 36.5217 33.3333 35.4167 33.3333C34.3116 33.3333 33.2518 33.7723 32.4704 34.5537C31.689 35.3351 31.25 36.3949 31.25 37.5C31.25 38.6051 31.689 39.6649 32.4704 40.4463C33.2518 41.2277 34.3116 41.6667 35.4167 41.6667V41.6667Z"
													fill="currentcolor"
												></path>
											</svg>
											Remove background
										</a>
									</p>
									<p className="text-[13px] font-semibold text-white py-2 px-7 cursor-pointer scale-100 hover:scale-110 transition-all duration-300 origin-left w-max">
										<a className="flex flex-row gap-3 items-center hover:no-underline" href="/text-remover">
											<svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clipPath="url(#clip0_289_4784)">
													<path fillRule="evenodd" clipRule="evenodd" d="M10.5607 8.01319L8.11066 2H5.88823L1 14H3.39356L4.7259 10.7273H7.90134L10.5607 8.01319ZM5.61376 8.54545L6.99944 5.14727L8.38291 8.54545H5.61376Z" fill="currentcolor"></path>
													<path d="M16.6567 20.2963H22.4948V21.9983H14.9887L11.6544 22L6.24419 16.4795C6.08783 16.3199 6 16.1035 6 15.8779C6 15.6522 6.08783 15.4358 6.24419 15.2762L15.0888 6.24959C15.1663 6.17047 15.2582 6.1077 15.3595 6.06487C15.4607 6.02204 15.5693 6 15.6789 6C15.7885 6 15.897 6.02204 15.9982 6.06487C16.0995 6.1077 16.1915 6.17047 16.2689 6.24959L22.7558 12.8687C22.9122 13.0283 23 13.2447 23 13.4704C23 13.696 22.9122 13.9124 22.7558 14.072L16.6567 20.2963ZM16.962 17.6276L20.9869 13.4704L15.6793 8.05457L11.6544 12.2118L16.962 17.6276Z" fill="currentcolor"></path>
												</g>
											</svg>
											Text remover
										</a>
									</p>
								</div>
							</div>
							{navLinks.map((link, index) => (
								<div className="pt-1 text-xl font-bold text-white opacity-100" key={index}>
									<button className={"outline-primary-600 hidden select-none border-2 border-white rounded-full border-opacity-0  py-3 px-5 text-sm font-semibold leading-4  transition-colors hover:border-opacity-100 lg:block " + (activeMenuLink === link[1] ? "bg-white text-black" : "bg-transparent text-white")}>
										<a className="hover:no-underline" href={link[1]}>
											{link[0]}
										</a>
									</button>
								</div>
							))}
						</div>
					</div>
					<button className="flex items-center gap-2 text-white lg:hidden" disabled="">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
						</svg>
					</button>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
