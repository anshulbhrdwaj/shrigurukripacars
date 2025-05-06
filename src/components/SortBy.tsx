import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function SortBy({ className }: { className?: string }) {
	const [order, setOrder] = React.useState("");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="hidden sm:flex md:w-3/10 lg:w-2/10 xl:w-1/10 h-full bg-foreground rounded-2xl border-none text-background/80 hover:bg-foreground/80 duration-100">{`Sort${
					order ? "ed" : ""
				} by ${
					order ? `: ${order.charAt(0).toUpperCase() + order.slice(1)}` : ``
				}`}</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				style={{ transformOrigin: "top center" }}
				side="bottom"
				className={cn(
					"bg-foreground text-background/80 border-none",
					className
				)}
			>
				<DropdownMenuLabel>{`Sort${order ? "ed" : ""} by ${
					order ? `: ${order.charAt(0).toUpperCase() + order.slice(1)}` : ``
				}`}</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-muted/50" />
				<DropdownMenuRadioGroup value={order} onValueChange={setOrder}>
					<DropdownMenuRadioItem value="price">Price</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="km">
						Kilometers driven
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
