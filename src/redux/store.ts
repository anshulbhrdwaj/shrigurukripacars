import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./slices/carsSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		cars: carsReducer,
	},
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
