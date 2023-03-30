import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";

// Pages
import VideoPlayer2 from "./VideoPlayer/VideoPlayer2";
import HomePage from "./HomePage/HomePage";
import RemoveBackground from "./RemoveBackground/RemoveBackground";
import API from "./API/API";
import FAQ from "./FAQ/FAQ";
import AboutUs from "./AboutUs/AboutUs";
import ImageUpscaler from "./ImageUpscaler/ImageUpscaler";
import RemoveText from "./RemoveText/RemoveText";
import Reimagine from "./Reimagine/Reimagine";
import CleanUp from "./CleanUp/CleanUp";
import TextToImage from "./TextToImage/TextToImage";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="min-h-[calc(100vh-26.5rem) pt-28">
				<Routes>
					<Route index path="/" element={<HomePage />} />
					<Route path="/api" element={<API />} />
					<Route path="/remove-background" element={<RemoveBackground />} />
					<Route path="/cleanup" element={<CleanUp />} />
					<Route path="/text-remover" element={<RemoveText />} />
					<Route path="/reimagine" element={<Reimagine />} />
					<Route path="/image-upscaler" element={<ImageUpscaler />} />
					<Route path="/video2" element={<VideoPlayer2 />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/text-to-image" element={<TextToImage />} />
				</Routes>
			</div>
			<ContactUs />
			<Footer />
		</Router>
	);
}

export default App;
