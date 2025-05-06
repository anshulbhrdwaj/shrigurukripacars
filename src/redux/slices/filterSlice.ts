import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
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
	owner: number | null;
	isVerifiedOnly: boolean;
	isNegotiableOnly: boolean;
	sortBy:
		| "priceLowHigh"
		| "priceHighLow"
		| "newest"
		| "oldest"
		| "kmLowHigh"
		| "kmHighLow";
}

const initialState: FilterState = {
	search: "",
	brand: "",
	model: "",
	fuelType: [],
	transmission: [],
	carType: [],
	color: [],
	location: "",
	minPrice: 0,
	maxPrice: 100000000,
	minKmDriven: 0,
	maxKmDriven: 300000,
	minYear: 2000,
	maxYear: new Date().getFullYear(),
	owner: null,
	isVerifiedOnly: false,
	isNegotiableOnly: false,
	sortBy: "newest",
};

const toggleItem = (array: string[], value: string): string[] => {
	return array.includes(value)
		? array.filter((item) => item !== value)
		: [...array, value];
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setBrand: (state, action: PayloadAction<string>) => {
			state.brand = action.payload;
		},
		setModel: (state, action: PayloadAction<string>) => {
			state.model = action.payload;
		},
		setFuelType: (state, action: PayloadAction<string>) => {
			state.fuelType = toggleItem(state.fuelType, action.payload);
		},
		setTransmission: (state, action: PayloadAction<string>) => {
			state.transmission = toggleItem(state.transmission, action.payload);
		},
		setCarType: (state, action: PayloadAction<string>) => {
			state.carType = toggleItem(state.carType, action.payload);
		},
		setColor: (state, action: PayloadAction<string>) => {
			state.color = toggleItem(state.color, action.payload);
		},
		setLocation: (state, action: PayloadAction<string>) => {
			state.location = action.payload;
		},
		setMinPrice: (state, action: PayloadAction<number>) => {
			state.minPrice = action.payload;
		},
		setMaxPrice: (state, action: PayloadAction<number>) => {
			state.maxPrice = action.payload;
		},
		setMinKmDriven: (state, action: PayloadAction<number>) => {
			state.minKmDriven = action.payload;
		},
		setMaxKmDriven: (state, action: PayloadAction<number>) => {
			state.maxKmDriven = action.payload;
		},
		setMinYear: (state, action: PayloadAction<number>) => {
			state.minYear = action.payload;
		},
		setMaxYear: (state, action: PayloadAction<number>) => {
			state.maxYear = action.payload;
		},
		setOwner: (state, action: PayloadAction<number | null>) => {
			state.owner = action.payload;
		},
		toggleIsVerifiedOnly: (state) => {
			state.isVerifiedOnly = !state.isVerifiedOnly;
		},
		toggleIsNegotiableOnly: (state) => {
			state.isNegotiableOnly = !state.isNegotiableOnly;
		},
		setSortBy: (state, action: PayloadAction<FilterState["sortBy"]>) => {
			state.sortBy = action.payload;
		},
		resetFilters: () => initialState,
	},
});

export const {
	setSearch,
	setBrand,
	setModel,
	setFuelType,
	setTransmission,
	setCarType,
	setColor,
	setLocation,
	setMinPrice,
	setMaxPrice,
	setMinKmDriven,
	setMaxKmDriven,
	setMinYear,
	setMaxYear,
	setOwner,
	toggleIsVerifiedOnly,
	toggleIsNegotiableOnly,
	setSortBy,
	resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
