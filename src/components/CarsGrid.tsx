import { Card, CardContent } from "@/components/ui/card";
import { Cog, Fuel, Navigation, UserRound } from "lucide-react";
import { ICar } from "@/types";
import CarDetails from "./CarDetails";
import { useRef } from "react";
import { useLenis } from "@/hooks/useLenis";

const CarsGrid = ({ cars }: { cars: ICar[] }) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	useLenis(true, scrollRef.current);
	
	return (
		<div
			ref={scrollRef}
			className="w-full rounded-3xl overflow-hidden grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8 p-0"
		>
			{cars.map((car) => (
				<Card
					key={car.id}
					className=" bg-foreground h-[50vh] rounded-3xl min-w-[24dvw] border-none relative font-recoleta p-4 pb-3"
				>
					<CardContent className="h-full flex flex-col p-0">
						<img
							src={car.thumbnail}
							alt={car.name}
							className="w-full h-[28vmax] md:h-[28dvh] m-0 rounded-2xl object-cover"
						/>

						<div className="flex flex-col justify-between h-full px-4 xl:px-4 pb-1 md:pb-2 pt-4">
							<div className="flex flex-col gap-1">
								<p className="text-lg md:text-2xl font-semibold text-background/80">
									{car.name}
								</p>
								<p className="text-base md:text-lg text-background/80">
									{car.description}
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-xs text-background/60 w-full flex flex-col items-start">
									<span className="flex items-start gap-4">
										<span className="flex items-center gap-2">
											<Fuel size={14} className="mb-1" /> {car.fuelType}
										</span>
										<span className="flex items-center gap-2">
											<UserRound size={14} className="mb-1" /> {car.owner}
										</span>
									</span>
									<span className="flex items-start gap-4">
										<span className="flex items-center gap-2">
											<Cog size={14} /> {car.transmission}
										</span>
										<span className="flex items-center gap-2">
											<Navigation size={14} /> {car.kmDriven} Km
										</span>
									</span>
								</p>
								<p className="text-xl md:text-3xl font-bold text-primary flex items-center">
									₹ {car.price}
								</p>
							</div>
						</div>

						<CarDetails car={car} />
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default CarsGrid;
