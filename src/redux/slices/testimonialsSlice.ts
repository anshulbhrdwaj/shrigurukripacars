import { testimonials } from "@/data";
import { createSlice } from "@reduxjs/toolkit";

const testimonialsSlice = createSlice({
	name: "testimonials",
	initialState: testimonials,
	reducers: {
    addTestimonial: (state, action) => {
      state.push(action.payload);
    },
    removeTestimonial: (state, action) => {
      state.filter((item) => item.id !== action.payload.id);
    }
  },
});

export const { addTestimonial, removeTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;