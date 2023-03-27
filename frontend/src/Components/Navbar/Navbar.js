import React, { useState } from "react";

const Navbar = () => {
	const [activeMenuLink, setActiveMenuLink] = useState("abc");

	const navLinks = [
		["API", "/api"],
		["About Us", "/about-us"],
	];

	if (activeMenuLink === "abc") {
		if (window.location.pathname === "/api") {
			setActiveMenuLink("/api");
		} else if (window.location.pathname === "/about-us") {
			setActiveMenuLink("/about-us");
		} else if (window.location.pathname === "/contact-us") {
			setActiveMenuLink("/contact-us");
		}
	}

	return (
		<div id="initml-layout_header" className="fixed h-20 top-0 right-0 left-0 w-full z-30">
			<header className="flex items-center justify-between gap-8 bg-dark-primary px-4 py-4 text-white transition-shadow sm:py-2">
				<a href="/" className="flex gap-4 scale-100 group">
					<img src="/static/images/logo.png" alt="PurityAI" className="h-8 rotate-0 group-hover:rotate-180 transition-all duration-300" />
					<h1 className="text-2xl font-bold items-center -translate-y-1">PurityAI</h1>
				</a>
				<div className="flex items-center justify-between gap-8">
					<div className="flex flex-1 items-center gap-2 lg:justify-between">
						<div className="z-10 hidden flex-row items-center justify-end gap-1 overflow-y-visible lg:flex">
							{navLinks.map((link, index) => (
								<div className="pt-1 text-xl font-bold text-white opacity-100" key={index}>
									<button className={"outline-primary-600 hidden select-none border-2 border-white rounded-lg border-opacity-0  py-3 px-5 text-sm font-semibold leading-4  transition-colors hover:border-opacity-100 lg:block " + (activeMenuLink === link[1] ? "bg-white text-black" : "bg-transparent text-white")}>
										<a className="hover:no-underline" href={link[1]}>
											{link[0]}
										</a>
									</button>
								</div>
							))}
						</div>
					</div>
					<button className="flex items-center gap-2 text-white sm:hidden" disabled="">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
						</svg>
					</button>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
