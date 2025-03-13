import React from "react";
import { UserBlock } from "./ui/userblock/UserBlock";
import { MatchType } from "../../../../../shared/assets/types/types";
import style from "./style.module.scss";
import { About } from "./ui/about/About";

export const Accordion: React.FC<MatchType> = (props): React.JSX.Element => {
	return (
		<div className={style.accordion}>
			<div className={style.content}>
				<div className={style.players}>
					{props.homeTeam.players.map((player, index) => {
						return <UserBlock key={index} {...player} />;
					})}
				</div>
				<About
					points={props.homeTeam.points}
					place={props.homeTeam.place}
					total_kills={props.homeTeam.total_kills}
				/>
			</div>
			<div className={style.content}>
				<div className={style.players}>
					{props.awayTeam.players.map((player, index) => {
						return <UserBlock key={index} {...player} />;
					})}
				</div>
				<About
					points={props.awayTeam.points}
					place={props.awayTeam.place}
					total_kills={props.awayTeam.total_kills}
				/>
			</div>
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
