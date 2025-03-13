import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MatchType } from "../../../shared/assets/types/types";

export const getMatches = createAsyncThunk(
	"getMatches/matchSlice",
	async (
		url: string,
		{ rejectWithValue }
	): Promise<MatchType[] | unknown> => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				return rejectWithValue(response.status);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(500);
		}
	}
);

const initialState: {
	status: string;
	errorCode: number;
	matches: MatchType[];
} = {
	status: "pending",
	errorCode: 200,
	matches: [],
};

const matchSlice = createSlice({
	name: "matchSlice",
	initialState,
	reducers: {},

	extraReducers: (buider) => {
		buider
		.addCase(getMatches.pending, (state) => {
			state.status = "pending";
		})
		.addCase(getMatches.fulfilled, (state, actions) => {
			state.matches = actions.payload as MatchType[];
			state.status = "fulfilled";
		})
		.addCase(getMatches.rejected, (state, actions) => {
			state.status = "rejected";
			state.errorCode = actions.payload as number;
		});
	},
});

export const {} = matchSlice.actions;
export default matchSlice.reducer;
