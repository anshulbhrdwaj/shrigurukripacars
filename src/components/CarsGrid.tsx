import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cardBtn, primaryBtn } from "@/lib/classes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, Fuel, MoveRight, Navigation, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { ICar } from "@/types";

const CarsGrid = ({ cars }:{cars: ICar[]}) => {
	
	return (
		<div className="w-full flex-1 rounded-3xl overflow-hidden md:overflow-y-scroll grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8 p-0">
			{cars.map((car) => (
				<Card
					key={car.id}
					className=" bg-foreground h-[60dvh] md:h-[55dvh] rounded-3xl min-w-[24dvw] border-none relative font-recoleta p-4 pb-3"
				>
					<CardContent className="h-full flex flex-col p-0">

						<Carousel className="w-full p-0">
							<CarouselContent className="w-full h-full m-0">
								{car.media.map((media, idx) => (
									<CarouselItem key={idx} className="w-full h-full p-0">
										<img
											src={media}
											className="w-full h-[28vmax] md:h-[28dvh] m-0 rounded-2xl object-cover"
											alt={car.name}
										/>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="left-2" />
							<CarouselNext className="right-2" />
						</Carousel>

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
										<span className="flex items-center gap-2"><Fuel size={14} className="mb-1" /> {car.fuelType}</span>
										<span className="flex items-center gap-2"><UserRound size={14} className="mb-1" /> {car.owner}</span>
									</span>
									<span className="flex items-start gap-4">
										<span className="flex items-center gap-2"><Cog size={14} /> {car.transmission}</span>
										<span className="flex items-center gap-2"><Navigation size={14} /> {car.kmDriven} Km</span>
									</span>
								</p>
								<p className="text-xl md:text-3xl font-bold text-primary flex items-center">
									₹ {car.price}
								</p>
							</div>
						</div>

						<Button
							className={cn(
								primaryBtn,
								cardBtn,
								"border-[1vh] xl:border-[1.5vh] rounded-br-2xl md:rounded-br-2xl h-1/10 w-5/10 md:w-4/10 lg:w-3/10 2xl:w-3/10"
							)}
						>
							<MoveRight size={8} />
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
};


export default CarsGrid