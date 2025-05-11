export interface ITestimonial {
	id: number;
	name: string;
	image: string;
	review: string;
	car: string;
}

export interface ICar {
	id: number;
	name: string;
	brand: string;
	model: string;
	variant: string;
	year: number;
	postedAt: string;

	carType:
		| "Hatchback"
		| "Sedan"
		| "SUV"
		| "MUV"
		| "Coupe"
		| "Convertible"
		| "Pickup"
		| "Van";
	color: string;

	fuelType: "Petrol" | "Diesel" | "Electric" | "CNG" | "Hybrid";
	transmission: "Manual" | "Automatic";

	kmDriven: number;
	price: number;
	location: string;

	owner: number;
	registrationNo?: string;
	insurance?: string;

	rto?: string;

	description: string;
	thumbnail: string;
	media: string[];

	features?: string[];
	isVeriified?: boolean;
	isNegotiable?: boolean;
}

export type Sort =
	| "priceLowHigh"
	| "priceHighLow"
	| "newest"
	| "oldest"
	| "kmLowHigh"
	| "kmHighLow";

interface IFilters {
	search: string;
	brand: string;
	model: string;
	fuelType: string[];
	transmission: string[];
	carType: string[];
	color: string[];
	location: string;
	minPrice: number;
	maxPrice: number;
	minKmDriven: number;
	maxKmDriven: number;
	minYear: number;
	maxYear: number;
	owner: number ;
	isVerifiedOnly: boolean;
	isNegotiableOnly: boolean;
  sortBy: sortBy;
}
