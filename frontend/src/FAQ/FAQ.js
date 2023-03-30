import React from "react";

const FAQ = () => {
	const toggleFAQ = (event) => {
		let faq = event.target.parentNode.getElementsByClassName("answer")[0];
		let arrow = event.target.parentNode.getElementsByClassName("arrow")[0];
		arrow.classList.toggle("rotate-90");
		faq.classList.toggle("scale-y-0");
		faq.classList.toggle("h-14");
		faq.classList.toggle("h-0");
		faq.classList.toggle("overflow-hidden");
		faq.classList.toggle("overflow-auto");
	};
	return (
		<>
			<div id="faqContainer" className=" flex items-center flex-col h-[80vh] transition-all duration-300 overflow-hidden">
				<h2 className="text-3xl md:text-3xl md:leading-[3.5rem] xl:text-[50px] font-extrabold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent mb-6">Frequently Asked Questions</h2>
				<div className="group py-6 relative w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove the background of a picture for free?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							To remove the background of a picture, go to{" "}
							<a className="underline" href="https://PurityAI.co/remove-background">
								PurityAI.co/remove-background
							</a>
							, and upload your image. PurityAI will remove the background for you, and you will be able to download your HD image for free.
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove an object from a picture?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							To remove an object from a picture, go to{" "}
							<a className="underline" href="https://PurityAI.co/cleanup">
								Cleanup
							</a>
							, upload your image, select the object, and download the result!
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove a person from a picture?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						To remove a person from a photo, use our inpainting algorithm. Upload your image on{" "}
						<a className="underline" href="https://PurityAI.co/cleanup">
							Cleanup
						</a>{" "}
						and get it back with the person removed. It's free.
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove watermark?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							You can remove watermark on any picture using{" "}
							<a className="underline" href="https://PurityAI.co/cleanup">
								Cleanup
							</a>
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove background from picture on iPhone?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">To remove the background from an image, download the PurityAI iOS app. The app will automatically remove the background, and your image will be saved to your phone's camera roll.</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove background from picture on Android?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">To remove the background of a picture, download the free Android app PurityAI (available in the Google Play Store). This app will remove the background for you.</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove background in photoshop?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">There are a few ways to remove the background of an image in Adobe Photoshop, but the best one is to install PurityAI on your desktop and use PurityAI Plugins</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove an object from a picture on iPhone?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							On your iPhone, you easily remove any object from a picture by using the{" "}
							<a className="underline" href="https://PurityAI.co/editor">
								PurityAI app
							</a>
							.
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove a person from a picture on iPhone?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							The{" "}
							<a className="underline" href="https://apps.apple.com/app/apple-store/id1512594879?pt=335286&amp;ct=home&amp;mt=8">
								PurityAI iOS
							</a>{" "}
							app provides a way to remove unwanted people from photos, using a proprietary inpainting algorithm. It's magical and free to try.
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove watermark on iPhone?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							Remove watermark on iOS by selecting the "Cleanup" feature from the home screen of the{" "}
							<a className="underline" href="https://PurityAI.co/editor">
								PurityAI app
							</a>
							. The app is available for free on iTunes.
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove an object from a picture on Android?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							On your Android phone, you can easily remove unwanted objects from a picture using the{" "}
							<a className="underline" href="https://PurityAI.co/editor">
								PurityAI app
							</a>
							.
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove a person from a picture on Android?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							To remove a person from a photograph, use the{" "}
							<a className="underline" href="https://play.google.com/store/apps/div?id=app.arcopypaste&amp;referrerutm_source%3Dreferrer%26=utm_campaign%3Dhome">
								PurityAI Android app
							</a>
							. Upload an image, remove the subject with their inpainting algorithm. It's free.
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove a person from a picture on Android?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							To remove a person from a photograph, use the{" "}
							<a className="underline" href="https://play.google.com/store/apps/div?id=app.arcopypaste&amp;referrerutm_source%3Dreferrer%26=utm_campaign%3Dhome">
								PurityAI Android app
							</a>
							. Upload an image, remove the subject with their inpainting algorithm. It's free.
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove the background of an image using an API?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">To remove the background from an image, you can use the PurityAI Background removal API. It is fast, secured and does very precise background removal. The API will let you compose your images with new backgrounds or white backgrounds.</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove watermark on Android?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							On Android,{" "}
							<a className="underline" href="https://PurityAI.co/editor">
								the PurityAI app
							</a>{" "}
							can be used to remove watermarks using the cleanup feature on the home screen.
						</p>
					</div>
				</div>
				<div className="group border-t-[1px] py-6 relative border-white w-full max-w-[1000px] mx-10">
					<div
						onClick={(event) => {
							toggleFAQ(event);
						}}
						className="z-10 w-full h-full absolute top-0 left-0"
					></div>
					<div className="flex items-center group-open:mb-3 cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="24" height="24" className="mr-2 flex-shrink-0 group-open:rotate-90 text-white arrow transition-all duration-300">
							<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
						</svg>
						<h2 className="text-white text-[18px] md:text-[18px] xl:text-[18px] font-semibold" itemprop="name">
							How to remove background from picture in powerpoint?
						</h2>
					</div>
					<div className="answer ml-[32px] text-white opacity-50 h-0 transition-all duration-300 scale-y-0  overflow-hidden">
						<p className="text-[13px] font-semibold text-white">
							You can use{" "}
							<a className="underline" href="https://PurityAI.co/remove-background">
								PurityAI.co/remove-background
							</a>
							, to remove the background from your picture and upload it without the background in powerpoint or any other software. It's free!
						</p>
					</div>
				</div>
			</div>
			<div className="my-5 flex justify-center items-center flex-col">
				<button
					onClick={() => {
						document.getElementById("moreSVG").classList.toggle("rotate-180");
						document.getElementById("faqContainer").classList.toggle("h-[80vh]");
						document.getElementById("faqContainer").classList.toggle("h-max");
					}}
					className="py-3 px-5 text-sm leading-4 font-semibold outline-primary-600 select-none rounded-full bg-transparent text-white border-2 border-white border-opacity-0 hover:border-opacity-100 transition-colors"
				>
					<svg id="moreSVG" className="rotate-180 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff" aria-hidden="true" width="16" height="16">
						<path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
					</svg>
				</button>
			</div>
		</>
	);
};

export default FAQ;
