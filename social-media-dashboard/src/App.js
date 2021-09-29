import GlobalStyles from "./components/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import darkTheme from "./themes/dark";
import lightTheme from "./themes/light";
import { useState } from "react";
import iconFacebook from "./images/icon-facebook.svg";
import iconInstagram from "./images/icon-instagram.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconYouTube from "./images/icon-youtube.svg";

function App() {
	const [currentTheme, setCurrentTheme] = useState(
		localStorage.getItem("theme") === "light" ? lightTheme : darkTheme
	);
	const themeSwitchHandler = (e) => {
		if (e.target.checked) {
			setCurrentTheme(lightTheme);
			localStorage.setItem("theme", "light");
		} else {
			setCurrentTheme(darkTheme);
			localStorage.setItem("theme", "dark");
		}
	};
	return (
		<ThemeProvider theme={currentTheme}>
			<MainContainer>
				<GlobalStyles />
				<Header
					themeButtonValue={currentTheme.name === "light" ? true : false}
					themeSwitchHandler={themeSwitchHandler}
				/>
				<main>
					<StatCards>
						<StatCard
							borderColor="hsl(208, 92%, 53%)"
							followers={123}
							socialMediaName="followers"
							icon={iconFacebook}
							iconAlt="facebook icon"
						/>
						<StatCard
							borderColor="hsl(203, 89%, 53%)"
							followers={12}
							socialMediaName="followers"
							icon={iconTwitter}
							iconAlt="twitter icon"
						/>
						<StatCard
							borderColor="linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
							followers={443}
							socialMediaName="followers"
							icon={iconInstagram}
							iconAlt="instagram icon"
						/>
						<StatCard
							borderColor="hsl(348, 97%, 39%)"
							followers={1233}
							socialMediaName="subscribers"
							icon={iconYouTube}
							iconAlt="youtube icon"
						/>
					</StatCards>
				</main>
			</MainContainer>
		</ThemeProvider>
	);
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	margin-top: 3rem;
	width: 80%;
`;

const StatCards = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 2rem;
`;

export default App;
