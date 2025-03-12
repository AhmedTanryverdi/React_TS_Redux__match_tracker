import React from "react";
import frame from "../../../../../../shared/assets/icons/frame.png";
import style from "./userblock.module.scss";

export const UserBlock: React.FC<{
	username: string;
	kills: number;
}> = ({ username, kills }): React.JSX.Element => {
	return (
		<div className={style.userBlock}>
			<div className={style.user}>
				<img src={frame} alt="frame icon" />
				<span>{username}</span>
			</div>

			<div className={style.murder}>
				<span>Убийств: </span>
				<span>{kills}</span>
			</div>
		</div>
	);
};
