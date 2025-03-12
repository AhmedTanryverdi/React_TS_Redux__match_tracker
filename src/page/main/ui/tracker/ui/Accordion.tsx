import React from "react";
import { UserBlock } from "./ui/UserBlock";
import { RootState } from "../../../../../app/redux/store";
import { useSelector } from "react-redux";
import { MatchType } from "../../../../../shared/assets/types/types";
import style from "./style.module.scss";


export const Accordion: React.FC = (): React.JSX.Element => {
	const matches = useSelector<RootState, MatchType[]>(
		(state) => state.trackers.matches
	);
	return (
		<div className={style.accordion}>
			{matches.map((match, index) => {
				return (
					<>
						<div key={index} className={style.content}>
							<div className={style.command}>
								{match.homeTeam.players.map((player, index) => {
									return (
										<UserBlock key={index} {...player} />
									);
								})}
							</div>
							<div className={style.about}>
								<div className={style.aboutBlock}>
									<span>Points</span>
									<span> +{match.homeTeam.points}</span>
								</div>
								<div className={style.line}></div>
								<div className={style.aboutBlock}>
									<span>Место:</span>
									<span> {match.homeTeam.place}</span>
								</div>
								<div className={style.line}></div>
								<div className={style.aboutBlock}>
									<span>Всего убийств:</span>
									<span> {match.homeTeam.total_kills}</span>
								</div>
							</div>
						</div>
						<div key={index} className={style.content}>
							<div className={style.command}>
								{match.awayTeam.players.map((player, index) => {
									return (
										<UserBlock key={index} {...player} />
									);
								})}
							</div>
							<div className={style.about}>
								<div className={style.aboutBlock}>
									<span>Points</span>
									<span> +{match.awayTeam.points}</span>
								</div>
								<div className={style.line}></div>
								<div className={style.aboutBlock}>
									<span>Место:</span>
									<span> {match.awayTeam.place}</span>
								</div>
								<div className={style.line}></div>
								<div className={style.aboutBlock}>
									<span>Всего убийств:</span>
									<span> {match.awayTeam.total_kills}</span>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};



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


/*

			<div className={style.content}>
				<div className={style.command}>
					{matches.map((match, index) => {
						return <UserBlock {...match.awayTeam.players[index]} />;
					})}
				</div>
				<div className={style.about}>
					<div className={style.aboutBlock}>
						<span>Points</span>
						<span> +50</span>
					</div>

					<div className={style.line}></div>
					<div className={style.aboutBlock}>
						<span>Место:</span>
						<span> 7</span>
					</div>

					<div className={style.line}></div>
					<div className={style.aboutBlock}>
						<span>Всего убийств:</span>
						<span> 12</span>
					</div>
				</div>
			</div>;

			*/