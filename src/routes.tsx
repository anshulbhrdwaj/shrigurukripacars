import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import App from "./App";
import Preloader from "./components/Preloader";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const Services = lazy(() => import("./pages/Services"));
const SellYourCar = lazy(() => import("./pages/SellYourCar"));
const Finance = lazy(() => import("./pages/Finance"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const withPreloader = (Page: React.ComponentType) => ({
  element: (
    <Preloader>
      <Page />
    </Preloader>
  ),
});

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, ...withPreloader(Home) },
      { path: "collection", ...withPreloader(Collection) },
      { path: "services", ...withPreloader(Services) },
      { path: "sell-your-car", ...withPreloader(SellYourCar) },
      { path: "emi-calculator/:carId?", ...withPreloader(Finance) },
      { path: "about-us", ...withPreloader(AboutUs) },
      { path: "contact-us", ...withPreloader(ContactUs) },
    ],
  },
]);

export default router;
