import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="min-h-screen sm:h-screen text-lg">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default App;
