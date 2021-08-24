import logo from "./images/logo.svg";
import dollarIcon from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";

function App() {
	return (
		<div className="flex justify-center items-center min-h-screen flex-col">
			<img src={logo} alt="Splitter" className="mb-24" />
			<div className="bg-white p-7 rounded-3xl flex flex-row gap-x-10 w-3/5">
				<div className="flex flex-col flex-1 m-3 gap-y-10">
					<div className="flex flex-col">
						<label className="text-text font-bold mb-2">Bill</label>
						<div className="relative">
							<img
								className="w-3 absolute top-1/2 transform -translate-y-1/2 left-4"
								src={dollarIcon}
								alt=""
							/>
							<input
								className="bg-inputBG p-2 pl-12 pr-4 w-full rounded-md text-2xl font-bold text-right placeholder-text placeholder-opacity-60 focus:outline-none"
								type="text"
								placeholder="0"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<label className="text-text font-bold mb-2">Select Tip %</label>
						<div className="grid grid-cols-3 gap-3">
							<button className="bg-dark text-white font-bold text-2xl rounded-md p-2">
								5%
							</button>
							<button className="bg-dark text-white font-bold text-2xl rounded-md p-2">
								10%
							</button>
							<button className="bg-dark text-white font-bold text-2xl rounded-md p-2">
								15%
							</button>
							<button className="bg-dark text-white font-bold text-2xl rounded-md p-2">
								25%
							</button>
							<button className="bg-dark text-white font-bold text-2xl rounded-md p-2">
								50%
							</button>
							<input
								className="bg-inputBG p-2 rounded-md text-center text-2xl font-bold placeholder-text focus:outline-none"
								placeholder="Custom"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<label className="text-text font-bold mb-2">Number of People</label>
						<div className="relative">
							<img
								className="w-3 absolute top-1/2 transform -translate-y-1/2 left-4"
								src={personIcon}
								alt=""
							/>
							<input
								className="bg-inputBG p-2 pl-12 pr-4 w-full rounded-md text-2xl font-bold text-right placeholder-text placeholder-opacity-60 focus:outline-none"
								type="text"
								placeholder="0"
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col flex-1 bg-dark p-10 rounded-2xl">
					<div className="flex flex-row justify-between text-white mb-14">
						<p className="font-bold">
							Tip Amount
							<br />
							<span className="text-lightText">/ person</span>
						</p>
						<span className="text-primary font-bold text-5xl">$0.00</span>
					</div>
					<div className="flex flex-row justify-between text-white">
						<p className="font-bold">
							Total
							<br />
							<span className="text-lightText">/ person</span>
						</p>
						<span className="text-primary font-bold text-5xl">$0.00</span>
					</div>
					<button className="uppercase mt-auto text-2xl font-bold p-3 bg-disabled text-disabledText rounded-md">
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
