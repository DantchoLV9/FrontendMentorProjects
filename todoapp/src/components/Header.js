import React from "react";
import styled from "styled-components";
import IconMoon from "../images/icon-moon";
import IconSun from "../images/icon-sun";
import lightTheme from "../themes/light";

const Header = ({ currentTheme, changeThemeHandler }) => {
	return (
		<StyledHeader>
			<h1>Todo</h1>
			<button onClick={changeThemeHandler} aria-label="change theme">
				{currentTheme === lightTheme ? <IconMoon /> : <IconSun />}
			</button>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 3rem;
	h1 {
		text-transform: uppercase;
		color: hsl(0, 0%, 98%);
		letter-spacing: 1.2rem;
	}
	button {
		background: none;
		border: none;
		cursor: pointer;
	}
`;

export default Header;
