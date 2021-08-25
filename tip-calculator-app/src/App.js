import Calculator from "./components/Calculator";
import logo from "./images/logo.svg";

function App() {
	return (
		<div className="flex justify-center items-center min-h-screen flex-col">
			<img src={logo} alt="Splitter" className="mb-24" />
			<Calculator />
		</div>
	);
}

export default App;
