import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
	IconArrowLeft,
	IconBrandTabler,
	IconSettings,
	IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { cardBtn, primaryBtn, section } from "@/lib/classes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import SortBy from "@/components/SortBy";
import { useFilteredCars } from "@/hooks/useFilteredCars";
import { useDispatch } from "react-redux";
import { setSearch } from "@/redux/slices/filterSlice";
// import SortBy from "@/components/SortBy";

const Collection = () => {
	const links = [
		{
			label: "Dashboard",
			href: "#",
			icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-background" />,
		},
		{
			label: "Profile",
			href: "#",
			icon: <IconUserBolt className="h-5 w-5 shrink-0 text-background" />,
		},
		{
			label: "Settings",
			href: "#",
			icon: <IconSettings className="h-5 w-5 shrink-0 text-background" />,
		},
		{
			label: "Logout",
			href: "#",
			icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-background" />,
		},
	];
	const [open, setOpen] = useState(false);
	const cars = useFilteredCars();
	const dispatch = useDispatch();

	return (
		<section
			className={cn(
				section,
				"h-[85%] sm:flex-row py-[2.6dvh] gap-10 sm:gap-8 xl:gap-12 relative sm:pt-12"
			)}
		>
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className="justify-between gap-10 rounded-lg bg-foreground/95 w-full text-background my-auto">
					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
						{open ? <Logo /> : <LogoIcon />}
						<div className="mt-8 flex flex-col gap-2">
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>
					<div>
						<SidebarLink
							link={{
								label: "Shri Gurukripa Cars",
								href: "#",
								icon: (
									<img
										src="/vite.svg"
										className="h-7 w-7 shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								),
							}}
						/>
					</div>
				</SidebarBody>
			</Sidebar>

			<div className="flex flex-col items-center justify-start w-full h-full gap-4 sm:gap-6 xl:gap-8 ">
				<div className="bg-foregroun w-[70%] md:w-full h-16 rounded-3xl max-sm:absolute max-sm:top-4 max-sm:right-4 flex justify-between items-center">
					<div className="w-full md:w-6/10 lg:w-5/10 xl:w-3/10 h-full relative ">
						<Input
							placeholder="Search"
							className="h-full w-full pl-12 pr-4 bg-foreground placeholder:text-muted-background text-background rounded-2xl"
							type="search"
							onChange={(e) => dispatch(setSearch(e.target.value))}
						/>
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
					</div>

					<SortBy />
				</div>

				<div className="bg-foregroun w-full flex-1 rounded-3xl overflow-hidden md:overflow-y-scroll grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 p-0">
					{cars.map((car) => (
						<Card
							key={car.id}
							className=" bg-foreground h-[50dvh] rounded-3xl min-w-[25dvw] border-none relative"
						>
							<CardContent>
								<Button
									className={cn(
										primaryBtn,
										cardBtn,
										"border-[2vh] rounded-br-2xl md:rounded-br-2xl h-1/10 w-5/10 lg:w-4/10 2xl:w-3/10"
									)}
								>
									<MoveRight size={8} />
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Collection;

export const Logo = () => {
	return (
		<a className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-background">
			<SlidersHorizontal
				color="var(--background)"
				className="text-background h-5 w-6 shrink-0"
			/>
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium whitespace-pre text-background"
			>
				Filters
			</motion.span>
		</a>
	);
};
export const LogoIcon = () => {
	return (
		<a className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-background">
			<SlidersHorizontal
				color="var(--background)"
				className="text-background h-5 w-6 shrink-0"
			/>
		</a>
	);
};
