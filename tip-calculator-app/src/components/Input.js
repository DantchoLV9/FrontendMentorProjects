import React from "react";

const Input = ({ value, icon, handlerFunction, text, regex }) => {
	return (
		<div className="flex flex-col">
			<label className="text-text font-bold mb-2">{text}</label>
			<div className="relative">
				<img
					className="w-3 absolute top-1/2 transform -translate-y-1/2 left-4"
					src={icon}
					alt=""
				/>
				<input
					onChange={handlerFunction}
					className="bg-inputBG p-2 pl-12 pr-4 w-full rounded-md text-2xl font-bold text-dark text-right placeholder-text placeholder-opacity-60 focus:outline-none"
					type="text"
					value={value === 0 ? "" : value}
					placeholder="0"
					onKeyPress={(event) =>
						RegExp(regex).test(event.target.value + event.key) ||
						event.preventDefault()
					}
				/>
			</div>
		</div>
	);
};

export default Input;
