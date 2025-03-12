type UserType = {
	username: string;
	kills: number;
};

export type MatchType = {
	homeTeam: {
		name: string;
		players: UserType[];
		points: number;
		place: number;
		total_kills: number;
	};
	awayTeam: {
		name: string;
		players: UserType[];
		points: number;
		place: number;
		total_kills: number;
	};
	homeScore: 0;
	awayScore: 0;
	status: string;
};
