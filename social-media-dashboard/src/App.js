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
import OverviewCard from "./components/OverviewCard";

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
							data={1987}
							dataName="followers"
							icon={iconFacebook}
							linkText="@nathanf"
							changeCount={12}
							changePositive={true}
						/>
						<StatCard
							borderColor="hsl(203, 89%, 53%)"
							data={1004}
							dataName="followers"
							icon={iconTwitter}
							linkText="@nathanf"
							changeCount={99}
							changePositive={true}
						/>
						<StatCard
							borderColor="linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
							data={"11k"}
							dataName="followers"
							icon={iconInstagram}
							linkText="@realnathanf"
							changeCount={1099}
							changePositive={true}
						/>
						<StatCard
							borderColor="hsl(348, 97%, 39%)"
							data={8239}
							dataName="subscribers"
							icon={iconYouTube}
							linkText="Nathan F."
							changeCount={144}
							changePositive={false}
						/>
					</StatCards>
					<h2>Overview - Today</h2>
					<OverviewCards>
						<OverviewCard
							icon={iconFacebook}
							data={87}
							dataName="Page Views"
							changeCount={3}
							changePositive={true}
						/>
						<OverviewCard
							icon={iconFacebook}
							data={52}
							dataName="Likes"
							changeCount={2}
							changePositive={false}
						/>
						<OverviewCard
							icon={iconInstagram}
							data={5462}
							dataName="Likes"
							changeCount={2257}
							changePositive={true}
						/>
						<OverviewCard
							icon={iconInstagram}
							data={"52k"}
							dataName="Profile Views"
							changeCount={1375}
							changePositive={true}
						/>
						<OverviewCard
							icon={iconTwitter}
							data={117}
							dataName="Retweets"
							changeCount={303}
							changePositive={true}
						/>
						<OverviewCard
							icon={iconTwitter}
							data={507}
							dataName="Likes"
							changeCount={553}
							changePositive={true}
						/>
						<OverviewCard
							icon={iconYouTube}
							data={107}
							dataName="Likes"
							changeCount={19}
							changePositive={false}
						/>
						<OverviewCard
							icon={iconYouTube}
							data={1407}
							dataName="Total Views"
							changeCount={12}
							changePositive={false}
						/>
					</OverviewCards>
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
	margin-bottom: 3rem;
	width: 80%;
	main {
		h2 {
			margin-top: 3.5rem;
			margin-bottom: 2rem;
			color: ${(props) => props.theme.blueFg};
		}
	}
	@media (max-width: 375px) {
		width: 90%;
	}
`;

const StatCards = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 2rem;
	column-gap: 2rem;
	@media (max-width: 375px) {
		row-gap: 1.5rem;
	}
`;

const OverviewCards = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 2rem;
	column-gap: 2rem;
	@media (max-width: 375px) {
		row-gap: 1rem;
	}
`;

export default App;
