import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Language from "./Language";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="portfolio" element={<Portfolio />} />
				<Route path="language" element={<Language />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
