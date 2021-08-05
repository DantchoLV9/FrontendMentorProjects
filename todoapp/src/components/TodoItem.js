import React from "react";
import styled from "styled-components";
import TodoCheckbox from "./TodoCheckbox";
import iconCross from "../images/icon-cross.svg";

const TodoItem = ({ todo, todoStateHandler, removeTodoHandler }) => {
	return (
		<StyledTodoItem className={todo.state ? "completed" : ""}>
			<div>
				<TodoCheckbox
					todo={todo}
					todoStateHandler={todoStateHandler}
					checked={todo.state}
				/>
			</div>
			<p>{todo.text}</p>
			<DeleteButtonWrapper>
				<DeleteButton
					onClick={() => removeTodoHandler(todo.id)}
					aria-label="delete task"
				>
					<img src={iconCross} alt="" />
				</DeleteButton>
			</DeleteButtonWrapper>
		</StyledTodoItem>
	);
};

const StyledTodoItem = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.4rem;
	padding: 1.2rem;
	border-bottom: 1px solid ${(props) => props.theme.border};
	color: ${(props) => props.theme.text};
	width: 100%;
	column-gap: 1.2rem;
	p {
		width: 100%;
	}
	&.completed {
		color: ${(props) => props.theme.completedText};
		text-decoration: line-through;
	}
	:hover {
		button {
			display: flex;
		}
	}
`;

const DeleteButtonWrapper = styled.div`
	margin-left: auto;
`;

const DeleteButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	display: none;
	align-items: center;
	@media (max-width: 700px) {
		display: flex;
	}
`;

export default TodoItem;
