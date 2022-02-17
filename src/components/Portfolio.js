import { Link } from "react-router-dom";

const Portfolio = () => {
	return (
		<div className="portfolio-container">
			<div className="home-link">
				<h2>Home</h2>
				<Link to="/">
					<img
						src={require("../imgs/me.jpg")}
						alt="me"
						width="250px"
						height="300px"
					/>
				</Link>
			</div>
			<main className="portfolio-main">
				<h1>A Pinch of Projects</h1>
				<h2>My Dashboard</h2>
				<p>A useful example of a dashboard written in JavaScript</p>
				<a
					href="https://veselin0.github.io/My-Dashboard/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../imgs/my-dashboard.png")}
						alt="me"
						width="500px"
						height="300px"
					/>
				</a>
				<h2>Ecommerce Site</h2>
				<p>A minimalistic website written in Reactjs</p>
				<a
					href="https://veselin0.github.io/Ecommerce-Site/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../imgs/ecommerce.png")}
						alt="me"
						width="500px"
						height="300px"
					/>
				</a>
			</main>
		</div>
	);
};

export default Portfolio;
