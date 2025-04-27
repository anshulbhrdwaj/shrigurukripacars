import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";

const Home = () => {
	const cars = useSelector((store: RootState) => store.cars);
	const theme = useSelector((store: RootState) => store.theme);

	const dispatch = useDispatch();

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<h1 className="text-7xl font-bold">Hello world!</h1>
			<p className="text-6xl font-bold">{cars[0].name}</p>
			<button
				className="text-6xl font-bold text-primary-foreground bg-primary p-4 rounded-2xl"
				onClick={() => dispatch(toggleTheme())}
			>
				{theme.mode}
			</button>
		</div>
	);
};

export default Home;
