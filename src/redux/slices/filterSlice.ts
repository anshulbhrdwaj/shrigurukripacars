import { defaultFilters } from "@/data";
import { IFilters } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const toggleItem = (array: string[], value: string): string[] => {
	return array.includes(value)
		? array.filter((item) => item !== value)
		: [...array, value];
};

const filterSlice = createSlice({
	name: "filters",
	initialState: defaultFilters,
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
		setOwner: (state, action: PayloadAction<number>) => {
			state.owner = action.payload;
		},
		toggleIsVerifiedOnly: (state) => {
			state.isVerifiedOnly = !state.isVerifiedOnly;
		},
		toggleIsNegotiableOnly: (state) => {
			state.isNegotiableOnly = !state.isNegotiableOnly;
		},
		setSortBy: (state, action: PayloadAction<IFilters["sortBy"]>) => {
			state.sortBy = action.payload;
		},
		resetFilters: () => defaultFilters,
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
