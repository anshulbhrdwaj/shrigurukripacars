import { cn } from "@/lib/utils";
import { section } from "@/lib/classes";

import SearchAndSortBar from "@/components/SearchAndSortBar";
import CarsGrid from "@/components/CarsGrid";
import FiltersSidebar from "@/components/FiltersSidebar";
import { useFilteredCars } from "@/hooks/useFilteredCars";

const Collection = () => {
	const cars = useFilteredCars();
	
	return (
		<section
			className={cn(
				section,
				" sm:flex-row gap-10 sm:gap-8 xl:gap-12 relative "
			)}
		>
			<FiltersSidebar cars={cars} />
			<div className="flex flex-col items-center justify-start w-full h-full gap-4 sm:gap-6 xl:gap-8 ">
				<SearchAndSortBar />
				<CarsGrid cars={cars} />
			</div>
		</section>
	);
};

export default Collection;
