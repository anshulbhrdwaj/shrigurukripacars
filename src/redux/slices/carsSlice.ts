import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: 'Ferrari',
    color: 'red'
  }
]

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addCar } = carsSlice.actions;
export default carsSlice.reducer