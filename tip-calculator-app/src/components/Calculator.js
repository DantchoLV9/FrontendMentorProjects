import React, { useEffect, useState, useRef } from "react";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import Input from "./Input";
import TipSelector from "./TipSelector";

const Calculator = () => {
	const [bill, setBill] = useState(0);
	const [numberOfPeople, setNumberOfPeople] = useState(0);
	const [tip, setTip] = useState(0);
	const [tipAmount, setTipAmount] = useState(0);
	const [total, setTotal] = useState(0);
	const [resetBtnState, setResetBtnState] = useState(false);
	const customTipField = useRef(null);
	const billField = useRef(null);
	const numberOfPeopleField = useRef(null);
	const setBillHandler = (e) => {
		if (e.target.value === "") {
			setBill(0);
		} else {
			setBill(parseFloat(e.target.value));
			setResetBtnState(true);
		}
	};
	const setNumberOfPeopleHandler = (e) => {
		if (e.target.value === "") {
			setNumberOfPeople(0);
		} else {
			setNumberOfPeople(e.target.value);
			setResetBtnState(true);
		}
	};
	const setTipHandler = (percentage) => {
		if (customTipField.current.value !== percentage) {
			customTipField.current.value = "";
		}
		setTip(percentage);
		setResetBtnState(true);
	};
	const resetHandler = () => {
		setBill(0);
		setNumberOfPeople(0);
		setTip(0);
		setTipAmount(0);
		setTotal(0);
		customTipField.current.value = "";
		setResetBtnState(false);
		billField.current.value = "";
		numberOfPeopleField.current.value = "";
	};
	useEffect(() => {
		if (bill === 0 || numberOfPeople === 0) {
			setTotal(0);
		} else {
			if (tip === 0) {
				setTipAmount(0);
			} else {
				setTipAmount(((bill / 100) * tip) / numberOfPeople);
			}
			setTotal(bill / numberOfPeople + ((bill / 100) * tip) / numberOfPeople);
		}
	}, [bill, numberOfPeople, tip]);
	return (
		<div className="bg-white p-7 rounded-3xl flex flex-row gap-x-10 w-3/5">
			<div className="flex flex-col flex-1 m-3 gap-y-10">
				<Input
					fieldRef={billField}
					icon={dollarIcon}
					handlerFunction={setBillHandler}
					text="Bill"
					regex="^\d+([.]\d{0,2})?$"
					value={bill}
					allowDecimal
				/>
				<TipSelector
					currentTip={tip}
					setTipHandler={setTipHandler}
					customTipField={customTipField}
				/>
				<Input
					fieldRef={numberOfPeopleField}
					icon={personIcon}
					handlerFunction={setNumberOfPeopleHandler}
					text={"Number of People"}
					regex="^[1-9]+\d*$"
					value={numberOfPeople}
				/>
			</div>
			<div className="flex flex-col flex-1 bg-dark p-10 rounded-2xl">
				<div className="flex flex-row justify-between text-white mb-14">
					<p className="font-bold">
						Tip Amount
						<br />
						<span className="text-lightText">/ person</span>
					</p>
					<span className="text-primary font-bold text-5xl">
						${tipAmount.toFixed(2)}
					</span>
				</div>
				<div className="flex flex-row justify-between text-white">
					<p className="font-bold">
						Total
						<br />
						<span className="text-lightText">/ person</span>
					</p>
					<span className="text-primary font-bold text-5xl">
						${total.toFixed(2)}
					</span>
				</div>
				<button
					disabled={!resetBtnState}
					onClick={resetHandler}
					className={`border-2 border-dark focus:outline-none focus:border-primary uppercase mt-auto text-2xl font-bold p-3 rounded-md transition-colors ${
						resetBtnState
							? "bg-primary text-dark cursor-pointer hover:bg-hover hover:text-dark"
							: "bg-disabled text-disabledText cursor-default"
					}`}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Calculator;
