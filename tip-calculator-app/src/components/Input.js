import React, { useState } from "react";

const Input = ({
	fieldRef,
	icon,
	handlerFunction,
	text,
	regex,
	allowDecimal,
}) => {
	const [isInvalid, setIsInvalid] = useState(false);
	return (
		<div className="flex flex-col relative">
			<label className="text-text font-bold mb-2">{text}</label>
			{isInvalid && (
				<span className="absolute right-0 font-bold text-errorText">
					Can't be zero
				</span>
			)}
			<div className="relative">
				<img
					className="w-3 absolute top-1/2 transform -translate-y-1/2 left-4"
					src={icon}
					alt=""
				/>
				<input
					onChange={handlerFunction}
					ref={fieldRef}
					className="bg-inputBG border-2 border-white focus:border-primary transition caret-primary p-2 pl-12 pr-4 w-full rounded-md text-2xl font-bold text-dark text-right placeholder-text placeholder-opacity-60 focus:outline-none"
					type="text"
					placeholder="0"
					onKeyPress={(event) => {
						if (allowDecimal) {
							if (event.key === "0") {
								if (event.target.value === "0.0") {
									setIsInvalid(true);
								}
							} else {
								setIsInvalid(false);
							}
						} else {
							if (event.key === "0") {
								if (event.target.value === "") {
									setIsInvalid(true);
								}
							} else {
								setIsInvalid(false);
							}
						}
						RegExp(regex).test(event.target.value + event.key) ||
							event.preventDefault();
					}}
				/>
			</div>
		</div>
	);
};

export default Input;
