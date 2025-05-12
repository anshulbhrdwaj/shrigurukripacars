"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import { Funnel } from "lucide-react";

interface Links {
	label: string;
	href: string;
	icon: React.JSX.Element | React.ReactNode;
}

interface Sections {
	label: string;
	component?: React.JSX.Element | React.ReactNode;
	icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
	undefined
);

export const useSidebar = () => {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider");
	}
	return context;
};

export const SidebarProvider = ({
	children,
	open: openProp,
	setOpen: setOpenProp,
	animate = true,
}: {
	children: React.ReactNode;
	open?: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	animate?: boolean;
}) => {
	const [openState, setOpenState] = useState(false);

	const open = openProp !== undefined ? openProp : openState;
	const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

	return (
		<SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
			{children}
		</SidebarContext.Provider>
	);
};

export const Sidebar = ({
	children,
	open,
	setOpen,
	animate,
}: {
	children: React.ReactNode;
	open?: boolean;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	animate?: boolean;
}) => {
	return (
		<SidebarProvider open={open} setOpen={setOpen} animate={animate}>
			{children}
		</SidebarProvider>
	);
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
	return (
		<>
			<DesktopSidebar {...props} />
			<MobileSidebar {...(props as React.ComponentProps<"div">)} />
		</>
	);
};

export const DesktopSidebar = ({
	className,
	children,
	...props
}: React.ComponentProps<typeof motion.div>) => {
	const { open, setOpen, animate } = useSidebar();
	return (
		<>
			<motion.div
				className={cn(
					"h-full px-4 py-4 hidden  md:flex md:flex-col bg-foreground w-[60px] shrink-0",
					className
				)}
				animate={{
					width: animate ? (open ? "300px" : "60px") : "300px",
				}}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				{...props}
			>
				{children}
			</motion.div>
			<div
				className={cn(
					"top-[6.5dvh] left-[280px] cursor-pointer z-20 text-background absolute max-sm:hidden lg:hidden transition-all duration-500 ease-in-out",
					open ? "opacity-100 delay-1000" : "opacity-0"
				)}
				onClick={() => setOpen(false)}
			>
				<IconX />
			</div>
		</>
	);
};

export const MobileSidebar = ({
	className,
	children,
	...props
}: React.ComponentProps<"div">) => {
	const { open, setOpen } = useSidebar();
	return (
		<>
			<div
				className={cn(
					"h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between w-full"
				)}
				{...props}
			>
				<div className="flex justify-start z-20 px-[4vw] items-center transition-all duration-500 ease-in-out">
					<Funnel
						color="var(--primary)"
						className={`text-background ${open ? "opacity-0" : "opacity-100"}`}
						onClick={() => setOpen(!open)}
					/>
				</div>
				<AnimatePresence>
					{open && (
						<motion.div
							initial={{ x: "-100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "-100%", opacity: 0 }}
							transition={{
								duration: 0.3,
								ease: "easeInOut",
							}}
							className={cn(
								"fixed h-full w-full inset-0 bg-foreground p-10 z-[100] flex flex-col justify-between",
								className
							)}
						>
							<div
								className="absolute right-10 top-10 z-50 text-background"
								onClick={() => setOpen(!open)}
							>
								<IconX />
							</div>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export const SidebarLink = ({
	link,
	className,
	...props
}: {
	link: Links;
	className?: string;
}) => {
	const { open, animate } = useSidebar();
	return (
		<a
			href={link.href}
			className={cn(
				"flex items-center justify-start gap-2  group/sidebar py-2",
				className
			)}
			{...props}
		>
			{link.icon}

			<motion.span
				animate={{
					display: animate ? (open ? "inline-block" : "none") : "inline-block",
					opacity: animate ? (open ? 1 : 0) : 1,
				}}
				className="text-background text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
			>
				{link.label}
			</motion.span>
		</a>
	);
};

export const SidebarSection = ({
	section,
	className,
	...props
}: {
	section: Sections;
	className?: string;
}) => {
	const { open, animate } = useSidebar();
	return (
		<div
			className={cn(
				"flex flex-col items-start justify-start gap-2  group/sidebar py-2",
				className
			)}
			{...props}
		>
			<p className="flex items-center justify-start gap-2 ">
				{section.icon}

				<motion.span
					animate={{
						display: animate
							? open
								? "inline-block"
								: "none"
							: "inline-block",
						opacity: animate ? (open ? 1 : 0) : 1,
					}}
					className="text-background text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
				>
					{section.label}
				</motion.span>
			</p>
			<motion.div
				animate={{
					display: animate ? (open ? "flex" : "none") : "flex",
					opacity: animate ? (open ? 1 : 0) : 1,
				}}
				transition={{ duration: 1000, ease: [0.76, 0, 0.24, 1] }}
				className="text-background text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre !p-0 !m-0 "
			>
				{section.component}
			</motion.div>
		</div>
	);
};
