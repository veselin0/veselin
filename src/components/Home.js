import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container">
			<div>
				<h2>About</h2>
				<Link to="/about">
                    <img
                        src={require("../imgs/me.jpg")}
                        alt="me"
                        width="250px"
                        height="300px"
                    />
				</Link>
			</div>
			<div>
				<h2>Portfolio</h2>
				<Link to="/portfolio">
                    <img
                        src={require("../imgs/hired.PNG")}
                        alt="hired"
                        width="400"
                        highth="600"
                    />
				</Link>
			</div>
			<div>
				<h2>Language</h2>
				
			</div>
		</div>
	);
};

export default Home;
