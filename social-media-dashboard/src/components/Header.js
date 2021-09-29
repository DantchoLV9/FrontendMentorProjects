import styled from "styled-components";
import ToggleButton from "./ToggleButton";

const Header = ({ themeButtonValue, themeSwitchHandler }) => {
	return (
		<StyledHeader>
			<div className="header-text">
				<h1>Social Media Dashboard</h1>
				<p>Total Followers: 123123</p>
			</div>
			<div className="theme-btn">
				Dark Mode
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
	.theme-btn {
		display: flex;
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
