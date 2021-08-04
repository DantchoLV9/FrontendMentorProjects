import React from "react";
import styled from "styled-components";

const TodoCheckbox = () => {
	return <StyledTodoCheckbox></StyledTodoCheckbox>;
};

const StyledTodoCheckbox = styled.div`
	width: 25px;
	height: 25px;
	border: 1px solid ${(props) => props.theme.border};
	cursor: pointer;
	border-radius: 50%;
	:hover {
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
