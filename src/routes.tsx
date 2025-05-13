import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "./App";
import Preloader, { Loading } from "./components/Preloader";

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

const withSuspense = (Page: React.ComponentType) => ({
  element: (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  ),
})

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      { index: true, ...withPreloader(Home) },
      { path: "collection", ...withSuspense(Collection) },
      { path: "services", ...withSuspense(Services) },
      { path: "sell-your-car", ...withSuspense(SellYourCar) },
      { path: "emi-calculator/:carId?", ...withSuspense(Finance) },
      { path: "about-us", ...withSuspense(AboutUs) },
      { path: "contact-us", ...withSuspense(ContactUs) },
    ],
  },
]);

export default router;
