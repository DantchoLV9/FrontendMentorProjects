import React from "react";

const TipButton = ({ percentage, setTipHandler, currentTip }) => {
	return (
		<button
			onClick={() =>
				currentTip === percentage ? setTipHandler(0) : setTipHandler(percentage)
			}
			className={`border-2 border-white focus:outline-none focus:border-primary font-bold text-2xl rounded-md p-2 hover:bg-hover hover:text-dark transition-colors
			${currentTip === percentage ? "bg-primary text-dark" : "bg-dark text-white"}`}
		>
			{percentage}%
		</button>
	);
};

export default TipButton;
