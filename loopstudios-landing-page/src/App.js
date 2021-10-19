import Header from "./components/header";
import imageInteractive from "./images/desktop/image-interactive.jpg";

function App() {
	return (
		<>
			<div className="px-12 xl:px-56 pt-12 xl:pt-24 h-screen md:h-auto bg-mobileHero md:bg-hero bg-no-repeat bg-center bg-cover bg-blend-multiply md:bg-gray-400">
				<Header />
			</div>
			<div className="px-56 h-screen flex items-center relative">
				<div className="relative w-full h-2/3">
					<img className="h-full left-0" src={imageInteractive} alt="" />
					<div className="bg-white pt-28 pl-28 absolute left-1/2 bottom-0">
						<h2 className="inline text-6xl font-josefin uppercase">
							The Leader In <br />
							Interactive VR
						</h2>
						<p className="font-medium text-darkGray text-xl leading-8 mt-10 font-alata">
							Founded in 2011, Loopstudios has been producing world-class
							virtual reality projects for some of the best companies around the
							globe. Our award-winning creations have transformed businesses
							through digital experiences that bind to their brand.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
