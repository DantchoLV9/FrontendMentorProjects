import Calculator from "./components/Calculator";
import logo from "./images/logo.svg";

function App() {
	return (
		<div className="flex justify-between md:justify-center items-center min-h-screen flex-col">
			<img src={logo} alt="Splitter" className="my-auto md:my-0 md:mb-24" />
			<Calculator />
		</div>
	);
}

export default App;
