import Header from "./components/header";
import About from "./components/about";
import ProjectsGallery from "./components/projectsGallery";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<div className="px-12 xl:px-56 pt-12 xl:pt-24 h-screen md:h-auto bg-mobileHero md:bg-hero bg-no-repeat bg-center bg-cover bg-blend-multiply md:bg-gray-400">
				<Header />
			</div>
			<div className="px-12 xl:px-56 h-screen flex items-center">
				<About />
			</div>
			<div className="px-12 md:pb-24 xl:pb-36 xl:px-56 flex flex-col items-center">
				<ProjectsGallery />
			</div>
			<div className="px-12 py-20 lg:py-16 xl:px-56 flex flex-col bg-black text-white">
				<Footer />
			</div>
		</>
	);
}

export default App;
