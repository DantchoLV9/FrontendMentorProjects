import React from "react";
import TipButton from "./TipButton";

const TipSelector = ({ currentTip, setTipHandler, customTipField }) => {
	return (
		<div className="flex flex-col">
			<label className="text-text font-bold mb-2">Select Tip %</label>
			<div className="grid grid-cols-3 gap-3">
				<TipButton
					percentage="5"
					setTipHandler={setTipHandler}
					currentTip={currentTip}
				/>
				<TipButton
					percentage="10"
					setTipHandler={setTipHandler}
					currentTip={currentTip}
				/>
				<TipButton
					percentage="15"
					setTipHandler={setTipHandler}
					currentTip={currentTip}
				/>
				<TipButton
					percentage="25"
					setTipHandler={setTipHandler}
					currentTip={currentTip}
				/>
				<TipButton
					percentage="50"
					setTipHandler={setTipHandler}
					currentTip={currentTip}
				/>
				<input
					className="bg-inputBG border-2 border-white focus:border-primary transition caret-primary p-2 rounded-md text-center text-2xl text-dark font-bold placeholder-text focus:outline-none"
					placeholder="Custom"
					onChange={(e) => setTipHandler(e.target.value)}
					ref={customTipField}
				/>
			</div>
		</div>
	);
};

export default TipSelector;
