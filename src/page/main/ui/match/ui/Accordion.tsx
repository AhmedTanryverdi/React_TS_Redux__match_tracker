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
					{props.homeTeam.players?.map((player, index) => {
						return <UserBlock key={index} {...player} />;
					})}
				</div>
				<About
					points={props?.homeTeam.points}
					place={props?.homeTeam.place}
					total_kills={props?.homeTeam.total_kills}
				/>
			</div>
			<div className={style.content}>
				<div className={style.players}>
					{props.awayTeam.players?.map((player, index) => {
						return <UserBlock key={index} {...player} />;
					})}
				</div>
				<About
					points={props?.awayTeam.points}
					place={props?.awayTeam.place}
					total_kills={props?.awayTeam.total_kills}
				/>
			</div>
		</div>
	);
};