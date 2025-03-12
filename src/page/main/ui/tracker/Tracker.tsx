import React, { useState } from "react";
import matchIcon from "../../../../shared/assets/icons/icon.png";
import arrowIcon from "../../../../shared/assets/icons/arrow.png";
import { Accordion } from "./ui/Accordion";
import style from "./style.module.scss";

export const Tracker: React.FC<{
	homeName: string;
	awayName: string;
	homeScore: number;
	awayScore: number;
}> = ({ homeName, awayName, homeScore, awayScore }): React.JSX.Element => {
	const [isDrop, setDrop] = useState(false);

	return (
		<div className={style.trucker}>
			<div className={style.content} onClick={() => setDrop(!isDrop)}>
				<div className={style.command}>
					<img src={matchIcon} alt="match icon" />
					<span>{homeName}</span>
				</div>
				<div className={style.center}>
					<div className={style.match}>
						<p>
							<span>{homeScore}</span>:<span>{awayScore}</span>
						</p>
						<button type="button">live</button>
					</div>
				</div>
				<div className={style.command}>
					<span>{awayName}</span>
					<img src={matchIcon} alt="match icon" />
				</div>
				<img
					src={arrowIcon}
					className={style.arrowIcon}
					data-drop={isDrop}
					alt="arrow icon"
				/>
			</div>
			{isDrop && <Accordion />}
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
