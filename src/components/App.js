import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
// import Contact from "./Contact";
import Language from "./Language";
// import Header from "./Header";

function App() {
	return (
		<BrowserRouter>
			{/* <Header /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="portfolio" element={<Portfolio />} />
				{/* <Route path="contact" element={<Contact />} /> */}
				<Route path="language" element={<Language />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
