import React, { useEffect } from "react";
import { Header } from "../../widgets";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { getTrackers } from "../../entities/model/slices/trackerslice";
import { Tracker } from "./ui/tracker/Tracker";
import style from "./style.module.scss";
import { MatchType } from "../../shared/assets/types/types";


export const Main: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();

	const status = useSelector<RootState, string>(
		(state) => state.trackers.status
	);

	const matches = useSelector<RootState, MatchType[]>(
		(state) => state.trackers.matches
	);

	useEffect(() => {
		const url = "https://app.ftoyd.com/fronttemp-service";

		dispatch(getTrackers(url));
	}, []);

	return (
		<div className={style.main}>
			<div className={style.container}>
				<div className={style.content}>
					<Header />
					<div className={style.trackers}>
						{status === "fulfilled" ? (
							matches.map((match, index) => {
								return (
									<Tracker
										key={index}
										homeName={match.homeTeam.name}
										awayName={match.awayTeam.name}
                    homeScore={match.homeScore}
                    awayScore={match.awayScore}
									/>
								);
							})
						) : (
							<h1 className={style.error}>
								Ошибка: не удалось загрузить информацию
							</h1>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

/*
{
  "ok": true,
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
