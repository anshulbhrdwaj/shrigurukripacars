import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import { primaryBtn } from "@/lib/classes";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
				destructive:
					"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
				outline:
					"border bg-transparent shadow-xs hover:bg-accent text-primary hover:bg-primary hover:text-background border-primary hover:bg-primary/50",
				secondary:
					"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
				ghost:
					"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };


export const CtaButton = ({ text = "Explore Cars" }: { text?: string }) => {
	return (
		<div className="flex items-center gap-8 sm:gap-4">
			<div className="flex w-2/10 items-center gap-4 sm:gap-2">
				<div className="w-6 h-[4rem] sm:w-4 sm:h-[3rem] rounded-sm bg-primary " />
				<div className="w-6 h-[3rem] sm:w-4 sm:h-[2rem] rounded-sm bg-primary " />
			</div>
			<Button className={cn(primaryBtn, "text-base lg:text-lg h-[8dvh] sm:h-[6vh] py-6 px-12 sm:py-3 sm:px-6")} variant={"outline"}>
				{text} <MoveRight size={48} />
			</Button>
		</div>
	);
};

