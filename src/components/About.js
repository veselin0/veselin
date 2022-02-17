import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="about-container">
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
			<main className="about-main">
				<h1>Veselin Velkov</h1>
				<h3>Frontend Developer</h3>
				<p>vesselin60@gmail.com</p>
				<h2>About me</h2>
				<p>
					I am a frontend developer with a particular interest in
					React JS and React Native. I try to keep up with security
					and best practices, and I am always looking for new things
					to learn.
				</p>
				<h2>Interests</h2>
				<p>
					Food expert. Reader. IoT geek. Entrepreneur. Coffee fanatic.
				</p>
			</main>
		</div>
	);
};

export default About;
