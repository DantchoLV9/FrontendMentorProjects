import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center">
			<a href="/">
				<img className="w-64" src={logo} alt="loopstudios logo" />
			</a>
			<div className="flex gap-x-10">
				<a className="text-white text-xl font-alata" href="/">
					About
				</a>
				<a className="text-white text-xl font-alata" href="/">
					Careers
				</a>
				<a className="text-white text-xl font-alata" href="/">
					Events
				</a>
				<a className="text-white text-xl font-alata" href="/">
					Products
				</a>
				<a className="text-white text-xl font-alata" href="/">
					Support
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
