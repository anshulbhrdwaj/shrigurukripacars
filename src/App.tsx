import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const cars = useSelector((store: RootState) => store.cars)

	return (
    <div>
      <h1 className="text-7xl font-bold">Hello world!</h1>
      <p className="text-6xl font-bold">{cars[0].name}</p>
    </div>
	);
}

export default App;
