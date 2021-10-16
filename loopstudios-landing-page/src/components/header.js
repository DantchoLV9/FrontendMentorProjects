import React from "react";
import Navbar from "./navbar";

const Header = () => {
	return (
		<div className="flex flex-col">
			<Navbar />
			<div>
				<div className="border-white border-2 my-44 inline-block pl-16 pr-32 pt-12 pb-6">
					<h1 className="inline text-8xl font-josefin uppercase text-white">
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
