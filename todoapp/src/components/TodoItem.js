import React from "react";
import styled from "styled-components";
import TodoCheckbox from "./TodoCheckbox";

const TodoItem = ({ todo }) => {
	return (
		<StyledTodoItem>
			<div>
				<TodoCheckbox />
			</div>

			{todo.text}
		</StyledTodoItem>
	);
};

const StyledTodoItem = styled.div`
	display: flex;
	font-size: 1.4rem;
	padding: 1.2rem;
	border-bottom: 1px solid ${(props) => props.theme.border};
	color: ${(props) => props.theme.text};
	width: 100%;
	column-gap: 1.2rem;
`;

export default TodoItem;
