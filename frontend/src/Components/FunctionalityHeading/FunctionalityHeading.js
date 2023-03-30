import React from "react";

const FunctionalityHeading = ({ svg, func, funcDesc, funcIMG }) => {
	return (
		<div className="flex w-full flex-1 flex-col items-center justify-center sm:px-12 px-8 sm:flex-row sm:items-start">
			<div className="relative flex w-full max-w-[850px] flex-col-reverse justify-end rounded-3xl bg-dark-primary md:h-40 md:flex-row lg:h-48">
				<div className="hidden sm:inline-block sm:flex-1">
					<div className="flex h-full flex-col justify-center gap-4 p-8 text-secondary">
						<h1 className="flex w-full items-center gap-4 text-3xl font-bold">
							<div className="hidden lg:inline-block">{svg}</div>
							{func}
						</h1>
						<h2 className="text-left text-base font-medium text-white">{funcDesc}</h2>
					</div>
				</div>
				<div className="flex-1 overflow-hidden rounded-3xl">
					<img src={funcIMG} alt={funcIMG} className="h-full w-full object-cover object-center" />
				</div>
			</div>
		</div>
	);
};

export default FunctionalityHeading;
