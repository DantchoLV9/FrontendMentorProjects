import React from "react";

const TipButton = ({ percentage, setTipHandler, currentTip }) => {
	return (
		<button
			onClick={() =>
				currentTip === percentage ? setTipHandler(0) : setTipHandler(percentage)
			}
			className={` font-bold text-2xl rounded-md p-2 
			${currentTip === percentage ? "bg-primary text-dark" : "bg-dark text-white"}`}
		>
			{percentage}%
		</button>
	);
};

export default TipButton;
