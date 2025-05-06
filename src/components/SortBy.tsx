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
import {
	ArrowDownWideNarrow,
	ArrowUpNarrowWide,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setSortBy } from "@/redux/slices/filterSlice";

const sortOptions = [
	{ label: "Price", value: "priceLowHigh", icon: <ArrowUpNarrowWide className="w-4 h-4" /> },
	{ label: "Price", value: "priceHighLow", icon: <ArrowDownWideNarrow className="w-4 h-4" /> },
	{ label: "KM", value: "kmLowHigh", icon: <ArrowUpNarrowWide className="w-4 h-4" /> },
	{ label: "KM", value: "kmHighLow", icon: <ArrowDownWideNarrow className="w-4 h-4" /> },
	{ label: "Newest", value: "newest", icon: <ArrowUpNarrowWide className="w-4 h-4" /> },
	{ label: "Oldest", value: "oldest", icon: <ArrowUpNarrowWide className="w-4 h-4" /> },
];

const getSortLabel = (sortKey: string) =>
	sortKey
		.replace("LowHigh", "")
		.replace("HighLow", "")
		.replace(/^\w/, (c) => c.toUpperCase());

export default function SortBy({ className }: { className?: string }) {
	const sortBy = useSelector((state: RootState) => state.filters.sortBy);
	const dispatch = useDispatch();

	const sortIcon = sortBy.includes("HighLow") ? (
		<ArrowDownWideNarrow className="w-4 h-4" />
	) : (
		<ArrowUpNarrowWide className="w-4 h-4" />
	);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className={cn(
						"hidden sm:flex md:w-3/10 lg:w-2/10 xl:w-1/10 h-full bg-foreground rounded-2xl border-none text-background/80 hover:bg-foreground/80 duration-100",
						className
					)}
				>
					Sorted by: {getSortLabel(sortBy)} {sortIcon}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				side="bottom"
				style={{ transformOrigin: "top center" }}
				className="bg-foreground text-background/80 border-none"
			>
				<DropdownMenuLabel className="text-center">Sort by</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-muted/50" />
				<DropdownMenuRadioGroup
					value={sortBy}
					onValueChange={(value) => dispatch(setSortBy(value))}
				>
					{sortOptions.map((option) => (
						<DropdownMenuRadioItem key={option.value} value={option.value}>
							{option.label} {option.icon}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
