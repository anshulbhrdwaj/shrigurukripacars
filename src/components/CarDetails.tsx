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
import { useState } from "react";
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
import { Link } from "react-router";

export default function CarDetails({ car }: { car: ICar }) {
	const [mediaViewerOpen, setMediaViewerOpen] = useState(false);
	const [selectedMedia, setSelectedMedia] = useState("");
	const [selectedIsVideo, setSelectedIsVideo] = useState(false);

	const openMediaViewer = (media: string) => {
		setSelectedMedia(media);
		setSelectedIsVideo(/\.(mp4|webm|ogg)$/i.test(media));
		setMediaViewerOpen(true);
	};

	return (
		<>
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
											{car.media.map((media, idx) => {
												const isVideo = /\.(mp4|webm|ogg)$/i.test(media);

												return (
													<CarouselItem
														key={idx}
														className="w-full h-full p-0 cursor-pointer"
														onClick={() => openMediaViewer(media)}
													>
														{isVideo ? (
															<video
																src={media}
																className="w-full h-[28vmax] md:h-[28dvh] m-0 rounded-2xl object-cover"
															/>
														) : (
															<img
																src={media}
																alt={car.name}
																className="w-full h-[28vmax] md:h-[28dvh] m-0 rounded-2xl object-cover"
															/>
														)}
													</CarouselItem>
												);
											})}
										</CarouselContent>
										<CarouselPrevious />
										<CarouselNext />
									</Carousel>
								</ResponsiveContainer>
							</div>

							<DrawerDescription>
								<div className="flex flex-col gap-4 mt-4 text-sm text-foreground/60">
									<div className="flex flex-wrap gap-2 md:gap-4">
										<Detail icon={<Fuel size={14} />} text={car.fuelType} />
										<Detail
											icon={<UserRound size={14} />}
											text={`${car.owner} Owner`}
										/>
										<Detail icon={<Cog size={14} />} text={car.transmission} />
										<Detail
											icon={<Navigation size={14} />}
											text={`${car.kmDriven} Km`}
										/>
										<Detail
											icon={<Calendar size={14} />}
											text={String(car.year)}
										/>
										<Detail icon={<MapPin size={14} />} text={car.location} />
										<Detail
											icon={<FileDigit size={14} />}
											text={String(car.registrationNo)}
										/>
										<Detail
											icon={<ShieldCheck size={14} />}
											text={`Insurance ${car.insurance}`}
										/>
										{car.features?.map((feature) => (
											<Detail
												key={feature}
												icon={<CheckCheck size={14} />}
												text={feature}
											/>
										))}
									</div>
									<div className="text-xl md:text-3xl font-bold text-primary mt-4 flex justify-between items-end">
										<span>₹ {car.price}</span>
										<Link to={`/emi-calculator/${car.id}`} className="text-sm">Calculate Emi &rarr;</Link>
									</div>
								</div>
							</DrawerDescription>
						</DrawerHeader>

						<DrawerFooter className="">
							<Button>Book Now</Button>
							<DrawerClose asChild>
								<Button variant="outline">Cancel</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</Drawer>

			{/* Full-screen Media Viewer Drawer */}
			<Drawer open={mediaViewerOpen} onOpenChange={setMediaViewerOpen}>
				<DrawerContent className="bg-background p-4">
					<div className="flex justify-center items-center h-[80vh] w-full">
						{selectedIsVideo ? (
							<video
								src={selectedMedia}
								controls
								autoPlay
								className="max-w-full max-h-[65dvh] rounded-lg object-contain"
							/>
						) : (
							<img
								src={selectedMedia}
								alt="Car media"
								className="max-w-full max-h-[65dvh] rounded-lg object-contain"
							/>
						)}
					</div>
				</DrawerContent>
			</Drawer>
		</>
	);
}

// DRY UI Component for a Detail Item
const Detail = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
	<span className="flex items-center gap-2">
		{icon} {text}
	</span>
);
