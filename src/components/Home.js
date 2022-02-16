import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<div className="container">
			<div>
				<h2>About</h2>
				<NavLink to="/about">
                    <img
                        src={require("../imgs/me.jpg")}
                        alt="me"
                        width="250px"
                        height="300px"
                    />
				</NavLink>
			</div>
			<div>
				<h2>Portfolio</h2>
				<NavLink to="/portfolio">
                    <img
                        src={require("../imgs/hired.PNG")}
                        alt="hired"
                        width="400"
                        highth="600"
                    />
				</NavLink>
			</div>
			<div>
				<h2>Contact</h2>
				<NavLink to="/contact">
                    <img
                        src={require("../imgs/duff.JPG")}
                        alt="hired"
                        width="300px"
                        height="250px"
                    />
				</NavLink>
			</div>
		</div>
	);
};

export default Home;
