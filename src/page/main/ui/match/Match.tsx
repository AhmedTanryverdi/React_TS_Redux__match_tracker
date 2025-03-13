import React, { useState } from "react";
import matchIcon from "../../../../shared/assets/icons/icon.png";
import arrowIcon from "../../../../shared/assets/icons/arrow.png";
import { Accordion } from "./ui/Accordion";
import { MatchType } from "../../../../shared/assets/types/types";
import style from "./style.module.scss";


export const Match: React.FC<MatchType> = (props): React.JSX.Element => {
	const [isDrop, setDrop] = useState(false);

	return (
		<div className={style.match}>
			<div className={style.content} onClick={() => setDrop(!isDrop)}>
				<div className={style.command}>
					<img src={matchIcon} alt="match icon" />
					<span>{props?.homeTeam.name}</span>
				</div>
				<div className={style.center}>
					<div className={style.result}>
						<p>
							<span>{props?.homeScore}</span>:
							<span>{props?.awayScore}</span>
						</p>
						<button type="button" data-status={props.status.toLowerCase()}>{props?.status}</button>
					</div>
				</div>
				<div className={style.command}>
					<span>{props?.awayTeam.name}</span>
					<img src={matchIcon} alt="match icon" />
				</div>
				<img
					src={arrowIcon}
					className={style.arrowIcon}
					data-drop={isDrop}
					alt="arrow icon"
				/>
			</div>
			{isDrop && <Accordion {...props} />}
		</div>
	);
};