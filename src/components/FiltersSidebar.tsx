import { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarSection } from "@/components/ui/sidebar";
import { motion } from "motion/react";
import {
	Funnel,
	Cog,
	Fuel,
	IndianRupee,
	Navigation,
	UserRound,
} from "lucide-react";
import {
	setFuelType,
	setMaxKmDriven,
	setMaxPrice,
	setMinKmDriven,
	setMinPrice,
	setOwner,
	setTransmission,
} from "@/redux/slices/filterSlice";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useDispatch } from "react-redux";
import { ICar } from "@/types";
import { Input } from "./ui/input";

const fuelTypes = ["Petrol", "Diesel", "Electric", "CNG", "Hybrid"];
const transmissionTypes = ["Manual", "Automatic"];
const ownershipOptions = ["1", "2", "3", "4", "5"];

const FiltersSidebar = ({ cars }: { cars: ICar[] }) => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const prices = cars.map((car) => car.price);
	const kmDriven = cars.map((car) => car.kmDriven);

	const [minPrice, setMinPriceValue] = useState(Math.min(...prices));
	const [maxPrice, setMaxPriceValue] = useState(Math.max(...prices));
	const [minKm, setMinKmValue] = useState(Math.min(...kmDriven));
	const [maxKm, setMaxKmValue] = useState(Math.max(...kmDriven));

	useEffect(() => {
		dispatch(setMinPrice(minPrice));
		dispatch(setMaxPrice(maxPrice));
	}, [minPrice, maxPrice, dispatch]);

	useEffect(() => {
		dispatch(setMinKmDriven(minKm));
		dispatch(setMaxKmDriven(maxKm));
	}, [minKm, maxKm, dispatch]);

	const renderFilterGroup = (
		icon: React.ReactNode,
		label: string,
		content: React.ReactNode
	) => (
		<div className="flex flex-col items-start gap-2 py-2 w-full">
			<div className="flex items-center gap-2">
				{icon}
				{open && (
					<motion.span
						animate={{ opacity: open ? 1 : 0 }}
						className="text-background text-sm transition duration-150"
					>
						{label}
					</motion.span>
				)}
			</div>
			{open && (
				<motion.div
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="w-full"
				>
					{content}
				</motion.div>
			)}
		</div>
	);

	return (
		<Sidebar open={open} setOpen={setOpen}>
			<SidebarBody className="bg-foreground/95 text-background rounded-lg w-full gap-10 z-50">
				<div className="flex flex-1 flex-col overflow-auto">
					{open ? <Logo /> : <LogoIcon />}

					<div className="mt-8 flex flex-col gap-4">
						{renderFilterGroup(
							<Fuel className="h-5 w-5 text-background" />,
							"Fuel Type",
							<ToggleGroup
								type="multiple"
								variant="outline"
								className="ml-8 flex-wrap gap-4"
							>
								{fuelTypes.map((type) => (
									<ToggleGroupItem
										key={type}
										value={type}
										aria-label={type}
										className="px-6 py-3 rounded-full border-primary text-xs cursor-pointer"
										onClick={() => dispatch(setFuelType(type))}
									>
										{type}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						)}

						{renderFilterGroup(
							<Cog className="h-5 w-5 text-background" />,
							"Transmission",
							<ToggleGroup
								type="multiple"
								variant="outline"
								className="ml-8 flex-wrap gap-4"
							>
								{transmissionTypes.map((type) => (
									<ToggleGroupItem
										key={type}
										value={type}
										aria-label={type}
										className="px-6 py-3 rounded-full border-primary text-xs cursor-pointer"
										onClick={() => dispatch(setTransmission(type))}
									>
										{type}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						)}

						{renderFilterGroup(
							<IndianRupee className="h-5 w-5 text-background" />,
							"Price",
							<div className="flex items-center gap-2 pl-8">
								<Input
									type="number"
									value={minPrice}
									onChange={(e) => setMinPriceValue(Number(e.target.value))}
									placeholder="Min"
									className="w-1/2 rounded-full border-primary"
								/>
								-
								<Input
									type="number"
									value={maxPrice}
									onChange={(e) => setMaxPriceValue(Number(e.target.value))}
									placeholder="Max"
									className="w-1/2 rounded-full border-primary"
								/>
							</div>
						)}

						{renderFilterGroup(
							<Navigation className="h-5 w-5 text-background" />,
							"Kilometer Driven",
							<div className="flex items-center gap-2 pl-8">
								<Input
									type="number"
									value={minKm}
									onChange={(e) => setMinKmValue(Number(e.target.value))}
									placeholder="Min"
									className="w-1/2 rounded-full border-primary"
								/>
								-
								<Input
									type="number"
									value={maxKm}
									onChange={(e) => setMaxKmValue(Number(e.target.value))}
									placeholder="Max"
									className="w-1/2 rounded-full border-primary"
								/>
							</div>
						)}

						{renderFilterGroup(
							<UserRound className="h-5 w-5 text-background" />,
							"Previous Owners",
							<ToggleGroup
								type="single"
								variant="outline"
								className="ml-8 flex-wrap gap-2"
							>
								{ownershipOptions.map((owner) => (
									<ToggleGroupItem
										key={owner}
										value={owner}
										aria-label={owner}
										className="p-4 rounded-full border-primary text-xs cursor-pointer"
										onClick={() => dispatch(setOwner(Number(owner)))}
									>
										{owner}
									</ToggleGroupItem>
								))}
							</ToggleGroup>
						)}
					</div>
				</div>

				<SidebarSection
					section={{
						label: "Shri Gurukripa Cars",
						icon: (
							<img
								src="/vite.svg"
								alt="Avatar"
								className="h-7 w-7 rounded-full"
								width={50}
								height={50}
							/>
						),
					}}
				/>
			</SidebarBody>
		</Sidebar>
	);
};

export default FiltersSidebar;

export const Logo = () => (
	<a className="flex items-center space-x-2 py-1 text-sm text-background">
		<Funnel className="h-5 w-6 text-background" />
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="font-medium"
		>
			Filters
		</motion.span>
	</a>
);

export const LogoIcon = () => (
	<a className="flex items-center space-x-2 py-1 text-sm text-background">
		<Funnel className="h-5 w-6 text-background" />
	</a>
);
