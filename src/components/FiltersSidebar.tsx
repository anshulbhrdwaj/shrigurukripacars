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
import { useDispatch, useSelector } from "react-redux";
import { ICar } from "@/types";
import { Input } from "./ui/input";
import { RootState } from "@/redux/store";

const fuelTypes = ["Petrol", "Diesel", "Electric", "CNG", "Hybrid"];
const transmissionTypes = ["Manual", "Automatic"];
const ownershipOptions = ["1", "2", "3", "4", "5"];

const FiltersSidebar = ({ cars }: { cars: ICar[] }) => {
	const [open, setOpen] = useState(false);
	const {
		fuelType,
		transmission,
		owner: ownerFilter,
		minPrice,
		maxPrice,
		minKmDriven,
		maxKmDriven,
	} = useSelector((state: RootState) => state.filters);
	const dispatch = useDispatch();

	const prices = cars.map((car) => car.price);
	const kmDriven = cars.map((car) => car.kmDriven);

	const [minPriceValue, setMinPriceValue] = useState(Math.min(...prices));
	const [maxPriceValue, setMaxPriceValue] = useState(Math.max(...prices));
	const [minKm, setMinKmValue] = useState(Math.min(...kmDriven));
	const [maxKm, setMaxKmValue] = useState(Math.max(...kmDriven));

	useEffect(() => {
		dispatch(setMinPrice(minPriceValue));
		dispatch(setMaxPrice(maxPriceValue));
	}, [minPriceValue, maxPriceValue, dispatch]);

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
						initial={{ opacity: 0, display: "none" }}
						animate={{
							opacity: open ? 1 : 0,
							display: open ? "block" : "none",
						}}
						transition={{ duration: 1, delay: 0.8 }}
						className="text-background text-sm transition duration-150"
					>
						{label}
					</motion.span>
				)}
			</div>
			{open && (
				<motion.div
					initial={{ opacity: 0, display: "none" }}
					animate={{ opacity: 1, display: "block" }}
					transition={{ duration: 1, delay: 0.8 }}
					className="w-full"
				>
					{content}
				</motion.div>
			)}
		</div>
	);

	const renderToggleGroup = (
		options: string[],
		selected: string[] | string,
		onSelect: (value: string) => void,
		type: "multiple" | "single"
	) => (
		<ToggleGroup type={type} variant="outline" className="ml-8 flex-wrap gap-4">
			{options.map((option) => {
				const isSelected = Array.isArray(selected)
					? selected.includes(option)
					: selected === option ||
					  (Number(selected) !== 6 && Number(option) <= Number(selected));

				return (
					<ToggleGroupItem
						key={option}
						value={option}
						aria-label={option}
						aria-pressed={isSelected}
						className={`px-6 py-3 rounded-full border-primary text-xs cursor-pointer ${
							isSelected ? "bg-primary text-background" : ""
						}`}
						onClick={() => onSelect(option)}
					>
						{option}
					</ToggleGroupItem>
				);
			})}
		</ToggleGroup>
	);

	return (
		<Sidebar open={open} setOpen={setOpen}>
			<SidebarBody className="bg-foreground/95 text-background rounded-lg gap-10 z-[60] h-[86.5dvh] sm:h-full">
				<div className="flex flex-1 flex-col overflow-auto">
					{open ? <Logo open /> : <LogoIcon />}

					<div className="mt-8 flex flex-col gap-4">
						{renderFilterGroup(
							<Fuel className="h-5 w-5 text-background" />,
							"Fuel Type",
							renderToggleGroup(
								fuelTypes,
								fuelType,
								(val) => dispatch(setFuelType(val)),
								"multiple"
							)
						)}

						{renderFilterGroup(
							<Cog className="h-5 w-5 text-background" />,
							"Transmission",
							renderToggleGroup(
								transmissionTypes,
								transmission,
								(val) => dispatch(setTransmission(val)),
								"multiple"
							)
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
									value={minKmDriven}
									onChange={(e) => setMinKmValue(Number(e.target.value))}
									placeholder="Min"
									className="w-1/2 rounded-full border-primary"
								/>
								-
								<Input
									type="number"
									value={maxKmDriven}
									onChange={(e) => setMaxKmValue(Number(e.target.value))}
									placeholder="Max"
									className="w-1/2 rounded-full border-primary"
								/>
							</div>
						)}

						{renderFilterGroup(
							<UserRound className="h-5 w-5 text-background" />,
							"Previous Owners",
							renderToggleGroup(
								ownershipOptions,
								ownerFilter.toString(),
								(val) => dispatch(setOwner(Number(val))),
								"single"
							)
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

export const Logo = ({ open }: { open: boolean }) => (
	<a className="flex items-center space-x-2 py-1 text-sm text-background">
		<Funnel className="h-5 w-6 text-background" />
		<motion.span
			initial={{ opacity: 0, display: "none" }}
			animate={{
				opacity: open ? 1 : 0,
				display: open ? "block" : "none",
			}}
			transition={{ duration: 1, delay: 1 }}
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
