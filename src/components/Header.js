import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Link to="/">Home</Link>

			<Link to="/about">About</Link>

			<Link to="/portfolio">Portfolio</Link>

			<Link to="/contact">Contact</Link>

			<Link to="/language">Language</Link>
		</header>
	);
};

export default Header;
