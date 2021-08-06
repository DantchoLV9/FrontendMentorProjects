import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

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

	useEffect(() => {
		if (localStorage.getItem("todos")) {
			setTodoList(JSON.parse(localStorage.getItem("todos")));
		}
	}, []);

	const addTodoHandler = (text) => {
		let newTodo = { id: uuidv4(), text: text, state: false };
		setTodoList([...todoList, newTodo]);
		localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));
	};

	const removeTodoHandler = (id) => {
		let todos = todoList.filter((todo) => todo.id !== id);
		setTodoList(todos);
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const todoStateHandler = (id, state) => {
		let todos = todoList;
		let currentTodo = todoList.find((task) => task.id === id);
		let currentTodoIndex = todoList.indexOf(currentTodo);
		currentTodo.state = state;
		todos[currentTodoIndex] = currentTodo;
		setTodoList([...todos]);
		localStorage.setItem("todos", JSON.stringify([...todos]));
	};

	const clearCompletedHandler = () => {
		let todos = todoList.filter((todo) => !todo.state);
		setTodoList(todos);
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		const todos = todoList;
		const currentTodo = todoList.find((todo) => todo.id === draggableId);
		if (!destination) {
			return;
		}
		if (destination.index === source.index) {
			return;
		}
		todos.splice(source.index, 1);
		todos.splice(destination.index, 0, currentTodo);
		setTodoList(todos);
		localStorage.setItem("todos", JSON.stringify(todos));
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
					<DragDropContext onDragEnd={onDragEnd}>
						<TodoList
							todoList={todoList}
							todoStateHandler={todoStateHandler}
							clearCompletedHandler={clearCompletedHandler}
							removeTodoHandler={removeTodoHandler}
						/>
					</DragDropContext>
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
