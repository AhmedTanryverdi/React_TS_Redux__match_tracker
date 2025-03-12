import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import trackerSlice from "../../entities/model/slices/trackerslice";



export const store = configureStore({
	reducer: {
		trackers: trackerSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();