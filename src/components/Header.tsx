import { navbarItems } from "@/data";
import { useLocation, Link } from "react-router";
import { useState, ReactNode, SetStateAction, Dispatch } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuSlide, scale, slide } from "@/lib/Header/anim";
import { IHamburgerProps, INavLinkProps } from "@/types";

const Header = () => {
	const [isActive, setIsActive] = useState<boolean>(false);
	return (
		<header className="w-full h-[5rem] lg:h-[6rem] items-center justify-around p-width grid grid-cols-3 border-b border-foreground/50 text-nowrap">
			<nav className="hidden sm:flex items-center justify-start text-lg">
				<ul className="hidden xl:flex items-center justify-center gap-8">
					{navbarItems.map((item) => (
						<li key={item.id} className="text-foreground">
							<Link to={item.link}>{item.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex items-center col-span-2 sm:col-span-1 justisfy-self-start justify-center">
				<h1 className="text-2xl font-bold">Shri Guru Kripa Cars</h1>
			</div>
			<Link
				to="/contact-us"
				className="hidden xl:flex justify-self-end text-primary-foreground bg-primary py-3 px-6 items-center justify-center rounded-[1.25rem] text-base"
			>
				Book a Call
			</Link>
			<div
				className={`${
					isActive ? "z-50" : "z-0"
				} xl:hidden flex items-center justify-self-end`}
			>
				<HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
			</div>
			<AnimatePresence>
				{isActive && (
					<Nav setIsActive={setIsActive}>
						<HamburgerMenu isActive={isActive} setIsActive={setIsActive} />
					</Nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;

const HamburgerMenu = ({ isActive, setIsActive }: IHamburgerProps) => {
	return (
		<div
			id="hamburger-menu"
			onClick={() => setIsActive((active) => !active)}
			className="right-0 z-[9999] w-16 h-16 rounded-full cursor-pointer flex items-center justify-center"
		>
			<motion.div
				id="hamburger"
				className={`w-full flex flex-col items-center justify-center ${
					isActive ? "hamburger-active" : ""
				}`}
			>
				<motion.div
					className="relative h-px w-1/2 bg-foreground "
					animate={{
						rotate: isActive ? 45 : 0,
						y: isActive ? 1 : -5.5,
					}}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
				/>
				<motion.div
					className="relative h-px w-1/2 bg-foreground "
					animate={{
						rotate: isActive ? -45 : 0,
						y: isActive ? 0 : 5.5,
					}}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
				/>
			</motion.div>
		</div>
	);
};

const Nav = ({
	children,
	setIsActive,
}: {
	children: ReactNode;
	setIsActive: Dispatch<SetStateAction<boolean>>;
}) => {
	const location = useLocation();
	const pathname = location.pathname;
	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	return (
		<motion.nav
			className="h-[100dvh] w-full fixed z-50 right-0 top-0 text-foreground backdrop-blur-3xl bg-background/70 "
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<div className="h-full px-[3vw] py-4 flex flex-col items-center justify-between ">
				<div className="flex items-center justify-between w-full border-b border-foreground">
					<p className="text-foreground uppercase text-sm z-10 relative top-0 w-60">
						Menu
					</p>
					{children}
				</div>
				<div
					onMouseLeave={() => setSelectedIndicator(pathname)}
					className="flex flex-col text-6xl gap-8"
				>
					{navbarItems.map((navItem) => (
						<NavLink
							key={navItem.id}
							data={navItem}
							isActive={selectedIndicator === navItem.link}
							setSelectedIndicator={setSelectedIndicator}
							onClick={() => setIsActive(false)}
						/>
					))}
				</div>
				<div className="flex items-center w-full text-sm ">
					<Link
						to="/contact-us"
						className="w-full flex text-primary-foreground bg-primary py-3 px-6 items-center justify-center rounded-[1.25rem]"
					>
						Book a Call
					</Link>
				</div>
			</div>
		</motion.nav>
	);
};

const NavLink = ({
	data,
	isActive,
	setSelectedIndicator,
	onClick,
}: INavLinkProps) => {
	const { name: title, link, id } = data;

	return (
		<motion.div
			className="relative flex items-center text-foreground "
			onMouseEnter={() => setSelectedIndicator(link)}
			custom={id}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
			onClick={() => onClick()}
		>
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="w-2 h-2 bg-foreground rounded-full absolute -left-7"
			/>
			<Link to={link}>{title}</Link>
			<div className="relative text-lg text-foreground left-2 -bottom-4">
				{id.toString().padStart(2, "0")}
			</div>
		</motion.div>
	);
};
