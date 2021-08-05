import React from "react";
import styled from "styled-components";
import iconCheck from "../images/icon-check.svg";

const TodoCheckbox = ({ todo, checked, todoStateHandler }) => {
	return (
		<StyledTodoCheckbox
			onClick={() => todoStateHandler(todo.id, !todo.state)}
			className={checked ? "checked" : ""}
		>
			{checked && <img src={iconCheck} alt="" />}
		</StyledTodoCheckbox>
	);
};

const StyledTodoCheckbox = styled.div`
	width: 25px;
	height: 25px;
	border: 1px solid ${(props) => props.theme.border};
	cursor: pointer;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 50%;
		object-fit: contain;
	}
	&.checked {
		background: linear-gradient(
			to top left,
			hsl(280, 87%, 65%),
			hsl(192, 100%, 67%)
		);
		border: none;
	}
	:not(.checked):hover {
		border: double 1px transparent;
		background-image: linear-gradient(
				${(props) => props.theme.contentBg},
				${(props) => props.theme.contentBg}
			),
			radial-gradient(
				circle at top left,
				hsl(192, 100%, 67%),
				hsl(280, 87%, 65%)
			);
		background-origin: border-box;
		background-clip: content-box, border-box;
	}
`;

export default TodoCheckbox;
