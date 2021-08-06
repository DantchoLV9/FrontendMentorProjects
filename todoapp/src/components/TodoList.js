import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({
	todoList,
	todoStateHandler,
	clearCompletedHandler,
	removeTodoHandler,
}) => {
	const [displayMode, setDisplayMode] = useState(
		localStorage.getItem("displayMode")
	);
	useEffect(() => {
		localStorage.setItem("displayMode", displayMode);
	}, [displayMode]);
	let todosToDisplay;
	switch (displayMode) {
		case "all":
			todosToDisplay = todoList;
			break;
		case "active":
			todosToDisplay = todoList.filter((todo) => !todo.state);
			break;
		case "completed":
			todosToDisplay = todoList.filter((todo) => todo.state);
			break;
		default:
			setDisplayMode("all");
			todosToDisplay = todoList;
	}
	const remainingTasks = todosToDisplay.filter(
		(task) => task.state === false
	).length;
	return (
		<StyledTodoList>
			{todosToDisplay.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					todoStateHandler={todoStateHandler}
					removeTodoHandler={removeTodoHandler}
				/>
			))}
			{todosToDisplay.length === 0 ? (
				<NoDataMessage>
					<p>No data to show</p>
				</NoDataMessage>
			) : (
				""
			)}
			<ControlsSection>
				<p>{remainingTasks} items left</p>
				<DisplayControls>
					<button
						className={displayMode === "all" ? "selected" : ""}
						onClick={() => setDisplayMode("all")}
					>
						All
					</button>
					<button
						className={displayMode === "active" ? "selected" : ""}
						onClick={() => setDisplayMode("active")}
					>
						Active
					</button>
					<button
						className={displayMode === "completed" ? "selected" : ""}
						onClick={() => setDisplayMode("completed")}
					>
						Completed
					</button>
				</DisplayControls>
				<button onClick={clearCompletedHandler}>Clear Completed</button>
			</ControlsSection>
		</StyledTodoList>
	);
};

const StyledTodoList = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	border-radius: 5px;
	width: 100%;
	background: ${(props) => props.theme.contentBg};
	box-shadow: 0px 10px 40px 5px ${(props) => props.theme.shadow};
`;

const ControlsSection = styled.div`
	font-size: 1rem;
	padding: 1.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${(props) => props.theme.grayText};
	position: relative;
	button {
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		color: inherit;
		background: none;
		border: none;
		cursor: pointer;
		:hover {
			color: ${(props) => props.theme.text};
		}
		&.selected {
			color: ${(props) => props.theme.blue};
		}
	}
`;

const NoDataMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.2rem;
	color: ${(props) => props.theme.text};
	font-size: 1.4rem;
	border-bottom: 1px solid ${(props) => props.theme.border};
`;

const DisplayControls = styled.div`
	display: flex;
	column-gap: 1rem;
	font-weight: 700;
	@media (max-width: 700px) {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 135%;
		left: 0;
		width: 100%;
		padding: 1rem;
		border-radius: 5px;
		background: ${(props) => props.theme.contentBg};
		box-shadow: 0px 5px 20px 5px ${(props) => props.theme.shadow};
	}
`;

export default TodoList;
