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

	return (
		<div
			className={cn(
				"mx-auto flex w-full flex-1 flex-col overflow-hidden bg-background ml-0 md:ml-[3vw] relative",
				"h-[85dvh]" // for your use case, use `h-screen` instead of `h-[60vh]`
			)}
		>
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className="justify-between gap-10 rounded-lg bg-foreground/95  text-background h-[70dvh] my-auto w-[90%] mx-auto sm:w-full sm:mx-0">
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
		</div>
	);
};

export default Collection;

export const Logo = () => {
	return (
		<a
			href="#"
			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-background"
		>
			<div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-background" />
			<motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium whitespace-pre text-background"
			>
				Acet Labs
			</motion.span>
		</a>
	);
};
export const LogoIcon = () => {
	return (
		<a
			href="#"
			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-background"
		>
			<div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-background" />
		</a>
	);
};
