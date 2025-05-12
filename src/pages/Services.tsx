import { section } from "@/lib/classes";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
	IconBoxAlignRightFilled,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { ReceiptIndianRupee } from "lucide-react";
import { useNavigate } from "react-router";

const SkeletonOne = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			<motion.div
				variants={variants}
				className="flex flex-row border border-foreground/10 rounded-full p-2  items-center space-x-2 bg-background"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-primary/10 shrink-0" />
				<div className="w-full bg-foreground/10 h-4 rounded-full" />
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row border border-foreground/10 rounded-full p-2 items-center space-x-2 w-3/4 ml-auto bg-background"
			>
				<div className="w-full bg-foreground/10 h-4 rounded-full" />
				<div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-primary/10 shrink-0" />
			</motion.div>
			<motion.div
				variants={variants}
				className="flex flex-row border border-foreground/10 rounded-full p-2 items-center space-x-2 bg-background"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-primary/10 shrink-0" />
				<div className="w-full bg-foreground/10 h-4 rounded-full" />
			</motion.div>
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: "100%",
			transition: {
				duration: 0.2,
			},
		},
		hover: {
			width: ["0%", "100%"],
			transition: {
				duration: 2,
			},
		},
	};
	const arr = new Array(6).fill(0);
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			{arr.map((_, i) => (
				<motion.div
					key={"skelenton-two" + i}
					variants={variants}
					style={{
						maxWidth: Math.random() * (100 - 40) + 40 + "%",
					}}
					className="flex flex-row border border-foreground/10 rounded-full p-2  items-center space-x-2 bg-background w-full h-4"
				></motion.div>
			))}
		</motion.div>
	);
};
const SkeletonThree = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				repeat: Infinity,
				repeatType: "reverse",
			}}
			className="flex flex-1 items-center justify-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
			style={{
				background:
					"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
				backgroundSize: "400% 400%",
			}}
		>
			<motion.div className="h-full w-full rounded-lg flex items-center justify-center font-recoleta text-6xl text-background">
				<ReceiptIndianRupee size={48} className="h-14 w-14" /> EMI
			</motion.div>
		</motion.div>
	);
};
const SkeletonFour = () => {
	const first = {
		initial: {
			x: 20,
			rotate: -5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const second = {
		initial: {
			x: -20,
			rotate: 5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
		>
			<motion.div
				variants={first}
				className="h-full w-1/3 rounded-2xl bg-background border border-foreground/10 flex flex-col items-center justify-center p-4 px-8"
			>
				<img
					src="/vite.svg"
					alt="avatar"
					height="100"
					width="100"
					className="rounded-full h-10 w-10"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground/70 mt-4">
					I don't need a car
				</p>
				<p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Delusional
				</p>
			</motion.div>
			<motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-background border border-foreground/10 flex flex-col items-center justify-center p-4 px-8">
				<img
					src="/vite.svg"
					alt="avatar"
					height="100"
					width="100"
					className="rounded-full h-10 w-10"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground/70 mt-4">
					Research Well and Handpick Right Car.
				</p>
				<p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Sensible
				</p>
			</motion.div>
			<motion.div
				variants={second}
				className="h-full w-1/3 rounded-2xl bg-background border border-foreground/10 flex flex-col items-center justify-center p-4 px-8"
			>
				<img
					src="/vite.svg"
					alt="avatar"
					height="100"
					width="100"
					className="rounded-full h-10 w-10"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-muted-foreground/70 mt-4">
					Second Hand Cars are Bad
				</p>
				<p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Inexperienced
				</p>
			</motion.div>
		</motion.div>
	);
};
const SkeletonFive = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-2xl border border-foreground/10 p-3  items-center space-x-2 bg-background"
			>
				<img
					src="/vite.svg"
					alt="avatar"
					height="100"
					width="100"
					className="rounded-full h-10 w-10"
				/>
				<p className="text-xs text-muted-foreground/70">
					Your car may be worth more than you think, Contact Shri Gurukripa Cars....
				</p>
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-foreground/10 p-3 items-center justify-end space-x-2 w-3/4 ml-auto bg-background"
			>
				<p className="text-xs text-muted-foreground/70">Thank You, Loved the Experience!</p>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
			</motion.div>
		</motion.div>
	);
};

const items = [
	{
		title: "Browse Our Car Collection",
		description: (
			<span className="text-sm">
				Explore our wide range of certified pre-owned cars, handpicked for
				quality, performance, and price.
			</span>
		),
		header: <SkeletonOne />,
		className: "md:col-span-1",
		icon: <IconClipboardCopy className="h-4 w-4 text-muted-foreground/70" />,
    link:"/collection"
	},
	{
		title: "Find Your Perfect Match",
		description: (
			<span className="text-sm">
				Use our smart filters to quickly find the second-hand car that fits your
				budget, lifestyle, and needs.
			</span>
		),
		header: <SkeletonTwo />,
		className: "md:col-span-1",
		icon: <IconFileBroken className="h-4 w-4 text-muted-foreground/70" />,
    link:"/collection"
	},
	{
		title: "EMI Calculator for Cars",
		description: (
			<span className="text-sm">
				Easily calculate your monthly EMI and financing options with our free
				car loan calculator tool.
			</span>
		),
		header: <SkeletonThree />,
		className: "md:col-span-1",
		icon: <IconSignature className="h-4 w-4 text-muted-foreground/70" />,
    link:"/emi-calculator"
	},
	{
		title: "Expert Car Buying Consultancy",
		description: (
			<span className="text-sm">
				Get personalized assistance from our car experts to make confident,
				hassle-free buying decisions.
			</span>
		),
		header: <SkeletonFour />,
		className: "md:col-span-2",
		icon: <IconTableColumn className="h-4 w-4 text-muted-foreground/70" />,
    link:"/contact-us"
	},
	{
		title: "Sell Your Car Instantly",
		description: (
			<span className="text-sm">
				List your used car for sale with us and get the best price, fast
				processing, and zero commission.
			</span>
		),
		header: <SkeletonFive />,
		className: "md:col-span-1",
		icon: (
			<IconBoxAlignRightFilled className="h-4 w-4 text-muted-foreground/70" />
		),
    link:"/sell-your-car"
	},
];

const Services = () => {
  const navigateTo = useNavigate();
	return (
		<section
			className={cn(section, "gap-4 sm:gap-4 xl:gap-4 py-[2.1dvw] h-[83%]")}
		>
			<BentoGrid className="w-full h-full">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						className={cn(
							"[&>p:text-lg] px-[3dvw] py-[3dvh] sm:p-[1.5vw]",
							item.className
						)}
						icon={item.icon}
            onClick={() => navigateTo(item.link)}
					/>
				))}
			</BentoGrid>
		</section>
	);
};

export default Services;
