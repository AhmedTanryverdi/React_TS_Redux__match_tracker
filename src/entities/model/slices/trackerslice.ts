import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MatchType } from "../../../shared/assets/types/types";

const data: MatchType[] = [
	{
		homeTeam: {
			name: "Command_1",
			players: [
				{
					username: "Name_1",
					kills: 4,
				},
				{
					username: "Name_2",
					kills: 4,
				},
				{
					username: "Name_3",
					kills: 4,
				},
			],
			points: 50,
			place: 7,
			total_kills: 12,
		},
		awayTeam: {
			name: "Command_2",
			players: [
				{
					username: "Name_4",
					kills: 5,
				},
				{
					username: "Name_5",
					kills: 5,
				},
				{
					username: "Name_6",
					kills: 5,
				},
			],
			points: 50,
			place: 7,
			total_kills: 12,
		},
		homeScore: 0,
		awayScore: 0,
		status: "live",
	},
	{
		homeTeam: {
			name: "Command_1",
			players: [
				{
					username: "Name_1",
					kills: 4,
				},
				{
					username: "Name_2",
					kills: 4,
				},
				{
					username: "Name_3",
					kills: 4,
				},
			],
			points: 50,
			place: 7,
			total_kills: 12,
		},
		awayTeam: {
			name: "Command_2",
			players: [
				{
					username: "Name_4",
					kills: 5,
				},
				{
					username: "Name_5",
					kills: 5,
				},
				{
					username: "Name_6",
					kills: 5,
				},
			],
			points: 50,
			place: 7,
			total_kills: 12,
		},
		homeScore: 0,
		awayScore: 0,
		status: "live",
	},
	{
		homeTeam: {
			name: "Command_1",
			players: [
				{
					username: "Name_1",
					kills: 4,
				},
				{
					username: "Name_2",
					kills: 4,
				},
				{
					username: "Name_3",
					kills: 4,
				},
			],
			points: 50,
			place: 7,
			total_kills: 12,
		},
		awayTeam: {
			name: "Command_2",
			players: [
				{
					username: "Name_4",
					kills: 5,
				},
				{
					username: "Name_5",
					kills: 5,
				},
				{
					username: "Name_6",
					kills: 5,
				},
			],
			points: 50,
			place: 7,
			total_kills: 12,
		},
		homeScore: 0,
		awayScore: 0,
		status: "live",
	},
];

export const getTrackers = createAsyncThunk(
	"getTrackers/trackerSlice",
	async (url: string, { rejectWithValue }) => {
		//const response = await fetch(url);

    /*
		if (!response.ok) {
			return rejectWithValue(response.status);
		}
		const data = await response.json();
    */

		return data;
	}
);

const initialState: {
	status: string;
	errorCode: Number;
	matches: MatchType[];
} = {
	status: "",
	errorCode: 200,
	matches: [],
};

const trackerSlice = createSlice({
	name: "trackerSlice",
	initialState,
	reducers: {},
	extraReducers: (buider) => {
		buider
			.addCase(getTrackers.fulfilled, (state, actions) => {
				state.matches = actions.payload;
				state.status = "fulfilled";
			})
			.addCase(getTrackers.rejected, (state, actions) => {
				state.status = "rejected";
				state.errorCode = actions.payload as Number;
			});
	},
});

export const {} = trackerSlice.actions;
export default trackerSlice.reducer;

/*
{
  "ok": "true",
  "data": {
    "matches": [
      {
        "time": "2025-03-12T15:58:37.971Z",
        "title": "string",
        "homeTeam": {
          "name": "string",
          "players": [
            {
              "username": "string",
              "kills": 0
            }
          ],
          "points": 0,
          "place": 0,
          "total_kills": 0
        },
        "awayTeam": {
          "name": "string",
          "players": [
            {
              "username": "string",
              "kills": 0
            }
          ],
          "points": 0,
          "place": 0,
          "total_kills": 0
        },
        "homeScore": 0,
        "awayScore": 0,
        "status": "Scheduled"
      }
    ]
  }
}
  */
