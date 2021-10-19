import React from "react";
import Navbar from "./navbar";

const Header = () => {
	return (
		<div className="flex flex-col h-full">
			<Navbar />
			<div className="flex justify-center items-center lg:justify-start h-full">
				<div className="border-white border-2 my-44 inline-block p-7 pb-5 xl:pl-16 xl:pr-32 xl:pt-12 xl:pb-6">
					<h1 className="inline text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-josefin uppercase text-white">
						Immersive
						<br />
						Experiences
						<br />
						That Deliver
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
