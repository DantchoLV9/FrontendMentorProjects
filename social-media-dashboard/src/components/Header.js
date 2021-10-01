import styled from "styled-components";
import ToggleButton from "./ToggleButton";

const Header = ({ themeButtonValue, themeSwitchHandler }) => {
	return (
		<StyledHeader>
			<div className="header-text">
				<h1>Social Media Dashboard</h1>
				<p>Total Followers: 23,004</p>
			</div>
			<hr />
			<div className="theme-btn">
				<span>Dark Mode</span>
				<ToggleButton
					value={themeButtonValue}
					changeHandler={themeSwitchHandler}
				/>
			</div>
			<div className="header-bg"></div>
		</StyledHeader>
	);
};

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 3rem;
	@media (max-width: 880px) {
		flex-direction: column;
	}
	.header-text {
		display: flex;
		flex-direction: column;
		row-gap: 0.4rem;
		h1 {
			color: ${(props) => props.theme.whiteFg};
		}
		p {
			color: ${(props) => props.theme.blueFg};
			font-weight: 700;
		}
	}
	hr {
		display: none;
		border: none;
		border-bottom: 1px solid ${(props) => props.theme.cardBgHover};
		@media (max-width: 880px) {
			display: block;
			margin-block: 1.4rem;
		}
	}
	.theme-btn {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 1rem;
		font-weight: 700;
		color: ${(props) => props.theme.blueFg};
	}
	.header-bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		border-bottom-left-radius: 3rem;
		border-bottom-right-radius: 3rem;
		height: 33vh;
		width: 100%;
		background: ${(props) => props.theme.topBg};
	}
`;

export default Header;
