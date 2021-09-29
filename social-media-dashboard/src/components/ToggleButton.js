import styled from "styled-components";

const ToggleButton = ({ value, changeHandler }) => {
	return (
		<StyledToggleButton>
			<StyledInput type="checkbox" checked={value} onChange={changeHandler} />
			<Slider></Slider>
		</StyledToggleButton>
	);
};

const StyledToggleButton = styled.label`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
	input {
		opacity: 0;
		width: 0;
		height: 0;
	}
`;

const Slider = styled.div`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;
	::before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
`;

const StyledInput = styled.input`
	:checked + ${Slider} {
		background: hsl(230, 22%, 74%);
	}
	:focus + ${Slider} {
		box-shadow: 0 0 1px hsl(230, 22%, 74%);
	}
	:checked + ${Slider}::before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
`;

export default ToggleButton;
