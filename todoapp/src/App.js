import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import TodoInput from "./components/TodoInput";

function App() {
	// Code for the themes
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
	// Code for the todos
	const [todoList, setTodoList] = useState([]);

	const addTodoHandler = (text) => {
		let newTodo = { id: uuidv4(), text: text };
		setTodoList([...todoList, newTodo]);
		localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));
	};

	console.log(todoList);
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
					<TodoInput addTodoHandler={addTodoHandler} />
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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 6rem;
	width: 35%;
	@media (max-width: 1300px) {
		width: 50%;
	}
	@media (max-width: 1000px) {
		width: 70%;
	}
	@media (max-width: 700px) {
		width: 90%;
	}
`;

export default App;
