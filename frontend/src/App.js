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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayer2 from './VideoPlayer/VideoPlayer2';
import HomePage from './VideoPlayer/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="/video1" component={VideoPlayer} />
				<Route path="/video2" component={VideoPlayer2} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
