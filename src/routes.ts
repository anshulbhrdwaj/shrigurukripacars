import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import App from "./App";
import Collection from "./pages/Collection";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import CarDetails from "./components/CarDetails";
import SellYourCar from "./pages/SellYourCar";
import Finance from "./pages/Finance";

const router = createBrowserRouter([
	{
		Component: App,
		children: [
			{ index: true, Component: Home },
			{ path: "collection", Component: Collection },
			{ path: "collection/:carId", Component: CarDetails },
			{ path: "services", Component: Services },
			{ path: "sell-your-car", Component: SellYourCar },
			{ path: "emi-calculator", Component: Finance },
			{ path: "about-us", Component: AboutUs },
			{ path: "contact-us", Component: ContactUs },
		],
	},
]);

export default router;
