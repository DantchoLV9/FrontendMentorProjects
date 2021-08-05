import React, { useState } from "react";
import styled from "styled-components";

const TodoInput = ({ addTodoHandler }) => {
	const [todoText, setTodoText] = useState("");
	const setTodoTextHandler = (e) => {
		setTodoText(e.target.value);
	};
	const submitTodo = (e) => {
		e.preventDefault();
		if (todoText) {
			addTodoHandler(todoText);
			setTodoText("");
		}
	};

	return (
		<TodoInputContainer onSubmit={submitTodo}>
			<div>
				<CheckBox></CheckBox>
			</div>
			<StyledInput
				onChange={setTodoTextHandler}
				type="text"
				placeholder="Create a new todo..."
				value={todoText}
			/>
		</TodoInputContainer>
	);
};

const TodoInputContainer = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	background: ${(props) => props.theme.contentBg};
	border-radius: 5px;
	overflow: hidden;
	padding-left: 1.2rem;
	margin-bottom: 2rem;
`;

const CheckBox = styled.div`
	width: 25px;
	height: 25px;
	border: 1px solid ${(props) => props.theme.border};
	border-radius: 50%;
`;

const StyledInput = styled.input`
	font-size: 1.4rem;
	padding: 1.2rem;
	border: none;
	width: 100%;
	outline: none;
	font-family: "Josefin Sans", sans-serif;
	background: none;
	color: ${(props) => props.theme.text};
	caret-color: ${(props) => props.theme.blue};
	::placeholder {
		color: ${(props) => props.theme.grayText};
		font-family: "Josefin Sans", sans-serif;
	}
`;

export default TodoInput;
