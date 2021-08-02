import React from "react";
import styled from "styled-components";
import bgImageLight from "../images/bg-desktop-light.jpg";
import bgImageDark from "../images/bg-desktop-dark.jpg";
import bgImageLightMobile from "../images/bg-mobile-light.jpg";
import bgImageDarkMobile from "../images/bg-mobile-dark.jpg";
import lightTheme from "../themes/light";

const BackgroundImage = ({ currentTheme }) => {
	return (
		<StyledBackgroundImage>
			{currentTheme === lightTheme ? (
				<div>
					<img className="desktopBgImage" src={bgImageLight} alt="" />
					<img className="mobileBgImage" src={bgImageLightMobile} alt="" />
				</div>
			) : (
				<div>
					<img className="desktopBgImage" src={bgImageDark} alt="" />
					<img className="mobileBgImage" src={bgImageDarkMobile} alt="" />
				</div>
			)}
		</StyledBackgroundImage>
	);
};

const StyledBackgroundImage = styled.div`
	position: absolute;
	width: 100%;
	z-index: -10;
	.desktopBgImage {
		width: 100%;
		height: 35vh;
		object-fit: cover;
	}
	.mobileBgImage {
		display: none;
	}
	@media (max-width: 375px) {
		.desktopBgImage {
			display: none;
		}
		.mobileBgImage {
			display: block;
			width: 100%;
			height: 30vh;
			object-fit: cover;
		}
	}
`;

export default BackgroundImage;
