// import React from 'react';
// import VideoPlayer from './VideoPlayer/VideoPlayer';
// import VideoPlayer2 from './VideoPlayer/VideoPlayer2';
// import HomePage from './VideoPlayer/HomePage';

// function App() {
//   return (
//     <>
//       <HomePage />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoPlayer2 from "./VideoPlayer/VideoPlayer2";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="min-h-[calc(100vh-26.5rem) pt-28">
				<Routes>
					<Route index path="/" element={<HomePage />} />
					<Route path="/video1" element={<VideoPlayer />} />
					<Route path="/video2" element={<VideoPlayer2 />} />
				</Routes>
			</div>
			<ContactUs />
			<Footer />
		</Router>
	);
}

export default App;
