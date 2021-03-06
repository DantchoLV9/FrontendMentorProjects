import React from "react";
import imageInteractive from "../images/desktop/image-interactive.jpg";
import mobileImageInteractive from "../images/mobile/image-interactive.jpg";

const About = () => {
	return (
		<div className="relative w-full lg:h-2/3 flex flex-col lg:flex-row">
			<div className="flex-1">
				<picture>
					<source srcSet={imageInteractive} media="(min-width: 768px)" />
					<img
						className="object-cover w-full h-auto lg:max-h-full lg:w-auto lg:h-full"
						src={mobileImageInteractive}
						alt="interactive"
					/>
				</picture>
			</div>
			<div className="bg-white pt-14 lg:pl-14 xl:pt-28 xl:pl-28 2xl:absolute left-1/2 bottom-0 flex-1 text-center lg:text-left">
				<h2 className="inline text-5xl lg:text-6xl font-josefin uppercase">
					The Leader In <br />
					Interactive VR
				</h2>
				<p className="font-medium text-darkGray text-xl leading-8 mt-10 font-alata">
					Founded in 2011, Loopstudios has been producing world-class virtual
					reality projects for some of the best companies around the globe. Our
					award-winning creations have transformed businesses through digital
					experiences that bind to their brand.
				</p>
			</div>
		</div>
	);
};

export default About;
