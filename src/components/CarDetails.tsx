import {
	Calendar,
	CheckCheck,
	Cog,
	FileDigit,
	Fuel,
	MapPin,
	MoveRight,
	Navigation,
	ShieldCheck,
	UserRound,
} from "lucide-react";
import { ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { ICar } from "@/types";
import { cn } from "@/lib/utils";
import { cardBtn, primaryBtn } from "@/lib/classes";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

export default function CarDetails({ car }: { car: ICar }) {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					className={cn(
						primaryBtn,
						cardBtn,
						"border-[1vh] xl:border-[1.5vh] rounded-br-2xl md:rounded-br-2xl h-1/10 w-5/10 md:w-4/10 lg:w-3/10 2xl:w-3/10"
					)}
				>
					<MoveRight size={8} />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm md:max-w-[80%] lg:max-w-screen-md font-recoleta text-xl">
					<DrawerHeader>
						<DrawerTitle>{car.name}</DrawerTitle>
						<DrawerDescription>{car.description}</DrawerDescription>
						<div className="p-4 pb-0">
							<ResponsiveContainer width="100%" height="100%">
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
									<CarouselPrevious className="" />
									<CarouselNext className="" />
								</Carousel>
							</ResponsiveContainer>
						</div>
						<DrawerDescription>
							<div className="flex flex-col gap-4 mt-4">
								<p className="text-sm text-foreground/60 w-full flex flex-col items-start gap-1">
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
									<span className="flex items-start gap-4">
										<span className="flex items-center gap-2">
											<Calendar size={14} /> {car.year}
										</span>
										<span className="flex items-center gap-2">
											<MapPin size={14} /> {car.location}
										</span>
									</span>
									<span className="flex items-start gap-4">
										<span className="flex items-center gap-2">
											<FileDigit size={14} /> {car.registrationNo}
										</span>
										<span className="flex items-center gap-2">
											<ShieldCheck size={14} /> Insurance {car.insurance}
										</span>
									</span>
									<span className="flex items-start gap-4">
										{car.features?.map((feature) => (
											<span key={feature} className="flex items-center gap-2">
											<CheckCheck size={14} /> {feature}
										</span>
										))}
									</span>
								</p>
								<p className="text-xl md:text-3xl font-bold text-primary flex items-center">
									₹ {car.price}
								</p>
							</div>
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<Button>Book Now</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
