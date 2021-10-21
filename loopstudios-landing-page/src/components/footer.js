import React from "react";
import logo from "../images/logo.svg";
import facebookIcon from "../images/icon-facebook.svg";
import instagramIcon from "../images/icon-instagram.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import twitterIcon from "../images/icon-twitter.svg";

const Footer = () => {
	return (
		<>
			<div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between pb-10">
				<img
					className="w-32 sm:w-52 min-w-max"
					src={logo}
					alt="loopstudios logo"
				/>
				<div className="flex-row gap-x-6 items-center lg:flex hidden">
					<a className="hover-effect-100" href="/">
						<img className="w-8" src={facebookIcon} alt="facebook" />
					</a>
					<a className="hover-effect-100" href="/">
						<img className="w-8" src={twitterIcon} alt="twitter" />
					</a>
					<a className="hover-effect-100" href="/">
						<img className="w-8" src={pinterestIcon} alt="pinterest" />
					</a>
					<a className="hover-effect-100" href="/">
						<img className="w-8" src={instagramIcon} alt="instagram" />
					</a>
				</div>
			</div>
			<div className="flex justify-center items-center lg:flex-row flex-col lg:justify-between">
				<div className="text-xl flex mb-20 lg:mb-0 lg:flex-row flex-col gap-10 text-center lg:text-left font-alata">
					<a className="hover-effect-50" href="/">
						About
					</a>
					<a className="hover-effect-50" href="/">
						Careers
					</a>
					<a className="hover-effect-50" href="/">
						Events
					</a>
					<a className="hover-effect-50" href="/">
						Products
					</a>
					<a className="hover-effect-50" href="/">
						Support
					</a>
				</div>
				<div className="flex-row gap-x-6 lg:hidden flex mb-10">
					<a className="hover-effect-100" href="/">
						<img className="w-8" src={facebookIcon} alt="facebook" />
					</a>
					<a className="hover-effect-100" href="/">
						<img className="w-8" src={twitterIcon} alt="twitter" />
					</a>
					<a className="hover-effect-100" href="/">
						<img className="w-8" src={pinterestIcon} alt="pinterest" />
					</a>
					<a className="hover-effect-100" href="/">
						<img className="w-8" src={instagramIcon} alt="instagram" />
					</a>
				</div>
				<div className="text-veryDarkGray font-alata text-xl">
					&copy; 2021 Loopstudios. All rights reserved.
				</div>
			</div>
		</>
	);
};

export default Footer;
