import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../redux/store";

export const useFilteredCars = () => {
	const cars = useSelector((state: RootState) => state.cars);
	const filters = useSelector((state: RootState) => state.filters);

	const filteredCars = useMemo(() => {
		const {
			search,
			brand,
			model,
			carType,
			fuelType,
			transmission,
			color,
			location,
			owner,
			minPrice,
			maxPrice,
			minKmDriven,
			maxKmDriven,
			minYear,
			maxYear,
			isVerifiedOnly,
			isNegotiableOnly,
			sortBy,
		} = filters;

		const normalizedSearch = search.trim().toLowerCase();

		const result = cars
			.filter((car) => {
				if (normalizedSearch && !car.name.toLowerCase().includes(normalizedSearch)) {
					return false;
				}
				if (brand && car.brand !== brand) return false;
				if (model && car.model !== model) return false;
				if (carType.length && !carType.includes(car.carType)) return false;
				if (fuelType.length && !fuelType.includes(car.fuelType)) return false;
				if (transmission.length && !transmission.includes(car.transmission)) return false;
				if (color.length && !color.includes(car.color)) return false;
				if (location && car.location !== location) return false;
				if (owner !== null && car.owner > owner) return false;
				if (car.price < minPrice || car.price > maxPrice) return false;
				if (car.kmDriven < minKmDriven || car.kmDriven > maxKmDriven) return false;
				if (car.year < minYear || car.year > maxYear) return false;
				if (isVerifiedOnly && !car.isVeriified) return false;
				if (isNegotiableOnly && !car.isNegotiable) return false;
				return true;
			})
			.sort((a, b) => {
				switch (sortBy) {
					case "priceLowHigh":
						return a.price - b.price;
					case "priceHighLow":
						return b.price - a.price;
					case "newest":
						return b.year - a.year;
					case "oldest":
						return a.year - b.year;
					case "kmLowHigh":
						return a.kmDriven - b.kmDriven;
					case "kmHighLow":
						return b.kmDriven - a.kmDriven;
					default:
						return 0;
				}
			});

		return result;
	}, [cars, filters]);

	return filteredCars;
};
