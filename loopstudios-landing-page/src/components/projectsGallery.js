import React from "react";
import deepEarthDesktop from "../images/desktop/image-deep-earth.jpg";
import deepEarthMobile from "../images/mobile/image-deep-earth.jpg";
import nightArcadeDesktop from "../images/desktop/image-night-arcade.jpg";
import nightArcadeMobile from "../images/mobile/image-night-arcade.jpg";
import soccerTeamDesktop from "../images/desktop/image-soccer-team.jpg";
import soccerTeamMobile from "../images/mobile/image-soccer-team.jpg";
import gridDesktop from "../images/desktop/image-grid.jpg";
import gridMobile from "../images/mobile/image-grid.jpg";
import fromAboveDesktop from "../images/desktop/image-from-above.jpg";
import fromAboveMobile from "../images/mobile/image-from-above.jpg";
import pocketBorealisDesktop from "../images/desktop/image-pocket-borealis.jpg";
import pocketBorealisMobile from "../images/mobile/image-pocket-borealis.jpg";
import curiosityDesktop from "../images/desktop/image-curiosity.jpg";
import curiosityMobile from "../images/mobile/image-curiosity.jpg";
import fisheyeDesktop from "../images/desktop/image-fisheye.jpg";
import fisheyeMobile from "../images/mobile/image-fisheye.jpg";

const ProjectsGallery = () => {
	return (
		<>
			<div className="flex justify-center md:justify-between items-center w-full mb-14 md:mb-18 mt-10 md:mt-14">
				<h2 className="text-5xl lg:text-6xl font-josefin uppercase text-center md:text-left">
					Our Creations
				</h2>
				<a
					className="uppercase border-2 hidden md:block rounded border-black py-3 px-12 hover:bg-black hover:text-white text-lg tracking-link font-bold font-alata"
					href="/"
				>
					See All
				</a>
			</div>
			<div className="flex flex-wrap flex-col md:flex-row mb-14 gap-8">
				<div className="relative lg:w-1/5 flex-auto cursor-pointer text-white hover:text-black">
					<picture>
						<source srcSet={deepEarthDesktop} media="(min-width: 768px)" />
						<img className="w-full" src={deepEarthMobile} alt="interactive" />
					</picture>
					<div className="absolute hover:from-white hover:to-white w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
					<h3 className="pointer-events-none uppercase absolute bottom-4 left-5 md:bottom-8 md:left-10 text-3xl xl:text-3xl 2xl:text-5xl pr-10 font-josefin">
						Deep
						<br /> Earth
					</h3>
				</div>
				<div className="relative lg:w-1/5 flex-auto cursor-pointer text-white hover:text-black">
					<picture>
						<source srcSet={nightArcadeDesktop} media="(min-width: 768px)" />
						<img className="w-full" src={nightArcadeMobile} alt="interactive" />
					</picture>
					<div className="absolute hover:from-white hover:to-white w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
					<h3 className="pointer-events-none uppercase absolute bottom-4 left-5 md:bottom-8 md:left-10 text-3xl xl:text-3xl 2xl:text-5xl pr-10 font-josefin">
						Night
						<br /> Arcade
					</h3>
				</div>
				<div className="relative lg:w-1/5 flex-auto cursor-pointer text-white hover:text-black">
					<picture>
						<source srcSet={soccerTeamDesktop} media="(min-width: 768px)" />
						<img className="w-full" src={soccerTeamMobile} alt="interactive" />
					</picture>
					<div className="absolute hover:from-white hover:to-white w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
					<h3 className="pointer-events-none uppercase absolute bottom-4 left-5 md:bottom-8 md:left-10 text-3xl xl:text-3xl 2xl:text-5xl pr-10 font-josefin">
						Soccer
						<br /> Team VR
					</h3>
				</div>
				<div className="relative lg:w-1/5 flex-auto cursor-pointer text-white hover:text-black">
					<picture>
						<source srcSet={gridDesktop} media="(min-width: 768px)" />
						<img className="w-full" src={gridMobile} alt="interactive" />
					</picture>
					<div className="absolute hover:from-white hover:to-white w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
					<h3 className="pointer-events-none uppercase absolute bottom-4 left-5 md:bottom-8 md:left-10 text-3xl xl:text-3xl 2xl:text-5xl pr-10 font-josefin">
						The
						<br /> Grid
					</h3>
				</div>
				<div className="relative lg:w-1/5 flex-auto cursor-pointer text-white hover:text-black">
					<picture>
						<source srcSet={fromAboveDesktop} media="(min-width: 768px)" />
						<img className="w-full" src={fromAboveMobile} alt="interactive" />
					</picture>
					<div className="absolute hover:from-white hover:to-white w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
					<h3 className="pointer-events-none uppercase absolute bottom-4 left-5 md:bottom-8 md:left-10 text-3xl xl:text-3xl 2xl:text-5xl pr-10 font-josefin">
						From Up
						<br /> Above VR
					</h3>
				</div>
				<div className="relative lg:w-1/5 flex-auto cursor-pointer text-white hover:text-black">
					<picture>
						<source srcSet={pocketBorealisDesktop} media="(min-width: 768px)" />
						<img
							className="w-full"
							src={pocketBorealisMobile}
							alt="interactive"
						/>
					</picture>
					<div className="absolute hover:from-white hover:to-white w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
					<h3 className="pointer-events-none uppercase absolute bottom-4 left-5 md:bottom-8 md:left-10 text-3xl xl:text-3xl 2xl:text-5xl pr-10 font-josefin">
						Pocket
						<br /> Borealis
					</h3>
				</div>
				<div className="relative lg:w-1/5 flex-auto cursor-pointer text-white hover:text-black">
					<picture>
						<source srcSet={curiosityDesktop} media="(min-width: 768px)" />
						<img className="w-full" src={curiosityMobile} alt="interactive" />
					</picture>
					<div className="absolute hover:from-white hover:to-white w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
					<h3 className="pointer-events-none uppercase absolute bottom-4 left-5 md:bottom-8 md:left-10 text-3xl xl:text-3xl 2xl:text-5xl pr-10 font-josefin">
						The
						<br /> Curiosity
					</h3>
				</div>
				<div className="relative lg:w-1/5 flex-auto cursor-pointer text-white hover:text-black">
					<picture>
						<source srcSet={fisheyeDesktop} media="(min-width: 768px)" />
						<img className="w-full" src={fisheyeMobile} alt="interactive" />
					</picture>
					<div className="absolute hover:from-white hover:to-white w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
					<h3 className="pointer-events-none uppercase absolute bottom-4 left-5 md:bottom-8 md:left-10 text-3xl xl:text-3xl 2xl:text-5xl pr-10 font-josefin">
						Make It
						<br /> Fisheye
					</h3>
				</div>
			</div>
			<a
				className="uppercase border-2 md:hidden mb-28 block rounded border-black py-3 px-12 hover:bg-black hover:text-white text-lg tracking-link font-bold font-alata"
				href="/"
			>
				See All
			</a>
		</>
	);
};

export default ProjectsGallery;
