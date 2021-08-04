import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList }) => {
	return (
		<StyledTodoList>
			{todoList.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
			<ControlsSection>
				<div># items left</div>
				<DisplayControls>
					<div>All</div>
					<div>Active</div>
					<div>Completed</div>
				</DisplayControls>
				<div>Clear Completed</div>
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
`;

const DisplayControls = styled.div`
	display: flex;
	column-gap: 1rem;
	font-weight: 700;
`;

export default TodoList;
