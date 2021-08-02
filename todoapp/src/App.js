import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

function App() {
	// Code for the theme
	const [currentTheme, setCurrentTheme] = useState(lightTheme);
	useEffect(() => {
		if (localStorage.getItem("theme") === "light") {
			setCurrentTheme(lightTheme);
		} else {
			setCurrentTheme(darkTheme);
		}
	}, []);
	const changeThemeHandler = () => {
		if (currentTheme === lightTheme) {
			setCurrentTheme(darkTheme);
			localStorage.setItem("theme", "dark");
		} else {
			setCurrentTheme(lightTheme);
			localStorage.setItem("theme", "light");
		}
	};
	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyle />
			<MainContainer>
				<BackgroundImage currentTheme={currentTheme} />
				<MainContent>
					<Header
						currentTheme={currentTheme}
						changeThemeHandler={changeThemeHandler}
					/>
				</MainContent>
			</MainContainer>
		</ThemeProvider>
	);
}

const MainContainer = styled.main`
	display: flex;
	justify-content: center;
`;

const MainContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 6rem;
	width: 35%;
`;

export default App;
