import React, { useState } from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
	const [navbarState, setNavbarState] = useState(false);
	const navbarButtonHandler = () => {
		setNavbarState(!navbarState);
	};
	return (
		<nav className="flex justify-between items-center">
			<a href="/" className="z-20">
				<img
					className="w-32 sm:w-64 min-w-max z-20"
					src={logo}
					alt="loopstudios logo"
				/>
			</a>
			<div
				className={`${
					!navbarState
						? "hidden"
						: "absolute bg-black top-0 left-0 h-screen w-full z-10 flex flex-col justify-center pl-12 uppercase gap-y-8"
				} lg:flex gap-x-10 lg:bg-transparent lg:capitalize lg:w-auto lg:h-auto lg:flex-row lg:static`}
			>
				<a
					className="text-white text-3xl lg:text-xl font-josefin lg:font-alata nav-button"
					href="/"
				>
					About
				</a>
				<a
					className="text-white text-3xl lg:text-xl font-josefin lg:font-alata nav-button"
					href="/"
				>
					Careers
				</a>
				<a
					className="text-white text-3xl lg:text-xl font-josefin lg:font-alata nav-button"
					href="/"
				>
					Events
				</a>
				<a
					className="text-white text-3xl lg:text-xl font-josefin lg:font-alata nav-button"
					href="/"
				>
					Products
				</a>
				<a
					className="text-white text-3xl lg:text-xl font-josefin lg:font-alata nav-button"
					href="/"
				>
					Support
				</a>
			</div>
			<button
				className="flex lg:hidden flex-col gap-y-1.5 z-20"
				aria-label="toggle navbar"
				onClick={navbarButtonHandler}
			>
				<div
					className={`bg-white h-0.5 w-6 transition-all ${
						navbarState ? "transform rotate-45 translate-y-2" : ""
					}`}
				></div>
				<div
					className={`bg-white h-0.5 w-6 transition-all ${
						navbarState
							? "opacity-0 transform translate-x-4 pointer-events-none"
							: ""
					}`}
				></div>
				<div
					className={`bg-white h-0.5 w-6 transition-all ${
						navbarState ? "transform -rotate-45 -translate-y-2" : ""
					}`}
				></div>
			</button>
		</nav>
	);
};

export default Navbar;
